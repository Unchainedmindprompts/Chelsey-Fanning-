"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "5.0★", label: "Average Google Rating", detail: "27 Google reviews" },
  { value: "7+",   label: "Years Serving North Idaho", detail: "Post Falls, CDA & beyond" },
  { value: "100+", label: "Transactions Closed", detail: "First-timers to luxury" },
];

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ "--tw-divide-opacity": "1" } as React.CSSProperties}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center py-8 md:py-4 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p
                className="text-h2 font-semibold mb-1"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-cormorant)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </p>
              <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
