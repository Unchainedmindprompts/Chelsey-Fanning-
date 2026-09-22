import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { BASE_URL, AGENT_REF, WEBSITE_REF, buildPersonNode, buildExpRealtyNode, buildTeamNode } from "@/lib/schema";
import { PROFILE_LINKS, PROFILE_CHECKED_LABEL, RECENT_WORK } from "@/content/professional-profile";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata = generatePageMetadata({
  title: "Recent Work & Listings",
  description: "Explore Chelsey Fanning's recent buyer and seller representation in North Idaho, current listing sources, and professional background.",
  path: "/experience",
});

export default function ExperiencePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonNode(), buildExpRealtyNode(), buildTeamNode(),
      {
        "@type": "CollectionPage", "@id": `${BASE_URL}/experience#webpage`,
        url: `${BASE_URL}/experience`, name: "Chelsey Fanning — Recent Work & Listings",
        about: AGENT_REF, isPartOf: WEBSITE_REF,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: RECENT_WORK.map((work, index) => ({
            "@type": "ListItem", position: index + 1,
            item: {
              "@type": "CreativeWork", "@id": `${BASE_URL}/experience#${work.id}`,
              name: `${work.address}, ${work.city} — ${work.role}`,
              description: `Closed ${work.dateLabel}. ${work.role} by Chelsey Fanning.`,
              about: AGENT_REF, citation: [PROFILE_LINKS.realtor, PROFILE_LINKS.homes],
            },
          })),
        },
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="pt-36 pb-16" style={{ backgroundColor: "var(--color-base)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--color-primary)" }}>Experience in North Idaho</p>
          <h1 className="text-h1 mb-6">Local homes. Different goals. Personal attention.</h1>
          <p className="text-lg leading-relaxed">From a first home in Post Falls to a sale in Coeur d&apos;Alene, each move comes with its own decisions. Here are selected examples of Chelsey&apos;s recent work, with links to the public records behind them.</p>
          <p className="text-sm mt-5" style={{ color: "var(--color-muted)" }}>Public profiles checked {PROFILE_CHECKED_LABEL}. Selected transactions, not a complete career total.</p>
        </div>
      </section>
      <SectionWrapper background="surface">
        <h2 className="text-h2 mb-8">Recently closed</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {RECENT_WORK.map((work) => (
            <article key={work.id} id={work.id} className="rounded-2xl p-8 border" style={{ backgroundColor: "var(--color-white)", borderColor: "rgba(196,185,172,0.3)" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-primary)" }}>{work.role}</p>
              <h3 className="text-h3 mb-2">{work.address}</h3>
              <p className="mb-4">{work.city}, Idaho</p>
              <p className="text-sm mb-5">Closed <time dateTime={work.closed}>{work.dateLabel}</time></p>
              <div className="flex flex-wrap gap-4 text-sm underline">
                <a href={PROFILE_LINKS.realtor}>Realtor.com sales history</a>
                <a href={PROFILE_LINKS.homes}>Homes.com transaction history</a>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper background="base">
        <div className="max-w-3xl">
          <h2 className="text-h2 mb-5">Looking for something on the market?</h2>
          <p className="leading-relaxed mb-5">Chelsey&apos;s public profiles listed land on S Carpenter Loop in Post Falls and a home on S Lakeview Drive in Worley when checked on {PROFILE_CHECKED_LABEL}. Follow the listing sources for current availability, photos and pricing.</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href={PROFILE_LINKS.team} className="rounded-full px-6 py-3 text-sm font-semibold" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>Browse listings with Chelsey&apos;s team →</a>
            <a href={PROFILE_LINKS.realtor} className="rounded-full px-6 py-3 border text-sm font-semibold">See Realtor.com listings →</a>
          </div>
          <h2 className="text-h3 mb-4">The people behind the transactions</h2>
          <p className="leading-relaxed mb-4">An address only tells part of the story. Clients describe the communication, preparation and follow-through that helped them make their move.</p>
          <div className="flex flex-wrap gap-6 underline"><Link href="/testimonials">Read the reviews →</Link><Link href="/about">Meet Chelsey →</Link></div>
        </div>
      </SectionWrapper>
      <ContactCTA />
    </>
  );
}
