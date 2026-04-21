import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/sections/ContactCTA";
import FAQSchema from "@/components/schema/FAQSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

export const metadata: Metadata = generatePageMetadata({
  title: "Home Buyers in Post Falls & North Idaho",
  description:
    "Thinking about buying a home in Post Falls, Coeur d'Alene, or North Idaho? Chelsey Fanning walks every buyer through the process — first-timers especially welcome.",
  path: "/buyers",
  keywords: ["buying a home Post Falls Idaho", "first time home buyer North Idaho", "home buyer agent Coeur d'Alene"],
});

const STEPS = [
  {
    step: "01",
    title: "Let's Talk First",
    body: "Before we look at a single house, let's get on the phone or meet for coffee. I want to understand what you actually want — your timeline, your budget, your wish list, and your concerns. This conversation shapes everything.",
  },
  {
    step: "02",
    title: "Get Pre-Approved",
    body: "In North Idaho's market, pre-approval isn't optional — it's what lets you move fast when the right property shows up. I'll connect you with a local lender I trust, or work with your existing financing.",
  },
  {
    step: "03",
    title: "Find the Right Homes",
    body: "I'll set up a custom search based on exactly what you told me. When something hits the market that fits, you'll hear from me immediately — not after it's already under contract.",
  },
  {
    step: "04",
    title: "Tour & Evaluate",
    body: "We'll tour homes together and I'll give you honest feedback — the good and the bad. I'm not trying to sell you a house. I'm trying to help you find the right one.",
  },
  {
    step: "05",
    title: "Make a Smart Offer",
    body: "When you find the one, I'll pull comparable sales and advise on a strategy that's competitive without overpaying. Every market is different, and I'll know how to position your offer.",
  },
  {
    step: "06",
    title: "Inspection & Due Diligence",
    body: "After an accepted offer, we'll schedule a home inspection. I'll be there with you, help you understand what matters, and advise on how to handle any issues that come up.",
  },
  {
    step: "07",
    title: "Close & Celebrate",
    body: "On closing day, you'll sign the paperwork, get your keys, and officially be a homeowner. I'll be there to cheer you on. This is my favorite day.",
  },
];

const BUYER_FAQS = [
  {
    question: "Do I need to be pre-approved before we start looking at homes?",
    answer:
      "Technically no, but practically yes. In North Idaho's market, homes can receive offers quickly. Having pre-approval in hand means you can make an offer the day you find the right home. It also helps us focus your search on what's genuinely within your budget — no surprises.",
  },
  {
    question: "What does it cost to work with Chelsey as a buyer?",
    answer:
      "Under the NAR settlement rules that took effect in 2024, buyer agent compensation is now negotiated directly between you and your agent — it's no longer automatically offered through the MLS. Before we tour any homes together, we'll sign a Buyer Representation Agreement that spells out exactly how I'm compensated and for how much. In many transactions, sellers still offer concessions that can cover buyer agent fees, but that's negotiated case by case. I'll be completely upfront about all of this before we take a single step — no surprises, ever.",
  },
  {
    question: "How long does buying a home in North Idaho typically take?",
    answer:
      "From the first conversation to getting your keys, it usually takes anywhere from 30 to 90 days once you're in contract. The search phase varies — some clients find the right home in a week, others take a couple of months. There's no rush; we move at your pace.",
  },
  {
    question: "What's the North Idaho market like right now?",
    answer:
      "North Idaho remains a competitive and growing market, especially in Post Falls and Coeur d'Alene. Inventory has improved from its post-pandemic lows, but desirable homes still move quickly. I'll give you an honest, up-to-date picture when we talk.",
  },
  {
    question: "I'm a first-time buyer. Is the process really as overwhelming as I've heard?",
    answer:
      "It can feel that way, but it doesn't have to be. First-time buyers are genuinely my favorite clients — I love walking someone through this process for the first time. I'll explain every step, answer every question without judgment, and make sure you never feel lost.",
  },
  {
    question: "Can you help me buy in cities outside Post Falls?",
    answer:
      "Absolutely. I serve all of North Idaho — Coeur d'Alene, Hayden, Rathdrum, Spirit Lake, and surrounding areas. Wherever home is for you in Idaho, I can help you get there.",
  },
];

export default function BuyersPage() {
  return (
    <>
      <FAQSchema faqs={BUYER_FAQS} id="https://chelseyfanning.com/buyers#faq" />
      <LocalBusinessSchema />

      {/* Page hero */}
      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-roboto)" }}
          >
            Buyer Resources
          </p>
          <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
            Buying a Home in North Idaho
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
          >
            Whether it&apos;s your first home or your fifth, buying in North Idaho is one of the
            best decisions you can make. Here&apos;s how the process works — and how I&apos;ll help
            you through every step.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start the Conversation
          </Button>
        </div>
      </section>

      {/* Process steps */}
      <SectionWrapper background="surface">
        <h2 className="text-h2 text-center mb-14" style={{ color: "var(--color-charcoal)" }}>
          How the Buying Process Works
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="flex gap-8 items-start rounded-2xl p-8"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid rgba(196,185,172,0.3)",
              }}
            >
              <div
                className="flex-shrink-0 text-3xl font-bold"
                style={{ fontFamily: "var(--font-roboto)", color: "var(--color-primary)", opacity: 0.6 }}
              >
                {step.step}
              </div>
              <div>
                <h3 className="text-h4 mb-3" style={{ color: "var(--color-charcoal)" }}>
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ section */}
      <SectionWrapper background="base">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-center mb-12" style={{ color: "var(--color-charcoal)" }}>
            Buyer FAQ
          </h2>
          <div className="space-y-6">
            {BUYER_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid rgba(196,185,172,0.3)",
                }}
              >
                <summary
                  className="flex justify-between items-center p-6 cursor-pointer font-semibold text-base list-none"
                  style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-roboto)" }}
                >
                  {faq.question}
                  <span className="text-xl ml-4 transition-transform group-open:rotate-45" style={{ color: "var(--color-primary)" }}>
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-roboto)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
