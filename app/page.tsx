'use client'

import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Bus,
  Car,
  Check,
  Coffee,
  ConciergeBell,
  Globe2,
  House,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  PawPrint,
  Phone,
  QrCode,
  Utensils,
  Wifi,
  X,
} from 'lucide-react'
import { mapsUrl, phone } from '@/lib/site-config'

const whatsapp = (message = 'Hello Greenland Resort, I would like to inquire about room availability and rates.') =>
  `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`

const images = {
  exteriorSunset: '/gallery/exterior-sunset.webp',
  exteriorCloudy: '/gallery/exterior-cloudy.webp',
  valley: '/gallery/valley-view.webp',
  roomClassic: '/gallery/room-classic.webp',
  roomDeluxe: '/gallery/room-deluxe.webp',
  roomStandard: '/gallery/room-standard.webp',
  bathroom: '/gallery/bathroom.webp',
  // Menu dish photos are stock (sourced from Unsplash, compressed locally) — swap for real kitchen photos once available
  chickenKarahi: '/gallery/menu/chicken-karahi.webp',
  chickenWhiteKarahi: '/gallery/menu/chicken-white-karahi.webp',
  barbecue: '/gallery/menu/barbecue.webp',
  troutFish: '/gallery/menu/trout-fish.webp',
  desiFish: '/gallery/menu/desi-fish.webp',
  daal: '/gallery/menu/daal.webp',
  mixSabzi: '/gallery/menu/mix-sabzi.webp',
  bendiSabzi: '/gallery/menu/bendi-sabzi.webp',
  salad: '/gallery/menu/salad.webp',
  naan: '/gallery/menu/naan.webp',
}

const facilities = [
  { label: 'Free Wi-Fi', icon: Wifi },
  { label: 'Free Breakfast', icon: Coffee },
  { label: 'Free Parking', icon: Car },
  { label: 'Pet-Friendly', icon: PawPrint },
  { label: 'On-site Restaurant', icon: Utensils },
  { label: 'Kid-Friendly', icon: House },
]

const amenityDetails = [
  ['Free Wi-Fi', 'Stay connected throughout your visit.', Wifi],
  ['Complimentary Breakfast', 'Start your morning with breakfast included with your stay.', Coffee],
  ['Free Parking', 'Convenient parking available for guests.', Car],
  ['Kid-Friendly', 'A welcoming environment for families traveling with children.', House],
  ['Restaurant', 'Enjoy dining conveniently at the resort.', Utensils],
  ['Kitchens in Some Rooms', 'Selected rooms include kitchen facilities for added convenience.', QrCode],
  ['Pet-Friendly', 'Traveling with a furry companion? Pets are welcome at Greenland Resort.', PawPrint],
  ['Room Service', 'Enjoy the convenience of room service during your stay.', ConciergeBell],
  ['Airport Shuttle', 'Convenient shuttle service available to and from the airport.', Bus],
] as const

const galleryImages = [
  { src: images.valley, alt: 'Mountain valley beneath a clear sky', size: 'tall' },
  { src: images.roomClassic, alt: 'Warmly designed guest room with wooden furnishings', size: 'wide' },
  { src: images.exteriorSunset, alt: 'Guest rooms at sunset with mountain views', size: 'square' },
  { src: images.roomDeluxe, alt: 'Cozy, softly lit guest room interior', size: 'wide' },
  { src: images.bathroom, alt: 'Bright, modern en-suite bathroom', size: 'tall' },
  { src: images.roomStandard, alt: 'Comfortable guest room interior', size: 'square' },
]

const menu = [
  {
    category: 'Karahi',
    items: [
      { name: 'Chicken Karahi', image: images.chickenKarahi, half: 1500, full: 3000 },
      { name: 'Chicken White Karahi', image: images.chickenWhiteKarahi, half: 1500, full: 3000 },
    ],
  },
  {
    category: 'Barbecue',
    items: [
      { name: 'Bar B Q', image: images.barbecue, price: 3000 },
      { name: 'Trout Fish B Q', image: images.troutFish, price: 6000 },
      { name: 'Desi Fish B Q', image: images.desiFish, price: 3500 },
    ],
  },
  {
    category: 'Vegetarian & Sides',
    items: [
      { name: 'Daal', image: images.daal, price: 500 },
      { name: 'Mix Sabzi', image: images.mixSabzi, price: 800 },
      { name: 'Bendi Sabzi', image: images.bendiSabzi, price: 400 },
      { name: 'Salad', image: images.salad, price: null },
      { name: 'Naan / Roti', image: images.naan, price: null },
    ],
  },
] as const

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
          {['About', 'Stay', 'Amenities', 'Menu', 'Gallery', 'Location'].map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}
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

<section className="menu section" id="menu"><div className="page-width"><SectionIntro eyebrow="From our kitchen" title="Menu">
        <p>A taste of Skardu, prepared fresh. Ask our team for today's availability.</p>
      </SectionIntro>{menu.map((group) => <div className="menu-category" key={group.category}><h3>{group.category}</h3><div className="menu-grid">{group.items.map((item) => <div className="menu-item" key={item.name}><img className="menu-item-image" src={item.image} alt={item.name} loading="lazy" decoding="async" /><div className="menu-item-body"><span className="menu-item-name">{item.name}</span>{'half' in item ? <span className="menu-item-price">Half Rs. {item.half.toLocaleString()} / Full Rs. {item.full.toLocaleString()}</span> : item.price != null ? <span className="menu-item-price">Rs. {item.price.toLocaleString()}</span> : null}</div></div>)}</div></div>)}<p className="menu-drinks">Soft drinks also available: Pepsi, Coca-Cola, Sprite, 7Up, Fanta, Mountain Dew &amp; more.</p></div></section>

      <section className="gallery section-sand" id="gallery"><div className="page-width"><div className="gallery-heading"><SectionIntro eyebrow="A glimpse of the journey" title="The Skardu feeling" /><p>Mountain light, quiet mornings, and spaces made for slowing down.</p></div><div className="gallery-grid">{galleryImages.map((image) => <button className={`gallery-item ${image.size}`} key={image.src} onClick={() => setActiveImage(image.src)} aria-label={`View larger image: ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" decoding="async" /></button>)}</div></div></section>

      <section className="why section page-width"><SectionIntro eyebrow="Made for the moment" title="Why stay with us" /><div className="why-grid">{[['A beautiful setting', 'Experience the atmosphere of Skardu surrounded by spectacular natural scenery.', Mountain], ['Comfortable & convenient', 'Enjoy essential amenities including Wi-Fi, breakfast, parking, and dining.', Check], ['Family friendly', 'A welcoming option for guests traveling with children.', House], ['Easy booking', 'Contact the resort directly through WhatsApp for availability and reservations.', MessageCircle]].map(([title, text, Icon]) => <div className="why-item" key={title as string}><Icon size={23} strokeWidth={1.3} /><h3>{title as string}</h3><p>{text as string}</p></div>)}</div></section>

      <section className="booking-cta" style={{ backgroundImage: `url(${images.exteriorCloudy})` }}><div className="hero-overlay" /><div className="booking-inner page-width"><p className="eyebrow hero-eyebrow">Your next chapter begins here</p><h2>Planning your stay<br /><i>in Skardu?</i></h2><p>Talk directly with Greenland Resort about availability, room options, and your visit.</p><div className="hero-actions"><a className="button button-gold" href={whatsapp('Hello Greenland Resort, I am planning a stay in Skardu. Please share availability and current rates.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a><a className="text-link light-link" href={`tel:${phone}`}><Phone size={16} /> Call 0347 5250769</a></div></div></section>

      <section className="location section page-width" id="location"><div className="location-copy"><SectionIntro eyebrow="Come find us" title="Find Greenland Resort"><p>Skardu, Gilgit-Baltistan, Pakistan</p></SectionIntro><a className="button button-forest" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /> Open in Google Maps</a></div><a className="map-card" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Open Greenland Resort location in Google Maps"><div className="map-grid" /><div className="map-pin"><MapPin size={24} /></div><div className="map-label"><strong>Greenland Resort</strong><span>Skardu, Pakistan <ArrowRight size={14} /></span></div></a></section>

      <footer className="footer"><div className="page-width footer-grid"><div className="footer-brand"><a href="#home" className="brand brand-light"><span className="brand-mark">G</span><span>Greenland <em>Resort</em></span></a><p>Your peaceful stay in Skardu.</p><a className="social" href="#gallery" aria-label="View gallery"><Globe2 size={18} /></a></div><div><p className="footer-label">Explore</p><a href="#about">About</a><a href="#stay">Stay</a><a href="#amenities">Amenities</a><a href="#menu">Menu</a><a href="#gallery">Gallery</a></div><div><p className="footer-label">Contact</p><a href={`tel:${phone}`}>0347 5250769</a><a href="#location">Skardu, Gilgit-Baltistan</a><a href={mapsUrl} target="_blank" rel="noreferrer">View location</a></div><div className="footer-action"><p>Ready to plan your stay?</p><a className="button button-gold" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a></div></div><div className="page-width footer-bottom"><span>© 2026 Greenland Resort. All rights reserved.</span><span>Skardu · Gilgit-Baltistan · Pakistan</span></div></footer>

      <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Chat with Greenland Resort"><MessageCircle size={23} /><span>Chat with Greenland Resort</span></a>
      {activeImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setActiveImage(null)}><button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image"><X /></button><img src={activeImage} alt="Expanded gallery view" onClick={(event) => event.stopPropagation()} /></div>}
    </main>
  )
}
