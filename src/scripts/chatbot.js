// RemarkaBot routing logic — extracted from ChatBot.astro so it can be unit
// tested. Pure: no DOM, no phone hard-coding (answers are built from args).

export const QUICK = [
  ['Get a free quote', 'quote'],
  ['Services & pricing', 'pricing'],
  ['Service area', 'area'],
  ['ADA compliance', 'ada'],
  ['call', 'call'], // label is overridden at render time with the real phone
];

// First matching rule wins; order matters (specific before generic).
// ADA is checked before striping so "ADA stalls" routes to compliance, not
// striping — plain "stall" questions still fall through to the striping rule.
export const RULES = [
  [/quote|estimate|bid|how much.*(lot|my)|price for my/i, 'quote'],
  [/seal\s?coat/i, 'sealcoat'],
  [/ada|handicap|accessib|fire lane|complian/i, 'ada'],
  [/strip|line|stall|paint/i, 'stripe'],
  [/wash|clean|power\s?wash|gum|oil/i, 'wash'],
  [/crack|pothole/i, 'crack'],
  [/report|assess|inspect|condition/i, 'report'],
  [/care plan|maintenance plan|subscription|recurring/i, 'plan'],
  [/price|pricing|cost|charge|rate/i, 'pricing'],
  [/area|where|town|city|serve|location|tulsa|ponca|bartlesville|owasso|bixby|claremore|broken arrow|sand springs/i, 'area'],
  [/hour|open|schedule|when/i, 'hours'],
  [/call|phone|number|talk|human/i, 'call'],
];

// Map a free-text question to an answer key, falling back when nothing matches.
export function routeMessage(query) {
  const rule = RULES.find(([re]) => re.test(query));
  return rule ? rule[1] : 'fallback';
}

// Escape user text before it is injected via innerHTML.
export function escapeHtml(str) {
  return String(str).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
}

// Build the answer copy with the live phone number woven in.
export function buildAnswers(phone, phoneHref) {
  return {
    quote: `Easy — the fastest ways are the <a href="/free-quote/">free quote form</a> (takes about a minute) or calling <a href="${phoneHref}">${phone}</a>. We answer most requests within one business day with a written materials-and-labor breakdown.`,
    pricing: `Straight answer: striping is priced per stall, sealcoating and washing per square foot, crack filling per linear foot — and every number comes in a free written materials-and-labor quote (job minimum $600). Fastest way to a real price: the <a href="/free-quote/">quote form</a>. See <a href="/services/">all services</a>.`,
    area: `We're based in Ponca City and serve Kay County (Newkirk, Tonkawa, Blackwell) plus the Tulsa metro — Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Claremore — and Bartlesville.`,
    ada: `We bring lots into ADA compliance: correct stall counts, van-accessible spaces, access aisles, and symbols that pass inspection — each itemized in your written quote. Details on the <a href="/services/ada-fire-lane-compliance/">ADA & fire lane page</a>.`,
    call: `Tap to call: <a href="${phoneHref}">${phone}</a> — Mon–Fri, 7 AM to 6 PM. If we're on a lot, leave a message and we'll call back same day.`,
    sealcoat: `Sealcoating is priced per square foot, and Oklahoma lots should be sealed every 2–3 years (season is roughly April–October). More on the <a href="/services/sealcoating/">sealcoating page</a>.`,
    stripe: `Striping is priced per stall with PROMAR commercial traffic paint, laid with a Titan PowrLiner 2850. New layouts, arrows, and stencils too — see <a href="/services/parking-lot-striping/">line striping</a>.`,
    wash: `We pressure wash with hot water and a 20″ surface cleaner — no streaks — priced per square foot, year-round. See <a href="/services/pressure-washing/">pressure washing</a>.`,
    crack: `Crack filling is priced per linear foot — it's the highest-ROI repair in pavement maintenance because it stops water before potholes form. See <a href="/services/crack-filling/">crack filling</a>.`,
    report: `The RemarkaReport™ is our pavement assessment: a lot walk, photos, plain-English condition grades, and a prioritized maintenance plan. Free with any estimate — <a href="/services/remarkareport/">details here</a>.`,
    plan: `The RemarkaPave Care Plan keeps your lot maintained on a schedule — three tiers from one visit a year to full quarterly care. See <a href="/care-plan/">Care Plan tiers</a>.`,
    hours: `Mon–Fri, 7:00 AM – 6:00 PM. Estimates are free and we schedule work around your business hours.`,
    fallback: `Good question — that one deserves a real human. Call <a href="${phoneHref}">${phone}</a> or drop your details in the <a href="/free-quote/">quote form</a> and Todd will get back to you within one business day.`,
  };
}
