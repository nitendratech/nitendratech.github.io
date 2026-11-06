import { getCollection } from 'astro:content';

// Generated at build time from the real pages + blog collection,
// so the sitemap can never drift out of sync with the site.
export async function GET({ site }) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const lastPage = Math.ceil(posts.length / 10);
  const pagerPaths = [];
  for (let n = 2; n <= lastPage; n++) pagerPaths.push(`blog/page/${n}/`);
  const staticPaths = ['', 'blog/', ...pagerPaths, 'general-technology/', 'non-technical/'];
  const urls = [
    ...staticPaths.map((p) => new URL(p, site).href),
    ...posts.map((p) => new URL(`blog/${p.id}/`, site).href),
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `<url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
