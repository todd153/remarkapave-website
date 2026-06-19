import { describe, it, expect, beforeAll } from 'vitest';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, relative, sep } from 'node:path';
import { parseHTML } from 'linkedom';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

// Reuse an existing dist/ (CI builds first); build on demand when run alone.
beforeAll(() => {
  if (!existsSync(resolve(dist, 'index.html'))) {
    execSync('npm run build', { cwd: root, stdio: 'inherit' });
  }
}, 120_000);

// Recursively collect every .html file under dist/.
function htmlFiles(dir = dist, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(full, acc);
    else if (entry.name.endsWith('.html')) acc.push(full);
  }
  return acc;
}

// The set of valid page paths the site actually emits, e.g.
// dist/services/sealcoating/index.html -> "/services/sealcoating/".
function pagePaths() {
  const paths = new Set();
  for (const f of htmlFiles()) {
    if (!f.endsWith(`${sep}index.html`)) continue;
    const rel = relative(dist, dirname(f)).split(sep).join('/');
    paths.add(rel ? `/${rel}/` : '/');
  }
  return paths;
}

const files = htmlFiles();
const parse = (f) => parseHTML(readFileSync(f, 'utf8')).document;
const label = (f) => relative(dist, f);

describe('every emitted page', () => {
  it('there is something to test', () => {
    expect(files.length).toBeGreaterThan(40);
  });

  it('has a non-empty <title>', () => {
    for (const f of files) {
      const title = parse(f).querySelector('title')?.textContent?.trim();
      expect(title, label(f)).toBeTruthy();
    }
  });

  it('has a canonical link on the site origin', () => {
    for (const f of files) {
      // 404.html is intentionally not indexed/canonicalised.
      if (label(f) === '404.html') continue;
      const canonical = parse(f).querySelector('link[rel=canonical]')?.getAttribute('href');
      expect(canonical, label(f)).toBeTruthy();
      expect(canonical.startsWith('https://remarkapave.com/'), `${label(f)} -> ${canonical}`).toBe(true);
    }
  });

  it('has a meta description within the ~160 char SEO limit', () => {
    const over = [];
    for (const f of files) {
      if (label(f) === '404.html') continue;
      const desc = parse(f).querySelector('meta[name=description]')?.getAttribute('content')?.trim();
      expect(desc, label(f)).toBeTruthy();
      if (desc.length > 160) over.push(`${label(f)} (${desc.length})`);
    }
    expect(over, `meta descriptions over 160 chars:\n${over.join('\n')}`).toEqual([]);
  });

  it('contains only valid JSON-LD blocks', () => {
    for (const f of files) {
      for (const block of parse(f).querySelectorAll('script[type="application/ld+json"]')) {
        expect(() => JSON.parse(block.textContent), `${label(f)} JSON-LD`).not.toThrow();
      }
    }
  });
});

describe('internal navigation', () => {
  const valid = pagePaths();

  it('has no broken internal page links', () => {
    const broken = [];
    for (const f of files) {
      for (const a of parse(f).querySelectorAll('a[href]')) {
        const href = a.getAttribute('href');
        // Only validate internal page links (trailingSlash: 'always' → end in /).
        if (!href.startsWith('/')) continue;
        const path = href.split('#')[0].split('?')[0];
        if (!path.endsWith('/')) continue; // skip asset links (images/files)
        if (!valid.has(path)) broken.push(`${label(f)} -> ${href}`);
      }
    }
    expect(broken, `broken links:\n${broken.join('\n')}`).toEqual([]);
  });
});

describe('quote form markup', () => {
  it('renders the spam-protection and tracking fields on /free-quote/', () => {
    const doc = parse(resolve(dist, 'free-quote', 'index.html'));
    // Honeypot + the two hidden tracking inputs the client script populates.
    expect(doc.querySelector('input[name="company_website"]'), 'honeypot').toBeTruthy();
    expect(doc.querySelector('[data-lead-source]'), 'lead source field').toBeTruthy();
    expect(doc.querySelector('[data-loaded-at]'), 'loaded-at field').toBeTruthy();
    // At least one service checkbox must exist for the "pick a service" guard.
    expect(doc.querySelectorAll('input[name="services"]').length).toBeGreaterThan(0);
  });
});
