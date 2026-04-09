import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ContactCTA from "@/components/sections/ContactCTA";
import ReviewSchema from "@/components/schema/ReviewSchema";
import { TESTIMONIALS, AGGREGATE_RATING } from "@/content/testimonials";

export const metadata: Metadata = generatePageMetadata({
  title: "Client Testimonials & Reviews",
  description:
    "Read what Chelsey Fanning's real estate clients say — verified Google reviews from buyers, sellers, and families across Post Falls, Coeur d'Alene, and North Idaho.",
  path: "/testimonials",
  keywords: ["Chelsey Fanning reviews", "North Idaho realtor reviews", "Post Falls real estate agent testimonials"],
});

const GOOGLE_REVIEWS_URL = "https://share.google/u2Lgk0szuKiVmZzp3";

const CATEGORIES = [
  {
    key: "first-time-buyer",
    heading: "For the ones who said \u201cI don\u2019t even know where to start.\u201d",
    background: "base" as const,
  },
  {
    key: "luxury",
    heading: "For buyers and sellers who expect the best.",
    background: "surface" as const,
  },
  {
    key: "relocation",
    heading: "For the ones who moved to North Idaho from somewhere else.",
    background: "base" as const,
  },
  {
    key: "seller",
    heading: "For the ones ready to sell.",
    background: "surface" as const,
  },
  {
    key: "repeat-client",
    heading: "For the clients who came back — and the ones who never left.",
    background: "base" as const,
  },
  {
    key: "general",
    heading: "More Happy Clients",
    background: "surface" as const,
  },
] as const;

const renderable = TESTIMONIALS.filter((t) => t.fullText.length > 0);

export default function TestimonialsPage() {
  return (
    <>
      <ReviewSchema />

      {/* Page hero */}
      <section
        className="pt-36 pb-16"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text content */}
            <div className="text-center lg:text-left">
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
              >
                Client Reviews
              </p>
              <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
                Real People. Real Results.
              </h1>
              <p
                className="text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
              >
                These are real clients who trusted me with one of the biggest decisions of their lives.
                Their words — not mine — are the best measure of what it&apos;s like to work with me.
              </p>

              {/* Aggregate rating display */}
              <div
                className="mt-10 inline-flex items-center gap-4 px-8 py-4 rounded-2xl"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid rgba(196,185,172,0.3)",
                }}
              >
                <div>
                  <p
                    className="text-4xl font-bold"
                    style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
                  >
                    {AGGREGATE_RATING.ratingValue}
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--color-primary)" className="w-4 h-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-roboto)" }}>
                    Google Rating
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {AGGREGATE_RATING.reviewCount} Google reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Hero image — desktop only, smaller than homepage */}
            <div className="hidden lg:block">
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/chelsey-hero-periwinkle.jpeg"
                  alt="Chelsey Fanning, REALTOR® in Post Falls, Idaho"
                  fill
                  sizes="45vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews by category */}
      {CATEGORIES.map(({ key, heading, background }) => {
        const categoryReviews = renderable.filter((t) => t.category === key);
        if (categoryReviews.length === 0) return null;
        return (
          <SectionWrapper key={key} background={background}>
            <h2 className="text-h3 mb-2" style={{ color: "var(--color-charcoal)" }}>
              {heading}
            </h2>
            <p className="text-sm mb-10" style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}>
              {categoryReviews.length} {categoryReviews.length === 1 ? "review" : "reviews"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryReviews.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </SectionWrapper>
        );
      })}

      {/* Google reviews link */}
      <section className="py-16 text-center" style={{ backgroundColor: "var(--color-surface)" }}>
        <p className="text-base mb-4" style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}>
          All {AGGREGATE_RATING.reviewCount} reviews verified on Google
        </p>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "var(--color-primary)", color: "var(--color-white)", fontFamily: "var(--font-roboto)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-.146 18.717c-3.712 0-6.717-3.005-6.717-6.717S8.142 5.283 11.854 5.283c1.813 0 3.332.664 4.497 1.753l-1.824 1.753c-.499-.477-1.373-1.033-2.673-1.033-2.291 0-4.158 1.896-4.158 4.244 0 2.347 1.867 4.244 4.158 4.244 2.658 0 3.656-1.908 3.81-2.895H11.854v-2.316h6.355c.063.346.096.693.096 1.053 0 3.618-2.42 6.631-6.451 6.631z"/>
          </svg>
          View all reviews on Google
        </a>
      </section>

      <ContactCTA />
    </>
  );
}
