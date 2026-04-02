"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/content/testimonials";

export default function FeaturedTestimonials() {
  const featured = TESTIMONIALS.filter((t) => t.featured);

  return (
    <SectionWrapper background="surface" id="testimonials-preview">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featured.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            className="flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
        >
          Read all reviews →
        </Link>
      </div>
    </SectionWrapper>
  );
}
