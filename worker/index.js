// Quote-form API for remarkapave.com. Everything except POST /api/quote and /api/accept
// falls through to the static Astro build in ./dist.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/quote' && request.method === 'POST') {
      return handleQuote(request, env, url.origin);
    }
    if (url.pathname === '/api/accept' && request.method === 'POST') {
      return handleAccept(request, env, url.origin);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleQuote(request, env, origin) {
  const form = await request.formData();
  const f = (k) => (form.get(k) || '').toString().trim();

  // Spam gate 1: honeypot + minimum fill time. These ran client-side before;
  // enforcing them here catches bots that POST without running JS.
  const loadedAt = Number(f('form_loaded_at'));
  if (f('company_website') || !loadedAt || Date.now() - loadedAt < 3000) {
    return Response.redirect(origin + '/thank-you/', 302); // silent drop
  }

  // Spam gate 2: Turnstile — enforced only once TURNSTILE_SECRET_KEY is set,
  // so this can deploy before the widget exists without breaking the form.
  if (env.TURNSTILE_SECRET_KEY) {
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: f('cf-turnstile-response'),
        remoteip: request.headers.get('CF-Connecting-IP'),
      }),
    }).then((r) => r.json());
    if (!verify.success) {
      return new Response('Verification failed — please go back and try again, or call (580) 304-7225.', {
        status: 403, headers: { 'content-type': 'text/plain' },
      });
    }
  }

  const lead = {
    name: f('name'),
    phone: f('phone'),
    email: f('email'),
    town: f('town'),
    services: form.getAll('services').join(', '),
    lot_size: f('lot_size'),
    message: f('message'),
    heard_from: f('heard_from'),
    lead_source_page: f('lead_source_page'),
  };

  // Email (FormSubmit) + CRM (HubSpot) in parallel. Email is the critical
  // path; a HubSpot failure never blocks the lead.
  const [emailResult] = await Promise.allSettled([
    sendEmail(lead),
    pushToHubSpot(lead, env),
  ]);
  if (emailResult.status === 'rejected' || !emailResult.value) {
    return new Response('Something went wrong sending your request — please call (580) 304-7225 and we will get you a quote.', {
      status: 502, headers: { 'content-type': 'text/plain' },
    });
  }
  return Response.redirect(origin + '/thank-you/', 302);
}

async function handleAccept(request, env, origin) {
  try {
    const data = await request.json();
    const { proposal_id, client_name, client_email, signature, terms_accepted } = data;

    if (!proposal_id || !client_name || !client_email || !signature || !terms_accepted) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400, headers: { 'content-type': 'application/json' },
      });
    }

    const acceptance = {
      proposal_id,
      client_name,
      client_email,
      signature,
      accepted_at: new Date().toISOString(),
    };

    // Send acceptance email to Todd
    const emailResult = await sendAcceptanceEmail(acceptance, env);
    if (!emailResult) {
      return new Response(JSON.stringify({ error: 'Failed to process acceptance' }), {
        status: 502, headers: { 'content-type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Proposal accepted! Check your email for confirmation.',
      proposal_id
    }), {
      status: 200, headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 400, headers: { 'content-type': 'application/json' },
    });
  }
}

async function sendEmail(lead) {
  const res = await fetch('https://formsubmit.co/ajax/Todd@remarkapave.com', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      // FormSubmit rejects requests without browser-style headers.
      origin: 'https://remarkapave.com',
      referer: lead.lead_source_page || 'https://remarkapave.com/free-quote/',
    },
    body: JSON.stringify({ _subject: 'New quote request — remarkapave.com', _template: 'table', ...lead }),
  });
  if (!res.ok) return false;
  const body = await res.json().catch(() => ({}));
  return body.success === 'true' || body.success === true;
}

async function pushToHubSpot(lead, env) {
  if (!env.HUBSPOT_TOKEN || !lead.email) return;
  const [firstname, ...rest] = lead.name.split(' ');
  const properties = {
    firstname,
    lastname: rest.join(' '),
    email: lead.email,
    phone: lead.phone,
    city: lead.town,
    lifecyclestage: 'lead',
    message: [
      `Services: ${lead.services}`,
      lead.lot_size && `Lot size: ${lead.lot_size}`,
      lead.message,
      lead.heard_from && `Heard from: ${lead.heard_from}`,
      lead.lead_source_page && `Source page: ${lead.lead_source_page}`,
    ].filter(Boolean).join('\n'),
  };
  const headers = { authorization: `Bearer ${env.HUBSPOT_TOKEN}`, 'content-type': 'application/json' };
  const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST', headers, body: JSON.stringify({ properties }),
  });
  if (res.status === 409) {
    // Contact already exists — update it instead (repeat customers, second quotes).
    await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(lead.email)}?idProperty=email`, {
      method: 'PATCH', headers, body: JSON.stringify({ properties }),
    });
  }
}

async function sendAcceptanceEmail(acceptance, env) {
  const res = await fetch('https://formsubmit.co/ajax/Todd@remarkapave.com', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      origin: 'https://remarkapave.com',
      referer: 'https://remarkapave.com/proposals/',
    },
    body: JSON.stringify({
      _subject: `Proposal Accepted: ${acceptance.proposal_id}`,
      _template: 'table',
      proposal_id: acceptance.proposal_id,
      client_name: acceptance.client_name,
      client_email: acceptance.client_email,
      accepted_at: acceptance.accepted_at,
      signature_file: 'See attachment below',
    }),
  });
  if (!res.ok) return false;
  const body = await res.json().catch(() => ({}));
  return body.success === 'true' || body.success === true;
}
