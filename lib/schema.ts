import { AGGREGATE_RATING } from "@/content/testimonials";

// ─── Shared sameAs profiles ───────────────────────────────────────────────────
export const CHELSEA_SAME_AS = [
  "https://www.google.com/maps/place/Chelsey+Fanning+%7C+EXP+Realty/@47.7017621,-117.0105906,17z/data=!3m2!4b1!5s0x5361dd207347a5a9:0x87198999aad55a76!4m6!3m5!1s0x4a524c972f2da505:0xa86d95d4b35ac75c!8m2!3d47.7017621!4d-117.0105906!16s%2Fg%2F11szjk3vmc",
  "https://www.bing.com/maps?ss=ypid.YN4C9F60D2EBC9BE8F",
  "https://www.yelp.com/biz/chelsey-fanning-exp-realty-post-falls",
  "https://www.bbb.org/us/id/post-falls/profile/real-estate-agent/chelsey-fanning-realtor-1296-1000195312",
  "https://www.zillow.com/profile/ChelseyFanning",
  "https://www.facebook.com/cfanningrealtor",
  "https://www.instagram.com/life_with_chels",
];

// ─── NAP constants ────────────────────────────────────────────────────────────
export const NAP = {
  name: "Chelsey Fanning",
  title: "REALTOR®",
  brokerage: "eXp Realty",
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
  url: "https://chelseyfanning.com",
};

// ─── Service area cities ──────────────────────────────────────────────────────
export const SERVICE_AREAS = [
  "Post Falls",
  "Coeur d'Alene",
  "Hayden",
  "Rathdrum",
  "Spirit Lake",
];

// ─── Shared Person node — embedded in LocalBusiness and used standalone on /about ──
const AGENT_PERSON_NODE = {
  "@type": ["Person", "RealEstateAgent"],
  "@id": `${NAP.url}/#agent`,
  name: NAP.name,
  jobTitle: NAP.title,
  hasCredential: "Idaho Real Estate License LC54829",
  description:
    "Chelsey Fanning is a licensed REALTOR® (Idaho License LC54829) with eXp Realty, serving buyers and sellers across Post Falls, Coeur d'Alene, Hayden, Rathdrum, and Spirit Lake in North Idaho. With 7+ years of experience and over 100 transactions closed, she specializes in first-time home buyers, move-up families, and luxury properties. Her approach is built on three values: making real estate simple, keeping the process helpful, and ensuring every transaction is an enjoyable experience for her clients.",
  url: `${NAP.url}/about`,
  image: `${NAP.url}/chelsey-hero-periwinkle.jpeg`,
  telephone: NAP.phone,
  email: NAP.email,
  sameAs: CHELSEA_SAME_AS,
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.exprealty.com/#organization",
    name: "eXp Realty",
    url: "https://www.exprealty.com",
  },
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

// ─── LocalBusiness + RealEstateAgent schema ───────────────────────────────────
export function buildLocalBusinessSchema(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@id": `${NAP.url}/#business`,
    "@type": ["LocalBusiness", "RealEstateAgent"],
    name: NAP.name,
    description:
      "Chelsey Fanning is a trusted REALTOR® with eXp Realty, serving buyers and sellers across Post Falls, Coeur d'Alene, and all of North Idaho.",
    url: NAP.url,
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
    sameAs: CHELSEA_SAME_AS,
    image: `${NAP.url}/chelsey-hero-periwinkle.jpeg`,
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ...AGGREGATE_RATING,
    },
    founder: AGENT_PERSON_NODE,
    ...overrides,
  };
}

// ─── Person + RealEstateAgent schema ─────────────────────────────────────────
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
    "@id": `${NAP.url}/#website`,
    name: "Chelsey Fanning | REALTOR® | North Idaho",
    url: NAP.url,
    publisher: {
      "@id": `${NAP.url}/#agent`,
    },
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
    url: `${NAP.url}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@id": `${NAP.url}/#agent`,
    },
    publisher: {
      "@id": `${NAP.url}/#business`,
    },
    image: article.imageUrl
      ? article.imageUrl.startsWith("http") ? article.imageUrl : `${NAP.url}${article.imageUrl}`
      : `${NAP.url}/chelsey-hero-periwinkle.jpeg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${NAP.url}/blog/${article.slug}`,
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
    "@id": `${NAP.url}/#business`,
    "@type": "RealEstateAgent",
    name: NAP.name,
    url: NAP.url,
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
    provider: {
      "@id": `${NAP.url}/#business`,
    },
    areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
  };
}
