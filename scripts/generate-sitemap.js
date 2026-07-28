import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROUTES_PATH = path.join(__dirname, '../src/prerender/staticRoutes.json');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

function main() {
  if (!fs.existsSync(ROUTES_PATH)) {
    console.error('✖ staticRoutes.json not found');
    process.exit(1);
  }

  const routes = JSON.parse(fs.readFileSync(ROUTES_PATH, 'utf8'));
  const baseUrl = 'https://habeeb-abdulsalam.vercel.app';
  const today = new Date().toISOString().split('T')[0];

  const xmlUrls = routes.map((r) => {
    // Format route cleanly: ensuring we have a slash between baseUrl and route path
    const routePath = r.path.startsWith('/') ? r.path : `/${r.path}`;
    const cleanUrl = routePath === '/' ? baseUrl : `${baseUrl}${routePath}`;
    return `  <url>
    <loc>${cleanUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
  console.log('✔ sitemap.xml generated in public/');
}

main();
