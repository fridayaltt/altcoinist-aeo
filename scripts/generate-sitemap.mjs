#!/usr/bin/env node
/**
 * Auto-generates sitemap.xml from the src/app directory structure.
 * Runs as part of the build process — every new page auto-appears.
 * No manual updates needed.
 */

import { readdirSync, statSync, writeFileSync, existsSync } from "fs";
import { join, relative } from "path";

const SITE_URL = "https://www.altcoinist.com";
const APP_DIR = join(process.cwd(), "src/app");
const OUT_DIR = join(process.cwd(), "public");

function findPages(dir, pages = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      // Skip internal Next.js dirs
      if (entry.startsWith("_") || entry.startsWith(".")) continue;
      findPages(full, pages);
    } else if (entry === "page.tsx" || entry === "page.jsx") {
      const rel = relative(APP_DIR, dir);
      // Skip root page (that's Framer's domain)
      if (rel === "") continue;
      pages.push(`/${rel}/`);
    }
  }
  return pages;
}

const pages = findPages(APP_DIR);
const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.includes("guides") ? "1.0" : page.includes("compare") ? "0.9" : "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync(join(OUT_DIR, "sitemap.xml"), xml);
console.log(`✅ Sitemap generated: ${pages.length} pages`);
pages.forEach((p) => console.log(`   ${p}`));
