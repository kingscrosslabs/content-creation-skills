# Query bank

Every search query and AI prompt considered for this site, in one place, so nobody researches or targets the same thing twice. Every page skill reads it before planning or writing.

**Rules**
- Log a query the moment someone thinks of it, even unvalidated, with source `hypothesis`.
- Before writing a page, set its target query to `targeted: <slug>`.
- One page owns one primary query. Other queries in its cluster become its H2s and FAQs.
- Write queries in lowercase, exactly as people type them. Autocomplete wording beats your wording.
- Search data from OpenSEO goes in the Data column as `volume <n>, KD <kd>, <YYYY-MM>`. Reuse it for 90 days before paying for it again.

**Columns**
- **Source:** `hypothesis` (a guess), `autocomplete` (Google suggests it), `volume` (a measured number), `search-console` (the site already gets impressions for it), `ai-prompt` (a prompt you check in ChatGPT, Perplexity and Claude)
- **Intent:** `pain` (stuck, closest to buying), `eval` (comparing options), `learn` (early research)
- **Status:** `open`, `targeted: <slug>`, `answered-by: <slug>` (covered as an H2 or FAQ), `skip: <reason>`

## How to pick a query

Treat each query as a hypothesis. Each step is a cheaper test than writing the page.
1. **Does anyone type it?** Check autocomplete. If Google never suggests the phrasing, reword it or keep it as an FAQ.
2. **How many people?** Pull volume and difficulty from OpenSEO. For niche technical queries, compare volumes within a cluster rather than judging the absolute number.
3. **Can you win it?** Read the live results. Stale posts, thin docs or unanswered threads mean you can. Strong, current guides mean pick another query.
4. **Can you say something nobody else can?** Check `experience-bank.md`. A page built on first-hand material beats a generic guide.
5. **After publishing, measure.** Log new queries Search Console shows for the page, with source `search-console`.

---

<!-- One section per cluster. Copy the table. -->

## <!-- Cluster name -->

| Query | Source | Intent | Data | Status |
|---|---|---|---|---|
<!-- Example: | invoicing api | volume | eval | volume 880, KD 34, 2026-01 | targeted: invoicing-api-guide | -->
