import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "var(--color-base)" }}
    >
      <div className="max-w-lg text-center">
        <p
          className="text-8xl font-bold mb-6"
          style={{ fontFamily: "var(--font-cormorant)", color: "var(--color-concrete)" }}
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="text-h2 mb-4" style={{ color: "var(--color-charcoal)" }}>
          This page doesn&apos;t exist — yet.
        </h1>
        <p
          className="text-base leading-relaxed mb-10"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
        >
          Looks like you took a wrong turn in North Idaho. Don&apos;t worry — the good
          stuff is easy to find from here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="md">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="md">
            Contact Chelsea
          </Button>
        </div>
        <div className="mt-12">
          <p className="text-sm mb-4" style={{ color: "var(--color-muted)" }}>
            Or jump to:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Buyers", href: "/buyers" },
              { label: "Sellers", href: "/sellers" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
