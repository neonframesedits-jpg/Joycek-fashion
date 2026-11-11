# Joycek Fashion — Unisex Atelier

A luxury storefront for a unisex fashion house that sews every garment in-house and delivers it to the customer's door.

**The Second Stitch** (the brand's name for the offer, never "buy one get one free"): sew one piece, choose any second piece from the collection, and the atelier sews it as a gift. In every pair, the lower-priced piece is the one that's free.

## Run it
Open `index.html` in a browser. There's no build step, and you can host it on GitHub Pages, Netlify or any static host.

## Customise
- **Add a new piece:** put the photo in `images/collection/` (portrait, ideally 3:4, e.g. 900×1200), then add one line to the `PRODUCTS` list at the top of `script.js` with its name, category (`gowns`, `sets` or `dresses`), file name and a short description. No prices are shown on the site.
- **Hero and slideshow photos:** any element with `data-photo="<product id>"` in `index.html` shows that product's photo.
- **Testimonials** in `index.html` are placeholders. Replace them with real customer words before launch.
