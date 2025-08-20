/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://taufikcrisnawan.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', userAgent: 'Googlebot', allow: '/ads.txt' }]
  },
  sitemapSize: 10000
}
