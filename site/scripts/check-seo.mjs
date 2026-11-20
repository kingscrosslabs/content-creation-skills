// Fails the build when a built page breaks the AEO/SEO page rules from the
// technical audit (site/aeo-seo/research/audits/). Runs after `astro build`.
// Shared with the sibling site: change both repos together.
//
// Per page: title <= 60 chars; meta description 110-160 chars and not the title;
// exactly one <h1>; canonical and og:url present, absolute, on the canonical host,
// no query string, and equal; og:image present and absolute; every JSON-LD block parses.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname;
if (!existsSync(dist)) {
  console.error("check-seo: no dist/ folder. Run astro build first.");
  process.exit(1);
}

// The canonical host is the origin of the first URL in the sitemap.
const sitemap = readFileSync(join(dist, "sitemap-0.xml"), "utf8");
const firstLoc = sitemap.match(/<loc>([^<]+)<\/loc>/);
if (!firstLoc) {
  console.error("check-seo: dist/sitemap-0.xml has no <loc>.");
  process.exit(1);
}
const host = new URL(firstLoc[1]).origin;

const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html") && name !== "404.html") pages.push(p);
  }
};
walk(dist);

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const meta = (html, attr, name) => {
  const tag = html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*>`, "i"));
  const content = tag && tag[0].match(/content="([^"]*)"/i);
  return content ? decode(content[1]) : null;
};

const problems = [];
for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const page = file.slice(dist.length - 1);
  const fail = (msg) => problems.push(`${page}: ${msg}`);

  if (/<meta[^>]*name="robots"[^>]*noindex/i.test(html)) continue;

  const title = decode((html.match(/<title>([^<]*)<\/title>/i) || [, ""])[1]);
  if (!title) fail("no <title>");
  else if (title.length > 60) fail(`title is ${title.length} characters (max 60): "${title}"`);

  const desc = meta(html, "name", "description");
  if (!desc) fail("no meta description");
  else {
    if (desc.length < 110 || desc.length > 160) fail(`meta description is ${desc.length} characters (110-160)`);
    if (desc === title) fail("meta description is the same as the title");
  }

  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1s !== 1) fail(`${h1s} <h1> tags (need exactly 1)`);

  const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i) || [])[1];
  const ogUrl = meta(html, "property", "og:url");
  for (const [label, url] of [["canonical", canonical], ["og:url", ogUrl]]) {
    if (!url) fail(`no ${label}`);
    else if (!url.startsWith(host + "/")) fail(`${label} ${url} isn't on ${host}`);
    else if (url.includes("?")) fail(`${label} ${url} has a query string`);
  }
  if (canonical && ogUrl && canonical !== ogUrl) fail(`og:url ${ogUrl} doesn't match canonical ${canonical}`);

  const ogImage = meta(html, "property", "og:image");
  if (!ogImage) fail("no og:image");
  else if (!/^https:\/\//.test(ogImage)) fail(`og:image ${ogImage} isn't an absolute URL`);

  for (const block of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(block[1]);
    } catch (e) {
      fail(`JSON-LD doesn't parse: ${e.message}`);
    }
  }
}

if (problems.length) {
  console.error(`check-seo: ${problems.length} problem(s) in ${pages.length} page(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`check-seo: ${pages.length} page(s) pass on ${host}.`);
