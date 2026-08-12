/**
 * Generates public/sitemap.xml and public/robots.txt from the app's own router.
 *
 * Routes are read out of src/App.tsx rather than kept in a second list here, so
 * adding a <Route> to the app is all it takes for the page to appear in the
 * sitemap. The one dynamic route (/order/:slug) is expanded using the bundle
 * slugs in src/lib/pricing.ts.
 *
 * Runs automatically via the "prebuild" npm script.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => readFileSync(resolve(root, p), 'utf8')

// Single source of truth for the domain — parsed from src/lib/seo.ts so the
// sitemap and the app's canonical tags can never disagree.
const siteUrl = read('src/lib/seo.ts').match(/SITE_URL\s*=\s*'([^']+)'/)?.[1]
if (!siteUrl) throw new Error('Could not parse SITE_URL from src/lib/seo.ts')

const routes = [...read('src/App.tsx').matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1])
if (!routes.length) throw new Error('Could not parse any <Route path="..."> from src/App.tsx')

const bundleSlugs = [...read('src/lib/pricing.ts').matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
if (!bundleSlugs.length) throw new Error('Could not parse any bundle slugs from src/lib/pricing.ts')

// Pages that exist for humans mid-funnel but add nothing to search results —
// kept out of the sitemap so crawl budget goes to the pages that can rank.
const EXCLUDE = new Set(['/privacy', '/terms'])

// Rough priority: the homepage first, then what we most want found.
const priorityFor = (path) => {
  if (path === '/') return '1.0'
  if (path === '/pricing' || path.startsWith('/services')) return '0.9'
  if (path.startsWith('/order/')) return '0.7'
  return '0.6'
}

const expanded = routes.flatMap((path) => {
  if (path === '/order/:slug') return bundleSlugs.map((slug) => `/order/${slug}`)
  if (path.includes(':')) {
    console.warn(`[sitemap] skipping unexpanded dynamic route: ${path}`)
    return []
  }
  return [path]
})

const urls = [...new Set(expanded)].filter((p) => !EXCLUDE.has(p)).sort((a, b) => {
  if (a === '/') return -1
  if (b === '/') return 1
  return a.localeCompare(b)
})

// Date only (no time) — a sitemap lastmod that churns every build teaches
// crawlers to distrust it.
const lastmod = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priorityFor(path)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

mkdirSync(resolve(root, 'public'), { recursive: true })
writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap)
writeFileSync(resolve(root, 'public/robots.txt'), robots)

console.log(`[sitemap] ${urls.length} URLs written for ${siteUrl}`)
for (const u of urls) console.log(`  ${u}`)
