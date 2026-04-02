import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export default function Card({ children, className = "", padding = "md" }: CardProps) {
  const paddingMap = {
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-12",
  };

  return (
    <div
      className={`rounded-2xl shadow-sm ${paddingMap[padding]} ${className}`}
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid rgba(196,185,172,0.3)",
      }}
    >
      {children}
    </div>
  );
}
