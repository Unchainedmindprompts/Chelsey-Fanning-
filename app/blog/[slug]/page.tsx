import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { NAP } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    ogImageUrl: post.imageUrl ?? "/og-default.jpg",
    keywords: post.tags,
  });
}

// Breadcrumb schema helper
function BreadcrumbSchema({ post }: { post: { slug: string; title: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: NAP.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${NAP.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${NAP.url}/blog/${post.slug}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.date}
        dateModified={post.dateModified}
        imageUrl={post.imageUrl}
      />
      <BreadcrumbSchema post={post} />

      <article style={{ backgroundColor: "var(--color-base)" }}>
        {/* Article header */}
        <header className="pt-36 pb-12" style={{ backgroundColor: "var(--color-base)" }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                <li><Link href="/" className="hover:underline" style={{ color: "var(--color-primary)" }}>Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/blog" className="hover:underline" style={{ color: "var(--color-primary)" }}>Blog</Link></li>
                <li aria-hidden>/</li>
                <li className="truncate max-w-xs" aria-current="page">{post.title}</li>
              </ol>
            </nav>

            {/* Category */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(46,134,171,0.1)",
                color: "var(--color-primary)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {post.category}
            </span>

            <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
              {post.title}
            </h1>

            <div
              className="flex items-center gap-6 text-sm"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
            >
              <span>By {post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formattedDate}</time>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div
          className="max-w-3xl mx-auto px-6 lg:px-8 pb-24 prose prose-lg"
          style={{
            "--tw-prose-body": "var(--color-text)",
            "--tw-prose-headings": "var(--color-charcoal)",
            "--tw-prose-links": "var(--color-primary)",
            "--tw-prose-bold": "var(--color-charcoal)",
            fontFamily: "var(--font-inter)",
          } as React.CSSProperties}
        >
          <MDXRemote source={post.content} />
        </div>

        {/* Post footer */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(196,185,172,0.3)", backgroundColor: "var(--color-surface)" }}
        >
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
            <div
              className="rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-white)",
              }}
            >
              <div className="flex-1">
                <p
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Questions about buying or selling in North Idaho?
                </p>
                <p className="text-sm opacity-90" style={{ fontFamily: "var(--font-inter)" }}>
                  I&apos;m always happy to talk — no pressure, no scripts.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Let&apos;s Talk
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="text-sm font-medium hover:underline"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
              >
                ← Back to all posts
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
