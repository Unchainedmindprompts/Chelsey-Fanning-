import HomepageSchema from "@/components/schema/HomepageSchema";
import type { Metadata } from "next";
import RecentWorkPreview from "@/components/sections/RecentWorkPreview";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import WhoIWorkWith from "@/components/sections/WhoIWorkWith";
import FeaturedTestimonials from "@/components/sections/FeaturedTestimonials";
import AboutPreview from "@/components/sections/AboutPreview";
import NorthIdahoSection from "@/components/sections/NorthIdahoSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { NAP } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Chelsey Fanning | Realtor in Post Falls, Idaho | eXp Realty",
  description:
    "Chelsey Fanning is a trusted REALTOR® with eXp Realty, serving buyers and sellers across Post Falls, Coeur d'Alene, Hayden, Rathdrum, and all of North Idaho. Licensed since 2018. Buyer and seller representation.",
  alternates: {
    canonical: NAP.url,
  },
  openGraph: {
    title: "Chelsey Fanning | Realtor in Post Falls, Idaho",
    description:
      "From your first home to your forever home — Chelsey Fanning brings expertise, honesty, and genuine care to every transaction in North Idaho.",
    url: NAP.url,
    type: "website",
    images: [
      {
        url: `${NAP.url}/chelsey-hero-periwinkle.jpeg`,
        width: 1200,
        height: 630,
        alt: "Chelsey Fanning | Realtor in Post Falls, Idaho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsey Fanning | Realtor in Post Falls, Idaho",
    description:
      "From your first home to your forever home — Chelsey Fanning brings expertise, honesty, and genuine care to every transaction in North Idaho.",
    images: [`${NAP.url}/chelsey-hero-periwinkle.jpeg`],
  },
};

export default function HomePage() {
  return (
    <>
      <HomepageSchema />
      <Hero />
      <StatsBar />
      <WhoIWorkWith />
      <FeaturedTestimonials />
      <RecentWorkPreview />
      <AboutPreview />
      <NorthIdahoSection />
      <ContactCTA />
    </>
  );
}
