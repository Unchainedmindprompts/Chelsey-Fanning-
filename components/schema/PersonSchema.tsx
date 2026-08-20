import { buildExpRealtyNode, buildPersonNode } from "@/lib/schema";

export default function PersonSchema(overrides: Record<string, unknown> = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [buildPersonNode(overrides), buildExpRealtyNode()],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
