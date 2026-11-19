// Everything on content-creation-skills.com that is specific to this site lives here.
// The components are shared with aeo-seo-skills.com; only this file,
// src/styles/tokens.css and public/ differ between the two.

export type Status = "available" | "building" | "soon";

export interface Skill {
  slug: string;
  blurb: string;
  status: Status;
  /** false for skills that don't have a folder in the repo yet */
  hasFolder?: boolean;
}

export interface SkillGroup {
  name: string;
  note?: string;
  skills: Skill[];
}

const repo = "https://github.com/kingscrosslabs/content-creation-skills";

export const site = {
  name: "Content Creation Skills",
  wordmark: "content-creation-skills",
  url: "https://content-creation-skills.com",
  repo,
  skillsPath: `${repo}/tree/main/skills`,
  install: "npx skills add kingscrosslabs/content-creation-skills",
  title: "Content creation skills for AI agents | Content Creation Skills",
  description:
    "Open-source agent skills that write hooks, scripts, posts and newsletters in your voice for Instagram, TikTok, LinkedIn, X, Threads and Substack. Works in Claude Code, Codex and Cursor.",

  hero: {
    eyebrow: "Open source · MIT · By King's Cross Labs",
    headline: "Content creation skills",
    highlight: "for AI agents",
    sub: "Skills that write hooks, scripts, posts and newsletters in your voice, for Instagram, TikTok, LinkedIn, X, Threads and Substack. They learn from your best posts. You approve every draft.",
  },

  what: {
    heading: "What are content creation skills?",
    body: [
      "A skill is a folder with a <code>SKILL.md</code> file that teaches your AI agent one job, step by step. Install it once and your agent knows when to use it.",
      "These skills teach it your content workflow. Before writing a word, they read a small <code>content/</code> folder about you: your voice, your pillars, your reader and the posts that worked. So drafts sound like you, not like a chatbot, and you stay the author.",
    ],
    steps: [
      {
        title: "Install the skills",
        body: "One command adds them to Claude Code, Codex, Cursor or any agent that reads <code>SKILL.md</code>.",
      },
      {
        title: "Build your content folder",
        body: "<code>content-setup</code> interviews you, links files you already have, or drafts from your past posts. It writes a <code>content/</code> folder every skill reads first.",
      },
      {
        title: "Ask for a post",
        body: "“Give me hooks for a reel about my morning routine.” “Turn this newsletter into X posts.” Your agent picks the right skill and stops for your approval.",
      },
    ],
  },

  skillsSection: {
    heading: "Popular content creation skills",
    sub: "Grouped by format, not platform: the format sets the rules, and each skill knows the platform details. They hand off to each other, from hook to script to caption.",
  },

  groups: [
    {
      name: "Short-form video · Reels, TikTok, Shorts",
      skills: [
        {
          slug: "short-form-video-hook",
          blurb: "10 opening lines for one topic, as a how-to or as an authority take with a contrarian claim.",
          status: "available",
        },
        {
          slug: "short-form-video-script",
          blurb: "A full talking-head script under 60 seconds, written from the hook you picked.",
          status: "available",
        },
        {
          slug: "short-form-video-caption",
          blurb: "The caption under the video: a keyword-rich first line, the value, and a call to action.",
          status: "available",
        },
      ],
    },
    {
      name: "Short-form text · X, Substack Notes, Threads",
      skills: [
        {
          slug: "short-form-text-post",
          blurb: "A short post from a raw idea. Pick from three drafts, then get a version for each platform.",
          status: "available",
        },
        {
          slug: "short-form-text-from-newsletter",
          blurb: "Turns one newsletter issue into a batch of short posts that link back to it.",
          status: "available",
        },
      ],
    },
    {
      name: "Long-form text · LinkedIn, long X posts",
      skills: [
        {
          slug: "long-form-text-hook",
          blurb: "10 opening lines built for the feed, in full sentences with credibility up front.",
          status: "available",
        },
        {
          slug: "long-form-text-post",
          blurb: "A full post built to be saved. Every post gives the reader one thing they can reuse.",
          status: "available",
        },
      ],
    },
    {
      name: "Newsletter · Substack, X Articles",
      skills: [
        {
          slug: "newsletter-post",
          blurb: "Takes an idea or voice notes through a brainstorm, an outline and a 1,000 to 1,500-word draft.",
          status: "available",
        },
        {
          slug: "newsletter-format",
          blurb: "Final formatting with no rewriting: title and subtitle options, buttons, links and a footer.",
          status: "available",
        },
      ],
    },
    {
      name: "Visual · Instagram and LinkedIn feed",
      skills: [
        {
          slug: "visual-carousel",
          blurb: "The slide-by-slide text for a swipeable carousel.",
          status: "available",
        },
        {
          slug: "visual-infographic",
          blurb: "An animated infographic: system map, timeline, before and after, or steps.",
          status: "soon",
          hasFolder: false,
        },
      ],
    },
    {
      name: "Plan, ship and learn",
      skills: [
        {
          slug: "content-setup",
          blurb: "Builds your content/ folder by interviewing you, linking files you have, or drafting from past posts.",
          status: "available",
        },
        {
          slug: "content-ideas",
          blurb: "Finds post ideas in your recent notes and work, scored and sorted by format.",
          status: "available",
        },
        {
          slug: "content-planning",
          blurb: "Turns ideas into a two-week calendar with the right format mix and posting cadence.",
          status: "available",
        },
        {
          slug: "content-publish",
          blurb: "Posts or schedules approved content through Adeli. It asks before every post.",
          status: "available",
        },
        {
          slug: "content-wins",
          blurb: "Pulls your post stats through Adeli, picks the winners and files them so future drafts learn from them.",
          status: "available",
        },
        {
          slug: "dm-automation",
          blurb: "Sets up an Instagram comment-to-DM automation through LedaChat: comment a keyword, get the guide.",
          status: "available",
        },
      ],
    },
  ] satisfies SkillGroup[],

  agents: {
    heading: "Works with your agent",
    sub: "The skills use the open Agent Skills format: plain folders with a SKILL.md file. Any agent that loads skills can run them.",
    list: [
      { name: "Claude", icon: "claude" },
      { name: "Codex", icon: "codex" },
      { name: "Cursor", icon: "cursor" },
      { name: "Gemini CLI", icon: "geminicli" },
      { name: "GrokBot", icon: "grokbot" },
    ],
    footnote:
      "Not on the list? Clone the repo and copy the skill folders into your agent's skills folder. For Claude Code that's <code>.claude/skills/</code>.",
  },

  faqs: [
    {
      q: "How do I use AI to write social media posts that sound like me?",
      a: "Give the AI your voice before you ask for a post. These skills read a <code>content/</code> folder about you (how you talk, your topics, your reader and your best-performing posts) every time they write, so drafts start from your voice instead of a generic one. You still approve every draft.",
    },
    {
      q: "Can Claude write Instagram Reels and TikTok scripts?",
      a: "Yes. <code>short-form-video-hook</code> gives you 10 opening lines for a topic, <code>short-form-video-script</code> turns the one you pick into a talking-head script under 60 seconds, and <code>short-form-video-caption</code> writes the caption. They run in Claude Code, Codex, Cursor and other agents that load skills.",
    },
    {
      q: "How do I write a good hook for Reels or TikTok?",
      a: "Lead with the payoff or a claim that cuts against what your viewer believes, in under two seconds. <code>short-form-video-hook</code> writes 10 options for one topic in two styles: a tutorial hook that promises a specific result, or an authority hook that pairs borrowed credibility with a contrarian take.",
    },
    {
      q: "How do I turn a newsletter into social media posts?",
      a: "Pull the strongest standalone ideas out of the issue and rewrite each as its own short post that links back. <code>short-form-text-from-newsletter</code> does this for X, Threads and Substack Notes from one newsletter issue.",
    },
    {
      q: "How do I find content ideas when I'm stuck?",
      a: "Start from what you already did, said and saw this week, not a blank page. <code>content-ideas</code> reads your recent notes, drafts and saved links, scores each idea against your topics and reader, and sorts them by format. <code>content-planning</code> then turns them into a two-week calendar.",
    },
    {
      q: "How do I set up an Instagram comment-to-DM automation?",
      a: "<code>dm-automation</code> sets one up through LedaChat: people comment a keyword on your post, get a DM, can be asked to follow and leave their email, then get your link. Write your default DM copy once and each new automation only needs the post and the link.",
    },
    {
      q: "What are agent skills?",
      a: "Agent skills are folders with a <code>SKILL.md</code> file that teach an AI agent how to do one job. The agent reads each skill's short description and loads the full instructions only when a task needs them. Claude Code, Codex, Cursor and other agents support the format.",
    },
    {
      q: "How do I install the content creation skills?",
      a: "Run <code>npx skills add kingscrosslabs/content-creation-skills</code> and pick the skills you want, or copy the folders into your agent's skills folder (for Claude Code, <code>.claude/skills/</code>). Then run <code>content-setup</code> to build your content folder.",
    },
    {
      q: "Can these skills schedule and publish my posts?",
      a: "Yes, but only after you approve. <code>content-publish</code> posts or schedules content to Instagram, Facebook, TikTok, YouTube, LinkedIn, X and Bluesky through Adeli, and asks before every post. <code>content-wins</code> then pulls your stats so future drafts learn from what worked.",
    },
    {
      q: "Are the content creation skills free?",
      a: "Yes. They're open source under the MIT licence. The publishing, stats and DM skills use Adeli and LedaChat, which both have free plans.",
    },
  ],

  closing: "Turn your agent into a content creation expert with these skills.",

  sister: {
    name: "aeo-seo-skills",
    url: "https://aeo-seo-skills.com",
    blurb: "Get found in Google. Get quoted by AI.",
  },
};
