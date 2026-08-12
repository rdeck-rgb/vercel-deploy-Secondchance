/**
 * Canonical site identity — one place for anything that needs an absolute URL.
 *
 * Used by PageMeta (canonical + Open Graph tags) and by
 * scripts/generate-sitemap.mjs, which parses SITE_URL out of this file so the
 * sitemap and the canonical tags can never disagree.
 *
 * If the domain ever changes, change it here and nowhere else.
 */
export const SITE_URL = 'https://2ndchancemedia.com'

export const SITE_NAME = 'SecondChance Media'

/** Default social preview image. 2048×1152 (16:9), which Open Graph prefers. */
export const OG_IMAGE = '/images/hero.png'

/** Join a site-relative path onto SITE_URL, without doubling or dropping slashes. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Canonical form of a pathname: strip any query/hash, drop a trailing slash
 * (except the root), so "/pricing/" and "/pricing?x=1" don't read as three
 * different pages to a crawler.
 */
export function canonicalPath(pathname: string): string {
  const clean = pathname.split(/[?#]/)[0]
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1)
  return clean || '/'
}
