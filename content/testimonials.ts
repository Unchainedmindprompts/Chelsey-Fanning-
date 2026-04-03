export type TestimonialCategory =
  | "first-time-buyer"
  | "luxury"
  | "relocation"
  | "seller"
  | "repeat-client"
  | "industry-peer"
  | "general";

export interface Testimonial {
  id: string;
  name: string;
  reviewerType: "client" | "industry-peer";
  category: TestimonialCategory;
  rating: 5;
  date: string;
  shortQuote: string;        // 15 words max — shown in collapsed cards & homepage
  fullText: string;          // complete review text verbatim
  featured: boolean;
  badgeLabel?: string;       // e.g. "From a lending professional" — shown on industry-peer cards
  blogSlug?: string;
}

// ─── All 26 verified Google reviews — Chelsey Fanning GBP, April 2026 ─────────
// Note: some reviewers spelled Chelsey's name as "Chelsea" — kept verbatim.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "haley-mindt",
    name: "Haley Mindt",
    reviewerType: "client",
    category: "first-time-buyer",
    rating: 5,
    date: "2026-03-19",
    shortQuote: "She made the experience not just smooth, but actually enjoyable.",
    fullText:
      "As first-time homebuyers, we were honestly a little overwhelmed going into the process—but working with Chelsey made all the difference. She took the time to explain every step in a way that felt clear and manageable, and she was always there to answer our questions (no matter how small). She truly advocated for us and made sure we felt confident in every decision. Beyond that, she went above and beyond to make the experience not just smooth, but actually enjoyable. We're so grateful to have had her by our side and cannot recommend her enough!",
    featured: true,
    blogSlug: "complete-first-time-homebuyer-guide-post-falls-idaho",
  },
  {
    id: "tyler-shearer",
    name: "Tyler Shearer",
    reviewerType: "industry-peer",
    category: "luxury",
    rating: 5,
    date: "2026-03-19",
    shortQuote: "Her level of communication and professionalism is elite.",
    fullText:
      "Chelsea delivered an exceptional experience on this luxury home purchase in Coeur d'Alene, Idaho. As a lender specializing in jumbo and high-end transactions, I can confidently say her level of communication and professionalism is elite. She was outstanding not only in working with our lending team, but also in guiding her client through every step of the process. In luxury real estate, details matter—and Chelsea stayed proactive, organized, and ahead of every milestone, allowing us to structure and close this jumbo loan smoothly and ahead of schedule. What stood out most was the experience she created. Her client walked away with everything they envisioned in their home purchase, which is exactly what you want in a high-end transaction.",
    featured: true,
    badgeLabel: "From a lending professional",
    blogSlug: "what-jumbo-loan-lender-looks-for-luxury-real-estate-agent",
  },
  {
    id: "tabbetha-sonn",
    name: "Tabbetha Sonn",
    reviewerType: "client",
    category: "first-time-buyer",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "She doesn't feel like 'just' a realtor anymore… she feels like a friend.",
    fullText:
      "Chelsey has been absolutely incredible. We found the home ourselves, but she's the one who made everything possible. She went above and beyond in every way, truly treating our situation like her own family would be living here. I had a million questions, a ton of stress, and I definitely over-communicated… she never once seemed bothered. She explained everything, checked in constantly, and kept us grounded through one of the biggest decisions of our lives. She even helped us get connected with an amazing lender, which made everything smoother. And honestly? She doesn't feel like \"just\" a realtor anymore… she feels like a friend. If you want someone who genuinely cares, works hard, and supports you every step of the way, Chelsey is the one. We're so grateful for her.",
    featured: true,
    blogSlug: "what-it-actually-feels-like-to-work-with-the-right-realtor",
  },
  {
    id: "jennifer-lund",
    name: "Jennifer Lund",
    reviewerType: "client",
    category: "first-time-buyer",
    rating: 5,
    date: "2026-02-12",
    shortQuote: "Her attention to detail and commitment to us as clients never wavered.",
    fullText:
      "Chelsea was truly exceptional from start to finish. We couldn't have asked for a better guide through the home buying process. She was knowledgeable, responsive, and incredibly patient, taking the time to explain every step and make sure we felt confident in our decisions. When we ran into a few difficult and stressful situations along the way, Chelsea handled them with professionalism, and care, always advocating for our best interests. Her attention to detail and commitment to us as clients never wavered, and it made all the difference. We are so grateful for her support and expertise and would wholeheartedly recommend Chelsea to anyone looking for a realtor they can truly trust.",
    featured: false,
    blogSlug: "complete-first-time-homebuyer-guide-post-falls-idaho",
  },
  {
    id: "katie-lamothe",
    name: "Katie LaMothe",
    reviewerType: "client",
    category: "first-time-buyer",
    rating: 5,
    date: "2026-01-29",
    shortQuote: "It was a flawless process — I can not wait to use her in the future!",
    fullText:
      "Chelsey was and is the absolute best realtor in town!! She is kind and caring and helped me and my husband with buying our first house! I was soooo nervous about everything but she calmed me down and answered every single question we had and more! It was a flawless process with her and I can not wait to use her in the future! She's the best!!!",
    featured: false,
    blogSlug: "complete-first-time-homebuyer-guide-post-falls-idaho",
  },
  {
    id: "jessie-mitchell",
    name: "Jessie Mitchell",
    reviewerType: "client",
    category: "first-time-buyer",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "She provided me with the perfect opportunity. Would recommend anytime!",
    fullText:
      "I had the pleasure of working with Chelsey when inquiring on my first home. She had the poise, professionalism, confidence and knowledge to keep my comfort in check and provide me with the perfect opportunity. Would recommend her to anyone anytime!",
    featured: false,
  },
  {
    id: "amanda-s",
    name: "Amanda S.",
    reviewerType: "client",
    category: "relocation",
    rating: 5,
    date: "2026-02-19",
    shortQuote: "We purchased bare land site-unseen from out of state — she made it seamless.",
    fullText:
      "We had an amazing buying experience with Chelsey! She is very timely and responsive, we never had to wait long to hear from her about a question we had. She is very professional and organized. She met us for our first round of showings with a binder of printed listings that we were set to see that day. We ended up having to purchase our bare land site-unseen while living out of state and she made the experience seamless! She made sure all the documents got to us and all the to-do's were checked off before purchasing. She went above and beyond for us in our unique situation!",
    featured: false,
    blogSlug: "buying-land-north-idaho-out-of-state",
  },
  {
    id: "robert-reynolds",
    name: "Robert Reynolds",
    reviewerType: "client",
    category: "relocation",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "Managing a cross-country purchase for us seamlessly.",
    fullText:
      "Chelsey was fantastic in our home purchase, managing a cross-country purchase for us seamlessly. Very professional, courteous and communicative. She also helped find service providers for various house-related things, as we had no idea who to call in the area. She was a pleasure to work with.",
    featured: false,
    blogSlug: "relocating-to-north-idaho-how-to-buy-from-across-the-country",
  },
  {
    id: "elizabeth-bowling",
    name: "Elizabeth Bowling",
    reviewerType: "client",
    category: "seller",
    rating: 5,
    date: "2025-12-04",
    shortQuote: "A gem in negotiations and clear communication.",
    fullText:
      "Chelsea is knowledgeable, quick with communication, excellent at working towards my specific needs and goals for house sale, and a gem in negotiations and clear communication. Highly recommend!",
    featured: false,
  },
  {
    id: "mike-melnick",
    name: "Mike Melnick",
    reviewerType: "client",
    category: "seller",
    rating: 5,
    date: "2026-01-22",
    shortQuote: "On top of every aspect of both purchasing and selling our house.",
    fullText:
      "Chelsey is a great listener, always responds to questions immediately, she was on top of every aspect of both purchasing and selling our house. Highly recommend.",
    featured: false,
  },
  {
    id: "austin-garrett",
    name: "Austin Garrett",
    reviewerType: "client",
    category: "seller",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "Her negotiation skills were top-notch — we were very pleased.",
    fullText:
      "I had an amazing experience working with Chelsey. From start to finish, she was professional, responsive, and truly attentive to our needs. She made the home buying, and selling, process smooth and stress-free, offering valuable insights and expert advice. Her negotiation skills were top-notch, we were pleased with how much she was able to sell our home for, and the deal she negotiated on our purchase. If you're looking for a reliable, knowledgeable realtor, I highly recommend Chelsey!",
    featured: false,
  },
  {
    id: "david-burnett",
    name: "David Burnett",
    reviewerType: "client",
    category: "seller",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "Amazing when we bought, and great again when we sold years later.",
    fullText:
      "Chelsea was amazing when we bought our house and made it very comfortable for us. She was great again when we sold our house with her couple of years later.",
    featured: false,
  },
  {
    id: "kris-smith",
    name: "Kris Smith",
    reviewerType: "client",
    category: "seller",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "As a former realtor, I know who to trust. Chelsey is that person.",
    fullText:
      "I have known and worked with Chelsey for almost 10 years and in that time she helped my husband and I with the sale of our home, worked diligently to assist in the possible purchase of other homes and properties for our family and has also facilitated the sale of my mother's home. Having worked in real estate myself for many years, I know the people and I know how difficult it can be to make it in this very competitive business - you have work hard to stand out, be dedicated, and truly care about what you do. Former Realtors are not always the easiest clients to have but I can assure you, we know the business and we know who to trust, so rest assured when I say that Chelsey Fanning knows what she's doing and will work hard for you and your family too.",
    featured: true,
    blogSlug: "what-a-former-realtor-looks-for-when-choosing-an-agent",
  },
  {
    id: "kimberly-miller",
    name: "Kimberly Miller",
    reviewerType: "industry-peer",
    category: "seller",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "She keeps everything running smoothly and makes my job easier.",
    badgeLabel: "From a fellow real estate professional",
    fullText:
      "I've worked with Chelsey on several listings, and she's fantastic to work with. She's organized, professional, and her communication is always spot on, she keeps everything running smoothly and makes my job easier. On a more personal note, She also sold my mom's home for her and did an outstanding job with that. Chelsey truly looks out for her clients and makes the process as stress free as possible. She goes above and beyond. I highly recommend her to anyone looking for a Realtor who's dependable, communicative, fun and great at what she does.",
    featured: false,
  },
  {
    id: "jamie-davis",
    name: "Jamie Davis",
    reviewerType: "client",
    category: "repeat-client",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "She never once made us feel pressured — and now she's a friend.",
    fullText:
      "We have known Chelsey Fanning since 2018, and in that time she has helped us to find and purchase two beautiful homes in the Coeur d'Alene/ Hayden area. These finds did not come quickly as we were looking for very specific things in a home; that being said, Chelsey was always patient and never did we ever feel like we were being pressured to buy. She listened to our criteria and guided us to homes that she thought would work for us. Chelsey was always accessible to answer our real estate questions, and if she did not have the answer immediately, she researched it and found the answer. While working with Chelsey, you can tell that she loves what she does. We would recommend Chelsey to others… she is a great realtor and now a friend!",
    featured: false,
  },
  {
    id: "erin-dornburgh",
    name: "Erin Dornburgh",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2026-02-26",
    shortQuote: "Very diligent, knowledgeable and makes the process as smooth as possible.",
    fullText:
      "If there is anyone to help with buying a home, look no further, Chelsey Fanning is the best! Very diligent, knowledgeable and makes the process as smooth as possible for all involved. Would use her services again and highly recommend.",
    featured: false,
  },
  {
    id: "emily-bohn",
    name: "Emily Bohn",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2026-02-12",
    shortQuote: "A dedicated, genuine, and local expert. 10/10.",
    fullText:
      "I could not recommend Chelsey enough. She truly dedicates her time to her clients and will not stop until they get what they want! A dedicated, genuine, and local expert. 10/10",
    featured: false,
  },
  {
    id: "chance-johnson",
    name: "Chance Johnson",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2026-01-22",
    shortQuote: "She made the process painless as well as effortless on our end.",
    fullText:
      "Chelsey was an absolute pleasure to work with in attaining our home. Knowledgeable, honest and sincere, she made the process painless as well as effortless on our end. I recommend using Chelsey to everyone I know!",
    featured: false,
  },
  {
    id: "andrea-broenneke",
    name: "Andrea Broenneke",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-12-04",
    shortQuote: "Best experience I've ever had with a realtor!!",
    fullText:
      "Chelsey went above and beyond to help us find the right house and then she negotiated on our behalf for terms that worked for us. She is a true professional, great at communicating and always ready to help when we needed it. Best experience I've ever had with a realtor!! Thank you!",
    featured: false,
  },
  {
    id: "jessica-kohler",
    name: "Jessica Kohler",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-12-04",
    shortQuote: "She even had a welcome home gift basket for me when I signed on my home.",
    fullText:
      "Chelsey made my home buying experience such a breeze. She goes above and beyond for her clients. She even had a welcome home gift basket for me when I signed on my home. She is wonderful and I highly recommend her!",
    featured: false,
    blogSlug: "little-things-that-make-big-difference-real-estate",
  },
  {
    id: "emily-anderson",
    name: "Emily Anderson",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-11-20",
    shortQuote: "So knowledgeable and her attention to detail is top notch!!!",
    fullText:
      "Amazing!!! Chelsey is so knowledgeable and her attention to detail is top notch!!! Would definitely use and recommend her to everyone!",
    featured: false,
  },
  {
    id: "allie-guiry",
    name: "Allie Guiry",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "She answered all our questions no matter the day!",
    fullText:
      "Chelsey is the best hands down! I could not recommend her enough! She was so helpful and answered all our questions no matter the day! Thank you for making the process so smooth!",
    featured: false,
  },
  {
    id: "marissa",
    name: "Marissa",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "She went above and beyond to help us find our new family home!",
    fullText:
      "Highly recommend! Chelsey was so great to work with. She was professional, friendly, always quick to respond and answered absolutely any questions we had. She went above and beyond to help us find our new family home! We'll be using her again for sure.",
    featured: false,
  },
  {
    id: "nichole-gerhardt",
    name: "Nichole Gerhardt",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-11-13",
    shortQuote: "Her honesty and transparency fosters complete trust.",
    fullText:
      "Chelsey exemplifies the highest standards of professionalism, integrity, and dedication in real estate. Throughout the entire process, she demonstrates exceptional reliability, a strong work ethic, and an unwavering commitment to doing what is right for her clients. Her honesty and transparency fosters complete trust, and her attention to detail ensures every step is handled with precision and care. Dependable from start to finish, Chelsey consistently goes above and beyond to deliver outstanding results. Her steadfast commitment and ethical approach sets her apart in an industry where those qualities truly matter. I highly recommend Chelsey to anyone seeking a trustworthy, hardworking, and principled real estate professional.",
    featured: false,
  },
  {
    id: "desiree-jones",
    name: "Desiree Jones",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-11-06",
    shortQuote: "Chelsey is one of the best in the business!!",
    fullText:
      "I had the pleasure of working with Chelsey Fanning on a recent transaction, and she was absolutely phenomenal to collaborate with. Chelsey is the definition of professional, detail-oriented, and on the ball. She stays ahead of every deadline and ensures all the moving parts of a deal come together seamlessly. Her communication is beyond exceptional!! She is always quick to respond, clear, and proactive. It made the entire process smooth and stress-free for everyone involved. Chelsey's organization and follow-through reflect true professionalism and care for her clients. If you're looking to work with an agent in North Idaho who is sharp, responsive, and genuinely invested in delivering an outstanding experience, Chelsey is one of the best in the business!!",
    featured: false,
  },
  {
    id: "danny-rodriguez",
    name: "Danny Rodriguez",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-11-06",
    shortQuote: "Ethical, hard charging, pro-active — look no further than Chelsey Fanning.",
    fullText:
      "If you're looking for an ethical, hard charging, pro-active Realtor in North Idaho; then look no further than Chelsey Fanning. Chelsey Fanning helped me find the property to build my dream home on, in 2020. Chelsey made sure everything was clearly understood at every step of the process. Chelsey is experienced with residential and commercial real estate.",
    featured: false,
  },
  // ─── Count-only entry — no review text; keeps TESTIMONIALS.length === 27 ─────
  {
    id: "bridger-thurman",
    name: "Bridger Thurman",
    reviewerType: "client",
    category: "general",
    rating: 5,
    date: "2025-12-11",
    shortQuote: "",
    fullText: "",
    featured: false,
  },
];

// ─── Derived aggregate — single source of truth for schema + UI ───────────────
export const AGGREGATE_RATING = {
  ratingValue: "5.0",
  reviewCount: TESTIMONIALS.length.toString(),
  bestRating: "5",
  worstRating: "1",
};
