import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import SectionWrapper from "@/components/ui/SectionWrapper";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

export const metadata: Metadata = generatePageMetadata({
  title: "North Idaho Real Estate Blog",
  description:
    "Insights, market updates, and advice for buyers and sellers in Post Falls, Coeur d'Alene, and all of North Idaho — from REALTOR® Chelsea Fanning.",
  path: "/blog",
  keywords: ["North Idaho real estate blog", "Post Falls housing market", "first time buyer tips Idaho"],
});

const CATEGORY_COLORS: Record<string, string> = {
  "Market Updates":      "var(--color-primary)",
  "First-Time Buyers":   "#5B8C5A",
  "North Idaho Living":  "#7B5EA7",
  "Selling Tips":        "#C07B3D",
  "Community":           "#B85C6E",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <LocalBusinessSchema />

      {/* Page hero */}
      <section
        className="pt-36 pb-16"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
          >
            Local Knowledge
          </p>
          <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
            North Idaho Real Estate Blog
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
          >
            Honest takes on the North Idaho market, practical advice for buyers and sellers,
            and genuine local perspective — no fluff, no clickbait.
          </p>
        </div>
      </section>

      {/* Blog posts grid */}
      <SectionWrapper background="surface">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-base" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
              Posts coming soon. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              const categoryColor = CATEGORY_COLORS[post.category] ?? "var(--color-primary)";

              return (
                <article
                  key={post.slug}
                  className="rounded-2xl overflow-hidden flex flex-col group"
                  style={{
                    backgroundColor: "var(--color-white)",
                    border: "1px solid rgba(196,185,172,0.3)",
                  }}
                >
                  {/* Post image placeholder */}
                  <div
                    className="aspect-video flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    {post.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                        [Post image — TODO]
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category tag */}
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4 self-start"
                      style={{
                        backgroundColor: `${categoryColor}18`,
                        color: categoryColor,
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {post.category}
                    </span>

                    <Link href={`/blog/${post.slug}`} className="flex-1">
                      <h2
                        className="text-h4 mb-3 group-hover:underline transition-all"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        {post.title}
                      </h2>
                    </Link>

                    <p
                      className="text-sm leading-relaxed mb-4 line-clamp-3"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      {post.description}
                    </p>

                    <div
                      className="flex items-center justify-between mt-auto pt-4 border-t text-xs"
                      style={{ borderColor: "rgba(196,185,172,0.3)", color: "var(--color-muted)" }}
                    >
                      <span>{formattedDate}</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
