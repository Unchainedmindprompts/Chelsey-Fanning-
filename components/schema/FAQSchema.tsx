import { buildFAQSchema } from "@/lib/schema";

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = buildFAQSchema(faqs);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
