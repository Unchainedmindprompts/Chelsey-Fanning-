import { buildHomepageGraph } from "@/lib/schema";

export default function HomepageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomepageGraph()) }}
    />
  );
}
