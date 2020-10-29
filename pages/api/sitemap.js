import axios from 'axios';

const generateSitemap = (posts) => {
  let xml = '';
  const location = 'https://it-tips.tech/blogs/';

  posts.forEach((post) => {
    const { publishedAt, id } = post;
    // YYYY-MM-DD
    xml += `<url>
          <loc>${location}${id}</loc>
          <lastmod>${publishedAt}</lastmod>
          <priority>0.50</priority>
        </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${xml}
      </urlset>`;
};

export default async(req, res) => {
  // Replace your code
  const key = {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
    data: {},
  };
  const { data } = await axios.get(
    'https://itizawa.microcms.io/api/v1/blogs?orders=-publishedAt&limit=1000',
    key,
  );
  const { contents } = data;
  const sitemap = generateSitemap(contents);
  res.setHeader('content-type', 'application/xml');
  res.write(sitemap);
  res.end();
};
