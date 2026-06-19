import { describe, it, expect } from 'vitest';
import { towns, townServices, allTownPages } from '../src/data/towns.js';

// URL-safe slug: lowercase alphanumerics separated by single hyphens.
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe('allTownPages()', () => {
  const pages = allTownPages();

  it('generates exactly towns × townServices pages', () => {
    expect(pages).toHaveLength(towns.length * townServices.length);
  });

  it('generates a unique slug for every page', () => {
    const slugs = pages.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('builds URL-safe slugs for every page', () => {
    for (const p of pages) {
      expect(p.slug, p.slug).toMatch(SLUG);
    }
  });

  it('populates every SEO/content field on every page', () => {
    for (const p of pages) {
      expect(p.title, `title for ${p.slug}`).toBeTruthy();
      expect(p.meta, `meta for ${p.slug}`).toBeTruthy();
      expect(p.h1, `h1 for ${p.slug}`).toBeTruthy();
      expect(Array.isArray(p.faqs) && p.faqs.length, `faqs for ${p.slug}`).toBeTruthy();
    }
  });

  it('keeps meta descriptions within the ~160 char SEO limit', () => {
    for (const p of pages) {
      expect(p.meta.length, `${p.slug} meta is ${p.meta.length} chars`).toBeLessThanOrEqual(160);
    }
  });

  it('interpolates the town name into the H1 of every page', () => {
    for (const p of pages) {
      expect(p.h1, `h1 for ${p.slug}`).toContain(p.town.name);
    }
  });

  it('gives every FAQ a non-empty question and answer', () => {
    for (const p of pages) {
      for (const f of p.faqs) {
        expect(f.q, `q in ${p.slug}`).toBeTruthy();
        expect(f.a, `a in ${p.slug}`).toBeTruthy();
      }
    }
  });
});

describe('towns data', () => {
  it('has a unique, URL-safe slug per town', () => {
    const slugs = towns.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(SLUG);
  });

  it('gives every town a name, local color, and intro', () => {
    for (const t of towns) {
      expect(t.name, `name for ${t.slug}`).toBeTruthy();
      expect(t.local, `local for ${t.slug}`).toBeTruthy();
      expect(t.intro, `intro for ${t.slug}`).toBeTruthy();
    }
  });
});

describe('townServices builders', () => {
  const sampleTown = towns[0];

  it('builds slugs that combine the service and town slug', () => {
    for (const s of townServices) {
      const slug = s.slugFor(sampleTown);
      expect(slug.endsWith(sampleTown.slug), slug).toBe(true);
      expect(slug, slug).toMatch(SLUG);
    }
  });

  it('builds titles and metas that mention the town', () => {
    for (const s of townServices) {
      expect(s.titleFor(sampleTown)).toContain(sampleTown.name);
      expect(s.metaFor(sampleTown)).toContain(sampleTown.name);
    }
  });
});
