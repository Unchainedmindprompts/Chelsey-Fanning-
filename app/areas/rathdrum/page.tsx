import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactCTA from "@/components/sections/ContactCTA";
import WebPageSchema from "@/components/schema/WebPageSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import MarketSnapshot, { type SnapshotStat } from "@/components/areas/MarketSnapshot";
import { NAP } from "@/lib/schema";

const SNAPSHOT: SnapshotStat[] = [
  { label: "Median Sale Price",      value: "~$530,000", note: "3 months ending May 2026; trending up YoY" },
  { label: "Avg. Days on Market",    value: "~30 days",  note: "" },
  { label: "Median Price / Sq. Ft.", value: "~$314",     note: "" },
];

export const metadata: Metadata = generatePageMetadata({
  title: "Buying or Selling a Home in Rathdrum, ID | Chelsey Fanning, Realtor",
  description:
    "A local realtor's guide to Rathdrum, Idaho — new-construction subdivisions, acreage, schools, commute, and current market conditions on the Rathdrum Prairie.",
  path: "/areas/rathdrum",
  keywords: [
    "Rathdrum Idaho real estate",
    "Rathdrum Idaho homes for sale",
    "Rathdrum ID realtor",
    "buying a home Rathdrum Idaho",
    "Rathdrum Prairie real estate",
    "Rathdrum Idaho acreage",
  ],
});

export default function RathdrumPage() {
  return (
    <>
      <WebPageSchema
        type="WebPage"
        path="/areas/rathdrum"
        name="Buying or Selling a Home in Rathdrum, Idaho | Chelsey Fanning"
        description="A local realtor's guide to Rathdrum, Idaho — new-construction subdivisions, acreage, schools, commute, and current market conditions on the Rathdrum Prairie."
        breadcrumbId={`${NAP.url}/areas/rathdrum#breadcrumb`}
      />
      <BreadcrumbSchema
        id={`${NAP.url}/areas/rathdrum#breadcrumb`}
        items={[
          { name: "Home",         url: NAP.url },
          { name: "Service Areas" },
          { name: "Rathdrum" },
        ]}
      />

      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
          >
            Service Area · Rathdrum, Idaho
          </p>
          <h1
            className="text-h1 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Buying or Selling a Home in Rathdrum, Idaho
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Rathdrum is the &ldquo;more space for your money&rdquo; corner of Kootenai County — a
            quieter prairie town where you&apos;ll find larger lots, acreage, and a lot of new
            construction at prices generally below Coeur d&apos;Alene and Hayden. It&apos;s a
            popular landing spot for families, retirees, and remote workers who want room without
            giving up a reasonable commute. Here&apos;s the honest picture.
          </p>
        </div>
      </section>

      {/* Market snapshot */}
      <SectionWrapper background="surface">
        <MarketSnapshot city="Rathdrum" stats={SNAPSHOT} />
        <div
          className="mt-8 max-w-3xl text-base leading-relaxed"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
        >
          <p>
            Because Rathdrum is smaller, its month-to-month numbers bounce around more than a
            bigger market&apos;s would. That&apos;s not instability in home values — it&apos;s just
            small sample size. The trailing three-month figures are the more reliable read, and
            they&apos;ve been trending up.
          </p>
        </div>
      </SectionWrapper>

      {/* Neighborhoods and new construction */}
      <SectionWrapper background="base">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Neighborhoods and New Construction
          </h2>
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            <p>
              Rathdrum&apos;s growth shows up in its new-construction communities.{" "}
              <strong>Trossicks</strong> and <strong>Hollice Woods</strong> start in the $450Ks,
              while <strong>Atlas @ Trossicks</strong> reaches into the higher tiers with larger
              floor plans. <strong>Brookshire</strong> and <strong>Brookshire South</strong> lean
              toward starter homes and small families, with a new city park planned. Larger
              developments — like the 491-home Aristad project and the Solara subdivision — are in
              the pipeline, though the city has also pushed back on some growth, denying an
              annexation request in 2025. That growth-management tension is worth understanding if
              you&apos;re buying into a newer area.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Schools */}
      <SectionWrapper background="surface">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Schools
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Rathdrum is served by <strong>Lakeland Joint School District 272</strong>, which rates
            well and has been recognized among Idaho&apos;s best for its teachers. In-town schools
            include Betty Kiefer and John Brown Elementary, Lakeland Middle, and Lakeland High.
            Tell me early if schools shape your search.
          </p>
        </div>
      </SectionWrapper>

      {/* Who's buying */}
      <SectionWrapper background="base">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Who&apos;s Buying in Rathdrum
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Rathdrum buyers are usually after <strong>space and value</strong> — families,
            retirees, and remote workers, plus relocation buyers coming from higher-cost states who
            want privacy, acreage, or a newer home. Compared to Post Falls, you&apos;re trading a
            slightly longer commute for bigger lots and lower density; compared to Coeur
            d&apos;Alene and Hayden, you&apos;re generally paying less for more room.
          </p>
        </div>
      </SectionWrapper>

      {/* Living here */}
      <SectionWrapper background="surface">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Living Here
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Rathdrum sits on the Rathdrum Prairie beneath Rathdrum Mountain, a local hiking and
            climbing spot. Spokane is about 32 miles west, and Highway 41 — a main route toward
            Post Falls — is being widened from two lanes to four, which will ease the commute as
            the area grows.
          </p>
        </div>
      </SectionWrapper>

      {/* Related reading */}
      <SectionWrapper background="base">
        <div className="max-w-3xl">
          <h2
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-roboto)" }}
          >
            Related Reading
          </h2>
          <ul className="space-y-3">
            {[
              { label: "How to Find the Best Realtor in North Idaho", href: "/blog/how-to-find-best-realtor-post-falls-coeur-dalene-north-idaho" },
              { label: "For Buyers — What to Expect Working with Chelsey", href: "/buyers" },
              { label: "For Sellers — Listing Your Home in North Idaho",  href: "/sellers" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:underline transition-all"
                  style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
