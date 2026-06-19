// ============================================================
// RemarkaPave — single source of truth.
// Edit values here; never hard-code NAP/pricing in pages.
// ============================================================
export const site = {
  name: 'RemarkaPave LLC',
  brand: 'RemarkaPave',
  url: 'https://remarkapave.com',
  phone: '(580) 304-7225',
  phoneHref: 'tel:+15803047225',
  email: 'Todd@remarkapave.com',
  city: 'Ponca City',
  state: 'OK',
  zip: '74604',
  tagline: 'Sharp lines. Clean lots. A property that looks the part.',
  description:
    'Commercial parking lot line striping, sealcoating, crack filling, and pressure washing serving Ponca City, Kay County, the Tulsa metro, and Bartlesville, Oklahoma.',
  hours: 'Mon–Fri 7:00 AM – 6:00 PM',
  hoursSchema: 'Mo-Fr 07:00-18:00',
  social: {
    facebook: 'https://www.facebook.com/RemarkaPave',
    instagram: 'https://www.instagram.com/remarkapave',
    youtube: 'https://www.youtube.com/@remarkapave',
    linkedin: 'https://www.linkedin.com/in/remarkapavellc',
  },

  // ---- REPLACE BEFORE LAUNCH ----
  // FormSubmit works with no signup but requires a one-time activation email
  // on first submission. Swap for a Formspree endpoint if preferred.
  formEndpoint: 'https://formsubmit.co/Todd@remarkapave.com',
  ga4Id: '', // e.g. 'G-XXXXXXXXXX' — leave empty to disable analytics
  clarityId: '', // Microsoft Clarity project ID (heatmaps + recordings) — empty to disable
  searchConsoleToken: '', // content value of the google-site-verification meta tag
};

export const trustSignals = [
  'Licensed & Insured',
  'Free Estimates',
  'Written Materials & Labor Quotes',
  'Owner On Every Job',
];

export const serviceAreas = {
  home: ['Ponca City', 'Newkirk', 'Tonkawa', 'Blackwell'],
  growth: ['Tulsa', 'Broken Arrow', 'Owasso', 'Bixby', 'Jenks', 'Sand Springs', 'Claremore', 'Bartlesville'],
};

// Real Google reviews ONLY. Add entries as they come in — AggregateRating
// schema turns on automatically once this array has at least one entry
// with `real: true`. NEVER add invented reviews.
export const reviews = [
  // {
  //   real: true,
  //   author: 'PASTE REVIEWER NAME',
  //   rating: 5,
  //   date: '2026-06-01',
  //   text: 'PASTE THE REAL GOOGLE REVIEW TEXT VERBATIM',
  // },
];
