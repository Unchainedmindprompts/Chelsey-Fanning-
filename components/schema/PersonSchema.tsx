import { buildPersonSchema } from "@/lib/schema";

export default function PersonSchema(overrides: Record<string, unknown> = {}) {
  const schema = buildPersonSchema(overrides);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
