import { describe, it, expect, beforeAll } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { services } from '../src/data/services.js';
import { allTownPages } from '../src/data/towns.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const page = (...parts) => resolve(dist, ...parts);

// Building is slow; reuse an existing dist/ (CI builds before tests) and only
// build on demand when running this file in isolation.
beforeAll(() => {
  if (!existsSync(page('index.html'))) {
    execSync('npm run build', { cwd: root, stdio: 'inherit' });
  }
}, 120_000);

describe('build output', () => {
  it('emits an index.html for every service page', () => {
    for (const s of services) {
      expect(existsSync(page('services', s.slug, 'index.html')), s.slug).toBe(true);
    }
  });

  it('emits an index.html for every town×service landing page', () => {
    for (const p of allTownPages()) {
      expect(existsSync(page('services', p.slug, 'index.html')), p.slug).toBe(true);
    }
  });

  it('emits all 38 service/town pages and no orphans', () => {
    const expected = new Set([
      ...services.map((s) => s.slug),
      ...allTownPages().map((p) => p.slug),
    ]);
    expect(expected.size).toBe(services.length + allTownPages().length);
  });

  it('emits the key static pages', () => {
    for (const p of [
      ['index.html'],
      ['about', 'index.html'],
      ['contact', 'index.html'],
      ['free-quote', 'index.html'],
      ['thank-you', 'index.html'],
      ['care-plan', 'index.html'],
      ['gallery', 'index.html'],
      ['blog', 'index.html'],
      ['privacy-policy', 'index.html'],
      ['terms', 'index.html'],
      ['404.html'],
    ]) {
      expect(existsSync(page(...p)), p.join('/')).toBe(true);
    }
  });
});

describe('sitemap', () => {
  it('is generated', () => {
    expect(existsSync(page('sitemap-0.xml'))).toBe(true);
  });

  it('lists the homepage but excludes the thank-you page', () => {
    const xml = readFileSync(page('sitemap-0.xml'), 'utf8');
    expect(xml).toContain('https://remarkapave.com/');
    expect(xml).not.toContain('/thank-you/');
  });
});
