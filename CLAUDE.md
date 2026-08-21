# RemarkaPave website — working rules

## Verify before reporting

Never report success from the fact that an edit succeeded. Report success only
after independently observing the result.

Before telling Todd something is done:

- **Code / data files** — parse or import them:
  `node --input-type=module -e "import('./src/data/services.js').then(()=>console.log('OK')).catch(e=>{console.log('FAIL',e.message);process.exit(1)})"`
- **Schema changes** — run the graph verification, which checks node counts,
  `@id` resolution, review scoping, and serialization.
- **Anything with a length limit** — count characters programmatically.
  GBP service description = 300. GBP service name = 120. Meta description = 155.
- **Build** — `npm run build` must be run on Windows. The Linux bridge cannot
  run it: node_modules holds Windows binaries.
- **Deploy** — committed is not pushed, pushed is not merged to `main`, and only
  a merge to `main` triggers the Cloudflare deploy. Check all three.

Known traps in this repo:
- Apostrophes inside single-quoted JS strings (`crew's`) silently break the file.
- `.git/index.lock` and `.git/HEAD.lock` go stale and jam commits. An editor or
  Git GUI is holding the repo open.
- Astro `<script type="application/ld+json">` needs both `is:inline` and
  `set:html` or the JSON-LD is escaped or dropped.
