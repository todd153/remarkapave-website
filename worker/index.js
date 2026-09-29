// Quote-form API for remarkapave.com. Everything except POST /api/quote
// falls through to the static Astro build in ./dist.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/quote' && request.method === 'POST') {
      return handleQuote(request, env, url.origin);
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
    // Left blank by forms that don't ask (the short hero form).
    quote_preference: f('quote_preference') || 'Not asked (short form)',
    inquiry_type: f('inquiry_type') || 'One-time quote',
    services: form.getAll('services').join(', '),
    lot_size: f('lot_size'),
    message: f('message'),
    heard_from: f('heard_from'),
    lead_source_page: f('lead_source_page'),
    form_variant: f('form_variant') || 'unknown',
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
    body: JSON.stringify({ _subject: emailSubject(lead), _template: 'table', ...lead }),
  });
  if (!res.ok) return false;
  const body = await res.json().catch(() => ({}));
  return body.success === 'true' || body.success === true;
}

// Care Plan interest and 2-hour callback requests are the leads to act on
// first, so they get flagged right in the subject line.
function emailSubject(lead) {
  const tags = [];
  if (lead.inquiry_type === 'Care Plan') tags.push('CARE PLAN');
  if (lead.quote_preference === 'Call within 2 hours') tags.push('CALL WITHIN 2 HRS');
  const prefix = tags.length ? `[${tags.join(' · ')}] ` : '';
  return `${prefix}New quote request — remarkapave.com`;
}

async function pushToHubSpot(lead, env) {
  // A phone number alone is still a lead worth having in the CRM.
  if (!env.HUBSPOT_TOKEN || (!lead.email && !lead.phone)) return;
  const [firstname, ...rest] = lead.name.split(' ');
  const properties = {
    firstname,
    lastname: rest.join(' '),
    ...(lead.email && { email: lead.email }),
    phone: lead.phone,
    city: lead.town,
    lifecyclestage: 'lead',
    message: [
      `Inquiry: ${lead.inquiry_type}`,
      `Quote preference: ${lead.quote_preference}`,
      `Services: ${lead.services}`,
      lead.lot_size && `Lot size: ${lead.lot_size}`,
      lead.message,
      lead.heard_from && `Heard from: ${lead.heard_from}`,
      lead.lead_source_page && `Source page: ${lead.lead_source_page}`,
      `Form: ${lead.form_variant}`,
    ].filter(Boolean).join('\n'),
  };
  const headers = { authorization: `Bearer ${env.HUBSPOT_TOKEN}`, 'content-type': 'application/json' };
  const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST', headers, body: JSON.stringify({ properties }),
  });
  if (res.status === 409 && lead.email) {
    // Contact already exists — update it instead (repeat customers, second quotes).
    await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(lead.email)}?idProperty=email`, {
      method: 'PATCH', headers, body: JSON.stringify({ properties }),
    });
  }
}
