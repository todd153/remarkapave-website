/**
 * RemarkaPave TypeScript Types & Validation
 * Comprehensive type definitions for all schema-related data
 * Location: src/types/schema.ts
 */

export type Address = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: "US";
};

export type OpeningHours = {
  dayOfWeek: string | string[];
  opens: \\:\\;
  closes: \\:\\;
};

export type ServiceOffering = {
  name: string;
  description?: string;
  image?: string;
  areaServed?: string[];
  priceRange?: "\$\$" | "\$\$\$" | "\$\$\$\$";
};

export type AreaServed = {
  name: string;
  type?: "City" | "State" | "Region";
};

export type SocialProfiles = {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  twitter?: string;
};

export type LocalBusinessConfig = {
  name: string;
  image: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: Address;
  areaServed: AreaServed[];
  openingHours: OpeningHours[];
  services: ServiceOffering[];
  socialProfiles: SocialProfiles;
  keywords: string[];
  priceRange?: "\$\$" | "\$\$\$" | "\$\$\$\$";
};

export type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

export type PageMetadata = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article" | "business.business";
  canonicalUrl?: string;
};

export type ServicePageConfig = {
  slug: string;
  name: string;
  title: string;
  description: string;
  content: string;
  areaServed: string[];
  image?: string;
  faq?: FAQItem[];
  relatedServices?: string[];
  cta?: {
    text: string;
    href: string;
  };
};

export type CityPageConfig = {
  slug: string;
  cityName: string;
  title: string;
  description: string;
  content: string;
  services: ServiceOffering[];
  image?: string;
  faq?: FAQItem[];
  zip?: string;
  county?: string;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type JSONLDSchema = {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
};

export type LocalBusinessSchema = JSONLDSchema & {
  "@type": "HomeAndConstructionBusiness";
  name: string;
  image: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: Array<{
    "@type": "City";
    name: string;
  }>;
  openingHoursSpecification: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  serviceArea: string;
  priceRange: string;
  sameAs: string[];
  knowsAbout: string[];
};

export type FAQSchema = JSONLDSchema & {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
};

export type ServiceSchema = JSONLDSchema & {
  "@type": "LocalBusiness";
  name: string;
  description: string;
  url: string;
  telephone: string;
  serviceType: string;
  areaServed: Array<{
    "@type": "City";
    name: string;
  }>;
};

export type BreadcrumbSchema = JSONLDSchema & {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
};

export type ValidationResult<T> = {
  isValid: boolean;
  data?: T;
  errors?: string[];
};

export type SchemaValidator<T> = (data: unknown) => ValidationResult<T>;
