import { buildAggregateRatingSchema } from "@/lib/schema";
import type { Testimonial } from "@/content/testimonials";

interface ReviewSchemaProps {
  testimonials: Testimonial[];
}

export default function ReviewSchema({ testimonials }: ReviewSchemaProps) {
  const schema = buildAggregateRatingSchema(
    testimonials.map((t) => ({
      author: t.author,
      rating: t.rating,
      body: t.body,
      date: t.date,
    }))
  );
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
