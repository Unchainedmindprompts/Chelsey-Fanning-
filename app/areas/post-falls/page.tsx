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
  { label: "Median Sale Price",      value: "~$525,000", note: "3 months ending May 2026; up ~4% YoY" },
  { label: "Avg. Days on Market",    value: "14 days",   note: "Among the fastest in Kootenai County" },
  { label: "Months of Supply",       value: "1.85 mo.",  note: "Single-family homes, early 2026" },
  { label: "Median Price / Sq. Ft.", value: "~$283",     note: "" },
];

export const metadata: Metadata = generatePageMetadata({
  title: "Buying or Selling a Home in Post Falls, ID | Chelsey Fanning, Realtor",
  description:
    "A local realtor's guide to the Post Falls market — neighborhoods, new construction, schools, and what it's really like to buy or sell here. Honest advice, no pressure.",
  path: "/areas/post-falls",
  keywords: [
    "Post Falls Idaho real estate",
    "Post Falls homes for sale",
    "Post Falls realtor",
    "buying a home Post Falls ID",
    "selling a home Post Falls Idaho",
    "Post Falls Idaho neighborhoods",
  ],
});

export default function PostFallsPage() {
  return (
    <>
      <WebPageSchema
        type="WebPage"
        path="/areas/post-falls"
        name="Buying or Selling a Home in Post Falls, Idaho | Chelsey Fanning"
        description="A local realtor's guide to the Post Falls market — neighborhoods, new construction, schools, and what it's really like to buy or sell here."
        breadcrumbId={`${NAP.url}/areas/post-falls#breadcrumb`}
      />
      <BreadcrumbSchema
        id={`${NAP.url}/areas/post-falls#breadcrumb`}
        items={[
          { name: "Home",         url: NAP.url },
          { name: "Service Areas" },
          { name: "Post Falls" },
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
            Service Area · Post Falls, Idaho
          </p>
          <h1
            className="text-h1 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Buying or Selling a Home in Post Falls, Idaho
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Post Falls sits right on the Spokane River, about twenty minutes east of Spokane on
            I-90 — which makes it the closest North Idaho town to the city and, for a lot of
            buyers, the most practical place to land. It&apos;s also one of the fastest-growing
            communities in the region, and the market moves accordingly. If you&apos;re weighing
            Post Falls against Coeur d&apos;Alene, Hayden, or Rathdrum, here&apos;s an honest
            look at what to expect.
          </p>
        </div>
      </section>

      {/* Market snapshot */}
      <SectionWrapper background="surface">
        <MarketSnapshot city="Post Falls" stats={SNAPSHOT} />
        <div
          className="mt-8 max-w-3xl text-base leading-relaxed"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
        >
          <p>
            What those numbers mean in practice: well-priced homes don&apos;t sit. If you&apos;re
            buying, you need financing lined up and a plan before you tour, because a two-week
            average means the good listings are gone quickly. If you&apos;re selling, the tight
            inventory works in your favor — but pricing it right from day one still matters more
            than anything.
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
            Neighborhoods and Where the Value Is
          </h2>
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            <p>
              Post Falls isn&apos;t one market — it&apos;s several. <strong>Riverbend</strong> is
              among the more affordable areas and a common landing spot for first-time and move-up
              buyers. <strong>Tullamore</strong>, a large master-planned community of around 900
              homes with its own park, tends to draw families wanting a newer subdivision feel.
              Along the river, <strong>South Shore</strong> and the areas near the city center run
              to the higher end, including the limited stretch of Spokane River waterfront. Newer
              communities like <strong>Crown Reserve</strong> (a 148-lot first phase approved in
              2025) and <strong>The Parkllyn</strong>, a 55+ community, keep adding inventory
              across price points.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Development pipeline */}
      <SectionWrapper background="surface">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            A City That&apos;s Still Being Built
          </h2>
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            <p>
              Post Falls has one of the largest development pipelines in the county. The headline
              project is <strong>Millworx</strong>, a 50-acre mixed-use redevelopment of the former
              Idaho Veneer mill site on the river — roughly 700 homes plus commercial space and a
              new hotel, being built out in phases. On the attainable end, <strong>The Arc</strong>{" "}
              opened in late 2025 with homes that started around $375,000. Major road work —
              including the ID-41/I-90 interchange and the planned SH-53/Pleasant View interchange
              — plus a new regional medical campus on the SH-41 corridor are all reshaping how the
              west end of the county grows.
            </p>
            <p>
              For a buyer, that pipeline is a double-edged thing: more new-construction choice, but
              also more moving parts to weigh (builder track record, HOA terms, timelines) than a
              listing sheet will ever tell you. That&apos;s the kind of thing worth a conversation.
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
            Post Falls is served by <strong>Post Falls School District 273</strong> — about a dozen
            schools and roughly 6,000 students. Post Falls High School consistently rates well among
            Idaho high schools. School boundaries can shift value block to block, so if schools are
            a priority, tell me early and we&apos;ll build your search around them.
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
            Who&apos;s Buying in Post Falls
          </h2>
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            <p>
              More than anywhere else in the county, Post Falls draws{" "}
              <strong>value-minded and commuter buyers</strong> — people who want the most home for
              their budget and the shortest drive to Spokane. Compared to Coeur d&apos;Alene,
              you&apos;re generally paying less for a comparable home; compared to Rathdrum,
              you&apos;re trading a little lot size for a shorter commute and a faster market.
              It&apos;s a genuinely different fit depending on what you&apos;re optimizing for, and
              figuring that out is half of what I do up front.
            </p>
          </div>
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
            Beyond the market, Post Falls is a genuinely nice place to be — Falls Park with its
            40-foot falls right downtown, Q&apos;emiln Park&apos;s beach and climbing routes across
            the river, and easy access to everything the Spokane–Coeur d&apos;Alene corridor
            offers. It&apos;s a working town with real amenities, not just a bedroom community.
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
