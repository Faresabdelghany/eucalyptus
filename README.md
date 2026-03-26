# Eucalyptus Wood Pallet

Website for a wooden packaging manufacturer based in Cairo, Egypt. Built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- **React 19** with React Router v7
- **Vite 7** for fast dev/build
- **Tailwind CSS v4** with custom theme
- **Cloudflare Pages** for deployment
- **Resend** for contact form email delivery

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, product cards carousel, philosophy with stats, CTA |
| About | `/about` | Company story, values, 4-step process |
| Services | `/services` | Pallets, boxes, crates, cable drums, glass crates — anchored sections |
| Contact | `/contact` | Contact form (Resend API), business info sidebar |

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Charcoal | `#2c2c2c` | Text, dark backgrounds |
| Warm Cream | `#f5f0e8` | Page background |
| Amber | `#c4883a` | Accents, buttons, links |
| Deep Walnut | `#5c3d2e` | Secondary accent |
| Ivory | `#fefcf7` | Card backgrounds |
| Muted | `#9a9087` | Secondary text |

### Fonts

- **Playfair Display** — Headings (EN)
- **Readex Pro** — All text (AR)
- **DM Sans** — Body text (EN)

## i18n

Full English/Arabic support. All copy lives in `src/i18n/en.js` and `src/i18n/ar.js`. Language is persisted to `localStorage` and switches the document `dir` attribute for RTL layout.

## Getting Started

```bash
npm install
npm run dev        # Dev server
npm run build      # Production build
npm run preview    # Preview via Wrangler (Cloudflare Pages)
npm run deploy     # Deploy to Cloudflare Pages
```

Requires `RESEND_API_KEY` environment variable for the contact form.

## Project Structure

```
src/
  components/
    Navbar.jsx          # Fixed nav with mobile menu and scroll effects
    Footer.jsx          # Footer with navigation, services, and contact info
    ProductCard.jsx     # Reusable product card used in the home carousel
    ServiceSection.jsx  # Reusable section block used on the Services page
  pages/
    Home.jsx            # Landing page with hero, product carousel, and stats
    About.jsx           # Story, values, and process
    Services.jsx        # All product/service detail sections with anchors
    Contact.jsx         # Form with validation and info sidebar
  hooks/
    useScrollReveal.js  # IntersectionObserver scroll animations
  i18n/
    en.js               # English translations
    ar.js               # Arabic translations
    index.js            # t(lang, key) resolver
  context/
    LanguageContext.jsx  # Language state and direction management
  App.jsx               # Router setup with ScrollToTop
  index.css             # Tailwind theme, custom animations, RTL overrides
public/
  images/               # All site images
  _redirects            # SPA routing for Cloudflare Pages
functions/
  api/contact.js        # Cloudflare Pages function — form submission via Resend
```

## Features

- Fully responsive (mobile, tablet, desktop)
- Arabic / English language toggle with full RTL support
- Scroll-triggered reveal animations
- Product card carousel on desktop, stacked on mobile
- Contact form with server-side validation and Resend email delivery
- Per-page SEO: title, description, canonical URL, Open Graph, and JSON-LD
