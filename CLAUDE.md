# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run lint      # ESLint
npm run preview   # Preview build locally via Wrangler (Cloudflare Pages)
npm run deploy    # Deploy dist/ to Cloudflare Pages
```

No test suite is configured.

## Stack

- **React 19** + **React Router v7** (BrowserRouter, 4 routes)
- **Vite 7** + **Tailwind CSS v4** (configured via `@theme` in `src/index.css`, not `tailwind.config.js`)
- **Cloudflare Pages** for hosting; **Resend API** for contact form email (`RESEND_API_KEY` env var required)
- **React Helmet Async** for per-page `<head>` management

## Architecture

### Routing & Layout

`App.jsx` wraps everything in `BrowserRouter`. A `ScrollToTop` component (inline in `App.jsx`) handles scroll-to-top on navigation — it scrolls to top on plain route changes, or to the target anchor (offset by 96px for the fixed navbar) when a hash is present.

Pages: `/` → `Home`, `/about` → `About`, `/services` → `Services`, `/contact` → `Contact`.

### i18n System

All user-facing text lives in `src/i18n/en.js` and `src/i18n/ar.js`, structured as nested objects keyed by page and section (e.g. `nav.home`, `contact.info.addressValue`).

`src/i18n/index.js` exports a `t(lang, key)` function that resolves dot-notation keys with English fallback.

`src/context/LanguageContext.jsx` provides `{ lang, setLang, t }` via `useLanguage()`. On language change it:
- Sets `document.documentElement.lang` and `dir` (`rtl` for Arabic)
- Persists to `localStorage` under key `'lang'`

To update any copy, edit the translation files — never hardcode text in components. The footer address in `Footer.jsx` is the one exception where the EN address is hardcoded (not using `t()`).

### RTL Support

- `rtl:rotate-180` on arrow SVGs to flip direction
- `ms-*` / `me-*` (logical margin) instead of `ml-*` / `mr-*` for auto-flip
- `bg-gradient-to-r rtl:bg-gradient-to-l` on the hero
- `[dir="rtl"]` rules in `index.css` reverse the `.reveal-left` / `.reveal-right` slide direction
- Arabic uses **Readex Pro** font (set via `[lang="ar"]` in `index.css`)
- Contact page select chevron is repositioned dynamically based on `lang`

### Scroll Animations

`src/hooks/useScrollReveal.js` uses `IntersectionObserver` to add `.visible` to elements with classes `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-delay-1/2/3`. Called once per page component. CSS transitions in `index.css` handle the actual animation.

### Services Page Anchors

Each product section has an `id`: `#pallets`, `#boxes`, `#crates`, `#custom`. Footer service links and Home product cards link directly to these anchors (e.g. `/services#pallets`).

### Contact Form & API

`src/pages/Contact.jsx` POSTs to `/api/contact`. The handler lives in `functions/api/contact.js` (Cloudflare Pages function). It validates the payload server-side and sends email via Resend. `api/contact.js` at root is a legacy Vercel-style version — the `functions/` version is the active one.

### Custom Theme

Colours defined in `src/index.css` under `@theme`:
- `charcoal` `#2c2c2c` · `warm-cream` `#f5f0e8` · `amber` `#c4883a` · `deep-walnut` `#5c3d2e` · `ivory` `#fefcf7` · `muted` `#9a9087`

### SEO

Each page sets title, description, canonical URL, and Open Graph tags via `<Helmet>`. `Home.jsx` also includes a `LocalBusiness` JSON-LD script.
