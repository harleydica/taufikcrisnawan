/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://taufikcrisnawan.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  },
  sitemapSize: 10000
}
