# Drafts — unpublished articles & work in progress

This folder is the writing desk for nitendratech.github.io. Everything here is
**unpublished**: files in this folder are never built into the website, and
posts marked `draft: true` never appear on the site, in search, in the RSS
feed, or in the sitemap.

## How it works

1. **Start** — copy `_template.md`, rename it to your article's slug
   (e.g. `spark-performance-tuning.md`), and write. Keep `draft: true` in the
   frontmatter.
2. **Work in progress** — edit freely, in as many sittings as you like. Add the
   article to the WIP list below with its status.
3. **Publish** — when it's ready, the file moves to `src/content/blog/` with
   `draft: false` and the real `pubDate`, gets added to `tracker.md`, and goes
   live with the next push.

## WIP list

| Status | Title | File | Notes |
| --- | --- | --- | --- |
| On hold — decision pending | Arrays in Bash Scripts | `arrays-bash-script.md` | WordPress original duplicated another article's body. A full rewrite draft exists; publish-the-rewrite vs. drop decision still open. |

## One caution

This GitHub repo is public (GitHub Pages), so drafts saved here are visible to
anyone who browses the repository — they are simply not on the website. Keep
anything truly sensitive out of this folder.
