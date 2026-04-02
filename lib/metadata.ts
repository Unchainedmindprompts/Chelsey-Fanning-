import type { Metadata } from "next";

const BASE_URL = "https://chelseyfanning.com";
const SITE_NAME = "Chelsey Fanning · Realtor · Post Falls, ID";
const DEFAULT_OG_IMAGE = "/og-default.jpg";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImageUrl?: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImageUrl = DEFAULT_OG_IMAGE,
  keywords = [],
}: PageMetaInput): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    keywords: [
      "Chelsey Fanning",
      "Realtor Post Falls Idaho",
      "North Idaho real estate",
      "eXp Realty Idaho",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: ogImageUrl.startsWith("http") ? ogImageUrl : `${BASE_URL}${ogImageUrl}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
