import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { projects } from '../src/data/projects.js';
import { SITE_URL, homeUpdated } from '../src/data/profile.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROUTES_PATH = path.join(__dirname, '../src/prerender/staticRoutes.json');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

const DATE = /^\d{4}-\d{2}-\d{2}$/;

// <lastmod> must be the date a page's content really changed, not the build date.
// Google ignores lastmod on sites where every page always claims "today".
function lastModified(routePath) {
  if (routePath === '/') {
    // The home page lists every project card, so it changes whenever any of them does.
    return [homeUpdated, ...projects.map((p) => p.updated)].sort().at(-1);
  }

  const slug = routePath.match(/^\/project\/([^/]+)$/)?.[1];
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`No project found for route ${routePath}`);
  return project.updated;
}

function main() {
  if (!fs.existsSync(ROUTES_PATH)) {
    console.error('✖ staticRoutes.json not found');
    process.exit(1);
  }

  const routes = JSON.parse(fs.readFileSync(ROUTES_PATH, 'utf8'));

  const xmlUrls = routes.map((r) => {
    const routePath = r.path.startsWith('/') ? r.path : `/${r.path}`;
    const lastmod = lastModified(routePath);
    if (!DATE.test(lastmod ?? '')) {
      throw new Error(`Missing or invalid "updated" date for ${routePath} (expected YYYY-MM-DD)`);
    }
    return `  <url>
    <loc>${SITE_URL}${routePath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${routePath === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
  console.log('✔ sitemap.xml generated in public/');
}

main();
