'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = { src: string; alt: string; caption?: string }

export function Carousel({ slides, autoPlayMs = 6000 }: { slides: Slide[]; autoPlayMs?: number }) {
  const [index, setIndex] = useState(0)

  const go = useCallback((next: number) => setIndex((current) => (next + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    if (!autoPlayMs) return
    const timer = setInterval(() => go(index + 1), autoPlayMs)
    return () => clearInterval(timer)
  }, [index, autoPlayMs, go])

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Photo carousel">
      <div className="carousel-track">
        {slides.map((slide, i) => (
          <div className={`carousel-slide ${i === index ? 'carousel-slide-active' : ''}`} key={slide.src} aria-hidden={i !== index}>
            <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
            {slide.caption && <span className="carousel-caption">{slide.caption}</span>}
          </div>
        ))}
      </div>
      <button className="carousel-arrow carousel-arrow-prev" onClick={() => go(index - 1)} aria-label="Previous image">
        <ChevronLeft size={22} />
      </button>
      <button className="carousel-arrow carousel-arrow-next" onClick={() => go(index + 1)} aria-label="Next image">
        <ChevronRight size={22} />
      </button>
      <div className="carousel-dots">
        {slides.map((slide, i) => (
          <button key={slide.src} className={`carousel-dot ${i === index ? 'carousel-dot-active' : ''}`} onClick={() => go(i)} aria-label={`Go to image ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}
