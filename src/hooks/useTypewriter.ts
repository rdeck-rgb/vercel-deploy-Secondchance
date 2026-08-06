import { useEffect, useState } from 'react'

export function useTypewriter(phrases: string[], typeSpeed = 65, holdMs = 1600) {
  const [text, setText] = useState('')
  const [round, setRound] = useState(0)

  useEffect(() => {
    const phrase = phrases[round % phrases.length]
    const holdTicks = Math.round(holdMs / typeSpeed)
    let pos = 0
    let hold = 0
    let deleting = false

    const interval = setInterval(() => {
      if (!deleting) {
        if (pos < phrase.length) {
          pos += 1
          setText(phrase.slice(0, pos))
        } else if (hold < holdTicks) {
          hold += 1
        } else {
          deleting = true
        }
      } else {
        pos -= 1
        setText(phrase.slice(0, Math.max(0, pos)))
        if (pos <= 0) {
          clearInterval(interval)
          setRound((r) => r + 1)
        }
      }
    }, typeSpeed)

    return () => clearInterval(interval)
  }, [round, phrases, typeSpeed, holdMs])

  return text
}
