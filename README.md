# RemarkaPave Website (Astro)

Static marketing site for remarkapave.com. ~50 pages: homepage with cinematic
scroll hero, 10 service pages, 28 town×service landing pages, Care Plan,
RemarkaReport™, blog, quote funnel, legal.

## Run it
```
npm install
npm run dev       # local dev at http://localhost:4321
npm run build     # static output in dist/
```

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
