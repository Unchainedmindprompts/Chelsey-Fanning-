import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Fonts loaded from local npm packages — no Google Fonts network requests at build time.
const roboto = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/roboto/files/roboto-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/roboto/files/roboto-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/roboto/files/roboto-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chelsey Fanning | Realtor in Post Falls, Idaho | eXp Realty",
    template: "%s | Chelsey Fanning · Realtor · Post Falls, ID",
  },
  description:
    "Chelsey Fanning is a trusted REALTOR® based in Post Falls, Idaho, serving buyers and sellers across North Idaho — Coeur d'Alene, Hayden, Rathdrum, and Spirit Lake. eXp Realty.",
  metadataBase: new URL("https://chelseyfanning.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Chelsey Fanning · Realtor · Post Falls, ID",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Chelsey Fanning – Realtor in Post Falls, Idaho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "var(--color-base)", color: "var(--color-text)" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
