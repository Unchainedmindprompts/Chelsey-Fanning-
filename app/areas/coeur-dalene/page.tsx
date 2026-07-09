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
  { label: "Median Sale Price",      value: "~$575,000", note: "May 2026; essentially flat YoY" },
  { label: "Avg. Days on Market",    value: "~30 days",  note: "" },
  { label: "Median Price / Sq. Ft.", value: "~$323",     note: "Up ~4% YoY" },
];

export const metadata: Metadata = generatePageMetadata({
  title: "Buying or Selling a Home in Coeur d'Alene, ID | Chelsey Fanning, Realtor",
  description:
    "A local realtor's honest guide to the Coeur d'Alene market — lakefront and downtown neighborhoods, schools, new construction, and what it takes to buy or sell here.",
  path: "/areas/coeur-dalene",
  keywords: [
    "Coeur d'Alene Idaho real estate",
    "Coeur d'Alene homes for sale",
    "Coeur d'Alene realtor",
    "buying a home Coeur d'Alene ID",
    "CDA Idaho real estate agent",
    "Coeur d'Alene Idaho neighborhoods",
  ],
});

export default function CoeurDalenePage() {
  return (
    <>
      <WebPageSchema
        type="WebPage"
        path="/areas/coeur-dalene"
        name="Buying or Selling a Home in Coeur d'Alene, Idaho | Chelsey Fanning"
        description="A local realtor's honest guide to the Coeur d'Alene market — lakefront and downtown neighborhoods, schools, new construction, and what it takes to buy or sell here."
        breadcrumbId={`${NAP.url}/areas/coeur-dalene#breadcrumb`}
      />
      <BreadcrumbSchema
        id={`${NAP.url}/areas/coeur-dalene#breadcrumb`}
        items={[
          { name: "Home",         url: NAP.url },
          { name: "Service Areas" },
          { name: "Coeur d'Alene" },
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
            Service Area · Coeur d&apos;Alene, Idaho
          </p>
          <h1
            className="text-h1 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Buying or Selling a Home in Coeur d&apos;Alene, Idaho
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Coeur d&apos;Alene is the postcard of North Idaho — a walkable downtown sitting right
            on the north shore of a 25-mile lake, with a resort, restaurants, and a college all
            within a few blocks of the water. That draw brings buyers from across the country, and
            it makes CDA the region&apos;s premium market. If you&apos;re deciding between
            Coeur d&apos;Alene and the more value-driven towns nearby, here&apos;s a straight look
            at what you&apos;re buying into.
          </p>
        </div>
      </section>

      {/* Market snapshot */}
      <SectionWrapper background="surface">
        <MarketSnapshot city="Coeur d'Alene" stats={SNAPSHOT} />
        <div
          className="mt-8 max-w-3xl text-base leading-relaxed"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
        >
          <p>
            The wide price band is the thing to understand here. CDA runs from in-town homes to
            lakefront and golf estates well into seven figures, and the county has seen a real rise
            in $2M-plus sales. That spread means &ldquo;the Coeur d&apos;Alene market&rdquo; behaves
            very differently depending on where in it you&apos;re shopping — which is exactly where
            local guidance earns its keep.
          </p>
        </div>
      </SectionWrapper>

      {/* Neighborhoods */}
      <SectionWrapper background="base">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Neighborhoods
          </h2>
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            <p>
              The <strong>Garden District</strong>, just south of downtown, is full of early-1900s
              Craftsman bungalows and cottages, walkable to McEuen Park and Sherman Avenue.{" "}
              <strong>Sanders Beach</strong> is the lakeside pocket — a mix of classic cottages and
              newer lake-view builds, and priced accordingly. <strong>Fort Grounds</strong>, built
              on the historic Fort Sherman site, sits near North Idaho College and the Centennial
              Trail. <strong>Downtown</strong> is the highest-priced core, while newer mixed-use
              districts like <strong>Riverstone</strong> offer a more contemporary,
              amenity-dense option. At the top end, the southeast hillside holds the luxury tier.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Growth and new construction */}
      <SectionWrapper background="surface">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Growth and New Construction
          </h2>
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            <p>
              The marquee project is the <strong>Coeur d&apos;Alene National Reserve</strong>, a
              roughly $165M luxury residential expansion along the Tom Weiskopf golf course —
              fairway lodges and custom homesites, with early phases delivering through 2026. Around
              Riverstone, smaller mixed-use construction continues. Inventory at the entry and mid
              tiers is tighter than the luxury end, so timing and preparation matter more the lower
              your price band.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Schools */}
      <SectionWrapper background="base">
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
            Coeur d&apos;Alene is served by <strong>Coeur d&apos;Alene School District 271</strong>{" "}
            (around 9,600 students), which rates well overall. Standouts include Sorensen Magnet
            School and Coeur d&apos;Alene Charter Academy, both top-rated, along with strong marks
            for Canfield Middle. If schools drive your search, tell me early and we&apos;ll map
            neighborhoods to them.
          </p>
        </div>
      </SectionWrapper>

      {/* Who's buying */}
      <SectionWrapper background="surface">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Who&apos;s Buying in Coeur d&apos;Alene
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            CDA buyers are usually after the lifestyle — walkability, dining, and lake access or
            views — and they accept a price premium and summer tourist traffic to get it. Compared
            to Post Falls (more value, shorter Spokane commute) or Hayden (quieter, golf-and-lake),
            Coeur d&apos;Alene is the one you choose when the downtown-on-the-lake experience is
            the point. Out-of-state relocation money lands here more than anywhere else in the
            county.
          </p>
        </div>
      </SectionWrapper>

      {/* Living here */}
      <SectionWrapper background="base">
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
            The Coeur d&apos;Alene Resort&apos;s floating boardwalk, Tubbs Hill&apos;s lakefront
            trails right beside downtown, and North Idaho College on the old Fort Sherman grounds
            give the city a genuine walk-everywhere character that&apos;s rare in the region.
            Spokane is about 30 miles west on I-90 — roughly a half-hour drive outside of peak.
          </p>
        </div>
      </SectionWrapper>

      {/* Related reading */}
      <SectionWrapper background="surface">
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
