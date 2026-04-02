"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "var(--color-base)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">

          {/* Photo — right on desktop, top on mobile */}
          <motion.div
            className="order-first lg:order-last relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl">
              {/* TODO: Replace with Chelsea's actual hero photo — blue dress, angled against concrete wall */}
              <div
                className="w-full h-full flex items-end justify-center"
                style={{
                  background: "linear-gradient(to bottom right, var(--color-concrete), var(--color-surface))",
                }}
              >
                <Image
                  src="/chelsea-hero.jpg"
                  alt="Chelsea Fanning, REALTOR® in Post Falls, Idaho"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top"
                  // TODO: swap placeholder when real photo is provided
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Placeholder fallback visible if no image */}
                <p className="pb-8 text-center text-sm z-10 relative" style={{ color: "var(--color-muted)" }}>
                  [Hero photo — TODO]
                </p>
              </div>

              {/* Accent badge */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 shadow-lg"
                style={{ backgroundColor: "rgba(250,247,242,0.92)", backdropFilter: "blur(12px)" }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                >
                  Chelsea Fanning
                </p>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  REALTOR® · eXp Realty · Post Falls, ID
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="order-last lg:order-first"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
            >
              Post Falls · Coeur d&apos;Alene · North Idaho
            </p>
            <h1 className="text-display mb-6" style={{ color: "var(--color-charcoal)" }}>
              North Idaho Real Estate,{" "}
              <em style={{ color: "var(--color-primary)", fontStyle: "italic" }}>Done Right.</em>
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
            >
              From your first home to your forever home — Chelsea Fanning brings expertise,
              honesty, and genuine care to every transaction in Post Falls, Coeur d&apos;Alene,
              and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Let&apos;s Talk
              </Button>
              <Button href="/testimonials" variant="outline" size="lg">
                See My Work
              </Button>
            </div>

            {/* Trust signals inline */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t" style={{ borderColor: "rgba(196,185,172,0.4)" }}>
              {[
                { num: "5★", label: "Google Rating" },
                { num: "7+", label: "Years in North Idaho" },
                { num: "100+", label: "Families Helped" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-cormorant)", color: "var(--color-primary)" }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-xs uppercase tracking-wide" style={{ color: "var(--color-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative concrete-tone gradient bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-surface))",
        }}
      />
    </section>
  );
}
