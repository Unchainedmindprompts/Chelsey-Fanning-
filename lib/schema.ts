import { AGGREGATE_RATING } from "@/content/testimonials";

// Three real-world entities — do not collapse them:
//   #business  Organization "Chelsey Fanning" (customer-facing brand / this website)
//   #agent     Person "Chelsey Fanning" (licensed REALTOR®)
//   ORGANIZATION_ID  eXp Realty brokerage (defined on exprealty.com)
//
// Canonical @ids are preserved. Brand is not the brokerage.

export const BASE_URL = "https://chelseyfanning.com";
export const BUSINESS_ID = `${BASE_URL}/#business`;
export const AGENT_ID = `${BASE_URL}/#agent`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const ORGANIZATION_ID = "https://www.exprealty.com/#organization";

export const AGENT_NAME = "Chelsey Fanning";
export const BRAND_NAME = "Chelsey Fanning";
export const BROKERAGE_NAME = "eXp Realty";
export const BROKERAGE_URL = "https://www.exprealty.com";
export const LICENSE_NUMBER = "LC54829";
export const LICENSE_LABEL = `Idaho Real Estate License ${LICENSE_NUMBER}`;

export const AGENT_AUTHOR_STUB = {
  "@type": "Person",
  "@id": AGENT_ID,
  name: AGENT_NAME,
} as const;

export const BRAND_PUBLISHER_STUB = {
  "@type": "Organization",
  "@id": BUSINESS_ID,
  name: BRAND_NAME,
} as const;

export const BROKERAGE_STUB = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: BROKERAGE_NAME,
  url: BROKERAGE_URL,
} as const;

// ─── Shared sameAs profiles ───────────────────────────────────────────────────
export const CHELSEA_SAME_AS = [
  "https://www.google.com/maps/place/Chelsey+Fanning+%7C+EXP+Realty/@47.7017621,-117.0105906,17z/data=!3m2!4b1!5s0x5361dd207347a5a9:0x87198999aad55a76!4m6!3m5!1s0x4a524c972f2da505:0xa86d95d4b35ac75c!8m2!3d47.7017621!4d-117.0105906!16s%2Fg%2F11szjk3vmc",
  "https://www.bing.com/maps?ss=ypid.YN4C9F60D2EBC9BE8F",
  "https://www.yelp.com/biz/chelsey-fanning-exp-realty-post-falls",
  "https://www.bbb.org/us/id/post-falls/profile/real-estate-agent/chelsey-fanning-realtor-1296-1000195312",
  "https://www.zillow.com/profile/ChelseyFanning",
  "https://www.facebook.com/cfanningrealtor",
  "https://www.instagram.com/life_with_chels",
  "https://www.exprealty.com/agents-search/Chelsey-Fanning_bcde9e92-9fd2-11f0-b1d9-b78ca4428fb6",
  "https://www.homes.com/real-estate-agents/chelsey-fanning/q63yz7z/",
  "https://www.realtor.com/realestateagents/5bc7b0ea76e8ec0011336928",
];

// ─── NAP constants ────────────────────────────────────────────────────────────
export const NAP = {
  name: AGENT_NAME,
  title: "REALTOR®",
  brokerage: BROKERAGE_NAME,
  phone: "(208) 755-6079",
  email: "cfanning.realtor@gmail.com",
  address: {
    streetAddress: "510 S Clearwater Loop, Suite 100",
    addressLocality: "Post Falls",
    addressRegion: "ID",
    postalCode: "83854",
    addressCountry: "US",
  },
  geo: {
    latitude: 47.7182,
    longitude: -116.9443,
  },
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

const AGENT_DESCRIPTION =
  "Chelsey Fanning is a licensed REALTOR® (Idaho License LC54829) with eXp Realty, serving buyers and sellers across Post Falls, Coeur d'Alene, Hayden, Rathdrum, and Spirit Lake in North Idaho. She works with first-time home buyers, move-up families, and luxury properties. Contact is a request for a conversation, not an instant booking.";

const BRAND_DESCRIPTION =
  "Customer-facing practice of licensed Idaho REALTOR® Chelsey Fanning at eXp Realty. Contact is a request for a conversation, not an instant booking.";

// Full Person definition — used on /about. Other pages should stub #agent.
const AGENT_PERSON_NODE = {
  "@type": "Person",
  "@id": AGENT_ID,
  name: AGENT_NAME,
  jobTitle: "Licensed REALTOR®",
  hasCredential: LICENSE_LABEL,
  description: AGENT_DESCRIPTION,
  url: `${BASE_URL}/about`,
  image: `${BASE_URL}/chelsey-hero-periwinkle.jpeg`,
  telephone: NAP.phone,
  email: NAP.email,
  sameAs: CHELSEA_SAME_AS,
  worksFor: BROKERAGE_STUB,
  knowsAbout: [
    "Residential real estate",
    "First-time homebuyers",
    "Luxury real estate",
    "Relocation",
    "Buyer representation",
    "Seller representation",
    "North Idaho real estate market",
    "Post Falls real estate",
    "Coeur d'Alene real estate",
    "Competitive offer strategy",
    "Real estate negotiation",
  ],
  areaServed: [
    "Post Falls Idaho",
    "Coeur d'Alene Idaho",
    "Hayden Idaho",
    "Rathdrum Idaho",
    "Spirit Lake Idaho",
  ],
};

// ─── Brand Organization schema (#business) ────────────────────────────────────
export function buildLocalBusinessSchema(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@id": BUSINESS_ID,
    "@type": "Organization",
    name: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    url: BASE_URL,
    telephone: NAP.phone,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      ...NAP.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
    })),
    image: `${BASE_URL}/chelsey-hero-periwinkle.jpeg`,
    employee: AGENT_AUTHOR_STUB,
    parentOrganization: BROKERAGE_STUB,
    aggregateRating: {
      "@type": "AggregateRating",
      ...AGGREGATE_RATING,
    },
    ...overrides,
  };
}

// ─── Person schema (#agent) ───────────────────────────────────────────────────
export function buildPersonSchema(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    ...AGENT_PERSON_NODE,
    ...overrides,
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
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Chelsey Fanning | REALTOR® | North Idaho",
    url: BASE_URL,
    publisher: BRAND_PUBLISHER_STUB,
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
      ? article.imageUrl.startsWith("http") ? article.imageUrl : `${BASE_URL}${article.imageUrl}`
      : `${BASE_URL}/chelsey-hero-periwinkle.jpeg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${article.slug}`,
    },
  };
}

// ─── Review / AggregateRating schema ─────────────────────────────────────────
export function buildAggregateRatingSchema(reviews: {
  author: string;
  rating: number;
  body: string;
  date: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@id": BUSINESS_ID,
    "@type": "Organization",
    name: BRAND_NAME,
    url: BASE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      ).toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.body,
      datePublished: r.date,
    })),
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
    name: service.name,
    description: service.description,
    url: service.url,
    provider: BRAND_PUBLISHER_STUB,
    areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
  };
}
