"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const CLIENTS = [
  {
    icon: "🏠",
    title: "First-Time Buyers",
    body: "Buying your first home is one of the biggest decisions you'll ever make — and it should feel exciting, not overwhelming. I'll walk you through every step, answer every question, and make sure you never feel lost in the process. First-timers are genuinely my favorite clients.",
  },
  {
    icon: "🌿",
    title: "Move-Up & Growing Families",
    body: "You've outgrown your current space and you're ready for what's next. I understand the timing puzzle of buying and selling simultaneously, and I'll help you navigate it without the stress. More room, better fit, still North Idaho — let's make it happen.",
  },
  {
    icon: "✦",
    title: "Luxury & High-End Homes",
    body: "High-end transactions require discretion, precision, and a deep understanding of what premium buyers and sellers expect. I bring the same care and attention to a $1.5M property that I bring to every transaction — and my network in the North Idaho luxury market reflects that.",
  },
];

export default function WhoIWorkWith() {
  return (
    <SectionWrapper background="base" id="who-i-work-with">
      <div className="text-center mb-14">
        <motion.h2
          className="text-h2 mb-4"
          style={{ color: "var(--color-charcoal)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Who I Work With
        </motion.h2>
        <motion.p
          className="text-base max-w-xl mx-auto"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Every client matters. Every transaction gets the same level of expertise and genuine care —
          whether it&apos;s your first home or your fifth.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CLIENTS.map((client, i) => (
          <motion.div
            key={client.title}
            className="rounded-2xl p-8 flex flex-col"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid rgba(196,185,172,0.3)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="text-3xl mb-5" aria-hidden="true">{client.icon}</span>
            <h3
              className="text-h4 mb-4"
              style={{ color: "var(--color-charcoal)" }}
            >
              {client.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
            >
              {client.body}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
