import { describe, it, expect } from 'vitest';
import {
  services,
  coreServices,
  jobMinimum,
  priceDisclaimer,
} from '../src/data/services.js';
import { townServices } from '../src/data/towns.js';
import { site, serviceAreas, trustSignals } from '../src/data/site.js';

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe('services data integrity', () => {
  it('has a unique, URL-safe slug per service', () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s, s).toMatch(SLUG);
  });

  it('populates every required field on every service', () => {
    for (const s of services) {
      expect(s.name, `name for ${s.slug}`).toBeTruthy();
      expect(s.short, `short for ${s.slug}`).toBeTruthy();
      expect(s.priceFrom, `priceFrom for ${s.slug}`).toBeTruthy();
      expect(s.blurb, `blurb for ${s.slug}`).toBeTruthy();
      expect(s.answer, `answer for ${s.slug}`).toBeTruthy();
      expect(Array.isArray(s.included) && s.included.length, `included for ${s.slug}`).toBeTruthy();
      expect(Array.isArray(s.faqs) && s.faqs.length, `faqs for ${s.slug}`).toBeTruthy();
    }
  });

  it('gives every service FAQ a non-empty question and answer', () => {
    for (const s of services) {
      for (const f of s.faqs) {
        expect(f.q, `q in ${s.slug}`).toBeTruthy();
        expect(f.a, `a in ${s.slug}`).toBeTruthy();
      }
    }
  });
});

describe('coreServices', () => {
  it('is the first four services', () => {
    expect(coreServices).toEqual(services.slice(0, 4));
  });

  it('exactly matches the four services that get town pages', () => {
    const coreSlugs = coreServices.map((s) => s.slug);
    const townSlugs = townServices.map((s) => s.serviceSlug);
    expect(coreSlugs).toEqual(townSlugs);
  });

  it('references service slugs that actually exist', () => {
    const allSlugs = new Set(services.map((s) => s.slug));
    for (const ts of townServices) {
      expect(allSlugs.has(ts.serviceSlug), ts.serviceSlug).toBe(true);
    }
  });
});

describe('pricing constants', () => {
  it('exposes a positive job minimum referenced in the disclaimer', () => {
    expect(jobMinimum).toBeGreaterThan(0);
    expect(priceDisclaimer).toContain(String(jobMinimum));
  });
});

describe('site NAP consistency', () => {
  it('keeps phone and phoneHref pointing at the same number', () => {
    const displayDigits = site.phone.replace(/\D/g, '');
    const hrefDigits = site.phoneHref.replace(/\D/g, '');
    // href carries the +1 country code; display does not.
    expect(hrefDigits).toBe(`1${displayDigits}`);
  });

  it('uses a tel: scheme for the phone href', () => {
    expect(site.phoneHref.startsWith('tel:+')).toBe(true);
  });

  it('has a canonical https site URL with no trailing slash', () => {
    expect(site.url).toMatch(/^https:\/\//);
    expect(site.url.endsWith('/')).toBe(false);
  });

  it('lists non-empty trust signals and service areas', () => {
    expect(trustSignals.length).toBeGreaterThan(0);
    expect(serviceAreas.home.length).toBeGreaterThan(0);
    expect(serviceAreas.growth.length).toBeGreaterThan(0);
  });
});
