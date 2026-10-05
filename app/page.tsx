import Link from 'next/link'
import { ArrowDown, ArrowRight, Bus, Car, Coffee, ConciergeBell, Flame, House, MapPin, PawPrint, QrCode, Utensils, Wifi } from 'lucide-react'
import { mapsUrl, whatsapp } from '@/lib/site-config'
import { images, facilities, amenityDetails } from '@/lib/content'
import { SectionIntro } from '@/components/SectionIntro'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

const icons = { Wifi, Coffee, Car, PawPrint, Utensils, House, QrCode, ConciergeBell, Bus, Flame }

export default function Home() {
  return (
    <>
      <section className="hero" id="home" style={{ backgroundImage: `url(${images.exteriorSunset})` }}>
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow hero-eyebrow">Welcome to Greenland Resort</p>
          <h1>Your peaceful<br /><i>escape in Skardu.</i></h1>
          <p className="hero-copy">Experience the beauty of Skardu with a comfortable stay, warm hospitality, and breathtaking mountain surroundings.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsapp()} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} /> Book via WhatsApp</a>
            <a className="text-link light-link" href="#amenities">Explore the resort <ArrowDown size={16} /></a>
          </div>
          <div className="hero-location"><MapPin size={15} /> Skardu, Gilgit-Baltistan, Pakistan</div>
        </div>
        <div className="scroll-note"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="amenities-strip">
        <div className="page-width facilities">
          {facilities.map(({ label, icon }) => {
            const Icon = icons[icon]
            return <div className="facility" key={label}><Icon size={19} strokeWidth={1.5} /><span>{label}</span></div>
          })}
        </div>
      </section>

      <section className="amenities section-sand" id="amenities">
        <div className="page-width">
          <SectionIntro eyebrow="Thoughtful essentials" title="Everything you need for a comfortable stay">
            <p>Simple, considered amenities to make your time at Greenland Resort feel easy.</p>
          </SectionIntro>
          <div className="amenity-grid">
            {amenityDetails.map(([title, description, icon]) => {
              const Icon = icons[icon]
              return (
                <div className="amenity-item" key={title}>
                  <div className="amenity-icon"><Icon size={21} strokeWidth={1.4} /></div>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="explore section page-width">
        <SectionIntro eyebrow="See more" title="Explore Greenland Resort" />
        <div className="explore-grid">
          <Link className="explore-card" href="/rooms" style={{ backgroundImage: `url(${images.roomDeluxe})` }}>
            <div className="experience-shade" />
            <h3>Rooms</h3>
            <span>View rooms <ArrowRight size={15} /></span>
          </Link>
          <Link className="explore-card" href="/menu" style={{ backgroundImage: `url(${images.barbecue})` }}>
            <div className="experience-shade" />
            <h3>Menu</h3>
            <span>View menu <ArrowRight size={15} /></span>
          </Link>
          <Link className="explore-card" href="/gallery" style={{ backgroundImage: `url(${images.exteriorSunset})` }}>
            <div className="experience-shade" />
            <h3>Gallery</h3>
            <span>View gallery <ArrowRight size={15} /></span>
          </Link>
        </div>
      </section>

      <section className="location section page-width" id="location">
        <div className="location-copy">
          <SectionIntro eyebrow="Come find us" title="Find us">
            <p>Skardu, Gilgit-Baltistan, Pakistan</p>
          </SectionIntro>
          <a className="button button-forest" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Open in Google Maps</a>
        </div>
        <a className="map-card" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Open Greenland Resort location in Google Maps">
          <div className="map-grid" />
          <div className="map-pin"><MapPin size={24} /></div>
          <div className="map-label"><strong>Greenland Resort</strong><span>Skardu, Pakistan <ArrowRight size={14} /></span></div>
        </a>
      </section>
    </>
  )
}
