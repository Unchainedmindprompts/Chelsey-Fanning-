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
      <div className="text-center mb-14">
        <motion.p
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Real Stories
        </motion.p>
        <motion.h2
          className="text-h2 mb-4"
          style={{ color: "var(--color-charcoal)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What My Clients Say
        </motion.h2>
        <motion.p
          className="text-base max-w-lg mx-auto"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          These aren&apos;t cherry-picked testimonials — they&apos;re real reviews from real clients
          who trusted me with one of the biggest decisions of their lives.
        </motion.p>
      </div>

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
