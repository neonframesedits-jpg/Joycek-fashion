# Joycek — Unisex Atelier

A luxury storefront for a unisex fashion house that sews every garment in-house and delivers it to the customer's door.

**The Second Stitch** (the brand's name for the offer, never "buy one get one free"): sew one piece, choose any second piece from the collection, and the atelier sews it as a gift. In every pair, the lower-priced piece is the one that's free.

## Run it
Open `index.html` in a browser. There's no build step, and you can host it on GitHub Pages, Netlify or any static host.

## Customise
- **Currency:** edit `CURRENCY` at the top of `script.js`.
- **Products:** edit the `PRODUCTS` array in `script.js` (name, category, price, fabric colour, pattern, silhouette).
- **Photos:** the garments are illustrated SVGs. To use real photography, replace `${garmentArt(p)}` in the card template with `<img class="art" src="..." style="object-fit:cover">`.
- **Testimonials** in `index.html` are placeholders. Replace them with real customer words before launch.
