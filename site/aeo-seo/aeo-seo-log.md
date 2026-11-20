# AEO/SEO log

A dated record of every AEO and SEO change, decision and measurement for this site. Read it before any AEO/SEO work, so nothing gets redone and no settled decision gets reopened. Anyone who changes something, agent or human, adds a line.

**How to add an entry**
- Newest day at the top. One bullet per item, tagged:
  `[change]` shipped to the site · `[decision]` a choice and why · `[research]` data pulled or reviewed · `[baseline]` a measurement to compare against later.
- Standing decisions also go in the Decisions table, so nobody has to read the whole log to find them.
- Write dates as YYYY-MM-DD. Never "today" or "last week".

---

## Decisions (standing)

These win over the skills' default rules when they conflict.

| Date | Decision | Why | Revisit when |
|---|---|---|---|
| 2026-11-19 | The goal of search is GitHub stars and `npx skills add` installs. Not leads, not signups. | The site's only CTA is "Star on GitHub" | The site gets a second CTA |
| 2026-11-19 | AI answer engines (ChatGPT, Perplexity, Claude, Google AI Overviews) come first; Google rankings second. | People ask their agent which skills to install | AI referrals stay at zero after 3 months of pages |
| 2026-11-19 | Keep this profile public, in `site/aeo-seo/`. | It's a live example of the skills running on their own site | Something in it needs to be private |
| 2026-11-19 | Every change ships through a branch and a PR that Mika merges. Never push to main. | Every change so far has shipped that way | Never |
| 2026-11-20 | Use Vercel Web Analytics for site visits, AI referrers included, and GitHub Insights → Traffic for repo referrers. | Nothing measured visits before | A signup or email CTA is added |
| 2026-11-19 | A change to a shared component in `site/src/` gets made in aeo-seo-skills too. | The two sites share one design system (`site/README.md`) | The sites split |

---

## Log

### 2026-11-20
- [research] Technical audit: overall D+ (A F, B D+, C A, D F). Report: research/audits/technical-audit-2026-11-20.html. Evidence: research/audits/2026-11-20/.
- [research] Search Console URL inspection: homepage "Submitted and indexed", Google's canonical matches ours.
- [decision] Add analytics (Vercel Web Analytics). The missing script wasn't on purpose (Mika, 2026-11-20).

### 2026-11-19
- [baseline] Search Console (sc-domain:content-creation-skills.com), 2026-10-20 to 2026-11-16: 0 impressions, 0 clicks. The site launched on 2026-11-19 (PR #2), so this is the true zero.
- [change] Created the OpenSEO project "Content Creation Skills" (US / English) and connected the Search Console property.
- [research] Live site check: sitemap index, robots.txt, `llms.txt`, JSON-LD (WebSite, Organization, SoftwareSourceCode, FAQPage), and canonical tags are all there. Missing: `og:image`, `llms-full.txt`, `.md` mirrors, RSS, IndexNow. These are for `aeo-seo-technical-audit`.
- [decision] Built this profile with `aeo-seo-setup`.
