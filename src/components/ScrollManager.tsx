import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router'

/**
 * React Router does not move the scroll position on client-side navigation, and
 * a browser will not act on a #hash that arrives via pushState. Without this,
 * clicking "Free Eligibility Check" from halfway down a long page landed you on
 * /audit still scrolled halfway down — often past the form entirely.
 *
 * So: jump to the top on a new page, or to the #target when there is one.
 * Back/forward is left alone so the browser can restore where you were.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') return

    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    // The target may not be painted yet on a fresh route, so retry for a few
    // frames before giving up and going to the top.
    const id = decodeURIComponent(hash.slice(1))
    let frames = 0
    let raf = 0

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView()
        return
      }
      if (frames++ < 20) raf = requestAnimationFrame(tryScroll)
      else window.scrollTo(0, 0)
    }

    raf = requestAnimationFrame(tryScroll)
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash, navigationType])

  return null
}
