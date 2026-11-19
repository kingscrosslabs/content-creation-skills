// Fails the build if the skill list on the site and the skills/ folder disagree:
// every listed skill with a folder must exist, and every folder must be listed.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const skillsDir = join(here, "..", "..", "skills");
const data = readFileSync(join(here, "..", "src", "data", "site.ts"), "utf8");

const listed = [...data.matchAll(/slug:\s*"([^"]+)"[\s\S]*?status:\s*"[^"]+",(\s*hasFolder:\s*false)?/g)]
  .map((m) => ({ slug: m[1], hasFolder: !m[2] }));
const folders = readdirSync(skillsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(skillsDir, d.name, "SKILL.md")))
  .map((d) => d.name);

const errors = [];
for (const s of listed) {
  if (s.hasFolder && !folders.includes(s.slug)) errors.push(`Listed on the site but no skills/${s.slug}/SKILL.md: ${s.slug}`);
}
for (const f of folders) {
  if (!listed.some((s) => s.slug === f)) errors.push(`skills/${f}/ exists but isn't listed in src/data/site.ts`);
}

if (errors.length) {
  console.error("Skill list is out of sync:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log(`Skill list in sync: ${listed.length} listed, ${folders.length} folders.`);
