export const images = {
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

export const facilities = [
  { label: 'Free Wi-Fi', icon: 'Wifi' as const },
  { label: 'Free Breakfast', icon: 'Coffee' as const },
  { label: 'Free Parking', icon: 'Car' as const },
  { label: 'Pet-Friendly', icon: 'PawPrint' as const },
  { label: 'On-site Restaurant', icon: 'Utensils' as const },
  { label: 'Kid-Friendly', icon: 'House' as const },
]

export const amenityDetails = [
  ['Free Wi-Fi', 'Stay connected throughout your visit.', 'Wifi'] as const,
  ['Complimentary Breakfast', 'Start your morning with breakfast included with your stay.', 'Coffee'] as const,
  ['Free Parking', 'Convenient parking available for guests.', 'Car'] as const,
  ['Kid-Friendly', 'A welcoming environment for families traveling with children.', 'House'] as const,
  ['Restaurant', 'Enjoy dining conveniently at the resort.', 'Utensils'] as const,
  ['Kitchens in Some Rooms', 'Selected rooms include kitchen facilities for added convenience.', 'QrCode'] as const,
  ['Pet-Friendly', 'Traveling with a furry companion? Pets are welcome at Greenland Resort.', 'PawPrint'] as const,
  ['Room Service', 'Enjoy the convenience of room service during your stay.', 'ConciergeBell'] as const,
  ['Airport Shuttle', 'Convenient shuttle service available to and from the airport.', 'Bus'] as const,
  ['Bonfire Nights', 'Gather around a bonfire in the evenings for a warm night under the Skardu sky.', 'Flame'] as const,
]

export const galleryImages = [
  { src: images.valley, alt: 'Mountain valley beneath a clear sky', size: 'tall' },
  { src: images.roomClassic, alt: 'Warmly designed guest room with wooden furnishings', size: 'wide' },
  { src: images.exteriorSunset, alt: 'Guest rooms at sunset with mountain views', size: 'square' },
  { src: images.roomDeluxe, alt: 'Cozy, softly lit guest room interior', size: 'wide' },
  { src: images.bathroom, alt: 'Bright, modern en-suite bathroom', size: 'tall' },
  { src: images.roomStandard, alt: 'Comfortable guest room interior', size: 'square' },
  { src: images.exteriorCloudy, alt: 'Guest cottages beneath a dramatic Skardu sky', size: 'wide' },
]

export const menu = [
  {
    category: 'Karahi',
    items: [
      { name: 'Chicken Karahi', image: images.chickenKarahi },
      { name: 'Chicken White Karahi', image: images.chickenWhiteKarahi },
    ],
  },
  {
    category: 'Barbecue',
    items: [
      { name: 'Bar B Q', image: images.barbecue },
      { name: 'Trout Fish B Q', image: images.troutFish },
      { name: 'Desi Fish B Q', image: images.desiFish },
    ],
  },
  {
    category: 'Vegetarian & Sides',
    items: [
      { name: 'Daal', image: images.daal },
      { name: 'Mix Sabzi', image: images.mixSabzi },
      { name: 'Bendi Sabzi', image: images.bendiSabzi },
      { name: 'Salad', image: images.salad },
      { name: 'Naan / Roti', image: images.naan },
    ],
  },
]

export const rooms = [
  {
    name: 'Classic Room',
    image: images.roomClassic,
    description: 'Warmly designed with wooden furnishings, a comfortable bed, and a relaxed, homely feel — perfect for a peaceful night after a day exploring Skardu.',
  },
  {
    name: 'Deluxe Room',
    image: images.roomDeluxe,
    description: 'A cozy, softly lit room with extra space to unwind, ideal for guests wanting a touch more comfort during their stay.',
  },
  {
    name: 'Standard Room',
    image: images.roomStandard,
    description: 'A comfortable, well-appointed room covering everything you need for a convenient stay at Greenland Resort.',
  },
]

export const experienceCards = [
  { src: images.exteriorCloudy, number: '01', title: 'Mountain adventures' },
  { src: images.valley, number: '02', title: 'Scenic landscapes' },
  { src: images.exteriorSunset, number: '03', title: 'Peaceful getaways' },
  { src: images.roomClassic, number: '04', title: 'Family exploration' },
]

export const whyStay = [
  { title: 'A beautiful setting', text: 'Experience the atmosphere of Skardu surrounded by spectacular natural scenery.', icon: 'Mountain' as const },
  { title: 'Comfortable & convenient', text: 'Enjoy essential amenities including Wi-Fi, breakfast, parking, and dining.', icon: 'Check' as const },
  { title: 'Family friendly', text: 'A welcoming option for guests traveling with children.', icon: 'House' as const },
  { title: 'Easy booking', text: 'Contact the resort directly through WhatsApp for availability and reservations.', icon: 'MessageCircle' as const },
]
