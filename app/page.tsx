import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import WhoIWorkWith from "@/components/sections/WhoIWorkWith";
import FeaturedTestimonials from "@/components/sections/FeaturedTestimonials";
import AboutPreview from "@/components/sections/AboutPreview";
import NorthIdahoSection from "@/components/sections/NorthIdahoSection";
import ContactCTA from "@/components/sections/ContactCTA";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Chelsey Fanning | Realtor in Post Falls, Idaho | eXp Realty",
  description:
    "Chelsey Fanning is a trusted REALTOR® with eXp Realty, serving buyers and sellers across Post Falls, Coeur d'Alene, Hayden, Rathdrum, and all of North Idaho. 5-star rated. 100+ transactions.",
  alternates: {
    canonical: "https://chelseyfanning.com",
  },
  openGraph: {
    title: "Chelsey Fanning | Realtor in Post Falls, Idaho",
    description:
      "From your first home to your forever home — Chelsey Fanning brings expertise, honesty, and genuine care to every transaction in North Idaho.",
    url: "https://chelseyfanning.com",
    type: "website",
    images: [
      {
        url: "https://chelseyfanning.com/chelsey-hero-periwinkle.jpeg",
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
    images: ["https://chelseyfanning.com/chelsey-hero-periwinkle.jpeg"],
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <StatsBar />
      <WhoIWorkWith />
      <FeaturedTestimonials />
      <AboutPreview />
      <NorthIdahoSection />
      <ContactCTA />
    </>
  );
}
