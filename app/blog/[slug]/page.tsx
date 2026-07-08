import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { ListingFrontmatter } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { NAP } from "@/lib/schema";
import ReviewCallout from "@/components/blog/ReviewCallout";

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
    ogImageUrl: post.imageUrl ?? "/chelsey-hero-periwinkle.jpeg",
    keywords: post.tags,
  });
}

// FAQ schema helper — rendered only when the post supplies `faqs` front matter
function FAQSchema({ faqs, slug }: { faqs: Array<{ question: string; answer: string }>; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${NAP.url}/blog/${slug}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Listing schema — renders only when listing frontmatter is present
function ListingSchema({ listing, slug }: { listing: ListingFrontmatter; slug: string }) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${NAP.url}/blog/${slug}#listing`,
    name: listing.address,
    datePosted: (/T/.test(listing.datePosted) ? listing.datePosted : `${listing.datePosted}T00:00:00-07:00`),
    offers: {
      "@type": "Offer",
      price: String(listing.price),
      priceCurrency: "USD",
      availability: listing.status === "active"
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
      seller: { "@id": `${NAP.url}/#agent` },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: listing.streetAddress,
      addressLocality: listing.addressLocality,
      addressRegion: listing.addressRegion,
      postalCode: listing.postalCode,
      addressCountry: "US",
    },
    numberOfBedrooms: listing.beds,
    numberOfBathroomsTotal: listing.baths,
    floorSize: { "@type": "QuantitativeValue", value: listing.sqft, unitCode: "FTK" },
    subjectOf: { "@id": `${NAP.url}/blog/${slug}` },
  };
  if (listing.yearBuilt) schema.yearBuilt = listing.yearBuilt;
  if (listing.acres) schema.lotSize = { "@type": "QuantitativeValue", value: listing.acres, unitText: "acres" };
  if (listing.url) schema.url = listing.url;
  if (listing.mlsId) schema.identifier = listing.mlsId;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ArticleWebPageSchema({ post }: { post: { slug: string; title: string; description: string } }) {
  const url = `${NAP.url}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    name: post.title,
    url,
    description: post.description,
    isPartOf: { "@id": `${NAP.url}/#website` },
    about: { "@id": `${NAP.url}/#business` },
    breadcrumb: { "@id": `${NAP.url}/blog/${post.slug}#breadcrumb` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ post }: { post: { slug: string; title: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${NAP.url}/blog/${post.slug}#breadcrumb`,
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
        about={post.about}
        mentions={post.mentions}
      />
      <BreadcrumbSchema post={post} />
      <ArticleWebPageSchema post={post} />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} slug={post.slug} />}
      {post.listing && <ListingSchema listing={post.listing} slug={post.slug} />}

      <article style={{ backgroundColor: "var(--color-base)" }}>
        {/* Article header */}
        <header className="pt-36 pb-12" style={{ backgroundColor: "var(--color-base)" }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}>
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
                fontFamily: "var(--font-roboto)",
              }}
            >
              {post.category}
            </span>

            <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
              {post.title}
            </h1>

            <div
              className="flex items-center gap-6 text-sm"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}
            >
              <span>By {post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formattedDate}</time>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </header>

        {/* Article body — split at FAQ heading to inject ReviewCallout */}
        {(() => {
          const FAQ_HEADING = "## Frequently Asked Questions";
          const splitIdx = post.content.indexOf(FAQ_HEADING);
          const bodyContent = splitIdx !== -1 ? post.content.slice(0, splitIdx) : post.content;
          const faqContent = splitIdx !== -1 ? post.content.slice(splitIdx) : null;

          const mdxOptions = { mdxOptions: { remarkPlugins: [remarkGfm] } };

          return (
            <div
              className="max-w-3xl mx-auto px-6 lg:px-8 pb-24 prose prose-lg"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              <MDXRemote source={bodyContent} options={mdxOptions} />

              {post.reviewSource && (
                <ReviewCallout review={post.reviewSource} />
              )}

              {faqContent && (
                <MDXRemote source={faqContent} options={mdxOptions} />
              )}
            </div>
          );
        })()}

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
                  style={{ fontFamily: "var(--font-roboto)" }}
                >
                  Questions about buying or selling in North Idaho?
                </p>
                <p className="text-sm opacity-90" style={{ fontFamily: "var(--font-roboto)" }}>
                  I&apos;m always happy to talk — no pressure, no scripts.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                Let&apos;s Talk
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="text-sm font-medium hover:underline"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
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
