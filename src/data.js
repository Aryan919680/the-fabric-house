// Apparel catalogue supplied by the site owner. Product photographs are AI-generated mockups, not factory product photography.
// Fabric composition for kids hoodies/sweatshirts and cotton weight are pending confirmation.
export const categories = [
  {
    "name": "Men's Winter",
    "count": "5 winter essentials",
    "image": "/images/products/pullover-hoodies.webp",
    "color": "#d9c1af"
  },
  {
    "name": "Men's Cotton",
    "count": "4 cotton styles",
    "image": "/images/products/mens-cotton-tshirts.webp",
    "color": "#d1c0b1"
  },
  {
    "name": "Men's Activewear",
    "count": "2 performance styles",
    "image": "/images/products/dryfit-tshirts.webp",
    "color": "#bdc4c9"
  },
  {
    "name": "Kids' Clothing",
    "count": "4 young essentials",
    "image": "/images/products/kids-hoodies.webp",
    "color": "#c4cfe1"
  }
]

export const fabrics = [
  { name: 'Cotton blends', sub: 'Soft, dependable, versatile', image: '/images/fabric-cotton.svg', color: '#bba58c' },
  { name: 'Natural fibres', sub: 'Texture with a lighter touch', image: '/images/fabric-organic.svg', color: '#7b7a6c' },
  { name: 'Custom colours', sub: 'Your palette, your point of view', image: '/images/fabric-colours.svg', color: '#a25d48' },
  { name: 'Premium knits', sub: 'Comfort you can feel', image: '/images/fabric-knits.svg', color: '#ded1ba' },
]

export const products = [
  {
    "id": "pullover-hoodies",
    "name": "Pullover Hoodies",
    "category": "Men's Winter",
    "image": "/images/products/pullover-hoodies.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Winter",
    "color": "Sand beige",
    "colors": [],
    "description": "Classic pullover hoodie with a roomy kangaroo pocket and comfortable ribbed finishing. A versatile starting point for custom collections.",
    "fabric": "65% Cotton / 35% Polyester",
    "specs": {
      "Fit": "Regular or Oversized",
      "Neckline": "Hooded",
      "Pocket": "Front Kangaroo Pocket",
      "Sleeves": "Full Length",
      "Cuffs & Hem": "Ribbed cuffs & hem",
      "Fabric": "65% Cotton / 35% Polyester",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Oversized fit",
      "65% Cotton / 35% Polyester",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "full-zip-hoodies",
    "name": "Full-Zip Hoodies",
    "category": "Men's Winter",
    "image": "/images/products/full-zip-hoodies.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Winter",
    "color": "Sand beige",
    "colors": [],
    "description": "Easy-to-layer zip-front hoodie with a full-length zipper, hood, and split front pockets.",
    "fabric": "65% Cotton / 35% Polyester",
    "specs": {
      "Fit": "Regular or Oversized",
      "Neckline": "Hooded with full-length zipper",
      "Pocket": "Split front pockets",
      "Sleeves": "Full Length",
      "Cuffs & Hem": "Ribbed cuffs & hem",
      "Fabric": "65% Cotton / 35% Polyester",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Oversized fit",
      "65% Cotton / 35% Polyester",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "sweatshirts",
    "name": "Sweatshirts",
    "category": "Men's Winter",
    "image": "/images/products/sweatshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Winter",
    "color": "Sand beige",
    "colors": [],
    "description": "Soft classic crewneck sweatshirt with a simple, versatile silhouette and ribbed trims.",
    "fabric": "65% Cotton / 35% Polyester",
    "specs": {
      "Fit": "Regular or Relaxed",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Full Length",
      "Cuffs & Hem": "Ribbed collar, cuffs & hem",
      "Fabric": "65% Cotton / 35% Polyester",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Relaxed fit",
      "65% Cotton / 35% Polyester",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "half-zip-sweatshirts",
    "name": "Half-Zip Sweatshirts",
    "category": "Men's Winter",
    "image": "/images/products/half-zip-sweatshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Winter",
    "color": "Sand beige",
    "colors": [],
    "description": "A neat stand-collar sweatshirt with a short front zipper and an easy everyday fit.",
    "fabric": "65% Cotton / 35% Polyester",
    "specs": {
      "Fit": "Regular or Relaxed",
      "Neckline": "Stand Collar with Half Zip",
      "Pocket": "No pocket",
      "Sleeves": "Full Length",
      "Cuffs & Hem": "Ribbed cuffs & hem",
      "Fabric": "65% Cotton / 35% Polyester",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Relaxed fit",
      "65% Cotton / 35% Polyester",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "jogger-pants",
    "name": "Jogger Pants",
    "category": "Men's Winter",
    "image": "/images/products/jogger-pants.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Winter",
    "color": "Sand beige",
    "colors": [],
    "description": "Tapered everyday joggers with a drawstring elastic waist, side pockets, and ribbed ankle cuffs.",
    "fabric": "65% Cotton / 35% Polyester",
    "specs": {
      "Fit": "Regular or Relaxed",
      "Neckline": "Elastic drawstring waist",
      "Pocket": "Side pockets",
      "Sleeves": "Full Length Legs",
      "Cuffs & Hem": "Ribbed ankle cuffs",
      "Fabric": "65% Cotton / 35% Polyester",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Relaxed fit",
      "65% Cotton / 35% Polyester",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "mens-cotton-tshirts",
    "name": "Men's Cotton T-Shirts",
    "category": "Men's Cotton",
    "image": "/images/products/mens-cotton-tshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Cotton",
    "color": "Sand beige",
    "colors": [],
    "description": "Everyday cotton crewneck T-shirt with a clean silhouette ready for print or private-label branding.",
    "fabric": "Cotton",
    "specs": {
      "Fit": "Regular or Oversized",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Short Sleeves",
      "Cuffs & Hem": "Stitched sleeve & bottom hems",
      "Fabric": "Cotton",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Oversized fit",
      "Cotton",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "mens-polo-tshirts",
    "name": "Men's Polo T-Shirts",
    "category": "Men's Cotton",
    "image": "/images/products/mens-polo-tshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Cotton",
    "color": "Sand beige",
    "colors": [],
    "description": "Smart-casual collared polo shirt with a button placket and classic shape.",
    "fabric": "Cotton",
    "specs": {
      "Fit": "Regular",
      "Neckline": "Polo Collar with Button Placket",
      "Pocket": "No pocket",
      "Sleeves": "Short Sleeves",
      "Cuffs & Hem": "Finished cuffs & straight hem",
      "Fabric": "Cotton",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular fit",
      "Cotton",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "heavyweight-tshirts",
    "name": "Heavyweight T-Shirts",
    "category": "Men's Cotton",
    "image": "/images/products/heavyweight-tshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Cotton",
    "color": "Charcoal",
    "colors": [],
    "description": "A substantial cotton T-shirt with structured shape, thicker collar and relaxed proportions.",
    "fabric": "Cotton (weight to be confirmed)",
    "specs": {
      "Fit": "Relaxed or Oversized",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Short Sleeves",
      "Cuffs & Hem": "Reinforced collar & stitched hems",
      "Fabric": "Cotton (weight to be confirmed)",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Relaxed or Oversized fit",
      "Cotton (weight to be confirmed)",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "crop-tshirts",
    "name": "Crop T-Shirts",
    "category": "Men's Cotton",
    "image": "/images/products/crop-tshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Cotton",
    "color": "Dusty rose",
    "colors": [],
    "description": "Boxy cropped T-shirt with a modern short hem and roomy sleeves.",
    "fabric": "Cotton",
    "specs": {
      "Fit": "Relaxed / Boxy Crop",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Short Sleeves",
      "Cuffs & Hem": "Double-stitched cropped hem",
      "Fabric": "Cotton",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Relaxed / Boxy Crop fit",
      "Cotton",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "dryfit-tshirts",
    "name": "Dry-Fit T-Shirts",
    "category": "Men's Activewear",
    "image": "/images/products/dryfit-tshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Activewear",
    "color": "Navy blue",
    "colors": [],
    "description": "Lightweight performance T-shirt with an athletic shape and smooth moisture-managing polyester fabric.",
    "fabric": "100% Polyester",
    "specs": {
      "Fit": "Regular or Athletic",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Short Sleeves",
      "Cuffs & Hem": "Stitched sleeve & bottom hems",
      "Fabric": "100% Polyester",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Athletic fit",
      "100% Polyester",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "longsleeve-dryfit-tshirts",
    "name": "Long-Sleeve Dry-Fit T-Shirts",
    "category": "Men's Activewear",
    "image": "/images/products/longsleeve-dryfit-tshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Men's Activewear",
    "color": "Navy blue",
    "colors": [],
    "description": "Long-sleeve performance tee with smooth lightweight fabric and an easy active fit.",
    "fabric": "100% Polyester",
    "specs": {
      "Fit": "Regular or Athletic",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Full Length",
      "Cuffs & Hem": "Finished cuffs & bottom hem",
      "Fabric": "100% Polyester",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Athletic fit",
      "100% Polyester",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "kids-hoodies",
    "name": "Kids' Hoodies",
    "category": "Kids' Clothing",
    "image": "/images/products/kids-hoodies.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Kids' Clothing",
    "color": "Sky blue",
    "colors": [],
    "description": "Cosy, child-sized pullover hoodie with a front kangaroo pocket and ribbed cuffs and hem.",
    "fabric": "To be confirmed",
    "specs": {
      "Fit": "Regular or Relaxed",
      "Neckline": "Hooded",
      "Pocket": "Front Kangaroo Pocket",
      "Sleeves": "Full Length",
      "Cuffs & Hem": "Ribbed cuffs & hem",
      "Fabric": "To be confirmed",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Relaxed fit",
      "To be confirmed",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "kids-sweatshirts",
    "name": "Kids' Sweatshirts",
    "category": "Kids' Clothing",
    "image": "/images/products/kids-sweatshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Kids' Clothing",
    "color": "Sky blue",
    "colors": [],
    "description": "Easy everyday kids crewneck sweatshirt with cosy styling and neat ribbed finishing.",
    "fabric": "To be confirmed",
    "specs": {
      "Fit": "Regular or Relaxed",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Full Length",
      "Cuffs & Hem": "Ribbed collar, cuffs & hem",
      "Fabric": "To be confirmed",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular or Relaxed fit",
      "To be confirmed",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "kids-cotton-tshirts",
    "name": "Kids' Cotton T-Shirts",
    "category": "Kids' Clothing",
    "image": "/images/products/kids-cotton-tshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Kids' Clothing",
    "color": "Lavender",
    "colors": [],
    "description": "Soft everyday cotton T-shirt with a simple crewneck shape for younger wearers.",
    "fabric": "Cotton",
    "specs": {
      "Fit": "Regular",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Short Sleeves",
      "Cuffs & Hem": "Stitched sleeve & bottom hems",
      "Fabric": "Cotton",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular fit",
      "Cotton",
      "Custom colours, printing & private label"
    ]
  },
  {
    "id": "kids-polyester-tshirts",
    "name": "Kids' Polyester T-Shirts",
    "category": "Kids' Clothing",
    "image": "/images/products/kids-polyester-tshirts.webp",
    "fallback": "/images/essential-tee.svg",
    "label": "Kids' Clothing",
    "color": "Navy blue",
    "colors": [],
    "description": "Lightweight polyester kids T-shirt suitable for activity-inspired collections.",
    "fabric": "100% Polyester",
    "specs": {
      "Fit": "Regular",
      "Neckline": "Crew Neck",
      "Pocket": "No pocket",
      "Sleeves": "Short Sleeves",
      "Cuffs & Hem": "Finished sleeve & bottom hems",
      "Fabric": "100% Polyester",
      "Design": "Solid or Custom Printed",
      "Colours & Sizes": "Customizable",
      "Branding": "Private Label Available",
      "Supply": "Bulk and Wholesale Orders"
    },
    "features": [
      "Regular fit",
      "100% Polyester",
      "Custom colours, printing & private label"
    ]
  }
]

export const processSteps = [
  { number: '01', title: 'Share your vision', detail: 'Tell us what you are building, the pieces you love and the story behind your brand.' },
  { number: '02', title: 'Explore materials', detail: 'Shape the texture, fit, colours and finishing details that feel true to your idea.' },
  { number: '03', title: 'Refine the details', detail: 'Review your concept and align on details before moving to the next stage.' },
  { number: '04', title: 'Make it yours', detail: 'Bring your chosen styles and brand identity together into a considered collection.' },
]
