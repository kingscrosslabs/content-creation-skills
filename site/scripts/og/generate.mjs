// Renders public/og.png (1200x630 share card) and public/logo.png (512x512
// Organization logo) from src/data/site.ts and src/styles/tokens.css.
//
//   cd site && node --experimental-strip-types scripts/og/generate.mjs
//
// Needs Google Chrome (headless, for the card so the real fonts render) and
// sharp (already in node_modules via Astro). Adds no dependencies. Re-run it
// whenever the hero copy, wordmark or accent colour changes.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const { site } = await import(pathToFileURL(join(root, "src/data/site.ts")).href);
const tokens = readFileSync(join(root, "src/styles/tokens.css"), "utf8");
const accent = tokens.match(/--accent:\s*(#[0-9a-fA-F]{3,8})/)?.[1];
if (!accent) throw new Error("Could not read --accent from tokens.css");

const INK = "#0c0b0a";
const TEXT = "#f3ece4";
const MUTED = "#a0968b";
const LINE = "#2e2a26";
const CHROME =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// The ✦ mark, same path as public/favicon.svg (32-unit box).
const STAR = "M16 4 L18.4 13.6 L28 16 L18.4 18.4 L16 28 L13.6 18.4 L4 16 L13.6 13.6 Z";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ---------- logo.png: 512x512, the King's Cross Labs mark: ivory on ink, the same on every KCL site ----------
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="${INK}"/>
  <path d="${STAR}" fill="#f3ece4"/>
</svg>`;
await sharp(Buffer.from(logoSvg)).png().toFile(join(root, "public/logo.png"));

// ---------- og.png: 1200x630 share card ----------
const font = (p) => pathToFileURL(join(root, p)).href;
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Satoshi; font-weight: 700; src: url(${font("public/fonts/Satoshi-Bold.woff2")}) format("woff2"); }
@font-face { font-family: Hanken; font-weight: 500; src: url(${font("node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-500-normal.woff2")}) format("woff2"); }
@font-face { font-family: Mono; font-weight: 400; src: url(${font("node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2")}) format("woff2"); }
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 1200px; height: 630px; background: ${INK}; overflow: hidden; }
body { color: ${TEXT}; padding: 72px 80px; display: flex; flex-direction: column; -webkit-font-smoothing: antialiased; }
.mark { display: flex; align-items: center; gap: 16px; font-family: Mono; font-size: 32px; letter-spacing: -0.01em; }
.mark svg { width: 40px; height: 40px; }
h1 { margin-top: auto; font-family: Satoshi; font-weight: 700; font-size: 104px; line-height: 1; letter-spacing: -0.034em; }
h1 span { display: block; color: ${accent}; }
.foot { margin-top: 52px; padding-top: 28px; border-top: 2px solid ${LINE}; display: flex; justify-content: space-between; align-items: baseline;
  font-family: Hanken; font-weight: 500; font-size: 24px; letter-spacing: 0.06em; text-transform: uppercase; color: ${MUTED}; }
.foot b { color: ${accent}; font-weight: 500; margin-right: 12px; }
.foot .url { font-family: Mono; text-transform: none; letter-spacing: 0; color: ${TEXT}; font-size: 24px; }
</style></head><body>
  <div class="mark"><svg viewBox="0 0 32 32"><path d="${STAR}" fill="${accent}"/></svg>${esc(site.wordmark)}</div>
  <h1>${esc(site.hero.headline)}<span>${esc(site.hero.highlight)}</span></h1>
  <div class="foot"><div><b>✦</b>${esc(site.hero.eyebrow)}</div><div class="url">${esc(new URL(site.url).host)}</div></div>
</body></html>`;

const tmp = mkdtempSync(join(tmpdir(), "og-"));
try {
  const page = join(tmp, "card.html");
  const shot = join(tmp, "card.png");
  writeFileSync(page, html);
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--allow-file-access-from-files",
    "--virtual-time-budget=3000",
    `--user-data-dir=${join(tmp, "profile")}`,
    "--window-size=1200,630",
    `--screenshot=${shot}`,
    pathToFileURL(page).href,
  ], { stdio: "ignore" });
  // Guard against Chrome returning a slightly different viewport size.
  await sharp(shot).resize(1200, 630, { fit: "cover", position: "top" }).png().toFile(join(root, "public/og.png"));
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

for (const f of ["og.png", "logo.png"]) {
  const m = await sharp(join(root, "public", f)).metadata();
  console.log(`public/${f}: ${m.width}x${m.height}`);
}
