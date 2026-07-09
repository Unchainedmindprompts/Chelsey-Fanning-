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
  { label: "Typical Home Value",  value: "mid-$500,000s", note: "Wide range: mid-$400Ks–mid-$700Ks based on land and frontage" },
  { label: "Avg. Days on Market", value: "40+",           note: "Slower pace than Post Falls or CDA" },
];

const SNAPSHOT_FOOTNOTE = (
  <>
    Spirit Lake is a small market, so ranges give a truer picture than a single median from month
    to month. Figures are updated periodically — for an address-specific read,{" "}
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
  title: "Buying or Selling a Home in Spirit Lake, ID | Chelsey Fanning, Realtor",
  description:
    "A local realtor's guide to Spirit Lake, Idaho — a historic small lake town with waterfront and rural acreage at North Idaho's more approachable price points.",
  path: "/areas/spirit-lake",
  keywords: [
    "Spirit Lake Idaho real estate",
    "Spirit Lake Idaho homes for sale",
    "Spirit Lake ID realtor",
    "buying a home Spirit Lake Idaho",
    "Spirit Lake Idaho waterfront",
    "Spirit Lake acreage Idaho",
  ],
});

export default function SpiritLakePage() {
  return (
    <>
      <WebPageSchema
        type="WebPage"
        path="/areas/spirit-lake"
        name="Buying or Selling a Home in Spirit Lake, Idaho | Chelsey Fanning"
        description="A local realtor's guide to Spirit Lake, Idaho — a historic small lake town with waterfront and rural acreage at North Idaho's more approachable price points."
        breadcrumbId={`${NAP.url}/areas/spirit-lake#breadcrumb`}
      />
      <BreadcrumbSchema
        id={`${NAP.url}/areas/spirit-lake#breadcrumb`}
        items={[
          { name: "Home",         url: NAP.url },
          { name: "Service Areas" },
          { name: "Spirit Lake" },
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
            Service Area · Spirit Lake, Idaho
          </p>
          <h1
            className="text-h1 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Buying or Selling a Home in Spirit Lake, Idaho
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Spirit Lake is the small, historic lake town at the north end of the Highway 41
            corridor — a 1908 timber community turned recreation getaway, with real lake access and
            rural acreage at generally more approachable prices than the busier markets to the
            south. If you want a quieter, small-town pace with room to spread out, this is the
            corner of the county to look at.
          </p>
        </div>
      </section>

      {/* Market snapshot */}
      <SectionWrapper background="surface">
        <MarketSnapshot city="Spirit Lake" stats={SNAPSHOT} footnote={SNAPSHOT_FOOTNOTE} />
        <div
          className="mt-8 max-w-3xl text-base leading-relaxed"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
        >
          <p>
            The honest caveat here: Spirit Lake sells relatively few homes, so headline price stats
            swing widely and no single number tells the story. Value depends far more on the
            specific property — acreage, outbuildings, waterfront — than on a town-wide average.
            That&apos;s exactly the kind of market where a careful, property-by-property read
            matters most.
          </p>
        </div>
      </SectionWrapper>

      {/* Neighborhoods and land */}
      <SectionWrapper background="base">
        <div className="max-w-3xl">
          <h2
            className="text-h2 mb-6"
            style={{ color: "var(--color-charcoal)" }}
          >
            Neighborhoods and Land
          </h2>
          <div
            className="space-y-5 text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            <p>
              Much of Spirit Lake is about land as much as houses. <strong>Spirit Shores</strong>{" "}
              is a secondary-waterfront area near downtown and the boat ramp. Beyond the platted
              subdivisions, a lot of the inventory is <strong>acreage</strong> — treed parcels,
              five-acre lots, and shop-and-land packages — along with a scarcer supply of true
              lake-frontage property. Gated and rural communities exist around the edges of town.
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
            Spirit Lake is served by <strong>Lakeland Joint School District 272</strong>. Timberlake
            Senior High rates well, and the local elementary has been improving in state rankings.
            If schools matter to your search, let me know early.
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
            Who&apos;s Buying in Spirit Lake
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Buyers here are usually after a <strong>rural, recreation-oriented lifestyle</strong> —
            lake and boating access, room for a shop or animals, or a build-your-own parcel.
            It&apos;s a different buyer than the one shopping downtown Coeur d&apos;Alene, and it
            comes with more approachable price points and a slower, small-town feel.
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
            Spirit Lake itself is about four and a half miles long, with a city park, public beach,
            and boat ramp. The town&apos;s historic downtown is on the register, and small-town
            traditions — like the annual Father&apos;s Day lawnmower street drags — are part of the
            character. Rathdrum is about 10 miles south, and Spokane is roughly 55 minutes away.
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
