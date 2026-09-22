import { PROFILE_LINKS, TEAM_NAME, LICENSED_SINCE } from "@/content/professional-profile";

// Homepage entity graph — keep these identities separate:
//   #business      RealEstateAgent  Chelsey's customer-facing practice
//   #agent         Person           Chelsey Fanning, licensed Idaho REALTOR®
//   #exp-realty    Organization     eXp Realty (local node; we do not control exprealty.com)
//   #website       WebSite
//   #webpage       WebPage          homepage
//   #primaryimage  ImageObject      hero image
//
// Affiliation is Person → worksFor → #exp-realty.
// The practice is not a subsidiary, branch, or suborganization of eXp Realty.

export const BASE_URL = "https://chelseyfanning.com";
export const BUSINESS_ID = `${BASE_URL}/#business`;
export const AGENT_ID = `${BASE_URL}/#agent`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const WEBPAGE_ID = `${BASE_URL}/#webpage`;
export const PRIMARY_IMAGE_ID = `${BASE_URL}/#primaryimage`;
export const EXP_REALTY_ID = `${BASE_URL}/#exp-realty`;

export const AGENT_NAME = "Chelsey Fanning";
export const PRACTICE_NAME = "Chelsey Fanning | REALTOR® | eXp Realty";
export const BRAND_NAME = PRACTICE_NAME;
export const BROKERAGE_NAME = "eXp Realty";
export const BROKERAGE_URL = "https://www.exprealty.com";
export const LICENSE_NUMBER = "SP47170";
export const TEAM_ID = `${BASE_URL}/#lifestyle-north-realty`;
export const LICENSE_LABEL = `Idaho Real Estate License ${LICENSE_NUMBER}`;
export const HERO_IMAGE_URL = `${BASE_URL}/chelsey-hero-periwinkle.jpeg`;

export const AGENT_REF = { "@id": AGENT_ID } as const;
export const PRACTICE_REF = { "@id": BUSINESS_ID } as const;
export const EXP_REALTY_REF = { "@id": EXP_REALTY_ID } as const;
export const WEBSITE_REF = { "@id": WEBSITE_ID } as const;
export const PRIMARY_IMAGE_REF = { "@id": PRIMARY_IMAGE_ID } as const;

export const AGENT_AUTHOR_STUB = {
  "@type": "Person",
  "@id": AGENT_ID,
  name: AGENT_NAME,
  url: `${BASE_URL}/about`,
} as const;

export const BRAND_PUBLISHER_STUB = {
  "@type": "RealEstateAgent",
  "@id": BUSINESS_ID,
  name: PRACTICE_NAME,
} as const;

export const BROKERAGE_STUB = {
  "@type": "Organization",
  "@id": EXP_REALTY_ID,
  name: BROKERAGE_NAME,
  url: BROKERAGE_URL,
  sameAs: BROKERAGE_URL,
} as const;

// ─── Shared sameAs profiles ───────────────────────────────────────────────────
export const PRACTICE_SAME_AS = [
  PROFILE_LINKS.google,
  "https://www.bing.com/maps?ss=ypid.YN4C9F60D2EBC9BE8F",
  "https://www.yelp.com/biz/chelsey-fanning-exp-realty-post-falls",
  "https://www.bbb.org/us/id/post-falls/profile/real-estate-agent/chelsey-fanning-realtor-1296-1000195312",
];
export const CHELSEA_SAME_AS = [
  PROFILE_LINKS.team,
  PROFILE_LINKS.zillow,
  PROFILE_LINKS.homes,
  PROFILE_LINKS.realtor,
  "https://www.facebook.com/cfanningrealtor",
  "https://www.instagram.com/life_with_chels",
  "https://www.exprealty.com/agents-search/Chelsey-Fanning_bcde9e92-9fd2-11f0-b1d9-b78ca4428fb6",
];

// ─── Public contact constants ────────────────────────────────────────────────────────────
export const NAP = {
  name: AGENT_NAME,
  title: "REALTOR®",
  brokerage: BROKERAGE_NAME,
  phone: "208-755-6079",
  email: "cfanning.realtor@gmail.com",
  serviceArea: "Serving Post Falls, Coeur d'Alene & North Idaho",
  url: BASE_URL,
};

// ─── Service area cities ──────────────────────────────────────────────────────
export const SERVICE_AREAS = [
  "Post Falls",
  "Coeur d'Alene",
  "Hayden",
  "Rathdrum",
  "Spirit Lake",
];

// Service regions are not a physical office address.
export const SERVICE_AREA_SCHEMA = [
  ...SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
  { "@type": "Place", name: "North Idaho" },
];

const AGENT_DESCRIPTION =
  `Chelsey Fanning is an Idaho REALTOR® (License ${LICENSE_NUMBER}), licensed since ${LICENSED_SINCE}, with eXp Realty and affiliated with ${TEAM_NAME}. She helps buyers and sellers in Post Falls, Coeur d'Alene and North Idaho, including first-time buyers, relocation clients, land buyers and luxury-home clients.`;

const PRACTICE_DESCRIPTION =
  "Customer-facing real-estate practice of licensed Idaho REALTOR® Chelsey Fanning, affiliated with eXp Realty. Serving Post Falls, Coeur d'Alene & North Idaho. Contact is a request for a conversation, not an instant booking.";

const HOMEPAGE_NAME = "Chelsey Fanning | Realtor in Post Falls, Idaho | eXp Realty";
const HOMEPAGE_DESCRIPTION =
  "Chelsey Fanning is a trusted REALTOR® with eXp Realty, serving buyers and sellers across Post Falls, Coeur d'Alene, Hayden, Rathdrum, and all of North Idaho. Licensed since 2018. Buyer and seller representation.";

// ─── Canonical nodes (no @context; defined once, referenced by @id) ───────────
export function buildExpRealtyNode() {
  return {
    "@type": "Organization",
    "@id": EXP_REALTY_ID,
    name: BROKERAGE_NAME,
    url: BROKERAGE_URL,
    sameAs: BROKERAGE_URL,
  };
}

export function buildPracticeNode(overrides: Record<string, unknown> = {}) {
  return {
    "@id": BUSINESS_ID,
    "@type": "RealEstateAgent",
    name: PRACTICE_NAME,
    description: PRACTICE_DESCRIPTION,
    url: BASE_URL,
    telephone: NAP.phone,
    email: NAP.email,
    areaServed: SERVICE_AREA_SCHEMA,
    image: HERO_IMAGE_URL,
    employee: AGENT_REF,
    sameAs: PRACTICE_SAME_AS,
    subjectOf: { "@id": `${BASE_URL}/experience#webpage` },
    ...overrides,
  };
}

export function buildPersonNode(overrides: Record<string, unknown> = {}) {
  return {
    "@type": "Person",
    "@id": AGENT_ID,
    name: AGENT_NAME,
    jobTitle: NAP.title,
    description: AGENT_DESCRIPTION,
    url: BASE_URL,
    image: HERO_IMAGE_URL,
    telephone: NAP.phone,
    email: NAP.email,
    sameAs: CHELSEA_SAME_AS,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      identifier: LICENSE_NUMBER,
      url: PROFILE_LINKS.licenseSearch,
      recognizedBy: {
        "@type": "Organization",
        name: "Idaho Real Estate Commission",
      },
    },
    worksFor: EXP_REALTY_REF,
    affiliation: { "@id": TEAM_ID },
    mainEntityOfPage: { "@id": `${BASE_URL}/about#webpage` },
    ...overrides,
  };
}

export function buildWebSiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Chelsey Fanning | REALTOR® | North Idaho",
    url: BASE_URL,
    publisher: PRACTICE_REF,
  };
}

export function buildPrimaryImageNode() {
  return {
    "@type": "ImageObject",
    "@id": PRIMARY_IMAGE_ID,
    url: HERO_IMAGE_URL,
    contentUrl: HERO_IMAGE_URL,
    caption: "Chelsey Fanning, REALTOR® in Post Falls, Idaho",
  };
}

export function buildHomeWebPageNode() {
  return {
    "@type": "WebPage",
    "@id": WEBPAGE_ID,
    url: BASE_URL,
    name: HOMEPAGE_NAME,
    description: HOMEPAGE_DESCRIPTION,
    isPartOf: WEBSITE_REF,
    about: [AGENT_REF, PRACTICE_REF],
    mainEntity: AGENT_REF,
    primaryImageOfPage: PRIMARY_IMAGE_REF,
  };
}

export function buildHomepageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPracticeNode(),
      buildPersonNode(),
      buildExpRealtyNode(),
      buildTeamNode(),
      buildWebSiteNode(),
      buildHomeWebPageNode(),
      buildPrimaryImageNode(),
    ],
  };
}

// ─── Practice schema (#business) ──────────────────────────────────────────────
export function buildLocalBusinessSchema(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    ...buildPracticeNode(overrides),
  };
}

// ─── Person schema (#agent) ───────────────────────────────────────────────────
export function buildPersonSchema(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    ...buildPersonNode(overrides),
  };
}

// ─── FAQ schema ───────────────────────────────────────────────────────────────
export function buildFAQSchema(faqs: { question: string; answer: string }[], id?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
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

// ─── WebSite schema ───────────────────────────────────────────────────────────
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    ...buildWebSiteNode(),
  };
}

// ─── Article schema ───────────────────────────────────────────────────────────
export function buildArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  imageAlt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: AGENT_AUTHOR_STUB,
    publisher: BRAND_PUBLISHER_STUB,
    image: article.imageUrl
      ? {
          "@type": "ImageObject",
          url: article.imageUrl.startsWith("http") ? article.imageUrl : `${BASE_URL}${article.imageUrl}`,
          ...(article.imageAlt ? { caption: article.imageAlt } : {}),
        }
      : HERO_IMAGE_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${article.slug}`,
    },
  };
}

// ─── Service schema ───────────────────────────────────────────────────────────
export function buildServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${service.url}#service`,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: BRAND_PUBLISHER_STUB,
    areaServed: SERVICE_AREA_SCHEMA,
  };
}

export function buildTeamNode() {
  return { "@type": "Organization", "@id": TEAM_ID, name: TEAM_NAME, url: PROFILE_LINKS.teamHome };
}

export function buildProfilePageNode() {
  return {
    "@type": "ProfilePage",
    "@id": `${BASE_URL}/about#webpage`,
    url: `${BASE_URL}/about`,
    name: "About Chelsey Fanning",
    mainEntity: AGENT_REF,
    isPartOf: WEBSITE_REF,
    publisher: PRACTICE_REF,
  };
}
