// Demo catalogue: names, descriptions, colors, and imagery are illustrative.
// Replace these objects with your own product data once available.
export const categories = [
  { name: 'T-Shirts', count: 'Everyday staples', image: '/images/essential-tee.svg', color: '#dbd0bf' },
  { name: 'Shirts & Polos', count: 'Easy refinement', image: '/images/everyday-polo.svg', color: '#d6d4c4' },
  { name: 'Sweatshirts', count: 'Comfort, considered', image: '/images/relaxed-hoodie.svg', color: '#d7baa5' },
  { name: 'Outerwear', count: 'The finishing layer', image: '/images/utility-jacket.svg', color: '#ccd0bf' },
]

export const fabrics = [
  { name: 'Cotton blends', sub: 'Soft, dependable, versatile', image: '/images/fabric-cotton.svg', color: '#bba58c' },
  { name: 'Natural fibres', sub: 'Texture with a lighter touch', image: '/images/fabric-organic.svg', color: '#7b7a6c' },
  { name: 'Custom colours', sub: 'Your palette, your point of view', image: '/images/fabric-colours.svg', color: '#a25d48' },
  { name: 'Premium knits', sub: 'Comfort you can feel', image: '/images/fabric-knits.svg', color: '#ded1ba' },
]

export const products = [
  {
    id: 'essential-cotton-tee', name: 'Essential Cotton Tee', category: 'T-Shirts', image: '/images/essential-tee.svg',
    label: 'The essentials', color: 'Warm stone', colors: ['#a98775', '#f0e7d7', '#3f3936'],
    description: 'A classic crewneck with a clean silhouette, ready for your own label, colours and finishing touches.',
    features: ['Clean crewneck shape', 'Multiple colour directions', 'Custom branding options'],
  },
  {
    id: 'everyday-polo', name: 'The Everyday Polo', category: 'Shirts & Polos', image: '/images/everyday-polo.svg',
    label: 'Refined casual', color: 'Soft olive', colors: ['#7d7d70', '#ede4d3', '#6b4638'],
    description: 'An easy everyday polo with a considered collar and classic proportions for work or leisure.',
    features: ['Classic collared profile', 'Versatile everyday style', 'Custom branding options'],
  },
  {
    id: 'relaxed-hoodie', name: 'Relaxed Fit Hoodie', category: 'Sweatshirts', image: '/images/relaxed-hoodie.svg',
    label: 'Most loved', color: 'Clay', colors: ['#b28a73', '#777e6f', '#d8d0c3'],
    description: 'Comfort-forward layering with a relaxed shape, roomy hood and timeless styling.',
    features: ['Relaxed profile', 'Front kangaroo pocket', 'Custom branding options'],
  },
  {
    id: 'linen-blend-shirt', name: 'Linen Blend Shirt', category: 'Shirts & Polos', image: '/images/linen-shirt.svg',
    label: 'Easy refinement', color: 'Natural sand', colors: ['#dbcfb8', '#9daba2', '#e9e2d7'],
    description: 'A light, effortless button-down aesthetic with a natural look for warm-weather collections.',
    features: ['Button-front styling', 'Relaxed, breathable feel', 'Custom branding options'],
  },
  {
    id: 'signature-crewneck', name: 'Signature Crewneck', category: 'Sweatshirts', image: '/images/crewneck.svg',
    label: 'Layering staple', color: 'Mushroom', colors: ['#8c867b', '#d1bbaa', '#565b50'],
    description: 'A straightforward crewneck silhouette designed as a foundation for everyday collections.',
    features: ['Classic round neck', 'Ribbed finishing', 'Custom branding options'],
  },
  {
    id: 'utility-overshirt', name: 'Utility Overshirt', category: 'Outerwear', image: '/images/overshirt.svg',
    label: 'New direction', color: 'Burnt sienna', colors: ['#9f6c52', '#958e7b', '#ddd0bd'],
    description: 'A casual layering piece with structured details and a warm, workwear-inspired attitude.',
    features: ['Button-front shape', 'Utility-inspired pockets', 'Custom branding options'],
  },
  {
    id: 'everyday-twill-trouser', name: 'Everyday Twill Trouser', category: 'Bottoms', image: '/images/twill-trouser.svg',
    label: 'Easy essentials', color: 'Charcoal taupe', colors: ['#776e61', '#c2ab8d', '#363a37'],
    description: 'An unfussy everyday trouser direction with a considered shape and a clean finish.',
    features: ['Everyday silhouette', 'Relaxed styling', 'Custom branding options'],
  },
  {
    id: 'utility-jacket', name: 'The Utility Jacket', category: 'Outerwear', image: '/images/utility-jacket.svg',
    label: 'Statement layers', color: 'Sage grey', colors: ['#a7aaa0', '#6d675e', '#d3b29e'],
    description: 'An easy outer layer with practical lines, made to bring character to a curated range.',
    features: ['Versatile layering fit', 'Practical front pockets', 'Custom branding options'],
  },
]

export const processSteps = [
  { number: '01', title: 'Share your vision', detail: 'Tell us what you are building, the pieces you love and the story behind your brand.' },
  { number: '02', title: 'Explore materials', detail: 'Shape the texture, fit, colours and finishing details that feel true to your idea.' },
  { number: '03', title: 'Refine the details', detail: 'Review your concept and align on details before moving to the next stage.' },
  { number: '04', title: 'Make it yours', detail: 'Bring your chosen styles and brand identity together into a considered collection.' },
]
