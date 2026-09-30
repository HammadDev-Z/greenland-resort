export const siteUrl = 'https://greenlandresortskardu.com'
export const siteName = 'Greenland Resort'
export const phone = '+923475250769'
export const mapsUrl = 'https://maps.app.goo.gl/YyMqrmfw6pSR1odKA'

export const whatsapp = (message = 'Hello Greenland Resort, I would like to inquire about room availability and rates.') =>
  `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`
