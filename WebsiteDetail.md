# Website Detail — nitendratech.github.io

How the site is organized, now that it is built with **Astro**.

**How it works in one line:** you edit organized pieces (components, one data file, Markdown posts) in `src/`, Astro assembles them into plain fast HTML in `dist/`, and GitHub Pages serves that HTML. Nothing is copy-pasted between pages anymore.

**Status:** LIVE since Nov 5, 2026 at https://nitendratech.github.io/ (pushed from the owner's Mac; Pages source set to GitHub Actions). The separate Portfolio page was removed Nov 3, 2026 at the owner's direction — the homepage career timeline already covers it, so the page was duplication. Links that pointed to it (footer "About", post "Related") now point to the homepage timeline (/#timeline). WordPress import in progress: HQL interview questions published Nov 5, Hadoop YARN commands drafted Nov 6 (see `tracker.md`). MIT certificate entry added to Education on the live site Nov 5; the certificate PDF (`public/docs/mit-certificate.pdf`, linked from that entry) was added to the local copy Nov 6 and goes live on the next push. Note: the owner's Mac repo is now ahead of this local copy in one respect (he added the MIT entry himself) — this local copy was synced to match it Nov 6, so do not push an older zip over the repo.

---

## Folder layout

```
nitendratech.github.io/
├── astro.config.mjs          Site config (site URL)
├── package.json              Project + the one dependency (astro)
├── public/                   Copied to the site as-is
│   ├── robots.txt
│   └── js/countup.js         Homepage stats count-up animation
├── src/
│   ├── components/           Reusable pieces — each defined ONCE
│   │   ├── Header.astro      The NG header
│   │   ├── Footer.astro      The footer (Recent Post list fills itself)
│   │   ├── PostCard.astro    One blog card
│   │   └── SkillBar.astro    One skill bar
│   ├── layouts/
│   │   └── BaseLayout.astro  Page shell: head/SEO + Header + page + Footer
│   ├── data/
│   │   └── site.js           ALL site facts in one file (see below)
│   ├── content/
│   │   ├── blog/             One Markdown file per post (welcome.md)
│   │   └── (config: src/content.config.ts — post fields/schema)
│   ├── pages/                One file = one route (URL)
│   │   ├── index.astro       Homepage  →  / (hero, stats, career timeline, skills, education, blog, contact)
│   │   ├── blog/index.astro  Blog list →  /blog/
│   │   ├── blog/[slug].astro Post template → /blog/<slug>/
│   │   ├── general-technology/index.astro General Technology section →  /general-technology/
│   │   ├── non-technical/index.astro Non-Technical section →  /non-technical/
│   │   ├── search/index.astro Search   →  /search/ (full-text + category filter)
│   │   ├── search-index.json.js Search index — GENERATED from the content
│   │   ├── sitemap.xml.js    Sitemap — GENERATED from the content
│   │   └── feed.xml.js       RSS feed — GENERATED from the content
│   └── styles/
│       └── global.css        The single stylesheet for the whole site
├── .github/workflows/
│   └── deploy.yml            Auto-build + deploy to GitHub Pages on push
├── content/tracker.md        Editorial tracker (same as tracker.md)
├── tracker.md                Topics, slugs, per-channel status
├── README.md                 Short publish + weekly workflow notes
└── WebsiteDetail.md          This file
```

Generated folders you never edit by hand: `dist/` (build output), `node_modules/`, `.astro/` — all listed in `.gitignore`.

---

## The four layers

### 1. Components (`src/components/`)
Each reusable piece lives in exactly one file. `Header.astro` is the only place the header exists; `Footer.astro` is the only place the footer exists. Every page includes them through the layout, so **editing the footer once updates every page on the next build** — this replaces the old copy-paste across 5 HTML files.

The footer's **Recent Post** list is automatic: it pulls the 5 newest posts from the blog collection. You never edit it by hand.

### 2. Layout (`src/layouts/BaseLayout.astro`)
The page shell every page uses: HTML head with title/description/canonical/Open Graph tags, then Header, then the page's own content, then Footer. A page file only contains what's unique to that page.

### 3. Content (`src/content/blog/`)
One Markdown file per blog post. Each starts with a small info block:

```yaml
---
title: "Welcome to my blog"
description: "Why I'm writing about…"
pubDate: 2026-10-01
category: "Data Engineering"
subcategory: "Intro"
---
```

…then the article in plain Markdown. The fields are checked against the schema in `src/content.config.ts`, so a missing title or bad date fails the build with a clear message instead of silently breaking a page.

The categories live in `src/data/site.js` — seven since Nov 4, 2026: Data Engineering · AI & ML Platforms · Cloud & Architecture · Core Tech & Programming · Engineering Leadership · General Technology · Non-Technical. (The sixth category was originally "Learning Notes"; the owner replaced it first with a combined "General", then split it the same day into **General Technology** (general tech topics) and **Non-Technical** (non-technology posts), each with its own section page. The old /notes/ page was removed.)

### 4. Data (`src/data/site.js`)
One file holds every fact the pages share: profile/contact, stats, skills, career timeline, education, categories. Change a job, a skill level, or a phone number here and it updates everywhere it appears. (Skill percentages are still flagged in a comment there as indicative, carried from the earlier site.)

---

## What generates itself

| Output | Source | You do |
|---|---|---|
| Blog index + homepage latest posts | blog collection | nothing |
| Footer "Recent Post" list | blog collection | nothing |
| `sitemap.xml` | pages + posts | nothing |
| `feed.xml` (RSS) | blog collection | nothing |
| Each post's page + Article JSON-LD | the post template | nothing |

## Adding a new post (the whole job)

1. Check `tracker.md` so the topic/slug isn't a repeat.
2. Add one file: `src/content/blog/<slug>.md` with the info block + article.
3. Push. The post page, blog index, homepage card, footer list, sitemap, and RSS all update in the build.

URLs are now clean Astro-style: `/blog/welcome/` instead of `/blog/welcome.html`.

## Local commands

```
npm install     # one time — installs Astro
npm run dev     # preview the site locally while editing
npm run build   # build into dist/ (what GitHub Pages will serve)
```

## Publishing

1. Create a GitHub repository named `nitendratech.github.io` under the `nitendratech` account.
2. Push this folder's contents to `main`.
3. In the repo: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`. Site goes live at https://nitendratech.github.io/

## Design characteristics (implemented)

1. **Clean, minimalist layout** — one stylesheet, no clutter; mobile-first responsive rules; readable typography (article text is 18px / 1.75 line-height in a 760px measure). **Single dark theme** — the original design (background #050810, dark navy/cyan/indigo). The light/dark toggle added Nov 3 was removed Nov 4 at the owner's direction; background stays the original dark design.
2. **Strong visual hierarchy** — distinct H1/H2/H3 sizes on pages and inside articles; footer carries the **Recent Post** list (automatic, newest 5).
3. **Content-first** — longer articles get an automatic **table of contents** (from their H2 headings) and every post shows **metadata: published date, estimated reading time, category/subcategory**.
4. **Simple navigation** — header nav (Career / Skills / Education / Blog / Search / Contact), footer **Categories**, and a **Search page** (`/search/`) with full-text search over all articles plus category filter chips, powered by the generated `search-index.json`.

## Content rules

- **No confidential sources** — only public knowledge, general experience, and sample/demo data.
- Screenshots on the site or social channels must be sanitized (no work systems, customer data, credentials).
- One core article per week, repurposed per channel (website, TikTok, Instagram, Facebook) and tracked in `tracker.md`.

## Optimizations applied (Nov 4, 2026)

- **Structured data:** `Person` schema (JSON-LD) on the homepage via BaseLayout's `schema` prop; `BlogPosting` schema on every article (headline, description, image, author, publisher, date, category).
- **Share previews:** every page now sends `og:image` + Twitter card tags pointing to `/images/og-default.png` (1200×630 branded card in `public/images/`). A page can override it with BaseLayout's `image` prop.
- **Custom 404:** `src/pages/404.astro` builds to `404.html` (GitHub Pages serves it automatically) with links to all articles, search, home, and the categories.
- Still open, needs the owner: GA4 measurement ID for the new property; Google Search Console verification + sitemap submission after launch.
