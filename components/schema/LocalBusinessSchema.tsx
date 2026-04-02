import { buildLocalBusinessSchema } from "@/lib/schema";

export default function LocalBusinessSchema(
  overrides: Record<string, unknown> = {}
) {
  const schema = buildLocalBusinessSchema(overrides);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
