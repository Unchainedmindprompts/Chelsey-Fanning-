"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Buyers",       href: "/buyers" },
  { label: "Sellers",      href: "/sellers" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250,247,242,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(196,185,172,0.3)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Typographic logo */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <span
              className="text-lg font-medium tracking-[0.2em] uppercase"
              style={{
                fontFamily: "var(--font-roboto)",
                color: scrolled ? "var(--color-charcoal)" : "#ffffff",
              }}
            >
              Chelsey Fanning
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ fontFamily: "var(--font-roboto)", color: "var(--color-text)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
            >
              Let&apos;s Talk
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className="block h-0.5 w-6 transition-all duration-300"
              style={{
                backgroundColor: scrolled || menuOpen ? "var(--color-charcoal)" : "#ffffff",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all duration-300"
              style={{
                backgroundColor: scrolled || menuOpen ? "var(--color-charcoal)" : "#ffffff",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-6 transition-all duration-300"
              style={{
                backgroundColor: scrolled || menuOpen ? "var(--color-charcoal)" : "#ffffff",
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-300 lg:hidden"
        style={{
          backgroundColor: "var(--color-base)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-h3 font-medium transition-opacity duration-200 hover:opacity-60"
              style={{ fontFamily: "var(--font-roboto)", color: "var(--color-charcoal)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 rounded-full text-base font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </>
  );
}
