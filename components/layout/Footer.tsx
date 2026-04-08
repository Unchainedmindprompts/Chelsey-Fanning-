import Link from "next/link";
import { NAP } from "@/lib/schema";

const QUICK_LINKS = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Buyers",       href: "/buyers" },
  { label: "Sellers",      href: "/sellers" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

const FOOTER_BG      = "#0F1123";
const FOOTER_HEADING = "#FFFFFF";
const FOOTER_BODY    = "#94A3C0";
const FOOTER_ACCENT  = "#7B8FBF";
const FOOTER_BORDER  = "rgba(255,255,255,0.1)";

// Fair Housing SVG (required by law)
function FairHousingLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 60"
      width="120"
      height="60"
      aria-label="Equal Housing Opportunity"
      role="img"
      className="opacity-60"
    >
      <rect width="120" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="60,8 20,30 28,30 28,52 92,52 92,30 100,30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="50" y="36" width="20" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="60" y="58" textAnchor="middle" fontSize="5" fontFamily="sans-serif" fill="currentColor" dy="-2">EQUAL HOUSING OPPORTUNITY</text>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: FOOTER_BG, color: FOOTER_BODY }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <p
              className="text-2xl font-semibold mb-1"
              style={{ fontFamily: "var(--font-roboto)", color: FOOTER_HEADING }}
            >
              Chelsey Fanning
            </p>
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: FOOTER_BODY }}
            >
              REALTOR® · eXp Realty · Post Falls, Idaho
            </p>
            <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: FOOTER_BODY }}>
              <p>{NAP.address.streetAddress}</p>
              <p>{NAP.address.addressLocality}, {NAP.address.addressRegion} {NAP.address.postalCode}</p>
              <p>
                <a
                  href={`tel:${NAP.phone.replace(/\D/g, "")}`}
                  className="hover:underline transition-all"
                  style={{ color: FOOTER_ACCENT }}
                >
                  {NAP.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${NAP.email}`}
                  className="hover:underline transition-all"
                  style={{ color: FOOTER_ACCENT }}
                >
                  {NAP.email}
                </a>
              </p>
            </address>

            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/life_with_chels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: FOOTER_BORDER, color: FOOTER_BODY }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/cfanningrealtor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: FOOTER_BORDER, color: FOOTER_BODY }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-roboto)", color: FOOTER_HEADING }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: FOOTER_BODY }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-roboto)", color: FOOTER_HEADING }}
            >
              Compliance
            </h3>
            <div style={{ color: FOOTER_BODY }}>
              <FairHousingLogo />
            </div>
            <p className="text-xs mt-4 leading-relaxed" style={{ color: FOOTER_BODY }}>
              Chelsey Fanning is a licensed REALTOR® with eXp Realty in the state of Idaho. All information deemed reliable but not guaranteed. This is not a solicitation if you are already under contract.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: FOOTER_BORDER, color: FOOTER_BODY }}
        >
          <p>© 2026 Chelsey Fanning · REALTOR® · eXp Realty · Post Falls, Idaho</p>
          <p>
            Site by{" "}
            <a
              href="https://kodecite.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: FOOTER_ACCENT }}
            >
              Kodecite.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
