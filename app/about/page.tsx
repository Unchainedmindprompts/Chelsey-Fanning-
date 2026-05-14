import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactCTA from "@/components/sections/ContactCTA";
import PersonSchema from "@/components/schema/PersonSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

export const metadata: Metadata = generatePageMetadata({
  title: "About Chelsey Fanning",
  description:
    "Meet Chelsey Fanning — a REALTOR® with eXp Realty who calls Post Falls, Idaho home. Learn about her approach, her values, and why first-time buyers are her favorite clients.",
  path: "/about",
  keywords: ["Chelsey Fanning realtor bio", "Post Falls Idaho real estate agent", "eXp Realty Post Falls"],
});

const VALUES = [
  {
    title: "Honesty, Always",
    body: "I'll never tell you what you want to hear just to make a deal happen. If a house has problems, if the price is off, if the timing isn't right — you'll know it from me first. You deserve the truth.",
  },
  {
    title: "Genuine Responsiveness",
    body: "Real estate moves fast. I return calls and messages the same day, every time. You shouldn't have to chase down your agent when it matters most.",
  },
  {
    title: "Care Beyond the Close",
    body: "My job doesn't end at closing. Many of my clients become friends. I'm genuinely invested in your experience, not just your transaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PersonSchema />
      <LocalBusinessSchema />

      {/* Hero section */}
      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="order-last lg:order-first relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/chelsea-about.jpeg"
                  alt="Chelsey Fanning, REALTOR® — Post Falls, Idaho"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
              >
                My Story
              </p>
              <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
                I&apos;m Chelsey. I Help People Find Home.
              </h1>
              <div
                className="space-y-5 text-base leading-relaxed"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
              >
                <p>
                  I became a real estate agent because I genuinely believe that where you live
                  shapes everything — your mornings, your kids&apos; futures, your daily sense of
                  belonging. That&apos;s not a small thing, and I don&apos;t treat it like one.
                </p>
                <p>
                  I&apos;ve been working with buyers and sellers across North Idaho for over seven years,
                  and I still get excited about every single transaction. Closing day hasn&apos;t gotten
                  old. Watching a first-time buyer get their keys? That never gets old.
                </p>
                <p>
                  First-time buyers are — honestly — my favorite clients. I know that&apos;s not what
                  most agents say, but I mean it. There&apos;s something about walking someone through
                  the biggest financial decision of their life and watching them realize they can do
                  this — it&apos;s the best part of my job.
                </p>
                <p>
                  I also work with move-up buyers, sellers, and clients in the luxury market. Every
                  transaction is different, and every client gets the same level of dedication. My
                  business is almost entirely built on referrals — which tells me I&apos;m doing something right.
                </p>
                <p>
                  I&apos;m based in Post Falls, which means I know this area the way only a local can.
                  If you want an agent who actually lives here, loves it here, and knows the difference
                  between neighborhoods, schools, and what&apos;s coming to market before it&apos;s listed
                  — let&apos;s talk.
                </p>
              </div>

              <div className="mt-8">
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)" }}
                >
                  Licensed with{" "}
                  <a
                    href="https://exprealty.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                    style={{ color: "var(--color-primary)" }}
                  >
                    eXp Realty
                  </a>
                  {" · "}
                  <a
                    href="https://exprealty.com/agents/YOUR_PROFILE" // TODO: real eXp profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Browse my active listings on eXp →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <SectionWrapper background="surface">
        <div className="text-center mb-14">
          <h2 className="text-h2" style={{ color: "var(--color-charcoal)" }}>
            What I Stand For
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid rgba(196,185,172,0.3)",
              }}
            >
              <h3 className="text-h4 mb-4" style={{ color: "var(--color-charcoal)" }}>
                {value.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
              >
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Second photo — TODO: add new photo of Chelsey here */}
      <SectionWrapper background="base">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-base leading-relaxed italic"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-roboto)", fontSize: "1.1rem" }}
          >
            &ldquo;I became a realtor because I love people, and I love North Idaho. Getting to
            combine both every day? That&apos;s the job.&rdquo;
          </p>
          <p
            className="mt-3 text-sm font-semibold"
            style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-roboto)" }}
          >
            — Chelsey Fanning
          </p>
        </div>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
