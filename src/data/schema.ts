/**
 * RemarkaPave Schema Generator
 * Reusable TypeScript functions for generating JSON-LD structured data
 * Location: src/data/schema.ts
 */
 
export interface LocalBusinessConfig {
  name: string;
  image: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: Array<{
    name: string;
  }>;
  openingHoursSpecification: Array<{
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  services: Array<{
    name: string;
  }>;
  socialProfiles: string[];
  keywords: string[];
}
 
export interface FAQItem {
  question: string;
  answer: string;
}
 
/**
 * Generate LocalBusiness Schema JSON-LD
 */
export function generateLocalBusinessSchema(config: LocalBusinessConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: config.name,
    image: config.image,
    description: config.description,
    url: config.url,
    telephone: config.telephone,
    email: config.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address.streetAddress,
      addressLocality: config.address.addressLocality,
      addressRegion: config.address.addressRegion,
      postalCode: config.address.postalCode,
      addressCountry: config.address.addressCountry,
    },
    areaServed: config.areaServed.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    priceRange: "$$",
    openingHoursSpecification: config.openingHoursSpecification.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    serviceArea: "OK",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pavement Maintenance Services",
      itemListElement: config.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
        },
      })),
    },
    sameAs: config.socialProfiles,
    knowsAbout: config.keywords,
  };
}
 
/**
 * Generate FAQ Schema JSON-LD
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
 
/**
 * Generate Service Schema JSON-LD for individual service pages
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  areaServed: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://remarkapave.com/services/${serviceName.toLowerCase().replace(/\s+/g, "-")}`,
    name: `${serviceName} | RemarkaPave LLC`,
    description: description,
    url: `https://remarkapave.com/services/${serviceName.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: "(580) 304-7225",
    areaServed: areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    serviceType: serviceName,
  };
}
 
/**
 * Generate breadcrumb schema for navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
 
/**
 * Generate Organization Schema JSON-LD
 */
export function generateOrganizationSchema(config: LocalBusinessConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.name,
    url: config.url,
    logo: config.image,
    description: config.description,
    telephone: config.telephone,
    email: config.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address.streetAddress,
      addressLocality: config.address.addressLocality,
      addressRegion: config.address.addressRegion,
      postalCode: config.address.postalCode,
      addressCountry: config.address.addressCountry,
    },
    sameAs: config.socialProfiles,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: config.telephone,
      email: config.email,
    },
  };
}
 


