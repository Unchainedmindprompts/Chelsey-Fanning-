import { TESTIMONIALS, AGGREGATE_RATING } from "@/content/testimonials";
import { BUSINESS_ID, NAP, PRACTICE_NAME } from "@/lib/schema";

export default function ReviewSchema() {
  const reviews = TESTIMONIALS.filter((t) => t.fullText.length > 0);

  const schema = {
    "@context": "https://schema.org",
    "@id": BUSINESS_ID,
    "@type": "RealEstateAgent",
    name: PRACTICE_NAME,
    url: NAP.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ...AGGREGATE_RATING,
    },
    review: reviews.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: t.fullText,
      datePublished: t.date,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
