"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const CITIES = [
  "Post Falls",
  "Coeur d'Alene",
  "Hayden",
  "Rathdrum",
  "Spirit Lake",
];

export default function NorthIdahoSection() {
  return (
    <SectionWrapper background="surface" id="north-idaho">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Local Expertise
        </motion.p>
        <motion.h2
          className="text-h2 mb-6"
          style={{ color: "var(--color-charcoal)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          The Heart of the Inland Northwest
        </motion.h2>
        <motion.p
          className="text-base leading-relaxed mb-6"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          North Idaho has become one of the most sought-after places to live in the entire
          Pacific Northwest — and for good reason. The natural beauty is extraordinary, the
          community is tight-knit and welcoming, and the quality of life is genuinely hard to
          match. Post Falls, in particular, offers an incredible combination of affordability,
          access to nature, and a growing local economy that attracts families and professionals
          from across the country.
        </motion.p>
        <motion.p
          className="text-base leading-relaxed mb-10"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I know these communities because I live here. I can tell you the difference between
          neighborhoods, which areas are growing fastest, and what your budget will realistically
          get you — without the sugarcoating.
        </motion.p>

        {/* Service area tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          {CITIES.map((city) => (
            <span
              key={city}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "var(--color-white)",
                color: "var(--color-text)",
                border: "1px solid rgba(196,185,172,0.5)",
                fontFamily: "var(--font-roboto)",
              }}
            >
              {city}
            </span>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
