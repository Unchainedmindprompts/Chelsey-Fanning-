import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "base" | "surface" | "primary" | "charcoal";
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  background = "base",
  id,
}: SectionWrapperProps) {
  const bgMap: Record<string, string> = {
    base:     "var(--color-base)",
    surface:  "var(--color-surface)",
    primary:  "var(--color-primary)",
    charcoal: "var(--color-charcoal)",
  };

  return (
    <section
      id={id}
      className={`section-padding ${className}`}
      style={{ backgroundColor: bgMap[background] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
