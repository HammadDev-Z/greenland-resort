import type { Metadata } from 'next'
import { rooms, images } from '@/lib/content'
import { whatsapp } from '@/lib/site-config'
import { SectionIntro } from '@/components/SectionIntro'
import { Carousel } from '@/components/Carousel'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export const metadata: Metadata = {
  title: 'Rooms | Greenland Resort Skardu',
  description: 'Comfortable rooms at Greenland Resort in Skardu — Classic, Deluxe, and Standard options for your stay in Gilgit-Baltistan.',
  alternates: { canonical: '/rooms' },
}

export default function RoomsPage() {
  return (
    <section className="section page-width">
      <SectionIntro eyebrow="Your time in the mountains" title="Comfortable spaces for your Skardu getaway">
        <p>Find a relaxed base for your time in Skardu. Contact us directly to ask about current availability, room options, stay duration, and family requirements.</p>
      </SectionIntro>

      <div className="page-carousel">
        <Carousel slides={[...rooms.map((r) => ({ src: r.image, alt: r.name })), { src: images.bathroom, alt: 'Bright, modern en-suite bathroom', caption: 'En-suite bathroom' }]} />
      </div>

      <div className="room-grid">
        {rooms.map((room) => (
          <div className="room-card" key={room.name}>
            <img src={room.image} alt={room.name} loading="lazy" decoding="async" />
            <div className="room-card-body">
              <p>{room.description}</p>
              <a className="text-link dark-link" href={whatsapp(`Hello Greenland Resort, I would like to ask about the ${room.name}.`)} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={15} /> Ask about this room
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="room-cta">
        <a className="button button-forest" href={whatsapp('Hello Greenland Resort, I would like to know about available rooms and current rates.')} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={17} /> Ask about rooms on WhatsApp
        </a>
      </div>
    </section>
  )
}
