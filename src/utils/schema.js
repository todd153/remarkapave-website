// ============================================================
// RemarkaPave — JSON-LD node builders.
//
// These return NODES, not standalone documents. They deliberately omit
// "@context" because Base.astro assembles them all into a single
// "@graph" block per page.
//
// THE RULE:
//   The business entity is defined ONCE, on the homepage, at
//   https://remarkapave.com/#business. Every other node on every other
//   page points at it with { "@id": ORG } instead of repeating it.
//   That is what makes 86 pages read as one company instead of 86.
// ============================================================
import { site } from '../data/site.js';
import { services } from '../data/services.js';
import { serviceAreas } from '../data/site.js';

export const ORG = `${site.url}/#business`;
export const WEBSITE = `${site.url}/#website`;
export const TODD = `${site.url}/#todd`;
export const LOGO = `${site.url}/#logo`;

const abs = (path) => new URL(path, site.url).href;

/* ---------------------------------------------------------------- */
/* HOMEPAGE ONLY — the business entity                              */
/* ---------------------------------------------------------------- */

export function organizationNode(realReviews = []) {
  return {
    '@type': ['PavingContractor', 'ProfessionalService'],
    '@id': ORG,
    name: site.brand,
    legalName: site.name,
    alternateName: site.name,
    url: `${site.url}/`,
    mainEntityOfPage: { '@id': `${site.url}/#webpage` },
    telephone: '+1-580-304-7225',
    email: site.email.toLowerCase(),
    foundingDate: '2025-02-07',
    founder: { '@id': TODD },
    employee: { '@id': TODD },
    slogan: site.tagline,
    description: site.description,
    // Separates RemarkaPave from new-asphalt installers in Google's entity model.
    disambiguatingDescription:
      'Pavement maintenance and line striping contractor — maintains, repairs and restripes existing asphalt and concrete lots. Does not install new asphalt roadways or subdivisions.',
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO,
      url: abs('/images/logo.png'),
      contentUrl: abs('/images/logo.png'),
      caption: site.name,
    },
    image: { '@id': LOGO },
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Invoice',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 36.707, longitude: -97.0856 },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-580-304-7225',
        email: site.email.toLowerCase(),
        contactType: 'sales',
        areaServed: 'US-OK',
        availableLanguage: 'English',
      },
    ],
    // Grounds the business against known entities so LLMs can place it.
    knowsAbout: [
      ['Road surface marking', 'Road_surface_marking'],
      ['Asphalt concrete', 'Asphalt_concrete'],
      ['Pavement sealer', 'Pavement_sealer'],
      ['Americans with Disabilities Act of 1990', 'Americans_with_Disabilities_Act_of_1990'],
      ['Parking lot', 'Parking_lot'],
      ['Pothole', 'Pothole'],
      ['Pressure washing', 'Pressure_washing'],
    ].map(([name, slug]) => ({
      '@type': 'Thing',
      name,
      sameAs: `https://en.wikipedia.org/wiki/${slug}`,
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 36.707, longitude: -97.0856 },
      geoRadius: '145000',
    },
    areaServed: [...serviceAreas.home, ...serviceAreas.growth].map((name) => ({
      '@type': 'City',
      name,
      address: { '@type': 'PostalAddress', addressRegion: 'OK', addressCountry: 'US' },
    })),
    makesOffer: services.map((s) => ({ '@id': `${site.url}/services/${s.slug}/#service` })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      '@id': `${site.url}/#catalog`,
      name: 'Commercial Pavement Maintenance Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${site.url}/services/${s.slug}/#service` },
        description: s.priceFrom,
      })),
    },
    sameAs: Object.values(site.social),
    // Real reviews only — Base.astro passes an empty array on every page
    // except / and /about/.
    ...(realReviews.length > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: (realReviews.reduce((a, r) => a + r.rating, 0) / realReviews.length).toFixed(1),
            reviewCount: realReviews.length,
          },
          review: realReviews.map((r) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.author },
            datePublished: r.date,
            reviewRating: { '@type': 'Rating', ratingValue: r.rating },
            reviewBody: r.text,
            itemReviewed: { '@id': ORG },
          })),
        }
      : {}),
  };
}

// Owner-on-every-job is the core differentiator. Without this node it is
// invisible to machines.
export function personNode() {
  return {
    '@type': 'Person',
    '@id': TODD,
    name: 'Todd',
    jobTitle: 'Owner and Operator',
    worksFor: { '@id': ORG },
    email: site.email.toLowerCase(),
    telephone: '+1-580-304-7225',
    description:
      'Todd is the owner-operator of RemarkaPave LLC and is personally on site for every job, from a single restripe to a full sealcoat and stripe.',
    knowsAbout: [
      'Parking lot line striping layout',
      'ADA accessible parking compliance',
      'Fire lane marking',
      'Asphalt sealcoating',
      'Hot-pour rubberized crack sealing',
      'Infrared asphalt repair',
      'Commercial hot-water pressure washing',
    ],
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE,
    url: `${site.url}/`,
    name: site.brand,
    publisher: { '@id': ORG },
    inLanguage: 'en-US',
  };
}

export function webPageNode({ url, name, description, image, about }) {
  const node = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': WEBSITE },
    about: { '@id': about || ORG },
    inLanguage: 'en-US',
  };
  if (image) node.primaryImageOfPage = { '@type': 'ImageObject', url: image };
  return node;
}

/* ---------------------------------------------------------------- */
/* Page-level nodes — Base.astro stamps @id and isPartOf on these    */
/* ---------------------------------------------------------------- */

// NOTE: every question and answer passed here must also be VISIBLE on the
// same page. Marking up an answer a visitor cannot read violates Google's
// structured data policy. These come from services.js `faqs`, which
// FaqBlock.astro renders on the page — keep it that way.
export function faqSchema(faqs) {
  return {
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
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function serviceSchema({ name, description, url, areaName, serviceType, alternateName, priceFrom }) {
  const full = abs(url);
  const node = {
    '@type': 'Service',
    '@id': `${full}#service`,
    name,
    description,
    url: full,
    provider: { '@id': ORG },
    audience: {
      '@type': 'BusinessAudience',
      name: 'Commercial property owners, property managers, HOAs, churches, schools and municipalities',
    },
  };
  if (serviceType) node.serviceType = serviceType;
  if (alternateName) node.alternateName = alternateName;
  if (priceFrom) {
    node.offers = {
      '@type': 'Offer',
      priceCurrency: 'USD',
      seller: { '@id': ORG },
      description: priceFrom,
    };
  }
  node.areaServed = areaName
    ? { '@type': 'City', name: areaName, address: { '@type': 'PostalAddress', addressRegion: 'OK', addressCountry: 'US' } }
    : [...serviceAreas.home, ...serviceAreas.growth].map((n) => ({ '@type': 'City', name: n }));
  return node;
}

export function articleSchema({ headline, description, url, datePublished }) {
  const full = abs(url);
  return {
    '@type': 'Article',
    '@id': `${full}#article`,
    headline,
    description,
    url: full,
    datePublished,
    author: { '@id': TODD },
    publisher: { '@id': ORG },
    isPartOf: { '@id': `${full}#webpage` },
  };
}

export function itemListSchema(url, items) {
  const full = abs(url);
  return {
    '@type': 'ItemList',
    '@id': `${full}#list`,
    name: 'RemarkaPave Commercial Pavement Services',
    numberOfItems: items.length,
    itemListElement: items.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${site.url}/services/${s.slug}/`,
      item: { '@id': `${site.url}/services/${s.slug}/#service` },
    })),
  };
}
