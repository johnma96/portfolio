import { useState, useEffect } from 'react'

export function useTypewriter(text: string, speed = 65, startDelay = 0) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    let interval: ReturnType<typeof setInterval>
    let i = 0

    timer = setTimeout(() => {
      interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}
