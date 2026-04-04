import type { Testimonial } from "@/content/testimonials";

interface ReviewCalloutProps {
  testimonial: Testimonial;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < rating ? "var(--color-primary)" : "var(--color-concrete)"}
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCallout({ testimonial }: ReviewCalloutProps) {
  return (
    <aside
      className="not-prose my-12 rounded-2xl p-8"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid rgba(196,185,172,0.35)",
      }}
    >
      <Stars rating={testimonial.rating} />

      <blockquote className="mt-4 mb-5">
        <p
          className="text-xl leading-relaxed italic"
          style={{
            fontFamily: "var(--font-roboto)",
            color: "var(--color-charcoal)",
            fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
          }}
        >
          &ldquo;{testimonial.shortQuote || testimonial.fullText}&rdquo;
        </p>
      </blockquote>

      <div
        className="flex items-center gap-3"
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--color-charcoal)" }}
          >
            {testimonial.name}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
            Verified Google Review
          </p>
        </div>
      </div>
    </aside>
  );
}
