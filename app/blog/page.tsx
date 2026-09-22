import type { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import SectionWrapper from "@/components/ui/SectionWrapper";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { NAP } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "North Idaho Real Estate Blog",
  description:
    "Insights, market updates, and advice for buyers and sellers in Post Falls, Coeur d'Alene, and all of North Idaho — from REALTOR® Chelsey Fanning.",
  path: "/blog",
  keywords: ["North Idaho real estate blog", "Post Falls housing market", "first time buyer tips Idaho"],
});

function BlogIndexSchema({ posts }: { posts: Array<{ slug: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Blog", "CollectionPage"],
    "@id": `${NAP.url}/blog`,
    name: "North Idaho Real Estate Blog — Chelsey Fanning REALTOR®",
    description:
      "Honest takes on the North Idaho market, practical advice for buyers and sellers, and genuine local perspective.",
    url: `${NAP.url}/blog`,
    inLanguage: "en-US",
    isPartOf: { "@id": `${NAP.url}/#website` },
    about: { "@id": `${NAP.url}/#business` },
    publisher: { "@id": `${NAP.url}/#business` },
    author: { "@id": `${NAP.url}/#agent` },
    breadcrumb: { "@id": `${NAP.url}/blog#breadcrumb` },
    hasPart: posts.map((p) => ({ "@id": `${NAP.url}/blog/${p.slug}#article` })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogIndexSchema posts={posts} />
      <BreadcrumbSchema
        id={`${NAP.url}/blog#breadcrumb`}
        items={[
          { name: "Home", url: NAP.url },
          { name: "Blog" },
        ]}
      />

      {/* Page hero */}
      <section
        className="pt-36 pb-16"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
          >
            Local Knowledge
          </p>
          <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
            North Idaho Real Estate Blog
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Honest takes on the North Idaho market, practical advice for buyers and sellers,
            and genuine local perspective — no fluff, no clickbait.
          </p>
        </div>
      </section>

      {/* Blog posts grid */}
      <SectionWrapper background="surface">
        <BlogGrid posts={posts.map(({slug,title,description,category,imageUrl,imageAlt,readingTime,date})=>({slug,title,description,category,imageUrl,imageAlt,readingTime,date}))} />
      </SectionWrapper>
    </>
  );
}
