# Design: Arabic/English i18n — Eucalyptus Wood Pallet

**Date:** 2026-03-18
**Status:** Approved

---

## Overview

Add Arabic/English language switching to the existing React + Vite + Tailwind v4 website for Eucalyptus Wood Pallet, a Cairo-based wood packaging manufacturer. No i18n library — a custom context + translation object approach. Language persists via `localStorage` and the page renders in correct direction (LTR/RTL) without flash on reload.

---

## Architecture

### New files

| File | Purpose |
|------|---------|
| `src/i18n/en.js` | All English strings as a nested object |
| `src/i18n/ar.js` | Arabic translations with identical structure |
| `src/i18n/index.js` | Exports both translation objects and `t(lang, key)` helper |
| `src/context/LanguageContext.jsx` | React context provider + `useLanguage()` hook |

### Modified files

| File | Change |
|------|--------|
| `index.html` | Add Noto Sans Arabic font link + inline flash-prevention script |
| `src/main.jsx` | Wrap `<App />` with `<LanguageProvider>` |
| `src/index.css` | Add Arabic font rules under `[lang="ar"]` |
| `src/components/Navbar.jsx` | Add language toggle button, replace hardcoded text |
| `src/components/Footer.jsx` | Replace hardcoded text |
| `src/pages/Home.jsx` | Replace hardcoded text, fix directional classes |
| `src/pages/About.jsx` | Replace hardcoded text, fix directional classes |
| `src/pages/Services.jsx` | Replace hardcoded text, fix directional classes |
| `src/pages/Contact.jsx` | Replace hardcoded text incl. form labels/placeholders/messages |

---

## Data Flow

```
LanguageProvider
  ├── reads localStorage('lang') on init, defaults to 'en'
  ├── sets document.documentElement.lang and .dir on mount and on change
  ├── persists lang to localStorage on change
  └── provides { lang, setLang, t } via React context

useLanguage() hook
  └── consumed by Navbar, Footer, Home, About, Services, Contact

t(key)
  └── dot-notation lookup into the active translation object
      e.g. t('home.hero.headline') → translations[lang].home.hero.headline
```

---

## Flash Prevention

An inline `<script>` placed in `<head>` (before the main bundle) reads `localStorage.getItem('lang')` and immediately sets `document.documentElement.dir` and `document.documentElement.lang`. This fires synchronously during HTML parsing, before React mounts, eliminating any LTR→RTL layout shift.

```html
<script>
  (function() {
    var lang = localStorage.getItem('lang') || 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  })();
</script>
```

---

## Translation Key Structure

```js
{
  nav: {
    home, about, services, getQuote
  },
  footer: {
    tagline,
    navigate,        // section heading
    home, aboutUs, services, contact,
    servicesHeading, // section heading
    woodenPallets, woodenBoxes, woodenCrates, customPackaging,
    getInTouch,      // section heading
    copyright, handcrafted
  },
  home: {
    meta: { title, description },
    hero: { eyebrow, headline, body, ctaPrimary, ctaSecondary, scrollLabel },
    products: { eyebrow, heading, pallets, boxes, crates },  // each: { title, body, cta }
    philosophy: { eyebrow, heading, body1, body2, stat1, stat2, stat3, cta },  // stats: { value, label }
    cta: { eyebrow, heading, body, ctaPrimary, ctaPhone }
  },
  about: {
    meta: { title, description },
    hero: { eyebrow, heading, body },
    story: { eyebrow, heading, body1, body2 },
    values: {
      eyebrow, heading,
      quality: { title, body },
      craftsmanship: { title, body },
      customer: { title, body }
    },
    process: {
      eyebrow, heading, subheading,
      step1, step2, step3, step4  // each: { title, body }
    },
    cta: { eyebrow, heading, body, cta }
  },
  services: {
    meta: { title, description },
    hero: { eyebrow, heading, body },
    pallets: {
      eyebrow, heading, body,
      feature1, feature2, feature3, feature4, cta
    },
    boxes: {
      eyebrow, heading, body,
      feature1, feature2, feature3, feature4, cta
    },
    crates: {
      eyebrow, heading, body,
      feature1, feature2, feature3, feature4, cta
    },
    custom: {
      eyebrow, heading, body,
      feature1, feature2, feature3, feature4, cta
    },
    eucalyptus: {
      eyebrow, heading, body,
      highDensity: { title, body },
      moistureResistant: { title, body },
      durableUnderPressure: { title, body },
      locallySourced: { title, body }
    },
    cta: { eyebrow, heading, body, ctaPrimary, ctaPhone }
  },
  contact: {
    meta: { title, description },
    hero: { heading, body },
    intro,
    form: {
      heading, subheading,
      nameLabel, namePlaceholder,
      emailLabel, emailPlaceholder,
      phoneLabel, phonePlaceholder,
      serviceLabel,
      serviceOptions: { placeholder, pallets, boxes, crates, custom, other },
      messageLabel, messagePlaceholder,
      submitButton,
      success: { heading, body },
      error: { heading, body }
    },
    info: {
      phoneLabel, emailLabel,
      addressLabel, addressValue,
      hoursLabel, hoursValue,
      freeQuote: { heading, body }
    },
    map: { heading, body }
  }
}
```

**Business details that stay in English:** name "Eucalyptus Wood Pallet", address "27 Road 9, Maadi / Cairo, Egypt 11728", phone "(02) 2516-8243", email "info@eucalyptuswoodpallet.com". All surrounding labels are translated.

---

## RTL / CSS Strategy

### Arabic font

Added to `index.html` font link and to `index.css`:

```css
[lang="ar"] body {
  font-family: 'Noto Sans Arabic', 'DM Sans', sans-serif;
}

[lang="ar"] h1, [lang="ar"] h2, [lang="ar"] h3,
[lang="ar"] h4, [lang="ar"] h5, [lang="ar"] h6 {
  font-family: 'Noto Sans Arabic', 'Playfair Display', serif;
}
```

### Tailwind logical property replacements

All directional Tailwind classes replaced with logical equivalents across all JSX files:

| Physical | Logical |
|---------|---------|
| `ml-*` | `ms-*` |
| `mr-*` | `me-*` |
| `pl-*` | `ps-*` |
| `pr-*` | `pe-*` |
| `left-*` | `start-*` |
| `right-*` | `end-*` |
| `text-left` | `text-start` |
| `text-right` | `text-end` |

### Arrow SVGs

CTA buttons with `→` arrow SVGs gain `rtl:rotate-180` class to flip direction in Arabic.

### Hero gradient

```jsx
className="... bg-gradient-to-r rtl:bg-gradient-to-l ..."
```

### Reveal animations

`reveal-left` and `reveal-right` CSS classes in `index.css` gain `[dir="rtl"]` overrides to swap initial `translateX` direction so content animates in from the correct side.

---

## Language Toggle Button

### Desktop (before "Get a Quote")

```jsx
<button
  onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
  className="me-2 px-3 py-1 text-sm rounded-full border border-warm-cream/30 text-warm-cream/80 hover:text-amber hover:border-amber transition-colors"
>
  {lang === 'en' ? 'عربي' : 'EN'}
</button>
```

### Mobile (first item in mobile menu)

Same button logic, displayed as the first child in the mobile menu `div`, styled to match the mobile nav link pattern.

---

## Navbar navLinks

The static `navLinks` array defined outside the component is removed. Nav link labels are replaced with `t()` calls inline (or array rebuilt inside the component from translated keys).

---

## Scope Exclusions

- `siteContent.js` is kept as-is and not modified
- No i18n library installed
- No changes to routing logic or URL structure per language
- No changes to the `useScrollReveal` hook
- Schema.org JSON-LD in Home.jsx meta stays in English (it's structured data for search engines)
