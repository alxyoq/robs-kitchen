# Rob's Kitchen

Website for Rob's Kitchen, a Jamaican and American soul-food restaurant at
804 N White Horse Pike in Stratford, New Jersey.

## Included

- Responsive home, menu, catering, gallery, contact, and thank-you pages
- Current public address, phone number, hours, and Toast ordering link
- Menu and catering pricing sourced from the restaurant's current Toast menu
- Real restaurant, family, and food photography
- Netlify contact form
- Floating online-order button across every page
- Restaurant structured data and social sharing metadata
- Static Next.js export configured for Netlify

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run check
npm run build
```

The production export is written to `out/`.

## Netlify

Connect this repository to Netlify. The included `netlify.toml` uses:

- Build command: `npm run build`
- Publish directory: `out`

The contact form is written into the static export for Netlify Forms.

## Content Sources

Business information and menu data were checked against the restaurant's
public Instagram profile, Google listing, Toast ordering page, and current
local listings. See [PHOTO_SOURCES.md](PHOTO_SOURCES.md) for photography
sources and launch notes.
