/** @type {import('next-sitemap').IConfig} */
const config = {
  // 1. Set your domain
  siteUrl: "https://intoai.co.in",

  // 2. Generate robots.txt
  generateRobotsTxt: true,

  // 3. MUST match your next.config.js
  trailingSlash: true,

  // 4. Tell it to put the sitemap in the 'out' folder
  outDir: "./out",
};

// Use 'export default' instead of 'module.exports'
export default config;
