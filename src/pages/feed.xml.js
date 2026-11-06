import { getCollection } from 'astro:content';

// RSS feed, generated at build time from the blog collection.
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET({ site }) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  const items = posts
    .map((p) => {
      const link = new URL(`blog/${p.id}/`, site).href;
      return `<item><title>${esc(p.data.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${p.data.pubDate.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`;
    })
    .join('\n');
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0"><channel><title>NitendraTech Blog</title>` +
    `<link>${site.href}</link>` +
    `<description>Sharing knowledge with the world — data engineering, AI/ML platforms, cloud architecture, and engineering leadership.</description>\n` +
    `${items}\n</channel></rss>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
