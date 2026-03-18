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
| `src/i18n/index.js` | Exports both translation objects and low-level `t(lang, key)` helper |
| `src/context/LanguageContext.jsx` | React context provider + `useLanguage()` hook |

### Modified files

| File | Change |
|------|--------|
| `index.html` | Add Noto Sans Arabic font link + inline flash-prevention script |
| `src/main.jsx` | Wrap `<App />` with `<LanguageProvider>` |
| `src/index.css` | Add Arabic font rules under `[lang="ar"]`; add `[dir="rtl"]` reveal-animation overrides |
| `src/components/Navbar.jsx` | Add language toggle button, replace hardcoded text, fix directional classes |
| `src/components/Footer.jsx` | Replace hardcoded text, fix directional classes |
| `src/pages/Home.jsx` | Replace hardcoded text, fix directional classes |
| `src/pages/About.jsx` | Replace hardcoded text, fix directional classes |
| `src/pages/Services.jsx` | Replace hardcoded text, fix directional classes |
| `src/pages/Contact.jsx` | Replace hardcoded text incl. form labels/placeholders/messages; fix select chevron RTL |

---

## Data Flow

The `src/i18n/index.js` module exports a two-argument helper:

```js
// src/i18n/index.js
import en from './en.js';
import ar from './ar.js';

const translations = { en, ar };

// Low-level helper — used internally by the context
export function t(lang, key) {
  const keys = key.split('.');
  let value = translations[lang] ?? translations['en'];
  for (const k of keys) {
    value = value?.[k];
  }
  // Fallback chain: requested lang → English → key string
  if (value !== undefined) return value;
  let fallback = translations['en'];
  for (const k of keys) { fallback = fallback?.[k]; }
  return fallback ?? key;
}

export { translations };
```

`LanguageContext.jsx` wraps `t(lang, key)` into a bound one-argument closure `t(key)`:

```js
// Inside LanguageProvider
const tBound = (key) => t(lang, key);
// Provided as: { lang, setLang, t: tBound }
```

All components call `const { lang, setLang, t } = useLanguage()` and then use `t('some.key')` — one argument, no lang threading.

### LanguageProvider initialization

```js
function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('lang') || 'en'
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = (newLang) => setLangState(newLang);
  const tBound = (key) => t(lang, key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: tBound }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

The `useEffect` with `[lang]` dependency fires on mount (confirming/matching what the flash-prevention script already set) and on every subsequent language change. No race condition or double-set issue — the flash-prevention script handles pre-React rendering, the effect handles React-managed updates.

---

## Flash Prevention

An inline `<script>` placed in `<head>` (before any other scripts, after font links) reads `localStorage.getItem('lang')` and immediately sets `document.documentElement.dir` and `document.documentElement.lang`. This fires synchronously during HTML parsing, before React mounts, eliminating any LTR→RTL layout shift.

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

### Multi-line translation values

`contact.info.addressValue` and `contact.info.hoursValue` contain multi-line content. Both are stored as plain strings using `\n` as the line separator:

```js
// en.js
hoursValue: "Monday - Friday: 8:00am - 5:00pm\nSaturday: 9:00am - 2:00pm\nSunday: Closed"
```

In JSX, render them by splitting on `\n` and inserting `<br/>`:

```jsx
{t('contact.info.hoursValue').split('\n').map((line, i, arr) => (
  <span key={i}>{line}{i < arr.length - 1 && <br/>}</span>
))}
```

Or equivalently: apply `whitespace-pre-line` CSS class and render the string directly inside a `<p>`.

---

## RTL / CSS Strategy

### Arabic font

Added to `index.html` alongside the existing Google Fonts link:

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Added to `index.css`:

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

All **intentionally directional** Tailwind classes replaced with logical equivalents across all JSX files:

| Physical | Logical |
|---------|---------|
| `ml-*` | `ms-*` |
| `mr-*` | `me-*` |
| `pl-*` | `ps-*` |
| `pr-*` | `pe-*` |
| `left-*` (positional, not structural) | `start-*` |
| `right-*` (positional, not structural) | `end-*` |
| `text-left` | `text-start` |
| `text-right` | `text-end` |

**Intentional exceptions (do not replace):**

- `left-0 right-0` on the `<nav>` element in Navbar.jsx — these are structural full-width positioning values, correct for both directions. Leave as-is.
- `left-1/2 -translate-x-1/2` on the scroll indicator in Home.jsx — horizontal centering, direction-neutral. Leave as-is.
- `-left-6`, `-right-6`, `-top-6` on decorative background accent boxes in About.jsx/Home.jsx — these are purely decorative and intentionally asymmetric. Leave as-is.

All other `ml-*`, `mr-*`, `pl-*`, `pr-*` occurrences in Navbar (logo `ml-8` → `ms-8`, "Get a Quote" desktop `ml-4` → `ms-4`), Footer, and all pages are replaced.

### Arrow SVGs

CTA buttons with `→` arrow SVGs (those using `ml-2` or `mr-2`) gain `rtl:rotate-180` class to flip direction in Arabic. **Important:** `rtl:rotate-180` must appear as a literal string in JSX (not constructed dynamically) so Tailwind's source scanner registers it.

### Hero gradient

```jsx
className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-charcoal/90 via-charcoal/70 to-charcoal/40"
```

`rtl:bg-gradient-to-l` must appear as a literal string in JSX (not built dynamically).

### Reveal animations

`index.css` gains `[dir="rtl"]` overrides so reveal animations come from the correct side:

```css
[dir="rtl"] .reveal-left {
  transform: translateX(48px);
}

[dir="rtl"] .reveal-right {
  transform: translateX(-48px);
}

[dir="rtl"] .reveal-left.visible,
[dir="rtl"] .reveal-right.visible {
  transform: translateX(0);
}
```

### Contact form select chevron (RTL fix)

The `selectChevronStyle` inline object in Contact.jsx uses `backgroundPosition: 'right 12px center'`. In RTL this should be `left 12px center`. Fix by making it direction-aware:

```jsx
const selectChevronStyle = {
  backgroundImage: "url('...')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: lang === 'ar' ? 'left 12px center' : 'right 12px center',
  backgroundSize: '20px',
};
```

This requires `lang` to be in scope — the Contact component must call `useLanguage()` and destructure `lang` (it already destructures `t` so this is a minor addition).

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

Same button logic, displayed as the first child in the mobile menu `div`, styled to match the mobile nav link pattern (full-width, `px-4 py-3`).

---

## Navbar navLinks

The static `navLinks` array defined outside the component is removed. Inside the component, after calling `useLanguage()`, construct the array from `t()` calls:

```js
const navLinks = [
  { to: '/', label: t('nav.home') },
  { to: '/about', label: t('nav.about') },
  { to: '/services', label: t('nav.services') },
];
```

---

## Scope Exclusions

- `siteContent.js` is kept as-is and not modified
- No i18n library installed
- No changes to routing logic or URL structure per language
- No changes to the `useScrollReveal` hook
- Schema.org JSON-LD in Home.jsx meta stays in English (structured data for search engines)
