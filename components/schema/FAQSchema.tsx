import { buildFAQSchema } from "@/lib/schema";

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
  id?: string;
}

export default function FAQSchema({ faqs, id }: FAQSchemaProps) {
  const schema = buildFAQSchema(faqs, id);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
