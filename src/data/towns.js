// Town × service landing pages, per the Website Kit.
// URL pattern: /services/{serviceTownSlug}/ — slugs from the Kit's tables.
// Each town carries unique local color so pages are never clones.
export const towns = [
  {
    slug: 'ponca-city-ok', name: 'Ponca City',
    local: 'from the Grand Avenue storefronts downtown to the 14th Street retail corridor',
    intro: 'This is home base — and home to Phillips 66, Oklahoma’s largest refinery, so Ponca City property managers already know what contractor-grade work is supposed to look like.',
  },
  {
    slug: 'newkirk-ok', name: 'Newkirk',
    local: 'from the courthouse square downtown to the farm and commercial properties along US-77',
    intro: 'As the Kay County seat, Newkirk is used to things being held to a standard — the 1926 county courthouse still anchors downtown, and property owners here notice when a lot is maintained the same way.',
  },
  {
    slug: 'tonkawa-ok', name: 'Tonkawa',
    local: 'from the Northern Oklahoma College campus to the Tonkawa Casino and Hotel corridor near I-35',
    intro: 'Between the college campus and the casino traffic off the interstate, Tonkawa lots see a steady mix of visitors — a clean, well-marked lot is doing marketing work whether you ask it to or not.',
  },
  {
    slug: 'blackwell-ok', name: 'Blackwell',
    local: 'from the Main Street historic district to the industrial park along US-177 and State Highway 11',
    intro: 'Blackwell’s industrial roots run deep, and property owners here know the difference between a quick patch job and pavement work built to actually hold up.',
  },
  {
    slug: 'tulsa-ok', name: 'Tulsa',
    local: 'from retail centers off 71st Street to industrial yards near the Port of Catoosa',
    intro: 'Tulsa is the biggest lot market in Green Country — and the most competitive for tenants. A sharp lot is table stakes here.',
  },
  {
    slug: 'broken-arrow-ok', name: 'Broken Arrow',
    local: 'from the Rose District storefronts to the warehouse parks along the Creek Turnpike',
    intro: 'Broken Arrow’s commercial corridors are growing fast, and new construction next door makes a faded lot stand out for the wrong reasons.',
  },
  {
    slug: 'owasso-ok', name: 'Owasso',
    local: 'from the Smith Farm Marketplace area to the US-169 retail corridor',
    intro: 'Owasso’s retail growth along US-169 means customer expectations are set by brand-new centers — older lots have to keep up.',
  },
  {
    slug: 'bixby-ok', name: 'Bixby',
    local: 'from Memorial Drive retail to the riverside commercial strips',
    intro: 'Bixby properties trade on curb appeal — a clean, freshly striped lot reads as a well-managed property to every prospective tenant.',
  },
  {
    slug: 'sand-springs-ok', name: 'Sand Springs',
    local: 'from the Highway 97 corridor to the industrial sites along the Arkansas River',
    intro: 'Sand Springs mixes heavy industrial traffic with neighborhood retail — pavement here works hard and shows it sooner.',
  },
  {
    slug: 'claremore-ok', name: 'Claremore',
    local: 'from the Will Rogers Boulevard district to the Route 66 commercial strip',
    intro: 'Claremore’s Route 66 traffic is constant, and lots along the corridor are the first thing visitors judge.',
  },
  {
    slug: 'bartlesville-ok', name: 'Bartlesville',
    local: 'from downtown offices near the Price Tower to the US-75 retail corridor',
    intro: 'Bartlesville’s corporate campuses and medical facilities expect contractor-grade work, documentation included.',
  },
  {
    slug: 'collinsville-ok', name: 'Collinsville',
    local: 'from the Main Street business district along US-169 to the newer commercial development near Highway 20',
    intro: 'Collinsville is growing fast north of Tulsa, and new retail and housing nearby mean an older lot has to compete with brand-new pavement next door.',
  },
  {
    slug: 'skiatook-ok', name: 'Skiatook',
    local: 'from the US-75 commercial strip to the retail and marina traffic feeding Skiatook Lake',
    intro: 'Skiatook draws lake traffic on top of everyday local business — a clean, clearly marked lot handles both without confusion.',
  },
  {
    slug: 'coweta-ok', name: 'Coweta',
    local: 'from the Highway 51 commercial corridor to the growing development along 353rd Avenue',
    intro: 'Coweta’s commercial corridor is expanding fast along Highway 51, and property owners here are investing in pavement that matches the growth.',
  },
];

// The 4 core services that get town pages, with kit metadata patterns.
// `kitSlug(town)` builds the Kit's exact slug; title/meta follow the Kit tables.
export const townServices = [
  {
    key: 'striping',
    serviceSlug: 'parking-lot-striping',
    slugFor: (t) => `parking-lot-striping-${t.slug}`,
    h1For: (t) => `Parking Lot Line Striping in ${t.name}, OK`,
    titleFor: (t) => `Parking Lot Striping ${t.name} OK | RemarkaPave`,
    metaFor: (t) =>
      `Professional parking lot line striping in ${t.name}, OK. Crisp ADA-compliant stalls, fire lanes & arrows. Free quote — call RemarkaPave at (580) 304-7225.`,
    whatMatters:
      'Faded, crooked, or non-compliant striping tells customers and tenants the details get ignored here — and it opens you up to ADA liability. Crisp PROMAR solvent-based acrylic lines fix both.',
    bullets: [
      'Standard & angled stalls, new layouts or re-stripes',
      'ADA stalls, access aisles & van-accessible spaces',
      'Fire lanes, arrows, crosswalks & curb painting',
    ],
    faqsFor: (t) => [
      { q: `How much does parking lot striping cost in ${t.name}?`, a: 'Striping is priced per stall, with ADA work, stencils, and new layouts itemized in a free written quote — most estimates come back within a day. Job minimums apply for metro routes.' },
      { q: 'How long does striping take?', a: 'Most lots are striped in a single visit, scheduled around your business hours. Paint is drive-ready fast — we’ll give you exact times in the quote.' },
      { q: 'Are you licensed and insured?', a: 'Yes — RemarkaPave LLC is licensed and insured, and every job gets a written materials-and-labor breakdown.' },
      { q: `Do you handle ADA compliance in ${t.name}?`, a: 'Yes — correct stall counts, van-accessible placement, access aisles, and symbols that pass inspection.' },
    ],
  },
  {
    key: 'sealcoating',
    serviceSlug: 'sealcoating',
    slugFor: (t) => `sealcoating-${t.slug}`,
    h1For: (t) => `Asphalt Sealcoating in ${t.name}, OK`,
    titleFor: (t) => `Asphalt Sealcoating ${t.name} OK | RemarkaPave`,
    metaFor: (t) =>
      `Protect your ${t.name} lot with commercial asphalt sealcoating. Extends pavement life and restores a like-new finish. Free quote from RemarkaPave today.`,
    whatMatters:
      'Oklahoma sun and freeze-thaw cycles dry asphalt out and let water into cracks. Sealcoating every 2–3 years is the cheapest insurance a lot can have — like repainting a deck before the wood rots.',
    bullets: [
      'Crack fill first — sealer alone won’t fix cracks',
      'Commercial-grade sealer, correct temperature & cure window',
      'Re-striping after cure for one finished lot from one crew',
    ],
    faqsFor: (t) => [
      { q: `How much does sealcoating cost in ${t.name}?`, a: 'Sealcoating is priced per square foot based on lot size and condition, with materials and labor broken out in a free written quote.' },
      { q: 'How often should I sealcoat in Oklahoma?', a: 'Every 2–3 years. Waiting longer lets UV and water damage compound — and repaving costs many times more than maintaining.' },
      { q: 'When can you schedule it?', a: `Sealcoating season runs roughly April–October. ${t.name} bookings fill fast in the dry months — earlier is better.` },
    ],
  },
  {
    key: 'crack-filling',
    serviceSlug: 'crack-filling',
    slugFor: (t) => `crack-filling-${t.slug}`,
    h1For: (t) => `Asphalt Crack Filling in ${t.name}, OK`,
    titleFor: (t) => `Crack Filling ${t.name} OK | RemarkaPave`,
    metaFor: (t) =>
      `Stop water damage before it spreads. Professional hot crack filling for ${t.name} parking lots and drives. Free quote — (580) 304-7225.`,
    whatMatters:
      'Every open crack is a water intake. One freeze-thaw winter turns hairline cracks into alligatored asphalt and potholes. Hot-applied sealant closes the door while the fix is still cheap.',
    bullets: [
      'Crack cleaning & routing where needed',
      'Hot-applied commercial-grade sealant',
      'Pre-sealcoat prep packages',
    ],
    faqsFor: (t) => [
      { q: `What does crack filling cost in ${t.name}?`, a: 'Crack filling is priced per linear foot — we measure your lot and quote it in writing. It’s the highest-ROI repair in pavement maintenance.' },
      { q: 'When should cracks be filled?', a: 'As soon as they appear — and ideally before winter. Water freezing inside cracks is what turns small problems into potholes.' },
      { q: 'Crack filling or sealcoating first?', a: 'Cracks always get filled first. Sealcoat over open cracks just hides the problem while water keeps getting in.' },
    ],
  },
  {
    key: 'pressure-washing',
    serviceSlug: 'pressure-washing',
    slugFor: (t) => `pressure-washing-${t.slug}`,
    h1For: (t) => `Commercial Pressure Washing in ${t.name}, OK`,
    titleFor: (t) => `Pressure Washing ${t.name} OK | RemarkaPave`,
    metaFor: (t) =>
      `Commercial pressure washing in ${t.name}, OK — lots, sidewalks & storefronts. Remove oil, grime & gum. Free quote from RemarkaPave at (580) 304-7225.`,
    whatMatters:
      'Your lot and entryway are the handshake before the handshake. Gum, grease, and grime quietly cost you trust — and they’re slip hazards. Hot water lifts what cold-water rigs push around.',
    bullets: [
      'Hot-water rig + 20″ surface cleaner — no streaks',
      'Lots, sidewalks, storefronts, drive-thrus & dumpster pads',
      'Year-round service — washing isn’t weather-locked',
    ],
    faqsFor: (t) => [
      { q: `What does commercial pressure washing cost in ${t.name}?`, a: 'Washing is priced per square foot, with oil-stain treatment itemized. Every job gets a free written quote first.' },
      { q: 'Do you use hot water?', a: 'Yes — heat is what actually breaks down oil, grease, and gum. Cold-water washing mostly relocates it.' },
      { q: 'Can you wash before a re-stripe?', a: 'Absolutely — washing before striping or sealing is the right order, and bundling them gets the whole lot refreshed in one visit.' },
    ],
  },
];

export function allTownPages() {
  const pages = [];
  for (const t of towns) {
    for (const s of townServices) {
      pages.push({
        town: t,
        svc: s,
        slug: s.slugFor(t),
        h1: s.h1For(t),
        title: s.titleFor(t),
        meta: s.metaFor(t),
        faqs: s.faqsFor(t),
      });
    }
  }
  return pages;
}
