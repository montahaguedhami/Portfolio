'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      const scrollTop = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = totalHeight > 0 ? Math.min(scrollTop / totalHeight, 1) : 0
      setProgress(nextProgress)
      frame = 0
    }

    const onScroll = () => {
      if (frame) {
        return
      }

      frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}