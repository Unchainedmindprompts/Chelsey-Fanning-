/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://chelseyfanning.com",
  generateRobotsTxt: false, // We manage robots.txt manually in /public
  outDir: "public",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
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
