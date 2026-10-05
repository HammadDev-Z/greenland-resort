import Link from 'next/link'
import { Globe2 } from 'lucide-react'
import { mapsUrl, phone, whatsapp } from '@/lib/site-config'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-width footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-light">
            <span className="brand-mark"><img src="/logo-mark.png" alt="" /></span>
            <span>Greenland <em>Resort</em></span>
          </Link>
          <p>Your peaceful stay in Skardu.</p>
          <Link href="/gallery" className="social" aria-label="View gallery">
            <Globe2 size={18} />
          </Link>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/about">About</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href={`tel:${phone}`}>0347 5250769</a>
          <Link href="/#location">Skardu, Gilgit-Baltistan</Link>
          <a href={mapsUrl} target="_blank" rel="noreferrer">View location</a>
        </div>
        <div className="footer-action">
          <p>Ready to plan your stay?</p>
          <a className="button button-gold" href={whatsapp()} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={17} /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© 2026 Greenland Resort. All rights reserved.</span>
        <span>Skardu · Gilgit-Baltistan · Pakistan</span>
      </div>
    </footer>
  )
}
