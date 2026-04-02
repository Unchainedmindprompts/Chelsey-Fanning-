import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { NAP } from "@/lib/schema";
import ContactForm from "./ContactForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Chelsey Fanning",
  description:
    "Get in touch with Chelsey Fanning, REALTOR® — Post Falls, Idaho. Call, email, or send a message. Whether you're buying or selling, the conversation starts here.",
  path: "/contact",
  keywords: ["contact Chelsey Fanning", "real estate agent Post Falls Idaho", "North Idaho realtor contact"],
});

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />

      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Info */}
            <div className="lg:pt-4">
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
              >
                Let&apos;s Connect
              </p>
              <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
                Ready to Talk?
              </h1>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
              >
                No pressure, no scripts. Just an honest conversation about your goals. I respond
                to all messages the same day — usually within a few hours.
              </p>

              {/* NAP */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                      Phone
                    </p>
                    <a
                      href={`tel:${NAP.phone.replace(/\D/g, "")}`}
                      className="text-base hover:underline"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {NAP.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                      Email
                    </p>
                    <a
                      href={`mailto:${NAP.email}`}
                      className="text-base hover:underline"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {NAP.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}>
                      Location
                    </p>
                    <p className="text-base" style={{ color: "var(--color-text)" }}>
                      {NAP.address.streetAddress}
                    </p>
                    <p className="text-base" style={{ color: "var(--color-text)" }}>
                      {NAP.address.addressLocality}, {NAP.address.addressRegion} {NAP.address.postalCode}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                      Serving all of North Idaho
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map — lazy loaded */}
              <div className="rounded-2xl overflow-hidden" style={{ height: 280 }}>
                {/* TODO: Replace with real Google Maps embed for Post Falls area */}
                <iframe
                  title="Post Falls, Idaho map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87053.25!2d-116.9443!3d47.7182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549ead3b14cebac3%3A0x1c7cf5cbabb55b7c!2sPost+Falls%2C+ID!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
