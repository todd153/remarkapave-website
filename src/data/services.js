// 10 services. Public site shows NO unit prices (deliberate — see pricing
// strategy note in README): value language + written-quote funnel instead.
// `priceFrom` is the badge text on cards/pages.
export const services = [
  {
    slug: 'parking-lot-striping',
    name: 'Parking Lot Line Striping',
    short: 'Line Striping',
    priceFrom: 'Priced per stall — free written quote',
    blurb:
      'Crisp, bright, ADA-compliant lines laid with a Titan PowrLiner 2850 and PROMAR solvent-based acrylic traffic paint. New layouts or re-stripes.',
    answer:
      'RemarkaPave stripes commercial parking lots across Ponca City, Kay County, and the Tulsa metro. Re-stripes are priced per stall and quoted in writing — ADA stalls, fire lanes, arrows, and stencils itemized — before work begins.',
    included: [
      'Standard & angled parking stalls',
      'ADA/handicap stalls and access aisles',
      'Fire lanes, loading zones & curb painting',
      'Directional arrows, crosswalks & numbered stalls',
      'New layout design for more capacity',
    ],
    faqs: [
      { q: 'How much does parking lot striping cost?', a: 'Striping is priced per stall, and every job gets a free written materials-and-labor quote before we start — most come back within one business day. Job minimums apply.' },
      { q: 'How often should I re-stripe my lot?', a: 'Most Oklahoma lots need re-striping every 18–24 months. High-traffic retail lots fade faster; we check line condition free during any visit.' },
      { q: 'What paint do you use?', a: 'PROMAR solvent-based acrylic traffic paint — commercial-grade material that holds its brightness under heavy traffic and Oklahoma weather.' },
      { q: 'Can you work around business hours?', a: 'Yes. We stripe early mornings, evenings, or in phases so your lot never has to fully close.' },
    ],
  },
  {
    slug: 'sealcoating',
    name: 'Asphalt Sealcoating',
    short: 'Sealcoating',
    priceFrom: 'Priced per sq ft — free written quote',
    blurb:
      'Protective coats that shield asphalt from UV, water, and chemicals — and restore that deep-black, brand-new look.',
    answer:
      'RemarkaPave sealcoats commercial asphalt across Ponca City and the Tulsa metro, priced per square foot and quoted in writing. Sealcoating every 2–3 years shields pavement from sun and water damage and can defer full repaving for years.',
    included: [
      'Surface cleaning & preparation',
      'Crack filling before sealing (sealer alone won’t fix cracks)',
      'Commercial-grade sealer at the right temperature & cure window',
      'Re-striping after cure for a finished lot',
    ],
    faqs: [
      { q: 'How often should I sealcoat my lot in Oklahoma?', a: 'Every 2–3 years. Oklahoma sun and freeze-thaw cycles dry asphalt out fast; a regular sealcoat cycle is the cheapest insurance a lot can have.' },
      { q: 'What does sealcoating cost?', a: 'It’s priced per square foot based on lot size and condition. You get a free written quote with materials and labor broken out — and it’s a fraction of what repaving costs.' },
      { q: 'When is sealcoating season?', a: 'Roughly April through October — we need dry pavement and daytime temps in the 50s°F or warmer for a proper cure.' },
    ],
  },
  {
    slug: 'crack-filling',
    name: 'Crack Filling & Routing',
    short: 'Crack Filling',
    priceFrom: 'Priced per linear foot',
    blurb:
      'Hot-applied crack treatment that stops water before it becomes a pothole — the highest-ROI repair in pavement maintenance.',
    answer:
      'RemarkaPave fills and routs asphalt cracks across Kay County and the Tulsa metro, priced per linear foot and quoted in writing. Sealing cracks early stops water intrusion — the root cause of potholes and base failure.',
    included: [
      'Crack cleaning & routing where needed',
      'Hot-applied commercial crack sealant',
      'Pre-sealcoat crack prep packages',
    ],
    faqs: [
      { q: 'Why do cracks matter if they’re small?', a: 'Water gets in, freezes, and expands. A small crack today is a pothole repair tomorrow and base failure after that. Early filling is the cheapest fix you’ll ever buy.' },
      { q: 'What does crack filling cost?', a: 'It’s priced per linear foot — we measure your lot and put the number in a written quote before any work starts.' },
    ],
  },
  {
    slug: 'pressure-washing',
    name: 'Commercial Pressure Washing',
    short: 'Pressure Washing',
    priceFrom: 'Priced per sq ft — free written quote',
    blurb:
      'Hot-water washing with a 20″ surface cleaner — heat lifts the oil, grease, and gum that cold-water rigs just push around.',
    answer:
      'RemarkaPave pressure washes commercial lots, sidewalks, storefronts, and drive-thrus across Oklahoma, priced per square foot. Our hot-water rig and 20-inch surface cleaner remove oil, gum, and grime without streaks or zebra striping.',
    included: [
      'Parking lots — oil, fluid stains & tire marks',
      'Sidewalks, entryways & storefronts',
      'Drive-thru lanes, dumpster pads & loading areas',
      'Pre-stripe / pre-sealcoat surface prep',
    ],
    faqs: [
      { q: 'Why hot water?', a: 'Heat breaks down oil, grease, and gum at the molecular level. Cold-water rigs push grime around; hot water lifts it out.' },
      { q: 'Will it streak?', a: 'No — a 20-inch surface cleaner with twin rotating nozzles delivers even, overlapping coverage. No wand stripes.' },
      { q: 'Is pressure washing seasonal?', a: 'No — unlike striping and sealing, washing isn’t weather-locked. We clean year-round.' },
    ],
  },
  {
    slug: 'parking-lot-sweeping',
    name: 'Parking Lot Sweeping',
    short: 'Sweeping',
    priceFrom: 'Per-visit pricing — free quote',
    blurb: 'Scheduled sweeping that keeps your property looking managed — and protects the striping and sealcoat you’ve already paid for.',
    answer:
      'RemarkaPave provides scheduled parking lot sweeping across Ponca City and surrounding areas on weekly, monthly, or quarterly schedules, with per-visit pricing quoted in writing.',
    included: ['One-time cleanups', 'Weekly / monthly / quarterly schedules', 'Pre-event & post-construction sweeps'],
    faqs: [
      { q: 'How often should a commercial lot be swept?', a: 'Most retail lots do well monthly; high-traffic properties benefit from weekly service. Grit grinds down striping and sealcoat, so regular sweeping extends both.' },
    ],
  },
  {
    slug: 'oil-stain-removal',
    name: 'Oil Stain Removal',
    short: 'Oil Stains',
    priceFrom: 'Add-on friendly — bundle with any visit',
    blurb: 'Targeted hot-water treatment for the stains that make a clean lot look neglected.',
    answer:
      'RemarkaPave removes oil and fluid stains from commercial pavement using hot water and the right pre-treatment for each stain type — typically bundled with a wash, stripe, or sealcoat visit.',
    included: ['Oil & transmission fluid stains', 'Drive-thru grease', 'Pre-sealcoat stain priming'],
    faqs: [
      { q: 'Can every stain come out?', a: 'Old, deep-soaked stains may shadow even after treatment — we’ll tell you straight what to expect before we start, and prime stains properly if sealcoating is next.' },
    ],
  },
  {
    slug: 'ada-fire-lane-compliance',
    name: 'ADA & Fire Lane Compliance',
    short: 'ADA & Fire Lane',
    priceFrom: 'Itemized per stall & symbol',
    blurb:
      'Correct stall widths, van-accessible spaces, access aisles, signage layout, and fire-lane markings that pass inspection.',
    answer:
      'RemarkaPave brings parking lots into ADA and fire-code compliance across Oklahoma: van-accessible stalls, access aisles, blue-and-white symbol work, and fire-lane curbing — each itemized in a written quote.',
    included: [
      'ADA stall & access-aisle layout to current standards',
      'Van-accessible space placement',
      'Blue stall fill + white symbol stenciling',
      'Fire lane striping & curb painting',
    ],
    faqs: [
      { q: 'How many ADA stalls does my lot need?', a: 'It scales with lot size — 1 accessible stall per 25 total is the baseline, with at least one van-accessible. We check your count and layout free during any estimate.' },
      { q: 'What does non-compliance risk?', a: 'ADA complaints and lawsuits are filed against property owners, not painters. Correct striping is the cheapest compliance step a property can take.' },
    ],
  },
  {
    slug: 'stencils-markings',
    name: 'Stencils & Markings',
    short: 'Stencils',
    priceFrom: 'Per-marking pricing',
    blurb: 'STOP bars, crosswalks, RESERVED, visitor, curb numbers, custom logos — sharp stencil work that finishes a lot.',
    answer:
      'RemarkaPave paints pavement stencils and markings across Oklahoma: directional arrows, STOP bars, crosswalks, RESERVED text, and custom stencils — priced per marking in a written quote.',
    included: ['Directional arrows', 'STOP bars & crosswalks', 'RESERVED / VISITOR / NO PARKING text', 'Custom stencils & logos'],
    faqs: [
      { q: 'Can you match our property’s existing markings?', a: 'Yes — we match layout, color, and lettering style, or recommend cleaner standards if yours have drifted over the years.' },
    ],
  },
  {
    slug: 'pavement-repair',
    name: 'Pavement Repair & Specialty Work',
    short: 'Repair & Specialty',
    priceFrom: 'Custom quote',
    blurb:
      'Infrared pothole repair, mill & overlay, wheel-stop installation, helipads, warehouse floor layouts — the jobs that need a real plan.',
    answer:
      'RemarkaPave handles pavement repair and specialty projects across Oklahoma — pothole repair, mill & overlay, wheel stops, helipads, and warehouse layouts — each scoped with a written custom quote.',
    included: ['Pothole repair (incl. infrared)', 'Mill & overlay', 'Wheel stop installation', 'Helipads & warehouse layouts'],
    faqs: [
      { q: 'Do you handle small repair jobs?', a: 'Yes — wheel stops, single potholes, and small patches are welcome as part of a service visit, and they’re often where we catch bigger problems early.' },
    ],
  },
  {
    slug: 'remarkareport',
    name: 'The RemarkaReport™ — Pavement Assessment',
    short: 'RemarkaReport™',
    priceFrom: 'Free with any estimate',
    blurb:
      'Our branded lot walk-through: a straight-shooting written condition report, photo documentation, and a prioritized maintenance plan — so you budget instead of react.',
    answer:
      'The RemarkaReport™ is RemarkaPave’s pavement assessment: a documented lot walk-through with photos, a plain-English condition report, and a prioritized 1–3 year maintenance plan. It’s free with any estimate for commercial properties in our service area.',
    included: [
      'Full lot walk & photo documentation',
      'Stall count + ADA compliance check',
      'Crack, pothole & drainage inventory',
      'Plain-English condition grades — no jargon',
      'Prioritized 1–3 year maintenance budget plan',
    ],
    faqs: [
      { q: 'What is a RemarkaReport™?', a: 'A documented pavement assessment: we walk your lot, photograph problem areas, grade the condition in plain English, and hand you a prioritized maintenance plan with budget numbers.' },
      { q: 'What does it cost?', a: 'It’s free with any estimate. For large multi-property portfolios, ask about standalone assessment pricing.' },
      { q: 'Why get one before bidding work out?', a: 'Because it turns "the lot looks rough" into a numbered plan. You fix the highest-ROI problems first and budget the rest, instead of reacting when something fails.' },
    ],
  },
];

export const coreServices = services.slice(0, 4); // striping, sealcoating, crack filling, pressure washing
export const jobMinimum = 600;
export const priceDisclaimer =
  'Every job gets a free written quote with materials and labor broken out. Job minimum: $600 — small services bundle into a visit so nothing goes to waste.';
