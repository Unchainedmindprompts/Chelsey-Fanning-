import type { Testimonial } from "@/content/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
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

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const formattedDate = new Date(testimonial.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <article
      className="rounded-2xl p-8 shadow-sm flex flex-col h-full"
      style={{ backgroundColor: "var(--color-white)", border: "1px solid rgba(196,185,172,0.3)" }}
    >
      <StarRating rating={testimonial.rating} />
      <blockquote className="flex-1">
        <p
          className="text-base leading-relaxed mb-6 italic"
          style={{ color: "var(--color-text)" }}
        >
          &ldquo;{testimonial.body}&rdquo;
        </p>
      </blockquote>
      <footer className="mt-auto">
        <p
          className="font-semibold text-sm"
          style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
        >
          {testimonial.author}
        </p>
        {testimonial.location && (
          <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
            {testimonial.location} · {formattedDate}
          </p>
        )}
      </footer>
    </article>
  );
}
