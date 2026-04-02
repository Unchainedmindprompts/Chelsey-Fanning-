export interface Testimonial {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date: string;
  body: string;
  category: "first-time-buyer" | "seller" | "luxury" | "relocation" | "move-up";
  featured?: boolean;
}

// TODO: Replace with real Google reviews — verify author permission if needed
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Marcus & Leila T.",
    location: "Post Falls, ID",
    rating: 5,
    date: "2024-11-15",
    body: "Chelsey made buying our first home feel completely manageable. She was patient with every question we had, never made us feel rushed, and genuinely celebrated with us at closing. If you're buying your first home in North Idaho, call Chelsey first.",
    category: "first-time-buyer",
    featured: true,
  },
  {
    id: "t2",
    author: "Diane W.",
    location: "Coeur d'Alene, ID",
    rating: 5,
    date: "2024-09-08",
    body: "We listed our home in CDA and had multiple offers within days. Chelsey's marketing was sharp, her pricing advice was spot-on, and she negotiated hard for us. Could not be happier with the outcome.",
    category: "seller",
    featured: true,
  },
  {
    id: "t3",
    author: "James & Renata P.",
    location: "Hayden, ID",
    rating: 5,
    date: "2024-07-22",
    body: "We relocated from out of state and Chelsey was our lifeline. She understood the North Idaho market inside and out, helped us prioritize neighborhoods, and made a stressful cross-country move feel genuinely manageable.",
    category: "relocation",
    featured: true,
  },
  {
    id: "t4",
    author: "Kristin A.",
    location: "Rathdrum, ID",
    rating: 5,
    date: "2024-12-03",
    body: "We were upsizing and Chelsey helped us sell our current home and find the next one simultaneously. She kept everything organized and communicated every step of the way. Truly a pro.",
    category: "move-up",
  },
  {
    id: "t5",
    author: "Tom & Sarah B.",
    location: "Post Falls, ID",
    rating: 5,
    date: "2024-10-18",
    body: "Chelsey sold our home for above asking price in a challenging market. Her staging advice and photography recommendations made a real difference. We'd recommend her to anyone.",
    category: "seller",
  },
  {
    id: "t6",
    author: "Priya N.",
    location: "Coeur d'Alene, ID",
    rating: 5,
    date: "2024-06-05",
    body: "I was nervous about buying a higher-end property in CDA. Chelsey was knowledgeable, discreet, and zero-pressure. She found us a property we weren't even looking for — and it was perfect.",
    category: "luxury",
  },
];
