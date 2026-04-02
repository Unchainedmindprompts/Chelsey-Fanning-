"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { NAP } from "@/lib/schema";

export default function ContactCTA() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-h2 mb-6"
          style={{ color: "var(--color-white)", fontFamily: "var(--font-cormorant)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Find Your Place in North Idaho?
        </motion.h2>
        <motion.p
          className="text-lg mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-inter)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Whether you&apos;re buying, selling, or just starting to explore what&apos;s possible,
          I&apos;m always happy to talk. No pressure, no scripts — just an honest conversation
          about your goals.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            href="/contact"
            variant="ghost"
            size="lg"
            className="border-2 !border-white !text-white hover:!bg-white hover:!text-[var(--color-primary)]"
          >
            Send a Message
          </Button>
          <a
            href={`tel:${NAP.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-inter)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {NAP.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
