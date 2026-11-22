# The Fabric House — React + Tailwind website

A responsive clothing / private-label apparel showcase inspired by **Template 3 — The Textile Studio**.

**Tagline:** Your Vision. Our Fabric. Your Brand.

## Quick start

Requires Node.js 20.19+ (Node 22+ recommended).

```bash
npm install
npm run dev
```

Open the local address shown by Vite (usually http://localhost:5173).

To make a production bundle:

```bash
npm run build
npm run preview
```

## Included

- Responsive home page, fabric story, sample collections and process sections.
- Full collection page with category filtering, search and sorting.
- Product detail pages with colour selections and enquiry buttons.
- Saved-style hearts (persisted in your browser's localStorage).
- About, Process and Contact routes.
- Responsive menu, basic accessibility and keyboard-friendly modal.
- Enquiry form that validates fields and **generates a copyable message**. It **does not send emails** and no backend is connected.
- Locally bundled SVG product illustrations, avoiding external product-image dependencies.

## Paths

Routes use hash-based URLs, e.g. `/#/collections`, so the site can deploy to static hosts without special server rewrites.

## Personalise it

1. Update `src/config.js` with your brand name and future contact information.
2. Edit `src/data.js` to add your real product names, descriptions, categories and actual specifications.
3. Replace `public/images/*.svg` placeholders with your product photography and update image paths in `src/data.js`.
4. Edit `src/App.jsx` for your business story, production process and other copy.
5. Update colours and font styles in `src/styles.css` (the components use Tailwind v4 utilities alongside a few custom design-system classes).
6. Connect an email service (such as a serverless function or Formspree) before advertising the enquiry form as an actual submission channel. Add server-side validation, spam protection and consent messaging as appropriate.

## Important notes

This is a front-end presentation site, **not an e-commerce checkout or admin CMS**. The brand identity, products, colours and process descriptions are examples and should be verified or replaced before publishing. The project uses Tailwind CSS v4 and the official Vite plugin. Fonts are loaded from Google Fonts when internet is available, with sensible system fallbacks.

## Browser preview without npm

Open `preview.html` directly in a browser. It is a self-contained, interactive **HTML demonstration** of the same design direction, including collection browsing and an enquiry modal. The main project remains the React app in `src/`.

## Catalogue content

This version includes eight locally illustrated, generic clothing style placeholders so the existing collection, search, filters and detail pages remain usable. No third-party product photos, product links or price data are included. Replace the placeholders with your own clothing products when ready.

You can add licensed or original product photos to `src/productPhotos.js` for future photo galleries.
# the-fabric-house
