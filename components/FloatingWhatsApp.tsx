import { whatsapp } from '@/lib/site-config'
import { WhatsAppIcon } from './WhatsAppIcon'

export function FloatingWhatsApp() {
  return (
    <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Chat with Greenland Resort">
      <WhatsAppIcon size={23} />
      <span>Chat with Greenland Resort</span>
    </a>
  )
}
