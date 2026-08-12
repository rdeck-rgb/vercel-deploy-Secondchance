import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'
import { SITE_NAME, OG_IMAGE, absoluteUrl, canonicalPath } from '@/lib/seo'

/**
 * Drop the generic fallback tags in index.html once real per-route tags exist.
 *
 * Helmet appends rather than replaces here (its data-rh ownership is broken by
 * the inspect-react transform, which also runs in production), so without this
 * every page would carry two titles, two descriptions, and — worst — two
 * conflicting canonical URLs.
 *
 * Crawlers that don't run JS never reach this and keep the static tags, which
 * is exactly what we want for link previews.
 */
function useDropStaticFallbackMeta() {
  useEffect(() => {
    document.head
      .querySelectorAll('[data-seo-static]')
      .forEach((el) => el.remove())
  })
}

/**
 * Per-page title, description, canonical URL, and social preview tags.
 *
 * The canonical URL is derived from the current route rather than passed in,
 * so a page can't silently ship pointing at the wrong address.
 *
 * Note: these are injected client-side. Google renders JS and will see them;
 * most social scrapers do not, and fall back to the static tags in index.html.
 * See the SEO notes in README.md.
 */
export function PageMeta({
  title,
  description,
  /** Override the social image with a page-specific one (site-relative path). */
  image = OG_IMAGE,
  /** Set false on thin or duplicate pages that shouldn't be indexed. */
  index = true,
}: {
  title: string
  description: string
  image?: string
  index?: boolean
}) {
  const { pathname } = useLocation()
  const url = absoluteUrl(canonicalPath(pathname))
  const imageUrl = absoluteUrl(image)

  useDropStaticFallbackMeta()

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {!index && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
