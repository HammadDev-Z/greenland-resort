'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { whatsapp } from '@/lib/site-config'
import { WhatsAppIcon } from './WhatsAppIcon'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
]

export function Nav() {
  const pathname = usePathname()
  const hasDarkHero = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(!hasDarkHero)

  useEffect(() => {
    if (!hasDarkHero) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hasDarkHero])

  return (
    <header className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
      <Link href="/" className="brand" aria-label="Greenland Resort home">
        <span className="brand-mark"><img src="/logo-mark.png" alt="" /></span>
        <span>Greenland <em>Resort</em></span>
      </Link>
      <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Main navigation">
        {navLinks.map((item) => (
          <Link href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a className="nav-mobile-cta" href={whatsapp()} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={16} /> Book on WhatsApp
        </a>
      </nav>
      <a className="nav-cta" href={whatsapp()} target="_blank" rel="noreferrer">
        <WhatsAppIcon size={16} /> Book on WhatsApp
      </a>
      <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}
