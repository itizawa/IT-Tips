const fs = require('fs');

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://it-tips.tech/sitemap.xml
Disallow:`;

fs.writeFile('out/robots.txt', robotsTxt, () => {
  // eslint-disable-next-line no-console
  console.log('robots.txt saved!');
});

// SITEMAP.XML
const location = 'https://it-tips.tech/';
let xmlPaths = `<url>
    <loc>${location}</loc>
    <priority>1.0</priority>
  </url>`;

// ページ名の配列
const pageData = [
  'about',
  'member',
  'gallery',
  'privacy',
  'contact',
  'blogs',
];

pageData.forEach((pagePath) => {
  const URL = location + pagePath;
  xmlPaths += `
    <url>
      <loc>${URL}</loc>
      <priority>0.5</priority>
    </url>
  `;
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    xmlns:geo="http://www.google.com/geo/schemas/sitemap/1.0"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${xmlPaths}
  </urlset>`;

fs.writeFile('out/sitemap.xml', sitemapXml, () => {
  // eslint-disable-next-line no-console
  console.log('sitemap.xml saved!');
});
