# nitendratech.github.io

Astro-built portfolio + blog. Edit pieces in `src/` — Astro assembles the site. See `WebsiteDetail.md` for the full file-by-file guide.

## Publish to GitHub Pages
1. Create a GitHub repo named `nitendratech.github.io` (username `nitendratech`).
2. Push this folder's contents to the `main` branch.
3. In repo Settings > Pages, set Source to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push. Site will be live at https://nitendratech.github.io/

## Local preview
```
npm install
npm run dev
```

## Weekly publishing
1. Add the topic to tracker.md first (check for repeats).
2. Add ONE Markdown file in `src/content/blog/` — the post page, blog index, footer recent posts, sitemap and RSS feed all generate from it.
3. Repurpose it: TikTok short, Instagram Reel + carousel, Facebook post + video — all with sanitised screenshots, linking back here.
4. Mark each channel Published in the tracker.

## Safety
No confidential sources. Only public knowledge, general experience, and sample/demo data.
