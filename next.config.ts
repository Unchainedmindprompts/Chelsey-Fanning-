import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static page generation for blog posts
  // output: "standalone", // Uncomment for Docker deployment; leave off for Vercel

  // Image optimization
  images: {
    // TODO: Add external image domains if needed (e.g., MLS photos)
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  // Allow MDX imports in the future if needed
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
