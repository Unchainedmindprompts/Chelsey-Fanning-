"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex items-center pt-24 lg:pt-20"
      style={{ backgroundColor: "var(--color-base)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-16 items-center py-8 lg:py-14">

          {/* Photo — right on desktop, after the introduction on mobile */}
          <motion.div
            className="order-last relative"
            initial={{ scale: 0.97 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-sm mx-auto lg:max-w-md rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/chelsey-hero-periwinkle.jpeg"
                alt="Chelsey Fanning, REALTOR® in Post Falls, Idaho"
                width={523}
                height={800}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="block w-full h-auto"
              />
            </div>

            {/* Name badge below image */}
            <div className="mt-4 text-center">
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-roboto)" }}
              >
                Chelsey Fanning
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                REALTOR® · eXp Realty · Post Falls, ID
              </p>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="order-first"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
            >
              Post Falls · Coeur d&apos;Alene · North Idaho
            </p>
            <h1 className="text-display mb-5" style={{ color: "var(--color-charcoal)" }}>
              North Idaho Real Estate,{" "}
              <em style={{ color: "var(--color-primary)", fontStyle: "italic" }}>Done Right.</em>
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed mb-7 max-w-lg"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
            >
              From your first home to your forever home — Chelsey Fanning brings expertise,
              honesty, and genuine care to every transaction in Post Falls, Coeur d&apos;Alene,
              and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Let&apos;s Talk
              </Button>
              <Button href="/experience" variant="outline" size="lg">
                See My Work
              </Button>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Decorative concrete-tone gradient bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-surface))",
        }}
      />
    </section>
  );
}
