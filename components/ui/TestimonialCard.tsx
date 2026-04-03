"use client";

import { useState } from "react";
import Link from "next/link";
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
  const [expanded, setExpanded] = useState(false);
  const hasFullText = testimonial.fullText.length > 0;
  const needsToggle = hasFullText && testimonial.fullText !== testimonial.shortQuote;

  const displayText = expanded ? testimonial.fullText : (testimonial.shortQuote || testimonial.fullText);

  const formattedDate = new Date(testimonial.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <article
      className="rounded-2xl p-8 shadow-sm flex flex-col"
      style={{ backgroundColor: "var(--color-white)", border: "1px solid rgba(196,185,172,0.3)" }}
    >
      {testimonial.badgeLabel && (
        <p
          className="text-xs font-semibold tracking-wide uppercase mb-3 px-2 py-1 rounded-full self-start"
          style={{
            color: "var(--color-primary)",
            backgroundColor: "rgba(var(--color-primary-rgb, 139,109,79), 0.08)",
            fontFamily: "var(--font-inter)",
          }}
        >
          {testimonial.badgeLabel}
        </p>
      )}

      <StarRating rating={testimonial.rating} />

      <blockquote className="flex-1">
        <p
          className="text-base leading-relaxed italic"
          style={{ color: "var(--color-text)" }}
        >
          &ldquo;{displayText}&rdquo;
        </p>

        {needsToggle && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 text-sm font-semibold transition-opacity hover:opacity-70 focus-visible:outline-none"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
            aria-expanded={expanded}
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        )}
      </blockquote>

      <footer className="mt-5 pt-5 border-t" style={{ borderColor: "rgba(196,185,172,0.3)" }}>
        <p
          className="font-semibold text-sm"
          style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
        >
          {testimonial.name}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
          {formattedDate}
        </p>
        {testimonial.blogSlug && (
          <Link
            href={`/blog/${testimonial.blogSlug}`}
            className="inline-block mt-3 text-xs font-semibold hover:underline"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
          >
            Read the full story →
          </Link>
        )}
      </footer>
    </article>
  );
}
