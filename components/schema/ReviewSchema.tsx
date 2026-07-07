import { TESTIMONIALS } from "@/content/testimonials";
import { NAP } from "@/lib/schema";

// Emits individual Review nodes in a @graph — each with its own @id.
// itemReviewed is a type-name stub ({ @type, @id, name }) per the NAP-stub
// exception: Google's Review snippet validator requires name on itemReviewed.
// The full #business entity definition lives only on the homepage.
export default function ReviewSchema() {
  const toISO = (d: string) => (/T/.test(d) ? d : `${d}T00:00:00-07:00`);

  const reviews = TESTIMONIALS.filter((t) => t.fullText.length > 0);

  const schema = {
    "@context": "https://schema.org",
    "@graph": reviews.map((t) => ({
      "@type": "Review",
      "@id": `${NAP.url}/reviews/${t.id}`,
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: t.fullText,
      datePublished: toISO(t.date),
      itemReviewed: {
        "@type": ["LocalBusiness", "RealEstateAgent"],
        "@id": `${NAP.url}/#business`,
        name: NAP.name,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
