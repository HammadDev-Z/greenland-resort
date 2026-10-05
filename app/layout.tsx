import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { mapsUrl, phone, siteName, siteUrl } from '@/lib/site-config'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'

const title = 'Greenland Resort Skardu | Comfortable Stay in Skardu'
const description =
  'Discover Greenland Resort in Skardu, Gilgit-Baltistan. Enjoy a comfortable stay with free Wi-Fi, complimentary breakfast, free parking, dining, and family-friendly facilities. Contact us on WhatsApp for availability and reservations.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ['Greenland Resort Skardu', 'Resort in Skardu', 'Skardu accommodation', 'Stay in Skardu', 'Gilgit-Baltistan accommodation'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Greenland Resort guest cottages at sunset with mountain views' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const hotelJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: siteName,
  description,
  url: siteUrl,
  telephone: phone,
  image: [`${siteUrl}/og-image.jpg`, `${siteUrl}/gallery/room-classic.webp`, `${siteUrl}/gallery/bathroom.webp`],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8H7G+6C',
    addressLocality: 'Skardu',
    addressRegion: 'Gilgit-Baltistan',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.313088,
    longitude: 75.576075,
  },
  hasMap: mapsUrl,
  checkinTime: '12:00',
  checkoutTime: '10:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Breakfast', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'On-site Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pet-Friendly', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kitchens in Some Rooms', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Airport Shuttle', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kid-Friendly', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: false },
    { '@type': 'LocationFeatureSpecification', name: 'Pool', value: false },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: false },
    { '@type': 'LocationFeatureSpecification', name: 'Fitness Center', value: false },
    { '@type': 'LocationFeatureSpecification', name: 'Smoke-Free', value: false },
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }} />
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
