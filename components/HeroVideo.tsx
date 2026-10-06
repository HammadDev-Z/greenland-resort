'use client'

import { useEffect, useState } from 'react'

type ConnectionLike = { saveData?: boolean; effectiveType?: string }

export function HeroVideo({ poster }: { poster: string }) {
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const connection: ConnectionLike | undefined = (navigator as unknown as { connection?: ConnectionLike }).connection
    const isSlow = connection?.saveData || connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g'
    if (!reduceMotion && !isSlow) setCanPlay(true)
  }, [])

  if (!canPlay) return null

  return (
    <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster={poster} aria-hidden="true" tabIndex={-1}>
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  )
}
