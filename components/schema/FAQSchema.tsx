import { buildFAQSchema } from "@/lib/schema";

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
  id?: string;
  pageId?: string;
}

export default function FAQSchema({ faqs, id, pageId }: FAQSchemaProps) {
  const schema = buildFAQSchema(faqs, id, pageId);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
