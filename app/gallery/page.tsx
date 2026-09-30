import type { Metadata } from 'next'
import { galleryImages } from '@/lib/content'
import { SectionIntro } from '@/components/SectionIntro'
import { Carousel } from '@/components/Carousel'
import { GalleryGrid } from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | Greenland Resort Skardu',
  description: 'Browse photos of Greenland Resort in Skardu — guest rooms, bathrooms, and the mountain scenery surrounding the property.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return (
    <section className="section page-width">
      <div className="gallery-heading">
        <SectionIntro eyebrow="A glimpse of the journey" title="The Skardu feeling" />
        <p>Mountain light, quiet mornings, and spaces made for slowing down.</p>
      </div>

      <div className="page-carousel">
        <Carousel slides={galleryImages.map((image) => ({ src: image.src, alt: image.alt }))} />
      </div>

      <GalleryGrid images={galleryImages} />
    </section>
  )
}
