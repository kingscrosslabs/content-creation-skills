# content-creation-skills.com

The one-page website for this repo. Static [Astro](https://astro.build), no client framework, one tiny script (the copy button).

- Brand: [`BRAND.md`](./BRAND.md) · Visual system: [`DESIGN.md`](./DESIGN.md)
- Every primary CTA is "Star on GitHub" and points at the repo.

## Run it

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # checks the skill list, then builds to dist/
```

Needs Node 22.12 or newer.

## Where things live

| File | What it holds |
|---|---|
| `src/data/site.ts` | All copy: hero, explainer, skill list and statuses, agents, FAQs |
| `src/styles/tokens.css` | The accent colour (blue). The only stylesheet unique to this site |
| `public/` | Favicon, robots.txt, llms.txt, Satoshi font files |
| everything else in `src/` | Shared with the [aeo-seo-skills](https://github.com/kingscrosslabs/aeo-seo-skills) site. Change both together |

## Keeping the skill list in sync

`npm run build` runs `scripts/check-skills.mjs` first. It fails if a folder in `../skills/` isn't listed in `src/data/site.ts`, or if a listed skill has no folder (skills marked `hasFolder: false` are allowed). When you add a skill: add its folder, add it to `site.ts`, and update its status when the README changes.

## Deploy

Vercel (or any static host): set the project's root directory to `site`, build command `npm run build`, output `dist`. Point content-creation-skills.com at it.
