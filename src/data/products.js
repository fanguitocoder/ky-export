// Milexus brand product catalog - Premium home appliances and electronics
const imageBase = `${import.meta.env.BASE_URL}images/milexus-wm/`

export const products = [
  {
    id: 1,
    translationKey: 'products.items.washingMachine',
    category: 'Appliances',
    image: `${imageBase}washing-machine.jpg`,
    featured: true
  },
  {
    id: 2,
    translationKey: 'products.items.airConditioner',
    category: 'Appliances',
    image: `${imageBase}air-cond.webp`,
    featured: true
  },
  {
    id: 3,
    translationKey: 'products.items.smartTv',
    category: 'Electronics',
    image: `${imageBase}tv-set.png`,
    featured: true
  },
  {
    id: 4,
    translationKey: 'products.items.refrigerator',
    category: 'Appliances',
    image: `${imageBase}refrigerator.png`,
    featured: true
  },
  {
    id: 5,
    translationKey: 'products.items.microwave',
    category: 'Kitchen Appliances',
    image: `${imageBase}microwave.png`,
    featured: true
  },
  {
    id: 6,
    translationKey: 'products.items.gasCooker',
    category: 'Kitchen Appliances',
    image: `${imageBase}JMD-infrared-kitchen.png`,
    featured: false
  },
  {
    id: 7,
    translationKey: 'products.items.blender',
    category: 'Kitchen Appliances',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop',
    featured: false
  },
  {
    id: 8,
    translationKey: 'products.items.kettle',
    category: 'Kitchen Appliances',
    image: 'https://images.unsplash.com/photo-1607748851239-cee720a3b3ea?w=400&h=400&fit=crop',
    featured: false
  },
  {
    id: 9,
    translationKey: 'products.items.vacuum',
    category: 'Home Care',
    image: `${imageBase}vacuum.png`,
    featured: true
  },
  {
    id: 10,
    translationKey: 'products.items.fan',
    category: 'Appliances',
    image: `${imageBase}fan.png`,
    featured: false
  },
  {
    id: 11,
    translationKey: 'products.items.iron',
    category: 'Home Care',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&h=400&fit=crop',
    featured: false
  },
  {
    id: 12,
    translationKey: 'products.items.dispenser',
    category: 'Appliances',
    image: 'https://images.unsplash.com/photo-1582103309952-64e1f384c0be?w=400&h=400&fit=crop',
    featured: false
  }
]

export const categories = [
  'All',
  'Appliances',
  'Electronics',
  'Kitchen Appliances',
  'Home Care'
]
