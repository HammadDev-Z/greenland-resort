import type { Metadata } from 'next'
import { menu } from '@/lib/content'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata: Metadata = {
  title: 'Menu | Greenland Resort Skardu',
  description: 'Explore the menu at Greenland Resort in Skardu — karahi, barbecue, vegetarian dishes, and more, prepared fresh.',
  alternates: { canonical: '/menu' },
}

export default function MenuPage() {
  return (
    <section className="section page-width">
      <SectionIntro eyebrow="From our kitchen" title="Menu">
        <p>A taste of Skardu, prepared fresh. Ask our team for today&apos;s availability and pricing.</p>
      </SectionIntro>

      {menu.map((group) => (
        <div className="menu-category" key={group.category}>
          <h3>{group.category}</h3>
          <div className="menu-grid">
            {group.items.map((item) => (
              <div className="menu-item" key={item.name}>
                <img className="menu-item-image" src={item.image} alt={item.name} loading="lazy" decoding="async" />
                <div className="menu-item-body">
                  <span className="menu-item-name">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <p className="menu-drinks">Soft drinks also available: Pepsi, Coca-Cola, Sprite, 7Up, Fanta, Mountain Dew &amp; more.</p>
    </section>
  )
}
