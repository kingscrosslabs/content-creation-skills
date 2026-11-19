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
    note: "Publishing and post stats run through Adeli. Writing needs only your agent.",
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
      "Claude Code",
      "Codex",
      "Cursor",
      "GitHub Copilot",
      "Gemini CLI",
      "OpenCode",
      "Windsurf",
      "Cline",
    ],
    footnote:
      "Not on the list? Clone the repo and copy the skill folders into your agent's skills folder. For Claude Code that's <code>.claude/skills/</code>.",
  },

  faqs: [
    {
      q: "What are content creation skills?",
      a: "They are open-source skills for AI agents that write social and newsletter content in your voice. Each one teaches your agent one job, like writing hooks for a reel, a LinkedIn post or a newsletter issue, using what it knows about you and your best posts.",
    },
    {
      q: "Will the posts sound like me?",
      a: "That's the point of the <code>content/</code> folder. Every skill reads your voice, pillars, reader and winning posts before it writes, and <code>content-wins</code> keeps adding your best performers so drafts get closer to you over time. You still approve every hook, outline and draft.",
    },
    {
      q: "Which platforms do they cover?",
      a: "Instagram, TikTok, YouTube Shorts, LinkedIn, X, Threads, Substack and Substack Notes. Skills are grouped by format (short-form video, short-form text, long-form text, newsletter, visual) and each one knows the rules for its platforms.",
    },
    {
      q: "Which AI agents can use them?",
      a: "Claude Code, Codex, Cursor and any agent that loads skills in the Agent Skills format (a folder with a <code>SKILL.md</code> file).",
    },
    {
      q: "How do I install them?",
      a: "Run <code>npx skills add kingscrosslabs/content-creation-skills</code> and pick the skills you want. Or clone the repo and copy the skill folders into your agent's skills folder. Then run <code>content-setup</code>.",
    },
    {
      q: "Do they post for me?",
      a: "Only if you want them to, and only after you say yes. <code>content-publish</code> posts or schedules approved content through Adeli and asks before every post. The writing skills never publish anything.",
    },
    {
      q: "Do I have to tell my agent which skill to use?",
      a: "No. Describe what you want and your agent picks the skill from its description. You can also name it, for example “use short-form-video-hook”.",
    },
    {
      q: "Are the skills free?",
      a: "Yes. They're open source under the MIT licence. The publishing, stats and DM skills use Adeli and LedaChat, which both have free plans.",
    },
  ],

  sister: {
    name: "aeo-seo-skills",
    url: "https://aeo-seo-skills.com",
    blurb: "Get found in Google. Get quoted by AI.",
  },
};
