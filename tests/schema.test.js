import { describe, it, expect } from 'vitest';
import {
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
  articleSchema,
} from '../src/utils/schema.js';
import { site } from '../src/data/site.js';

describe('faqSchema', () => {
  const faqs = [
    { q: 'How much?', a: 'It depends.' },
    { q: 'When?', a: 'April–October.' },
  ];

  it('produces a valid FAQPage shape', () => {
    const s = faqSchema(faqs);
    expect(s['@context']).toBe('https://schema.org');
    expect(s['@type']).toBe('FAQPage');
    expect(s.mainEntity).toHaveLength(2);
  });

  it('maps each q/a into a Question with an accepted Answer', () => {
    const s = faqSchema(faqs);
    expect(s.mainEntity[0]).toEqual({
      '@type': 'Question',
      name: 'How much?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends.' },
    });
  });

  it('handles an empty list without throwing', () => {
    expect(faqSchema([]).mainEntity).toEqual([]);
  });
});

describe('breadcrumbSchema', () => {
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services/' },
    { name: 'Sealcoating', href: '/services/sealcoating/' },
  ];

  it('produces a valid BreadcrumbList shape', () => {
    const s = breadcrumbSchema(trail);
    expect(s['@context']).toBe('https://schema.org');
    expect(s['@type']).toBe('BreadcrumbList');
    expect(s.itemListElement).toHaveLength(3);
  });

  it('numbers positions sequentially starting at 1', () => {
    const positions = breadcrumbSchema(trail).itemListElement.map((i) => i.position);
    expect(positions).toEqual([1, 2, 3]);
  });

  it('resolves every item to an absolute URL on the site origin', () => {
    for (const item of breadcrumbSchema(trail).itemListElement) {
      expect(item.item.startsWith(site.url)).toBe(true);
      // Must be a parseable absolute URL, never a bare relative path.
      expect(() => new URL(item.item)).not.toThrow();
    }
  });
});

describe('serviceSchema', () => {
  const base = {
    name: 'Asphalt Sealcoating',
    description: 'Protective coats for asphalt.',
    url: '/services/sealcoating/',
  };

  it('produces a valid Service shape with an absolute URL and provider link', () => {
    const s = serviceSchema(base);
    expect(s['@type']).toBe('Service');
    expect(s.url).toBe(`${site.url}/services/sealcoating/`);
    expect(s.provider['@id']).toBe(`${site.url}/#business`);
  });

  it('omits areaServed when no areaName is given', () => {
    expect(serviceSchema(base).areaServed).toBeUndefined();
  });

  it('includes a City areaServed when areaName is given', () => {
    const s = serviceSchema({ ...base, areaName: 'Tulsa' });
    expect(s.areaServed).toEqual({ '@type': 'City', name: 'Tulsa' });
  });
});

describe('articleSchema', () => {
  it('produces a valid Article shape with absolute URL and org author/publisher', () => {
    const s = articleSchema({
      headline: 'When to Sealcoat',
      description: 'A guide.',
      url: '/blog/when-to-sealcoat/',
      datePublished: '2026-01-15',
    });
    expect(s['@type']).toBe('Article');
    expect(s.url).toBe(`${site.url}/blog/when-to-sealcoat/`);
    expect(s.datePublished).toBe('2026-01-15');
    expect(s.author).toEqual({ '@type': 'Organization', name: site.name });
    expect(s.publisher['@id']).toBe(`${site.url}/#business`);
  });
});
