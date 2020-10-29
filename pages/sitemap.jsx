
const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://it-tips.tech',
  ignoredPaths: ['admin'],
  extraPaths: ['/extraPath'],
  pagesDirectory: `${__dirname}\\pages`,
  targetDirectory: 'static/',
  sitemapFilename: 'sitemap.xml',
  nextConfigPath: `${__dirname}\\next.config.js`,
  ignoredExtensions: [
    'png',
    'jpg',
  ],
});

// eslint-disable-next-line no-console
console.log('✅ sitemap.xml generated!');
