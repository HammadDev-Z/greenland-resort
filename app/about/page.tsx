import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { phone, whatsapp } from '@/lib/site-config'
import { images, experienceCards, whyStay } from '@/lib/content'
import { SectionIntro } from '@/components/SectionIntro'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { Mountain, Check, House, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Greenland Resort Skardu',
  description: 'Discover Skardu with Greenland Resort — a comfortable stay surrounded by dramatic mountains, peaceful valleys, and unforgettable landscapes in Gilgit-Baltistan, Pakistan.',
  alternates: { canonical: '/about' },
}

const whyIcons = { Mountain, Check, House, MessageCircle }

export default function AboutPage() {
  return (
    <>
      <section className="about section page-width" id="about">
        <div className="about-image image-frame">
          <img src={images.valley} alt="A wide mountain valley in Skardu" loading="eager" decoding="async" />
          <span className="image-caption">The Karakoram, at its quietest</span>
        </div>
        <div className="about-copy">
          <SectionIntro eyebrow="The Greenland experience" title="A comfortable stay surrounded by Skardu's beauty">
            <p>Greenland Resort offers a welcoming place to stay while you explore the extraordinary landscapes of Skardu. Enjoy comfortable surroundings, complimentary breakfast, free Wi-Fi and parking, and easy access to the natural beauty that makes this region unforgettable.</p>
            <p>Whether you&apos;re visiting for mountain adventures, a peaceful getaway, or time with family, Greenland Resort provides a relaxed base for your Skardu experience.</p>
          </SectionIntro>
        </div>
      </section>

      <section className="destination section-dark">
        <div className="page-width">
          <SectionIntro eyebrow="A place to pause" title="Discover Skardu" light>
            <p>Where dramatic mountains, peaceful valleys, clear skies, and unforgettable landscapes come together.</p>
          </SectionIntro>
          <div className="experience-grid">
            {experienceCards.map(({ src, number, title }) => (
              <div className="experience-card" key={number} style={{ backgroundImage: `url(${src})` }}>
                <div className="experience-shade" />
                <span>{number}</span>
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why section page-width">
        <SectionIntro eyebrow="Made for the moment" title="Why stay with us" />
        <div className="why-grid">
          {whyStay.map(({ title, text, icon }) => {
            const Icon = whyIcons[icon]
            return (
              <div className="why-item" key={title}>
                <Icon size={23} strokeWidth={1.3} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="booking-cta" style={{ backgroundImage: `url(${images.exteriorCloudy})` }}>
        <div className="hero-overlay" />
        <div className="booking-inner page-width">
          <p className="eyebrow hero-eyebrow">Your next chapter begins here</p>
          <h2>Planning your stay<br /><i>in Skardu?</i></h2>
          <p>Talk directly with Greenland Resort about availability, room options, and your visit.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsapp('Hello Greenland Resort, I am planning a stay in Skardu. Please share availability and current rates.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> Chat on WhatsApp</a>
            <a className="text-link light-link" href={`tel:${phone}`}><Phone size={16} /> Call 0347 5250769</a>
          </div>
        </div>
      </section>
    </>
  )
}
