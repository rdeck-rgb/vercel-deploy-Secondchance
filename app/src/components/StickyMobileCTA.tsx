import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PushPin } from '@/components/BoardElements'

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-paper/95 backdrop-blur border-t-2 border-ink/10 shadow-[0_-4px_0_rgba(42,31,22,0.08)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Link
        to="/audit#audit-form"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-stamp-red px-6 py-3.5 text-base font-bold text-white shadow-[0_3px_0_rgba(42,31,22,0.15)]"
      >
        <PushPin className="h-4 w-4" />
        Free Eligibility Check
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  )
}
