import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/sections/ContactCTA";
import FAQSchema from "@/components/schema/FAQSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

export const metadata: Metadata = generatePageMetadata({
  title: "Selling Your Home in Post Falls & North Idaho",
  description:
    "Ready to sell? Chelsey Fanning helps homeowners in Post Falls, Coeur d'Alene, and North Idaho sell for top dollar with honest advice, sharp marketing, and real results.",
  path: "/sellers",
  keywords: ["sell home Post Falls Idaho", "listing agent North Idaho", "selling house Coeur d'Alene"],
});

const PROCESS_ITEMS = [
  {
    step: "01",
    title: "Home Evaluation & Honest Pricing",
    body: "I'll do a thorough comparative market analysis and walk through your home with you. I'll give you an honest price range — not inflated to get your listing, and not underpriced to move it fast. The right price is the one that gets you maximum value in the right timeframe.",
  },
  {
    step: "02",
    title: "Getting Your Home Ready",
    body: "First impressions matter enormously. I'll advise on what's worth doing — staging, small repairs, curb appeal — and what you can skip. I work with trusted local tradespeople if anything needs to be taken care of before listing.",
  },
  {
    step: "03",
    title: "Professional Photography & Marketing",
    body: "Your listing will include professional photography, a compelling property description, and distribution across the MLS and all major home search platforms. I also use social media and my personal network to get eyes on your property — not just automated syndication.",
  },
  {
    step: "04",
    title: "Showings & Open Houses",
    body: "I'll coordinate all showings and give you feedback after each one. Transparency is important to me — if something isn't working, you'll know and we'll adjust.",
  },
  {
    step: "05",
    title: "Offers & Negotiation",
    body: "When offers come in, I'll lay out every one clearly and explain the pros and cons of each. I'm a strong negotiator — not aggressive for its own sake, but strategic. My goal is your best outcome, not a fast close.",
  },
  {
    step: "06",
    title: "Under Contract to Close",
    body: "After accepting an offer, we manage inspections, appraisals, and any negotiations that arise. I stay on top of deadlines, communicate with the buyer's agent, and keep you informed at every step.",
  },
];

const SELLER_FAQS = [
  {
    question: "How do you determine what my home is worth?",
    answer:
      "I do a thorough comparative market analysis — looking at recently sold homes in your neighborhood that are similar in size, condition, and features. I also factor in current inventory levels, days on market trends, and what buyers are actually paying right now. I'll walk you through the numbers transparently so you understand the pricing strategy.",
  },
  {
    question: "What does it cost to list with you?",
    answer:
      "The seller's commission covers my fee and often the buyer's agent compensation. I'll explain exactly how this works in our first conversation. There are no hidden fees or surprise costs.",
  },
  {
    question: "How long will it take to sell my home?",
    answer:
      "In North Idaho, well-priced and well-presented homes can move quickly — sometimes in days. Homes that are overpriced or need work take longer. My goal is to position your home correctly from day one so you're not having to make painful price reductions later.",
  },
  {
    question: "Do I need to stage my home?",
    answer:
      "Not necessarily — but presentation matters. I'll walk through your home and give you specific, practical advice on what to prioritize. Sometimes that's a professional stager. Sometimes it's just decluttering and fresh paint. I won't push unnecessary expenses.",
  },
  {
    question: "What if my home needs repairs before listing?",
    answer:
      "We'll discuss whether to repair, price accordingly, or disclose and sell as-is. I have trusted local contractors I can refer you to. The decision depends on your timeline and what buyers in your price range expect.",
  },
];

export default function SellersPage() {
  return (
    <>
      <FAQSchema faqs={SELLER_FAQS} />
      <LocalBusinessSchema />

      {/* Page hero */}
      <section
        className="pt-36 pb-20"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-primary)", fontFamily: "var(--font-inter)" }}
          >
            Seller Resources
          </p>
          <h1 className="text-h1 mb-6" style={{ color: "var(--color-charcoal)" }}>
            Selling Your Home in North Idaho
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
          >
            Selling your home is a significant decision — financially and emotionally. My job is
            to make sure you get the best outcome possible, with honest advice and a proven
            approach every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get My Home&apos;s Value
            </Button>
            <Button
              href="https://exprealty.com/agents/YOUR_PROFILE" // TODO: real eXp profile
              variant="outline"
              size="lg"
              external
            >
              View My Listings →
            </Button>
          </div>
        </div>
      </section>

      {/* My marketing approach */}
      <SectionWrapper background="surface">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-h2 mb-4" style={{ color: "var(--color-charcoal)" }}>
            My Approach to Selling
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}
          >
            Selling isn&apos;t just putting a sign in the yard and waiting. Here&apos;s the process
            I follow for every listing.
          </p>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
          {PROCESS_ITEMS.map((item) => (
            <div
              key={item.step}
              className="flex gap-8 items-start rounded-2xl p-8"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid rgba(196,185,172,0.3)",
              }}
            >
              <div
                className="flex-shrink-0 text-3xl font-bold"
                style={{ fontFamily: "var(--font-cormorant)", color: "var(--color-primary)", opacity: 0.6 }}
              >
                {item.step}
              </div>
              <div>
                <h3 className="text-h4 mb-3" style={{ color: "var(--color-charcoal)" }}>
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="base">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-center mb-12" style={{ color: "var(--color-charcoal)" }}>
            Seller FAQ
          </h2>
          <div className="space-y-4">
            {SELLER_FAQS.map((faq) => (
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
                  style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-inter)" }}
                >
                  {faq.question}
                  <span className="text-xl ml-4 transition-transform group-open:rotate-45" style={{ color: "var(--color-primary)" }}>
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
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
