import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every blog post is one Markdown file in src/content/blog/.
// The fields below (frontmatter) are the only "info block" a post needs —
// the blog index, sitemap and RSS feed are generated from them.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    subcategory: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
