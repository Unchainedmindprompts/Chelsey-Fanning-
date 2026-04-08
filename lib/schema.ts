import { AGGREGATE_RATING } from "@/content/testimonials";

// ─── Shared sameAs profiles ───────────────────────────────────────────────────
export const CHELSEA_SAME_AS = [
  "https://www.google.com/maps?cid=YOUR_GBP_CID",        // TODO: fill at launch
  "https://www.bingplaces.com/YOUR_LISTING",              // TODO: fill at launch
  "https://businessconnect.apple.com/YOUR_LISTING",       // TODO: fill at launch
  "https://www.yelp.com/biz/chelsea-fanning-post-falls",
  "https://www.bbb.org/YOUR_LISTING",                     // TODO: fill at launch
  "https://www.yellowpages.com/YOUR_LISTING",             // TODO: fill at launch
  "https://www.instagram.com/YOUR_HANDLE",                // TODO: fill at launch
  "https://www.facebook.com/YOUR_HANDLE",                 // TODO: fill at launch
  "https://exprealty.com/agents/YOUR_PROFILE",            // TODO: fill at launch
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
  url: "https://www.chelseyfanning.com",
};

// ─── Service area cities ──────────────────────────────────────────────────────
export const SERVICE_AREAS = [
  "Post Falls",
  "Coeur d'Alene",
  "Hayden",
  "Rathdrum",
  "Spirit Lake",
  "Spokane Valley",
];

// ─── LocalBusiness + RealEstateAgent schema ───────────────────────────────────
export function buildLocalBusinessSchema(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
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
    image: `${NAP.url}/chelsea-hero.jpg`,        // TODO: real image path
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ...AGGREGATE_RATING,
    },
    ...overrides,
  };
}

// ─── Person + RealEstateAgent schema ─────────────────────────────────────────
export function buildPersonSchema(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Person", "RealEstateAgent"],
    name: NAP.name,
    jobTitle: NAP.title,
    worksFor: {
      "@type": "Organization",
      name: NAP.brokerage,
      url: "https://exprealty.com",
    },
    url: NAP.url,
    telephone: NAP.phone,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      ...NAP.address,
    },
    sameAs: CHELSEA_SAME_AS,
    image: `${NAP.url}/chelsea-about.jpg`,       // TODO: real image path
    knowsAbout: [
      "Real estate buying",
      "Real estate selling",
      "First-time home buyers",
      "Luxury real estate",
      "North Idaho real estate market",
    ],
    ...overrides,
  };
}

// ─── FAQ schema ───────────────────────────────────────────────────────────────
export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
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
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${NAP.url}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Person",
      name: NAP.name,
      url: `${NAP.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: NAP.name,
      url: NAP.url,
    },
    image: article.imageUrl ?? `${NAP.url}/chelsey-hero-periwinkle.jpeg`,
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
      "@type": "RealEstateAgent",
      name: NAP.name,
      url: NAP.url,
    },
    areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
  };
}
