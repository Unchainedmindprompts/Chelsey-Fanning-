import { buildArticleSchema } from "@/lib/schema";

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  about?: Array<Record<string, unknown>>;
  mentions?: Array<Record<string, unknown>>;
}

export default function ArticleSchema(props: ArticleSchemaProps) {
  const schema = buildArticleSchema(props);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
