'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

type GalleryImage = { src: string; alt: string; size: string }

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setActiveImage(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="gallery-grid">
        {images.map((image) => (
          <button className={`gallery-item ${image.size}`} key={image.src} onClick={() => setActiveImage(image.src)} aria-label={`View larger image: ${image.alt}`}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setActiveImage(null)}>
          <button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image"><X /></button>
          <img src={activeImage} alt="Expanded gallery view" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  )
}
