import Link from 'next/link'
import { ArrowDown, ArrowRight, Bus, Car, Coffee, ConciergeBell, House, MapPin, PawPrint, QrCode, Utensils, Wifi } from 'lucide-react'
import { whatsapp } from '@/lib/site-config'
import { images, facilities, amenityDetails } from '@/lib/content'
import { SectionIntro } from '@/components/SectionIntro'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

const icons = { Wifi, Coffee, Car, PawPrint, Utensils, House, QrCode, ConciergeBell, Bus }

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

      <section className="about section page-width">
        <div className="about-image image-frame">
          <img src={images.valley} alt="A wide mountain valley in Skardu" loading="lazy" decoding="async" />
          <span className="image-caption">The Karakoram, at its quietest</span>
        </div>
        <div className="about-copy">
          <SectionIntro eyebrow="The Greenland experience" title="A comfortable stay surrounded by Skardu's beauty">
            <p>Greenland Resort offers a welcoming place to stay while you explore the extraordinary landscapes of Skardu — comfortable surroundings, warm hospitality, and easy access to unforgettable natural beauty.</p>
          </SectionIntro>
          <Link className="text-link dark-link" href="/about">More about Greenland Resort <ArrowRight size={16} /></Link>
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
    </>
  )
}
