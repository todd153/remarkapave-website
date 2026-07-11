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

  // Quote form posts here — handled by worker/index.js, which relays to
  // FormSubmit for email and (optionally) pushes the lead to HubSpot.
  formEndpoint: '/api/quote',
  // Cloudflare Turnstile site key — leave empty to keep the CAPTCHA widget
  // off; the form still works without it. Set the matching TURNSTILE_SECRET_KEY
  // as a Worker secret to enforce verification server-side.
  turnstileSiteKey: '',
  ga4Id: 'G-4SQJ4TJGCC', // e.g. 'G-XXXXXXXXXX' — leave empty to disable analytics
  clarityId: 'xaaahi064f', // Microsoft Clarity project ID (heatmaps + recordings) — empty to disable
  searchConsoleToken: '3_UbAoDZbfim1Zzs5k4cRyBcNcbrS-vkbrARWkMjrV4', // content value of the google-site-verification meta tag
};

export const trustSignals = [
  'Licensed & Insured',
  'Free Estimates',
  'Written Materials & Labor Quotes',
  'Owner On Every Job',
];

export const serviceAreas = {
  home: ['Ponca City', 'Newkirk', 'Tonkawa', 'Blackwell'],
  growth: ['Tulsa', 'Broken Arrow', 'Owasso', 'Bixby', 'Jenks', 'Sand Springs', 'Claremore', 'Bartlesville', 'Collinsville', 'Skiatook', 'Coweta'],
};

// Real Google reviews ONLY. Add entries as they come in — AggregateRating
// schema turns on automatically once this array has at least one entry
// with `real: true`. NEVER add invented reviews.
export const reviews = [
  {
    real: true,
    author: 'Jean Coonrod',
    rating: 5,
    date: '2026-06-11',
    source: 'google',
    text: 'Excellent professional work striping our parking lot. Bright, even lines and clearly identified handicapped spots.',
  },
  {
    real: true,
    author: 'Tone',
    rating: 5,
    date: '2026-06-16',
    source: 'google',
    text: 'Todd is absolutely amazing. Courteous 10, Hardworking 10, Honest 10, Articulate/Paying attention to detail 10... Unlike a lot of asphalt workers, he actually removes his shoes to eliminate tracking materials anywhere except where they\'re supposed to be. Worth every dollar he asks & much more. By far the best experience we\'ve had with a contractor in Ponca City.',
  },
  {
    real: true,
    author: 'Rena Taylor',
    rating: 5,
    date: '2026-06-18',
    source: 'facebook',
    text: 'Great company with great prices and an honest hard working owner. I\'m extremely pleased with the sealing job he did on my asphalt driveway, looks better than when it was new! Would definitely recommend Todd & RemarkaPave.',
  },
  // Add more real reviews here as they come in. NEVER add invented reviews.
];
