import { NAP } from "@/lib/schema";

interface WebPageSchemaProps {
  path: string;
  name: string;
  description?: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  breadcrumbId?: string;
}

export default function WebPageSchema({
  path,
  name,
  description,
  type = "WebPage",
  breadcrumbId,
}: WebPageSchemaProps) {
  const url = `${NAP.url}${path}`;
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": url,
    name,
    url,
    isPartOf: { "@id": `${NAP.url}/#website` },
    about: { "@id": `${NAP.url}/#business` },
  };
  if (description) schema.description = description;
  if (breadcrumbId) schema.breadcrumb = { "@id": breadcrumbId };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
