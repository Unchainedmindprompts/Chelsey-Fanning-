"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutPreview() {
  return (
    <SectionWrapper background="base" id="about-preview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/chelsea-about.jpeg"
              alt="Chelsea Fanning, REALTOR® — Post Falls, Idaho"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover object-center"
            />
          </div>
          {/* Floating tag */}
          <div
            className="absolute -bottom-6 -right-6 lg:right-8 rounded-2xl px-6 py-4 shadow-lg hidden md:block"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-white)",
            }}
          >
            <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-cormorant)" }}>eXp Realty</p>
            <p className="text-xs tracking-widest uppercase opacity-80">Post Falls, Idaho</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
          >
            Meet Chelsea
          </p>
          <h2 className="text-h2 mb-6" style={{ color: "var(--color-charcoal)" }}>
            A North Idaho Agent Who Actually Cares
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
          >
            I&apos;ve built my business on one simple principle: treat every client like family. Whether
            you&apos;re nervously stepping into your first open house or selling the home you&apos;ve lived in
            for twenty years, you deserve an agent who listens first and talks second.
          </p>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
          >
            I&apos;m proud to call North Idaho home — the mountains, the lakes, the community. I love
            this place, and I love helping people find their place in it.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
          >
            My full story →
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
