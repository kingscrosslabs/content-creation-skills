# Product

What the site sells, who it's for, and how to talk about it. Every page the skills write is aimed at the reader described here and uses only the facts this file points to.

The full brand (strategy, audience, positioning, voice, vocabulary, claims rules) is in `../BRAND.md`. This file is the short version. When the two disagree, `../BRAND.md` wins.

## What it is

Content Creation Skills is a free, open-source (MIT) set of agent skills that write short-form video scripts, captions, X and Threads posts, LinkedIn posts, carousels and newsletters in the user's own voice. They run in Claude Code, Codex, Cursor and any agent that reads `SKILL.md` files. They plan, write, publish (through Adeli) and learn from what performed.

## Who it's for

Founders, marketers and creators who post on social and already use an AI agent. They have a point of view and a backlog of ideas, and not enough hours to turn them into posts every week. They believe consistent posting compounds, and that AI should be able to help without making them sound like everyone else. They're skeptical of "AI content" that reads like AI content, ghostwriting that loses their voice, and tools that post without asking.

## Who it isn't for

- Anyone who wants a fully automated content farm.
- Anyone who wants to post under someone else's voice.

## What makes it different

- **Your voice, from your files.** Every skill first reads a `content/` folder about you: your voice, pillars, reader and point of view.
- **It learns from your winners.** Your best-performing posts are filed by format and read by the skills for that format.
- **Format first, platform second.** The format sets the rules, and each skill knows the platform details.
- **You stay the author.** Hooks, outlines and drafts wait for your approval. Nothing posts without a yes.
- **Free and open source.** MIT licence.

## Voice

The King's Cross Labs company voice: direct, practical, on the creator's side, builder to builder. The brand rules, the vocabulary table and the banned words are in `../BRAND.md` → Voice. In short: say what the skill makes before why it helps, name the real platforms, talk about the reader's voice (not "brand voice"), and never promise virality, followers or growth numbers.

## Where the true facts live

| Fact | Source of truth |
|---|---|
| Pricing | Free, MIT (`../../LICENSE`). There is no paid tier and no pricing on the site (`../BRAND.md` → Calls to action). Adeli and LedaChat, the services the publishing, stats and DM skills use, are separate KCL products |
| What's live vs. coming soon | Each skill's `status` in `../src/data/site.ts`, which must match the repo `README.md` |
| Approved claims and FAQs | The `faqs` in `../src/data/site.ts`, and `../BRAND.md` → Governance → Claims |
| What the product actually does | Each skill's `SKILL.md` in `../../skills/`, and the repo `README.md` |

## Proof you can cite

- Built by Mika Reyes at King's Cross Labs. These are the skills KCL uses every week for Mika's own content (`../BRAND.md`).
- <!-- GitHub stars and install counts, once they're worth citing, with a date. -->
