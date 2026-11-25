// Shared, approved colour/background pairings for all men’s, women’s and kids’ products.
// Red → light grey | Black → warm beige | White → taupe grey | Cream → terracotta.
export const COLOUR_OPTIONS = [
  { id: 'red', name: 'Red', hex: '#C90F1D', background: '#D9DCE1' },
  { id: 'black', name: 'Black', hex: '#171717', background: '#F2DDCF' },
  { id: 'white', name: 'White', hex: '#FFFFFF', background: '#AA9F9B' },
  { id: 'cream', name: 'Cream', hex: '#E9D6BC', background: '#AD6C57' },
]

// Colour options are customisable mockups, not availability or inventory promises.
export function variantsFor(product) {
  return COLOUR_OPTIONS.map(colour => ({
    ...colour,
    image: `/images/products/variants/${product.id}-${colour.id}.webp`,
  }))
}
