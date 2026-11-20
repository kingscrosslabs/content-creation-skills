# Site

The facts about the website itself. The skills read this to know where pages go, how to check and ship them, and what the site already does on its own.

## Basics

- **Domain:** https://content-creation-skills.com (no www; www and http both 308 to it)
- **Brand suffix:** " | Content Creation Skills" (26 characters, so the page part of a title gets 34). The homepage drops it ("Content creation skills for AI agents"), because the brand name is already the title (2026-11-20).
- **Primary goal:** GitHub stars and `npx skills add kingscrosslabs/content-creation-skills` installs from non-branded search. AI answer engines (ChatGPT, Perplexity, Claude, Google AI Overviews) come first, Google rankings second.
- **Languages and regions:** English, US first

## Stack

- **Framework and hosting:** Astro 6, fully static, no client framework, on Vercel (project root directory `site`, output `dist`). Needs Node 22.12+.
- **Repo and app folder:** this repo (`kingscrosslabs/content-creation-skills`), `site/`
- **Dev server:** `cd site && npm run dev`, http://localhost:4321
- **Design system:** `site/src/components/` and `site/src/styles/global.css`, documented in `site/DESIGN.md`. The blue accent is in `site/src/styles/tokens.css`. Everything in `src/` except `data/site.ts` and `styles/tokens.css` is shared with aeo-seo-skills.com.

## Where each page type lives

The site is one page today. All of its copy (hero, explainer, skill list, FAQs) is in `site/src/data/site.ts`, rendered by `site/src/pages/index.astro`.

| Page type | URL pattern | Source file or folder | Copy this one |
|---|---|---|---|
| Home (landing) | `/` | `site/src/pages/index.astro` + `site/src/data/site.ts` | n/a |

<!-- No blog, comparison, feature or use-case pages yet. The page skills offer to create the first one; add its row here when they do. -->

- **List of every page:** the live https://content-creation-skills.com/sitemap-index.xml (built by `@astrojs/sitemap`)
- **Authors:** Mika Reyes (https://mikareyes.com) is the only byline, set as the JSON-LD `author` in `site/src/layouts/Base.astro`. The site speaks in the King's Cross Labs company voice, with Mika credited as the author.

## Commands

| Step | Command | Notes |
|---|---|---|
| Scaffold a post | none | No blog yet; the skill copies a template by hand |
| Check a page | `npm run check:seo` (after a build) | Title ≤ 60, description 110–160 and not the title, one H1, canonical and og:url on the host, og:image, JSON-LD parses. `npm run check:skills` checks the skill list matches `skills/` |
| Build | `npm run build` | Runs `check:skills`, `astro build` to `dist/`, then `check:seo`. No side effects: IndexNow runs from GitHub Actions after a production deploy, never from a build |

## Shipping

- **How a page goes live:** every change goes to a branch and a pull request on `kingscrosslabs/content-creation-skills`. Mika reviews and merges, and merging to main deploys to Vercel.
- **Never:** push to main. Change a shared component (anything in `src/` other than `data/site.ts` and `styles/tokens.css`) without making the same change in aeo-seo-skills. Add a CTA other than "Star on GitHub" (`site/BRAND.md`).
- **After deploy:** https://content-creation-skills.com/ and `/llms.txt` load, and any skill whose status changed matches the repo README.

## What the site does automatically

Checked against the live site on 2026-11-19.

- [x] Sitemap (`/sitemap-index.xml` → `/sitemap-0.xml`; `/sitemap.xml` is a 404)
- [x] robots.txt (allows all, points to the sitemap index)
- [x] `llms.txt` / `llms-full.txt` (generated from `site.ts` by `site/src/lib/markdown.ts`, 2026-11-20; live after the audit-fix PR merges)
- [x] A Markdown mirror of each page (`/index.md`, 2026-11-20)
- [x] JSON-LD (standalone Organization with logo and sameAs, Person, WebSite, SoftwareSourceCode, FAQPage; no Article or BreadcrumbList because there are no articles yet)
- [x] Open Graph and share images (`site/public/og.png`, 1200×630, `summary_large_image`, 2026-11-20)
- [ ] RSS
- [x] IndexNow ping on deploy (`.github/workflows/indexnow.yml`, 2026-11-20; confirm the first run succeeds)
- [x] Canonical tags and one canonical host

## Search data

- **OpenSEO project:** Content Creation Skills (https://app.openseo.so/p/0598c595-14ec-4c48-81b7-175cce160657), US / English
- **Search Console property:** sc-domain:content-creation-skills.com, read through mika@kingscrosslabs.com
- **Bing Webmaster Tools:** connected, sitemap submitted (Mika confirmed 2026-11-20)

### New domain setup checklist

- [x] Verified in Google Search Console (confirmed 2026-11-20)
- [x] Sitemap submitted in Google Search Console (URL inspection shows "Submitted and indexed", 2026-11-20)
- [x] Verified in Bing Webmaster Tools, sitemap submitted (Mika confirmed 2026-11-20)
- [x] Submitted to Brave Search (https://search.brave.com/submit-url) (Mika, 2026-11-20)
- [ ] IndexNow pings Bing on every production deploy <!-- Workflow added 2026-11-20; tick once the first production run logs 200 or 202 -->
- **Credit budget:** <!-- Not set. Account balance was 19,811 credits on 2026-11-19, shared with the Adeli, LedaChat and Mika Reyes projects. -->
