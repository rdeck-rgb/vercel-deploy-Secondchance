import { useEffect, useRef } from 'react'

const GCAL_CSS = 'https://calendar.google.com/calendar/scheduling-button-script.css'
const GCAL_JS = 'https://calendar.google.com/calendar/scheduling-button-script.js'
const GCAL_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0p85pv4d9cJHJhGL49J0_NtvsGTmMGW3obb9_I5cMsanZCmabHSwoqw2TeZAbShBO4Dv-jNcyE?gv=true'

export function GoogleCalendarButton() {
  const targetRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!document.querySelector(`link[href="${GCAL_CSS}"]`)) {
      const link = document.createElement('link')
      link.href = GCAL_CSS
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }

    const existing = document.querySelector(`script[src="${GCAL_JS}"]`)
    if (existing) {
      // Script already loaded — init immediately
      init()
      return
    }

    const script = document.createElement('script')
    script.src = GCAL_JS
    script.async = true
    script.onload = init
    document.head.appendChild(script)

    function init() {
      const w = window as Window & { calendar?: { schedulingButton: { load: (opts: object) => void } } }
      if (targetRef.current && w.calendar?.schedulingButton) {
        targetRef.current.innerHTML = ''
        w.calendar.schedulingButton.load({
          url: GCAL_URL,
          color: '#4F6B3A',
          label: 'Book a Strategy Call',
          target: targetRef.current,
        })
      }
    }
  }, [])

  return <span ref={targetRef} />
}
