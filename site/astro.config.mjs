import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/data/site.ts";

// <lastmod> is the date of the last commit that touched src/, so it only moves
// when the page content does. If git isn't there, leave lastmod out rather than
// using the build time.
function lastContentEdit() {
  try {
    const out = execSync("git log -1 --format=%cI -- src", {
      cwd: fileURLToPath(new URL(".", import.meta.url)),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}

const lastmod = lastContentEdit();

export default defineConfig({
  site: site.url,
  integrations: [
    sitemap({
      serialize(item) {
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: "always" },
});
