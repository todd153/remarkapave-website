import { site } from '../data/site.js';

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, site.url).href,
    })),
  };
}

export function serviceSchema({ name, description, url, areaName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: new URL(url, site.url).href,
    provider: { '@id': `${site.url}/#business` },
    areaServed: areaName ? { '@type': 'City', name: areaName } : undefined,
  };
}

export function articleSchema({ headline, description, url, datePublished }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: new URL(url, site.url).href,
    datePublished,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@id': `${site.url}/#business` },
  };
}
