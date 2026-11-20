// Builds the plain-text and Markdown versions of the homepage for AI crawlers:
// /llms.txt, /llms-full.txt and /index.md. Everything comes from src/data/site.ts,
// so these files stay in step with the page. Shared with content-creation-skills.com:
// change both repos together.
import { site } from "../data/site.ts";

type Skill = { slug: string; blurb: string; status: string; hasFolder?: boolean };
type Group = { name: string; note?: string; skills: Skill[] };

const statusLabel: Record<string, string> = {
  available: "available",
  building: "in progress",
  soon: "coming soon",
};

// The llms.txt summary and sister-link wording come from site.llms in site.ts.
// Sites without it fall back to the meta description and sister blurb.
const copy = (site as { llms?: { summary: string; sisterLabel: string; sisterNote: string } }).llms ?? {
  summary: site.description,
  sisterLabel: site.sister.name,
  sisterNote: site.sister.blurb,
};

const groups = site.groups as Group[];

/** Converts the small HTML subset used in site.ts copy into Markdown. */
export function htmlToMarkdown(html: string): string {
  return html
    .replace(/<code>([\s\S]*?)<\/code>/gi, (_, t) => "`" + t + "`")
    .replace(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => `[${t}](${href})`)
    .replace(/<(strong|b)>([\s\S]*?)<\/\1>/gi, (_, __, t) => `**${t}**`)
    .replace(/<(em|i)>([\s\S]*?)<\/\1>/gi, (_, __, t) => `*${t}*`)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

/** GitHub folder for a skill, or the skills folder if the skill has no folder yet. */
export function skillUrl(skill: Skill): string {
  return skill.hasFolder === false ? site.skillsPath : `${site.skillsPath}/${skill.slug}`;
}

const skillLine = (s: Skill) =>
  `- [${s.slug}](${skillUrl(s)}): ${htmlToMarkdown(s.blurb)} (${statusLabel[s.status] ?? s.status})`;

const join = (lines: string[]) => lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";

/** /llms.txt: summary, install, links, every skill and the FAQ questions. */
export function llmsTxt(): string {
  const out: string[] = [
    `# ${site.name}`,
    "",
    `> ${copy.summary}`,
    "",
    `Install: \`${site.install}\``,
    "",
    "Works in Claude Code, Codex, Cursor and any agent that loads skills in the Agent Skills format (a folder with a SKILL.md file).",
    "",
    "## Links",
    "",
    `- [GitHub repo](${site.repo}): source, install guide and every SKILL.md`,
    `- [README](${site.repo}/blob/main/README.md): skill map, install, setup`,
    `- [${copy.sisterLabel}](${site.sister.url}): ${copy.sisterNote}`,
    `- [Full page as Markdown](${site.url}/llms-full.txt): every skill, step and FAQ answer in one file`,
    "",
    "## Skills",
    "",
  ];
  for (const g of groups) {
    out.push(`### ${g.name}`, "");
    if (g.note) out.push(htmlToMarkdown(g.note), "");
    out.push(...g.skills.map(skillLine), "");
  }
  out.push("## FAQ", "", `Answers are in [llms-full.txt](${site.url}/llms-full.txt).`, "");
  out.push(...site.faqs.map((f) => `- ${htmlToMarkdown(f.q)}`));
  return join(out);
}

/** The whole homepage as Markdown. Used by /llms-full.txt and /index.md. */
export function pageMarkdown(): string {
  const out: string[] = [
    `# ${site.hero.headline} ${site.hero.highlight}`,
    "",
    `> ${htmlToMarkdown(site.hero.sub)}`,
    "",
    htmlToMarkdown(site.hero.eyebrow),
    "",
    `Install: \`${site.install}\``,
    "",
    `Source: [${site.repo}](${site.repo})`,
    "",
    `## ${htmlToMarkdown(site.what.heading)}`,
    "",
    ...site.what.body.flatMap((p) => [htmlToMarkdown(p), ""]),
    ...site.what.steps.map((s, i) => `${i + 1}. **${htmlToMarkdown(s.title)}.** ${htmlToMarkdown(s.body)}`),
    "",
    `## ${htmlToMarkdown(site.skillsSection.heading)}`,
    "",
    htmlToMarkdown(site.skillsSection.sub),
    "",
  ];
  for (const g of groups) {
    out.push(`### ${g.name}`, "");
    if (g.note) out.push(htmlToMarkdown(g.note), "");
    out.push(...g.skills.map(skillLine), "");
  }
  if (site.agents) {
    out.push(
      `## ${htmlToMarkdown(site.agents.heading)}`,
      "",
      htmlToMarkdown(site.agents.sub),
      "",
      ...site.agents.list.map((a) => `- ${a.name}`),
      "",
      htmlToMarkdown(site.agents.footnote),
      "",
    );
  }
  out.push("## FAQ", "");
  for (const f of site.faqs) out.push(`### ${htmlToMarkdown(f.q)}`, "", htmlToMarkdown(f.a), "");
  out.push(
    "---",
    "",
    htmlToMarkdown(site.closing),
    "",
    `Sister project: [${site.sister.name}](${site.sister.url}): ${htmlToMarkdown(site.sister.blurb)}`,
  );
  return join(out);
}
