import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--color-primary)",
      color: "var(--color-white)",
      border: "2px solid transparent",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--color-charcoal)",
      border: "2px solid transparent",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--color-primary)",
      border: "2px solid var(--color-primary)",
    },
  };

  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none ${sizeStyles[size]} ${className}`;

  const style = variantStyles[variant];

  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <Link href={href} className={baseClass} style={style} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
