# content-creation-skills

Agent skills for founders, marketers and creators who post on Instagram, TikTok, YouTube Shorts, LinkedIn, X, Threads and Substack. They work in Claude Code, Codex, Cursor and any agent that reads `SKILL.md` files.

The skills write in your voice, from your point of view, for your reader. They do this by reading a small `content/` folder you keep in your own project. They learn from your best-performing posts, which you save as "winners", and you approve every hook, outline and draft. You stay the author.

Built by [Mika Reyes](https://mikareyes.com) ([@its.mikareyes](https://instagram.com/its.mikareyes)) at King's Cross Labs. These are the skills I use for my own content every week.

## Skill map

```
                                 ┌─────────────────────────────────┐
                                 │         content/ context        │
                                 │   (read by every skill first)   │
                                 │      built by content-setup     │
                                 └────────────────┬────────────────┘
                                                  │
        ┌────────────────┬────────────────┬───────┴────────┬────────────────┬────────────────┐
        ▼                ▼                ▼                ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  Short-Form  │ │  Short-Form  │ │  Long-Form   │ │  Newsletter  │ │    Visual    │ │  Plan, Ship  │
│    Video     │ │     Text     │ │     Text     │ │              │ │              │ │   & Learn    │
│(IG,TT,Shorts)│ │  (X, Notes)  │ │(LinkedIn, X) │ │(Substack, X) │ │(IG, LinkedIn)│ │(all formats) │
├──────────────┤ ├──────────────┤ ├──────────────┤ ├──────────────┤ ├──────────────┤ ├──────────────┤
│ hook         │ │ post         │ │ hook         │ │ post         │ │ carousel     │ │ ideas        │
│ script       │ │ from-        │ │ post         │ │ format       │ │ infographic  │ │ planning     │
│ caption      │ │   newsletter │ │              │ │              │ │              │ │ publish      │
│              │ │              │ │              │ │              │ │              │ │ wins         │
└───────┬──────┘ └───────┬──────┘ └───────┬──────┘ └───────┬──────┘ └───────┬──────┘ └───────┬──────┘
        │                │                │                │                │                │
        └────────────────┴────────────────┴───────┬────────┴────────────────┴────────────────┘
                                                  │
                             ┌─────────────────────────────────────────┐
                             │        content/winners/<bucket>/        │
                             │     one file per winner, written by     │
                             │   content-wins from your Adeli stats,   │
                             │    read only by that bucket's skills    │
                             └─────────────────────────────────────────┘
```

Skills are grouped by format, not platform: the format sets the rules, and each skill has a `references/platforms.md` for platform details. The group is the name prefix (`short-form-video-hook`, `long-form-text-post`), so every skill sits one level down in `skills/`.

Skills hand off to each other:

```
short-form-video-hook → short-form-video-script → short-form-video-caption
long-form-text-hook   → long-form-text-post
newsletter-post       → newsletter-format → short-form-text-from-newsletter
content-ideas         → content-planning  → any bucket's skills
content-publish       → content-wins      → content/winners/<bucket>/
```

## Skills

✅ available now · 🔜 coming soon

**Short-form video (Instagram Reels, TikTok, YouTube Shorts)**
- ✅ [`short-form-video-hook`](skills/short-form-video-hook/): 10 opening-line options for one topic, as a tutorial (how-to) or an authority take (borrowed credibility plus a contrarian claim).
- ✅ [`short-form-video-script`](skills/short-form-video-script/): a full talking-head script, under 60 seconds, from the hook you chose.
- 🔜 `short-form-video-caption`: the caption under the video, with a keyword-rich first line, the value and a CTA.

**Short-form text (X, Substack Notes, Threads)**
- ✅ [`short-form-text-post`](skills/short-form-text-post/): a short post from a raw idea. You pick from three drafts, then get a version for each platform.
- 🔜 `short-form-text-from-newsletter`: turns one newsletter issue into a batch of short posts that link back to it.

**Long-form text (LinkedIn, long X posts)**
- ✅ [`long-form-text-hook`](skills/long-form-text-hook/): 10 opening lines built for the feed, in full sentences with credibility up front.
- ✅ [`long-form-text-post`](skills/long-form-text-post/): a full post built to be saved. Every post gives the reader one thing they can reuse.

**Newsletter (Substack, X Articles)**
- ✅ [`newsletter-post`](skills/newsletter-post/): takes an idea or voice notes through a brainstorm, an outline and a 1,000–1,500-word draft, with your approval at each step.
- 🔜 `newsletter-format`: final formatting with no rewriting: title and subtitle options, buttons, links and a footer.

**Visual (Instagram and LinkedIn feed)**
- 🔜 `visual-carousel`: the slide-by-slide text for a swipeable carousel.
- 🔜 `visual-infographic`: an animated infographic (system map, timeline, before/after, steps).

**Plan, ship and learn**
- 🔜 `content-setup`: builds your `content/` folder by interviewing you, linking files you already have, or drafting from your past posts.
- 🔜 `content-ideas`: finds post ideas in your recent notes and work, sorted by bucket.
- 🔜 `content-planning`: turns ideas into a two-week calendar with the right format mix and posting cadence.
- 🔜 `content-publish`: posts or schedules approved content through [Adeli](https://tryadeli.com). It asks before every post.
- 🔜 `content-wins`: pulls your post stats through Adeli, picks the winners, and files each one in `content/winners/<bucket>/`.

## Install

```bash
npx skills add kingscrosslabs/content-creation-skills
```

You can install all of the skills or pick some. Or clone the repo and copy the skill folders into your agent's skills folder (for Claude Code, `.claude/skills/`).

## Set up your content context

Every skill starts by reading your `content/` folder. Until `content-setup` ships, create it by hand:

```
content/
├── README.md              # index: which files to read for which task
├── creator-ikigai.md      # who you are, your pillars, voice, words you never use
├── pov.md                 # your core point of view and the beliefs under it
├── persona.md             # the one reader you write for
├── story-bank/            # optional: your stories, and ones you borrow with credit
└── winners/               # your best posts, one file per post
    ├── short-form-video/
    ├── short-form-text/
    ├── long-form-text/
    ├── newsletter/
    └── visual/
```

- **Minimum:** `creator-ikigai.md`, `pov.md` and `persona.md`. Everything else is optional, and skills skip what isn't there.
- **Somewhere else?** If your context lives in another folder, add a line to your project's `CLAUDE.md` or `AGENTS.md`: `Content context: path/to/folder`.
- **No context yet?** The skill offers to ask you three quick questions and write a clearly labeled generic version.

### Winners

A winner is one post that did well. Save it as `content/winners/<bucket>/YYYY-MM-DD-<slug>.md`:

```markdown
---
platform: instagram
format: talking-head reel
url: https://...
posted: 2026-11-04
stats: { views: 120000, saves: 3400, shares: 900, follows: 610 }
hook_type: authority
---

## Why it won
One to three lines.

## Hook
## Script / Post
## Caption
```

Each bucket also has a `README.md` with one line per winner, newest first. A skill reads that index, then opens the 3–5 winners closest to your topic. It copies their patterns, never their words. Until you have winners, each skill uses the starter examples in its own `references/` folder.

Your winners live in your project, not in this repo, so updating the skills never overwrites them.

## Publishing and stats with Adeli

The writing skills work on their own. The skills that take an action, `content-publish` and `content-wins`, use [Adeli](https://tryadeli.com): one API and MCP for your Instagram, TikTok, YouTube, LinkedIn, X and Facebook accounts. Connect your accounts once, and your agent can post, schedule and pull the stats that feed your winners.

## Contributing

Issues and pull requests are welcome, especially new starter examples, platform updates and fixes where a skill's method falls short.

## License

MIT
