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
  { label: "Median Sale Price",      value: "~$520,000", note: "3 months ending May 2026; up ~2% YoY" },
  { label: "Avg. Days on Market",    value: "~24 days",  note: "" },
  { label: "Median Price / Sq. Ft.", value: "~$314",     note: "" },
];

const SNAPSHOT_FOOTNOTE = (
  <>
    Note: Hayden&apos;s average sale price runs well above the median due to lake and
    gated-community luxury sales — the median is the better gauge of a typical home. Figures are
    updated periodically — for an address-specific read,{" "}
    <a
      href="/contact"
      className="underline hover:opacity-80 transition-opacity"
      style={{ color: "var(--color-primary)" }}
    >
      get in touch
    </a>
    .
  </>
);

export const metadata: Metadata = generatePageMetadata({
  title: "Buying or Selling a Home in Hayden, ID | Chelsey Fanning, Realtor",
  description:
    "A local realtor's guide to Hayden, Idaho — Hayden Lake waterfront, gated golf communities, larger-lot neighborhoods, schools, and current market conditions.",
  path: "/areas/hayden",
  keywords: [
    "Hayden Idaho real estate",
    "Hayden Idaho homes for sale",
    "Hayden ID realtor",
    "buying a home Hayden Idaho",
    "Hayden Lake real estate",
    "Hayden Idaho neighborhoods",
  ],
});

export default function HaydenPage() {
  return (
    <>
      <WebPageSchema
        type="WebPage"
        path="/areas/hayden"
        name="Buying or Selling a Home in Hayden, Idaho | Chelsey Fanning"
        description="A local realtor's guide to Hayden, Idaho — Hayden Lake waterfront, gated golf communities, larger-lot neighborhoods, schools, and current market conditions."
        breadcrumbId={`${NAP.url}/areas/hayden#breadcrumb`}
      />
      <BreadcrumbSchema
        id={`${NAP.url}/areas/hayden#breadcrumb`}
        items={[
          { name: "Home",         url: NAP.url },
          { name: "Service Areas" },
          { name: "Hayden" },
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
            Service Area · Hayden, Idaho
          </p>
          <h1
            className="text-h1 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Buying or Selling a Home in Hayden, Idaho
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Hayden is North Idaho&apos;s quieter, higher-end suburb — anchored by Hayden Lake, two
            golf courses, and a set of established larger-lot neighborhoods just a few minutes north
            of Coeur d&apos;Alene. It appeals to buyers who want space, a country-club feel, and
            lake or mountain views without the downtown bustle. Here&apos;s what the Hayden market
            actually looks like.
          </p>
        </div>
      </section>

      {/* Market snapshot */}
      <SectionWrapper background="surface">
        <MarketSnapshot city="Hayden" stats={SNAPSHOT} footnote={SNAPSHOT_FOOTNOTE} />
        <div
          className="mt-8 max-w-3xl text-base leading-relaxed"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
        >
          <p>
            That median-versus-average gap is the most important thing to understand about Hayden.
            A single &ldquo;average price&rdquo; headline can be pulled way up by a handful of
            Hayden Lake sales, so read the median for a typical home and treat the high end as its
            own separate market.
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
              Much of Hayden&apos;s identity is in its gated and golf communities.{" "}
              <strong>Forest Hills</strong>, near Honeysuckle Beach and the Avondale golf courses,
              runs on half- to one-acre lots at the luxury end. <strong>The Falls</strong>, on the
              north shore of Hayden Lake, offers homes with a private community dock.{" "}
              <strong>Bear Creek Estates</strong> and <strong>Rimrock Meadows</strong> are gated,
              larger-lot enclaves, and <strong>Avondale on Hayden</strong> is an established golf
              community with bigger lots and mature streets. The master-planned{" "}
              <strong>Hayden Canyon</strong> is adding substantial new inventory over a phased
              buildout.
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
              New construction spans the range — from lower-maintenance HOA neighborhoods like{" "}
              <strong>Honeysuckle Glade</strong> (homes in the high $500Ks) to custom luxury builds
              such as <strong>Trail Ridge</strong> ($800K–$900K and up), plus larger proposed
              developments working through approvals. If you&apos;re weighing a new build here, the
              details that matter most — builder reputation, HOA terms, timelines — aren&apos;t on
              the listing sheet, and that&apos;s worth a conversation.
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
            Hayden is served by <strong>Coeur d&apos;Alene School District 271</strong>, which
            rates well overall for academics and teachers. Boundaries can affect both fit and value,
            so let me know if schools are a priority.
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
            Who&apos;s Buying in Hayden
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Hayden tends to draw <strong>premium and move-up buyers</strong> — people wanting a
            quieter, prestige feel with golf and lake access, often at a higher average price than
            the surrounding towns. It&apos;s the choice for buyers who&apos;d take Hayden Lake and
            a larger lot over Coeur d&apos;Alene&apos;s downtown energy or Post Falls&apos; commuter
            value.
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
            Honeysuckle Beach on Hayden Lake, the English Point trail system, and the Hayden Lake
            Country Club and Avondale golf courses define daily life here, with the Coeur
            d&apos;Alene Airport just nearby. Hayden sits a few miles north of I-90 on US-95;
            Spokane is roughly 38 miles west.
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
