// ─── Shared sameAs profiles ───────────────────────────────────────────────────
// Rule 3: sameAs on the entity it represents.
// Business/location directory listings → #business
export const CHELSEA_SAME_AS = [
  "https://www.google.com/maps/place/Chelsey+Fanning+%7C+EXP+Realty/@47.7017621,-117.0105906,17z/data=!3m2!4b1!5s0x5361dd207347a5a9:0x87198999aad55a76!4m6!3m5!1s0x4a524c972f2da505:0xa86d95d4b35ac75c!8m2!3d47.7017621!4d-117.0105906!16s%2Fg%2F11szjk3vmc",
  "https://www.bing.com/maps?ss=ypid.YN4C9F60D2EBC9BE8F",
  "https://www.yelp.com/biz/chelsey-fanning-exp-realty-post-falls",
  "https://www.bbb.org/us/id/post-falls/profile/real-estate-agent/chelsey-fanning-realtor-1296-1000195312",
];

// Agent-directory profiles that represent Chelsey as a licensed professional → #agent
const AGENT_SAME_AS = [
  "https://www.zillow.com/profile/ChelseyFanning",
  "https://www.facebook.com/cfanningrealtor",
  "https://www.instagram.com/life_with_chels",
  "https://www.exprealty.com/agents-search/Chelsey-Fanning_bcde9e92-9fd2-11f0-b1d9-b78ca4428fb6",
  "https://www.homes.com/real-estate-agents/chelsey-fanning/q63yz7z/",
  "https://www.realtor.com/realestateagents/5bc7b0ea76e8ec0011336928",
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
  { name: "Post Falls",     sameAs: "https://en.wikipedia.org/wiki/Post_Falls,_Idaho" },
  { name: "Coeur d'Alene", sameAs: "https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho" },
  { name: "Hayden",         sameAs: "https://en.wikipedia.org/wiki/Hayden,_Idaho" },
  { name: "Rathdrum",       sameAs: "https://en.wikipedia.org/wiki/Rathdrum,_Idaho" },
  { name: "Spirit Lake",    sameAs: "https://en.wikipedia.org/wiki/Spirit_Lake,_Idaho" },
];

// ─── Canonical Person node — defined ONCE here, emitted on the homepage ───────
// Rule 4: @type is "Person" only. Profession expressed via jobTitle + hasOccupation.
// Rule 3: sameAs split — agent-directory profiles here; business/location profiles on #business.
// Bidirectional: #business → founder → #agent; #agent → affiliation → #business
const AGENT_PERSON_NODE = {
  "@type": "Person",
  "@id": `${NAP.url}/#agent`,
  name: NAP.name,
  jobTitle: NAP.title,
  hasOccupation: {
    "@type": "Occupation",
    name: "Real Estate Agent",
    occupationLocation: {
      "@type": "City",
      name: "Post Falls",
      containedInPlace: { "@type": "State", name: "Idaho" },
    },
  },
  hasCredential: "Idaho Real Estate License LC54829",
  description:
    "Chelsey Fanning is a licensed REALTOR® (Idaho License LC54829) with eXp Realty, serving buyers and sellers across Post Falls, Coeur d'Alene, Hayden, Rathdrum, and Spirit Lake in North Idaho. With 7+ years of experience and over 100 transactions closed, she specializes in first-time home buyers, move-up families, and luxury properties. Her approach is built on three values: making real estate simple, keeping the process helpful, and ensuring every transaction is an enjoyable experience for her clients.",
  url: `${NAP.url}/about`,
  image: `${NAP.url}/chelsey-hero-periwinkle.jpeg`,
  telephone: NAP.phone,
  email: NAP.email,
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.exprealty.com/#organization",
    name: "eXp Realty",
    url: "https://www.exprealty.com",
  },
  affiliation: { "@id": `${NAP.url}/#business` },
  sameAs: AGENT_SAME_AS,
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
      // TODO: confirm these match the actual Google Maps / Bing office pin before going live.
      // Current values (47.7182, -116.9443) differ ~2 mi from the Google Maps sameAs URL pin
      // (47.7017621, -117.0105906). Use whichever matches the authoritative public listing.
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city.name,
      sameAs: city.sameAs,
    })),
    sameAs: CHELSEA_SAME_AS,
    image: `${NAP.url}/chelsey-hero-periwinkle.jpeg`,
    priceRange: "$$",
    founder: { "@id": `${NAP.url}/#agent` },
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
export function buildFAQSchema(
  faqs: { question: string; answer: string }[],
  id?: string,
  pageId?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    ...(pageId ? { isPartOf: { "@id": pageId } } : {}),
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
    inLanguage: "en-US",
    publisher: { "@id": `${NAP.url}/#business` },
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
  about?: Array<Record<string, unknown>>;
  mentions?: Array<Record<string, unknown>>;
}) {
  const imageUrl = article.imageUrl
    ? article.imageUrl.startsWith("http") ? article.imageUrl : `${NAP.url}${article.imageUrl}`
    : `${NAP.url}/chelsey-hero-periwinkle.jpeg`;

  // Ensure dates are full ISO 8601 with timezone (Mountain Time, UTC-7)
  const toISO = (d: string) => /T/.test(d) ? d : `${d}T00:00:00-07:00`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${NAP.url}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    url: `${NAP.url}/blog/${article.slug}`,
    datePublished: toISO(article.datePublished),
    dateModified: toISO(article.dateModified ?? article.datePublished),
    author: { "@id": `${NAP.url}/#agent` },
    publisher: { "@id": `${NAP.url}/#business` },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: `${NAP.url}/blog/${article.slug}`,
    isPartOf: { "@id": `${NAP.url}/blog` },
  };

  if (article.about?.length) schema.about = article.about;
  if (article.mentions?.length) schema.mentions = article.mentions;

  return schema;
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
    provider: {
      "@id": `${NAP.url}/#business`,
    },
    areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city.name, sameAs: city.sameAs })),
  };
}
