---
name: Content Creation Skills Website
description: Visual system for content-creation-skills.com, the one-page site for the open-source content-creation-skills repo.
brand: ./BRAND.md
version: 1
colors:
  accent: "#4D8DFF"
  accent-press: "#6A9FFF"
  ink: "#0C0B0A"
  surface: "#151311"
  surface-2: "#1D1A17"
  line: "#2E2A26"
  line-strong: "#4A443E"
  text: "#F3ECE4"
  muted: "#A0968B"
  status-available: "#6FD098"
  status-building: "#FACF5A"
  on-accent: "#0C0B0A"
typography:
  display:
    fontFamily: Satoshi
    fontSize: clamp(44px, 7vw, 84px)
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.034em
  h2:
    fontFamily: Satoshi
    fontSize: clamp(32px, 4.4vw, 48px)
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.034em
  h3:
    fontFamily: Satoshi
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.03em
  lead:
    fontFamily: Hanken Grotesk
    fontSize: clamp(18px, 2vw, 21px)
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.01em
  body:
    fontFamily: Hanken Grotesk
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: 500
    letterSpacing: 0.06em
    textTransform: uppercase
  code:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: 400
rounded:
  card: 5px
  chip: 5px
  terminal: 5px
  pill: 100px
spacing:
  gutter-mobile: 20px
  gutter-desktop: 40px
  section: clamp(64px, 10vw, 112px)
  gap: 20px
  max-width: 1120px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text}"
    border: 1px solid {colors.line-strong}
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.line}
    rounded: "{rounded.card}"
    padding: 24px
  terminal:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.line}
    typography: "{typography.code}"
    rounded: "{rounded.terminal}"
---

## Overview

This file is the visual system for **content-creation-skills.com**. It expresses the
[Content Creation Skills brand](./BRAND.md) on one surface: a single dark landing page
whose only job is to explain what the skills do and send people to the GitHub
repo.

It is scaffolded from the mikareyes.com design system (Satoshi displays, Hanken
reads, flat surfaces, 5px structure, pill buttons, tight negative tracking) and
changes two things on purpose:

1. **The ground is dark.** Warm near-black, not linen. The page reads like a
   terminal you trust, which suits a product that lives in a terminal.
2. **The one action colour is blue** `#4D8DFF`, not red.

The sister site, aeo-seo-skills.com, runs the same system with orange.
The two should look like siblings: same skeleton, different accent. If a change
here is structural (a component, a spacing rule), make it on both.

## Colors

### The one action colour

Blue `#4D8DFF` fills every primary action and nothing else competes with it.
It also marks the brand glyph, the highlighted half of the hero headline, the
`$` prompt in the terminal, and focus rings. It never fills a card or a section
band; on a dark page a large blue area is louder than any button on it.

Type on blue is **ink** `#0C0B0A` (6.15:1). White on blue is 3.20:1 and
fails, so never use it. Blue as text on ink is 6.15:1, so it is allowed for
short highlights (a word in a headline, a prompt glyph), never for paragraphs.

### Neutrals

| Token | Hex | Job |
|---|---|---|
| ink | `#0C0B0A` | The page. Warm near-black, never pure `#000`. |
| surface | `#151311` | Cards, terminal, FAQ rows. One tonal step up. |
| surface-2 | `#1D1A17` | Hover and pressed states on surfaces. |
| line | `#2E2A26` | Every hairline and card border. |
| line-strong | `#4A443E` | Secondary button border, dividers that must read. |
| text | `#F3ECE4` | Headings and body (16.8:1 on ink). Warm, not white. |
| muted | `#A0968B` | Captions, meta, small print (6.8:1 on ink). |

The neutrals are warm on purpose: they come from the mikareyes.com linen and
charcoal ramp, darkened. A cool grey (`zinc`, `slate`) makes the page look like a
different product.

### Status colours

Two colours exist only for the skill status badges, and only as a small dot plus
text label, so nobody needs the colour to read the status:

- Available: green `#6FD098`
- In progress: yellow `#FACF5A`
- Coming soon: muted `#A0968B`

They never appear anywhere else.

## Typography

Satoshi for display, Hanken Grotesk for reading, JetBrains Mono for code and
skill names. Satoshi ships in two weights (Medium 500, Bold 700); hierarchy comes
from size and tracking, not a third weight.

| Role | Size | Tracking |
|---|---|---|
| display | clamp(44px, 7vw, 84px) | -0.034em |
| h2 | clamp(32px, 4.4vw, 48px) | -0.034em |
| h3 | 22px | -0.03em |
| lead | clamp(18px, 2vw, 21px) | -0.01em |
| body | 17px | 0 |

Monospace is new relative to mikareyes.com and is allowed in exactly three
places: the install command, skill names (`short-form-video-hook`), and inline code in FAQ
answers. Skill names are always mono because people will type them.

## Layout

One column, max width 1120px, 20px mobile gutters and 40px desktop gutters.
Sections are separated by `clamp(64px, 10vw, 112px)` of space and a 1px `line`
hairline, never by a change of background.

Breakpoints: 640px and 960px. Nothing else.

Section order is fixed: nav, hero, what are content creation skills, skills, works with
your agent, FAQ, footer.

Card grids are `repeat(auto-fill, minmax(300px, 1fr))` with a 20px gap.

## Elevation & Depth

Flat. Surfaces separate by tonal step and hairline, never by shadow or glow.
No gradients, including radial "hero glows". The only exception is the sticky
nav, which uses a translucent ink background with backdrop blur so content can
scroll under it.

## Shapes

5px on everything structural: cards, chips, terminal, FAQ rows. Pill radius
(100px) is for buttons only. A rounded-xl card reads as a different system.

Decoration is limited to a few outlined accent shapes (sparkle, ring, squiggle)
in the hero gutters, `aria-hidden`, hidden below 960px so they never land on
text, and still under `prefers-reduced-motion`.

## Components

- **Primary button.** Blue ground, ink text, Hanken 600, pill radius, `★` or
  `→` glyph. Every primary button on this site says **Star on GitHub** and
  links to the repo. Hover lifts 2px; active scales to 0.98.
- **Secondary button.** Transparent, 1px `line-strong` border, text colour. Used
  only for in-page jumps ("See the skills").
- **Terminal.** Surface ground, hairline border, a title bar with three muted
  dots, a blue `$`, the command in mono, and a copy button on the right.
  The copy button is the only JavaScript on the page.
- **Skill card.** Surface ground, hairline border, mono skill name, one-sentence
  blurb, status badge. Hover moves the border to `line-strong` and lifts 2px.
  Cards link to the skill folder on GitHub until each skill has its own page.
- **Agent tile.** Text-only tile with the agent name. No vendor logos.
- **FAQ row.** Native `<details>`, surface ground, `+` that rotates to `×`.
  Every question is also emitted as FAQPage JSON-LD.
- **Eyebrow.** Uppercase Hanken 13px, muted, prefixed with a blue `✦`.

Icons are text glyphs only: `★ → ✦ + $`. No icon library.

## Do's and Don'ts

**Do**

- Keep every primary CTA as "Star on GitHub" pointing at the repo.
- Use ink type on blue, always.
- Keep the page static: no client framework, one tiny copy script.
- Ship FAQPage and SoftwareSourceCode JSON-LD with the page, and keep it
  passing the sister project's technical audit.
- Gate all motion on `prefers-reduced-motion`.

**Don't**

- Don't put white text on blue.
- Don't add a second accent colour, a gradient, a glow or a shadow.
- Don't use blue for body text or large fills.
- Don't use pure black `#000` or a cool grey.
- Don't add vendor logos to the agent grid without each vendor's brand
  permission.
- Don't let the two sister sites drift structurally. Accent and copy differ;
  the skeleton is shared.
