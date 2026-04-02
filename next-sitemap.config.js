/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://chelseyfanning.com",
  generateRobotsTxt: false, // We manage robots.txt manually in /public
  outDir: "public",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  additionalPaths: async () => [
    {
      loc: "/blog/first-time-buyer-post-falls",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: "2024-12-01",
    },
    {
      loc: "/blog/north-idaho-market",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: "2024-11-15",
    },
    {
      loc: "/blog/sellers-guide-cda",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: "2024-10-28",
    },
  ],
  transform: async (config, path) => {
    // Higher priority for core pages
    const highPriority = ["/", "/about", "/buyers", "/sellers", "/testimonials", "/contact"];
    const priority = highPriority.includes(path) ? 1.0 : config.priority;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
