import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ContactCTA from "@/components/sections/ContactCTA";
import ReviewSchema from "@/components/schema/ReviewSchema";
import { TESTIMONIALS } from "@/content/testimonials";

export const metadata: Metadata = generatePageMetadata({
  title: "Client Testimonials & Reviews",
  description:
    "Read what Chelsey Fanning's real estate clients say — verified Google reviews from buyers, sellers, and families across Post Falls, Coeur d'Alene, and North Idaho.",
  path: "/testimonials",
  keywords: ["Chelsey Fanning reviews", "North Idaho realtor reviews", "Post Falls real estate agent testimonials"],
});

const CATEGORIES = [
  { key: "first-time-buyer", label: "First-Time Buyers" },
  { key: "seller",           label: "Sellers" },
  { key: "luxury",           label: "Luxury" },
  { key: "relocation",       label: "Relocation" },
  { key: "move-up",          label: "Move-Up Buyers" },
] as const;

export default function TestimonialsPage() {
  return (
    <>
      <ReviewSchema testimonials={TESTIMONIALS} />

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
            Client Reviews
          </p>
          <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
            Real People. Real Results.
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
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
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-cormorant)" }}
              >
                5.0
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
              <p className="text-sm font-semibold" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                Google Rating
              </p>
              <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                27 Google reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews by category */}
      {CATEGORIES.map(({ key, label }) => {
        const categoryReviews = TESTIMONIALS.filter((t) => t.category === key);
        if (categoryReviews.length === 0) return null;
        return (
          <SectionWrapper
            key={key}
            background={key === "seller" || key === "relocation" ? "surface" : "base"}
          >
            <h2 className="text-h3 mb-10" style={{ color: "var(--color-charcoal)" }}>
              {label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryReviews.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </SectionWrapper>
        );
      })}

      <ContactCTA />
    </>
  );
}
