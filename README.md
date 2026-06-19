# RemarkaPave Website (Astro)

Static marketing site for remarkapave.com. ~50 pages: homepage with cinematic
scroll hero, 10 service pages, 28 town×service landing pages, Care Plan,
RemarkaReport™, blog, quote funnel, legal.

## Run it
```
npm install
npm run dev       # local dev at http://localhost:4321
npm run build     # static output in dist/
npm test          # run the Vitest unit suite (tests/)
npm run test:watch
```

## Tests
Unit tests live in `tests/` and run with [Vitest](https://vitest.dev). They cover
the logic a build won't catch on its own:

- **Schema builders** (`src/utils/schema.js`) — JSON-LD shape, breadcrumb
  ordering, absolute-URL resolution.
- **Page generation & data integrity** (`src/data/`) — the town×service
  generator, unique URL-safe slugs, required fields, meta-length limits, and
  NAP consistency (phone vs phoneHref).
- **Client-side logic** (`src/scripts/`) — the quote-form spam/validation guard
  and the chatbot's message routing + HTML escaping. This logic was extracted
  out of the inline `<script>` blocks in `QuoteForm.astro` / `ChatBot.astro`
  into importable modules so it's testable and has one source of truth.
- **Build output** (`tests/build-output.test.js`) — asserts every service and
  town page emits an `index.html`, the key static pages exist, and the sitemap
  excludes `/thank-you/`. Reuses `dist/`, building on demand if absent.
- **Rendered-HTML smoke** (`tests/html-smoke.test.js`) — parses every built page
  with [linkedom](https://github.com/WebReflection/linkedom): non-empty title,
  canonical + meta description, valid JSON-LD, no broken internal links across
  the whole site, and the quote-form spam/tracking fields present in markup.

CI (`.github/workflows/ci.yml`) runs `npm run build` then `npm test` on every PR.

Browser-driven E2E (Playwright) isn't included: it would add real-browser checks
(client JS populating tracking fields at runtime, the chatbot opening). The
rendered-HTML smoke suite covers the static surface of that without a browser.

## REPLACE BEFORE LAUNCH (all in src/data/site.js unless noted)
1. **GA4**: set `ga4Id` (e.g. `G-XXXXXXXXXX`). Conversion events already wired:
   `generate_lead` (form submit), `quote_form_conversion` (/thank-you/ pageview),
   `phone_call` (any tel: tap). Leave empty to disable analytics entirely.
2. **Microsoft Clarity** (optional, free): set `clarityId` (the project ID from
   clarity.microsoft.com) for heatmaps + session recordings. Empty = disabled.
3. **Search Console**: set `searchConsoleToken` (the content value from the HTML-tag
   verification method), or verify via DNS instead.
3. **Form endpoint**: `formEndpoint` is FormSubmit (no signup, emails Todd@remarkapave.com).
   NOTE: the FIRST submission triggers an activation email to Todd — click it once.
   Swap for a Formspree endpoint if you prefer a dashboard.
4. **Real review(s)**: paste into the `reviews` array — AggregateRating + Review schema
   turn on automatically. NEVER add invented reviews.
5. **Real photos**: drop into `public/images/gallery/` and update `src/pages/gallery.astro`
   and the homepage gallery section. Current images are STOCK placeholders (tagged as such).
6. **Redirects**: `public/_redirects` covers known WordPress URLs. Before cutover, export
   the full indexed-URL list from Search Console and add any missing ones.
7. **Hero clips**: `public/frames/hero` + `public/frames/wash` are procedurally rendered.
   To upgrade to photoreal: reconnect the Higgsfield MCP, generate two 6s 1080p clips,
   slice with the scroll-cinematic skill's extract-frames.sh into the same folders.

## Editing content
- NAP, hours, socials, trust signals → `src/data/site.js`
- Services & pricing → `src/data/services.js`
- Towns & landing-page copy → `src/data/towns.js` (add a town = 4 new pages, automatically)
- Blog: add a `.astro` file in `src/pages/blog/` and list it in `blog/index.astro`

## Deploy (Cloudflare Pages recommended)
Build command `npm run build`, output dir `dist`. The `_redirects` file is picked up
automatically. Point remarkapave.com DNS at Pages when ready to cut over from WordPress.
