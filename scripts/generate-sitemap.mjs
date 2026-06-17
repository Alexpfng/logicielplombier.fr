// Génère public/sitemap.xml à partir de src/lib/routes.ts
// Lancé via "prebuild" (avant chaque build) et manuellement : `node scripts/generate-sitemap.mjs`

import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://logiciel-plombier.fr";

// On lit routes.ts en texte pour éviter d'avoir à compiler du TS dans le script.
const routesSource = readFileSync(resolve(__dirname, "../src/lib/routes.ts"), "utf8");

const routes = [...routesSource.matchAll(/\{\s*path:\s*"([^"]+)",\s*priority:\s*([\d.]+),\s*changefreq:\s*"(\w+)"/g)].map(
  (m) => ({ path: m[1], priority: m[2], changefreq: m[3] }),
);

if (routes.length === 0) {
  console.error("Aucune route trouvée dans src/lib/routes.ts");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml, "utf8");
console.log(`✓ sitemap.xml généré (${routes.length} URLs)`);
