import { getCollection } from 'astro:content';

// Full-text search index, generated at build time from the blog
// collection (title, description, category, and article body).
export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const index = posts.map((p) => ({
    title: p.data.title,
    description: p.data.description,
    category: p.data.category,
    subcategory: p.data.subcategory ?? '',
    url: `/blog/${p.id}/`,
    date: p.data.pubDate.toISOString().slice(0, 10),
    text: (p.body ?? '').replace(/[#>*`_-]/g, ' ').replace(/\s+/g, ' ').trim(),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
