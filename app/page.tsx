'use client'

import { useEffect, useState } from 'react'
import {
  Accessibility,
  ArrowDown,
  ArrowRight,
  Car,
  Check,
  Coffee,
  Globe2,
  House,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  Phone,
  QrCode,
  Utensils,
  Wifi,
  X,
} from 'lucide-react'

const phone = '+923475250769'
const mapsUrl = 'https://maps.app.goo.gl/YyMqrmfw6pSR1odKA'
const whatsapp = (message = 'Hello Greenland Resort, I would like to inquire about room availability and rates.') =>
  `https://wa.me/923475250769?text=${encodeURIComponent(message)}`

const images = {
  exteriorSunset: '/gallery/exterior-sunset.webp',
  exteriorCloudy: '/gallery/exterior-cloudy.webp',
  valley: '/gallery/valley-view.webp',
  roomClassic: '/gallery/room-classic.webp',
  roomDeluxe: '/gallery/room-deluxe.webp',
  roomStandard: '/gallery/room-standard.webp',
  bathroom: '/gallery/bathroom.webp',
  // TODO: replace with a real dining photo once available
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85',
}

const facilities = [
  { label: 'Free Wi-Fi', icon: Wifi },
  { label: 'Free Breakfast', icon: Coffee },
  { label: 'Free Parking', icon: Car },
  { label: 'Accessible', icon: Accessibility },
  { label: 'On-site Restaurant', icon: Utensils },
  { label: 'Kid-Friendly', icon: House },
]

const amenityDetails = [
  ['Free Wi-Fi', 'Stay connected throughout your visit.', Wifi],
  ['Complimentary Breakfast', 'Start your morning with breakfast included with your stay.', Coffee],
  ['Free Parking', 'Convenient parking available for guests.', Car],
  ['Accessible', 'Accessible facilities designed to make your stay more comfortable.', Accessibility],
  ['Kid-Friendly', 'A welcoming environment for families traveling with children.', House],
  ['Restaurant', 'Enjoy dining conveniently at the resort.', Utensils],
  ['Kitchens in Some Rooms', 'Selected rooms include kitchen facilities for added convenience.', QrCode],
] as const

const galleryImages = [
  { src: images.valley, alt: 'Mountain valley beneath a clear sky', size: 'tall' },
  { src: images.roomClassic, alt: 'Warmly designed guest room with wooden furnishings', size: 'wide' },
  { src: images.exteriorSunset, alt: 'Guest rooms at sunset with mountain views', size: 'square' },
  { src: images.roomDeluxe, alt: 'Cozy, softly lit guest room interior', size: 'wide' },
  { src: images.bathroom, alt: 'Bright, modern en-suite bathroom', size: 'tall' },
  { src: images.roomStandard, alt: 'Comfortable guest room interior', size: 'square' },
]

function SectionIntro({ eyebrow, title, children, light = false }: { eyebrow: string; title: string; children?: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? 'section-intro-light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <div className="intro-copy">{children}</div>}
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setActiveImage(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main>
      <header className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
        <a href="#home" className="brand" aria-label="Greenland Resort home"><span className="brand-mark">G</span><span>Greenland <em>Resort</em></span></a>
        <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Stay', 'Amenities', 'Dining', 'Gallery', 'Location'].map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-mobile-cta" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Book on WhatsApp</a>
        </nav>
        <a className="nav-cta" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Book on WhatsApp</a>
        <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: `url(${images.exteriorSunset})` }}>
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow hero-eyebrow">Welcome to Greenland Resort</p>
          <h1>Your peaceful<br /><i>escape in Skardu.</i></h1>
          <p className="hero-copy">Experience the beauty of Skardu with a comfortable stay, warm hospitality, and breathtaking mountain surroundings.</p>
          <div className="hero-actions"><a className="button button-gold" href={whatsapp()} target="_blank" rel="noreferrer">Book via WhatsApp <ArrowRight size={17} /></a><a className="text-link light-link" href="#about">Explore the resort <ArrowDown size={16} /></a></div>
          <div className="hero-location"><MapPin size={15} /> Skardu, Gilgit-Baltistan, Pakistan</div>
        </div>
        <div className="scroll-note"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="amenities-strip"><div className="page-width facilities">{facilities.map(({ label, icon: Icon }) => <div className="facility" key={label}><Icon size={19} strokeWidth={1.5} /><span>{label}</span></div>)}</div></section>

      <section className="about section page-width" id="about">
        <div className="about-image image-frame"><img src={images.valley} alt="A wide mountain valley in Skardu" loading="lazy" decoding="async" /><span className="image-caption">The Karakoram, at its quietest</span></div>
        <div className="about-copy"><SectionIntro eyebrow="The Greenland experience" title="A comfortable stay surrounded by Skardu's beauty"><p>Greenland Resort offers a welcoming place to stay while you explore the extraordinary landscapes of Skardu. Enjoy comfortable surroundings, complimentary breakfast, free Wi-Fi and parking, and easy access to the natural beauty that makes this region unforgettable.</p><p>Whether you&apos;re visiting for mountain adventures, a peaceful getaway, or time with family, Greenland Resort provides a relaxed base for your Skardu experience.</p></SectionIntro><a className="text-link dark-link" href="#stay">Discover Greenland Resort <ArrowRight size={16} /></a></div>
      </section>

      <section className="destination section-dark" id="stay"><div className="page-width"><SectionIntro eyebrow="A place to pause" title="Discover Skardu" light><p>Where dramatic mountains, peaceful valleys, clear skies, and unforgettable landscapes come together.</p></SectionIntro><div className="experience-grid">{[[images.exteriorCloudy, '01', 'Mountain adventures'], [images.valley, '02', 'Scenic landscapes'], [images.exteriorSunset, '03', 'Peaceful getaways'], [images.roomClassic, '04', 'Family exploration']].map(([src, number, title]) => <div className="experience-card" key={number} style={{ backgroundImage: `url(${src})` }}><div className="experience-shade" /><span>{number}</span><h3>{title}</h3></div>)}</div></div></section>

      <section className="stay section page-width"><div className="stay-copy"><SectionIntro eyebrow="Your time in the mountains" title="Comfortable spaces for your Skardu getaway"><p>Find a relaxed base for your time in Skardu. Contact us directly to ask about current availability, room options, stay duration, and family requirements.</p></SectionIntro><a className="button button-forest" href={whatsapp('Hello Greenland Resort, I would like to know about available rooms and current rates.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Ask about rooms on WhatsApp</a></div><div className="stay-images"><img className="stay-main-image" src={images.roomClassic} alt="Warmly designed resort living space" loading="lazy" decoding="async" /><img className="stay-small-image" src={images.roomDeluxe} alt="Quiet resort room interior" loading="lazy" decoding="async" /></div></section>

      <section className="amenities section-sand" id="amenities"><div className="page-width"><SectionIntro eyebrow="Thoughtful essentials" title="Everything you need for a comfortable stay"><p>Simple, considered amenities to make your time at Greenland Resort feel easy.</p></SectionIntro><div className="amenity-grid">{amenityDetails.map(([title, description, Icon]) => <div className="amenity-item" key={title}><div className="amenity-icon"><Icon size={21} strokeWidth={1.4} /></div><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div></section>

      <section className="dining section page-width" id="dining"><div className="dining-image"><img src={images.dining} alt="Atmospheric dining table at Greenland Resort" loading="lazy" decoding="async" /></div><div className="dining-copy"><SectionIntro eyebrow="Gather around the table" title="Dine at Greenland Resort"><p>Enjoy convenient dining during your stay at Greenland Resort.</p></SectionIntro><a className="text-link dark-link" href={whatsapp('Hello Greenland Resort, I would like to ask about dining during my stay.')} target="_blank" rel="noreferrer">Ask about dining <ArrowRight size={16} /></a></div></section>

      <section className="gallery section-sand" id="gallery"><div className="page-width"><div className="gallery-heading"><SectionIntro eyebrow="A glimpse of the journey" title="The Skardu feeling" /><p>Mountain light, quiet mornings, and spaces made for slowing down.</p></div><div className="gallery-grid">{galleryImages.map((image) => <button className={`gallery-item ${image.size}`} key={image.src} onClick={() => setActiveImage(image.src)} aria-label={`View larger image: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" decoding="async" /></button>)}</div></div></section>

      <section className="why section page-width"><SectionIntro eyebrow="Made for the moment" title="Why stay with us" /><div className="why-grid">{[['A beautiful setting', 'Experience the atmosphere of Skardu surrounded by spectacular natural scenery.', Mountain], ['Comfortable & convenient', 'Enjoy essential amenities including Wi-Fi, breakfast, parking, and dining.', Check], ['Family friendly', 'A welcoming option for guests traveling with children.', House], ['Easy booking', 'Contact the resort directly through WhatsApp for availability and reservations.', MessageCircle]].map(([title, text, Icon]) => <div className="why-item" key={title as string}><Icon size={23} strokeWidth={1.3} /><h3>{title as string}</h3><p>{text as string}</p></div>)}</div></section>

      <section className="booking-cta" style={{ backgroundImage: `url(${images.exteriorCloudy})` }}><div className="hero-overlay" /><div className="booking-inner page-width"><p className="eyebrow hero-eyebrow">Your next chapter begins here</p><h2>Planning your stay<br /><i>in Skardu?</i></h2><p>Talk directly with Greenland Resort about availability, room options, and your visit.</p><div className="hero-actions"><a className="button button-gold" href={whatsapp('Hello Greenland Resort, I am planning a stay in Skardu. Please share availability and current rates.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a><a className="text-link light-link" href={`tel:${phone}`}><Phone size={16} /> Call 0347 5250769</a></div></div></section>

      <section className="location section page-width" id="location"><div className="location-copy"><SectionIntro eyebrow="Come find us" title="Find Greenland Resort"><p>Skardu, Gilgit-Baltistan, Pakistan</p></SectionIntro><a className="button button-forest" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Open in Google Maps</a></div><a className="map-card" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Open Greenland Resort location in Google Maps"><div className="map-grid" /><div className="map-pin"><MapPin size={24} /></div><div className="map-label"><strong>Greenland Resort</strong><span>Skardu, Pakistan <ArrowRight size={14} /></span></div></a></section>

      <footer className="footer"><div className="page-width footer-grid"><div className="footer-brand"><a href="#home" className="brand brand-light"><span className="brand-mark">G</span><span>Greenland <em>Resort</em></span></a><p>Your peaceful stay in Skardu.</p><a className="social" href="#gallery" aria-label="View gallery"><Globe2 size={18} /></a></div><div><p className="footer-label">Explore</p><a href="#about">About</a><a href="#stay">Stay</a><a href="#amenities">Amenities</a><a href="#dining">Dining</a><a href="#gallery">Gallery</a></div><div><p className="footer-label">Contact</p><a href={`tel:${phone}`}>0347 5250769</a><a href="#location">Skardu, Gilgit-Baltistan</a><a href={mapsUrl} target="_blank" rel="noreferrer">View location</a></div><div className="footer-action"><p>Ready to plan your stay?</p><a className="button button-gold" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a></div></div><div className="page-width footer-bottom"><span>© 2026 Greenland Resort. All rights reserved.</span><span>Skardu · Gilgit-Baltistan · Pakistan</span></div></footer>

      <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Chat with Greenland Resort"><MessageCircle size={23} /><span>Chat with Greenland Resort</span></a>
      {activeImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setActiveImage(null)}><button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image"><X /></button><img src={activeImage} alt="Expanded gallery view" onClick={(event) => event.stopPropagation()} /></div>}
    </main>
  )
}
