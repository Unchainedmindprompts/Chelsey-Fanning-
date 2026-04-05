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
              <Image
                src="/chelsey-hero-periwinkle.jpeg"
                alt="Chelsey Fanning, REALTOR® in Post Falls, Idaho"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-top"
              />

              {/* Accent badge */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 shadow-lg"
                style={{ backgroundColor: "rgba(250,247,242,0.92)", backdropFilter: "blur(12px)" }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-roboto)" }}
                >
                  Chelsey Fanning
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
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
            >
              Post Falls · Coeur d&apos;Alene · North Idaho
            </p>
            <h1 className="text-display mb-6" style={{ color: "var(--color-charcoal)" }}>
              North Idaho Real Estate,{" "}
              <em style={{ color: "var(--color-primary)", fontStyle: "italic" }}>Done Right.</em>
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-lg"
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
              <Button href="/testimonials" variant="outline" size="lg">
                See My Work
              </Button>
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
