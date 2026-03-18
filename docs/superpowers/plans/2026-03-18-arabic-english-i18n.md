# Arabic/English i18n Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Arabic/English language switching to the Eucalyptus Wood Pallet React site with RTL support and no flash on reload.

**Architecture:** Custom context + translation objects (no library). `LanguageProvider` stores lang in state, persists to `localStorage`, sets `document.documentElement.dir/lang`. Components call `useLanguage()` and use `t('key')` for all strings.

**Tech Stack:** React 19, Vite 7, Tailwind CSS v4. Translation files: `src/i18n/en.js` + `src/i18n/ar.js`. See spec at `docs/superpowers/specs/2026-03-18-arabic-english-i18n-design.md` for full translation key structure and Arabic strings.

---

### Task 1: Translation files — English

**Files:**
- Create: `src/i18n/en.js`

- [ ] **Step 1: Create `src/i18n/en.js`** with all English strings extracted from the 6 source files (Navbar, Footer, Home, About, Services, Contact). Key structure defined in spec §Translation Key Structure.

- [ ] **Step 2: Verify** — `node -e "import('./src/i18n/en.js').then(m => console.log(Object.keys(m.default)))"` should print top-level keys: `['nav','footer','home','about','services','contact']`. Note: `nav` has exactly 4 keys (`home`, `about`, `services`, `getQuote`) — there is no `nav.contact` since Contact is accessed via the CTA button, not a nav link.

- [ ] **Step 3: Commit**
```bash
git add src/i18n/en.js
git commit -m "feat: add English translation file"
```

---

### Task 2: Translation files — Arabic

**Files:**
- Create: `src/i18n/ar.js`

- [ ] **Step 1: Create `src/i18n/ar.js`** with Arabic translations. Identical key structure to `en.js`. Business details (name, address, phone, email) stay in English. Labels in Arabic.

- [ ] **Step 2: Commit**
```bash
git add src/i18n/ar.js
git commit -m "feat: add Arabic translation file"
```

---

### Task 3: i18n index + LanguageContext

**Files:**
- Create: `src/i18n/index.js`
- Create: `src/context/LanguageContext.jsx`

- [ ] **Step 1: Create `src/i18n/index.js`**
```js
import en from './en.js';
import ar from './ar.js';

const translations = { en, ar };

export function t(lang, key) {
  const keys = key.split('.');
  let value = translations[lang] ?? translations['en'];
  for (const k of keys) { value = value?.[k]; }
  if (value !== undefined) return value;
  let fallback = translations['en'];
  for (const k of keys) { fallback = fallback?.[k]; }
  return fallback ?? key;
}

export { translations };
```

- [ ] **Step 2: Create `src/context/LanguageContext.jsx`**
```jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { t as tHelper } from '../i18n/index.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('lang') || 'en'
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = (newLang) => setLangState(newLang);
  const tBound = (key) => tHelper(lang, key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: tBound }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
```

- [ ] **Step 3: Commit**
```bash
git add src/i18n/index.js src/context/LanguageContext.jsx
git commit -m "feat: add i18n index and LanguageContext"
```

---

### Task 4: Infrastructure — index.html, main.jsx, index.css

**Files:**
- Modify: `index.html`
- Modify: `src/main.jsx`
- Modify: `src/index.css`

- [ ] **Step 1: Update `index.html`** — add Noto Sans Arabic font link after existing Google Fonts link, and add flash-prevention inline script:
```html
<!-- after existing font link -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
<!-- flash prevention — before </head> -->
<script>
  (function() {
    var lang = localStorage.getItem('lang') || 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  })();
</script>
```

- [ ] **Step 2: Update `src/main.jsx`** — import `LanguageProvider` and nest it inside `HelmetProvider` (not outside):
```jsx
import { LanguageProvider } from './context/LanguageContext.jsx'

// Result should be:
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
)
```

- [ ] **Step 3: Update `src/index.css`** — add Arabic font rules and RTL reveal overrides at end of file:
```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap');

[lang="ar"] body {
  font-family: 'Noto Sans Arabic', 'DM Sans', sans-serif;
}

[lang="ar"] h1, [lang="ar"] h2, [lang="ar"] h3,
[lang="ar"] h4, [lang="ar"] h5, [lang="ar"] h6 {
  font-family: 'Noto Sans Arabic', 'Playfair Display', serif;
}

[dir="rtl"] .reveal-left { transform: translateX(48px); }
[dir="rtl"] .reveal-right { transform: translateX(-48px); }
[dir="rtl"] .reveal-left.visible,
[dir="rtl"] .reveal-right.visible { transform: translateX(0); }
```

- [ ] **Step 4: Commit**
```bash
git add index.html src/main.jsx src/index.css
git commit -m "feat: add Arabic font, flash prevention, RTL CSS overrides"
```

---

### Task 5: Navbar

**Files:**
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1:** Add `useLanguage` import and hook call. Remove static `navLinks` array from module scope. Rebuild it inside the component from `t()` calls.

- [ ] **Step 2:** Add language toggle button — desktop (before "Get a Quote" link):
```jsx
<button
  onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
  className="me-2 px-3 py-1 text-sm rounded-full border border-warm-cream/30 text-warm-cream/80 hover:text-amber hover:border-amber transition-colors"
>
  {lang === 'en' ? 'عربي' : 'EN'}
</button>
```

- [ ] **Step 3:** Add language toggle button — mobile (first child in mobile menu div).

- [ ] **Step 4:** Replace all hardcoded strings: "Get a Quote" → `{t('nav.getQuote')}`, nav link labels via `navLinks` array built from `t()`.

- [ ] **Step 5:** Fix directional classes: `ml-8` → `ms-8` on logo Link, `ml-4` → `ms-4` on "Get a Quote" desktop link.

- [ ] **Step 6:** Commit
```bash
git add src/components/Navbar.jsx
git commit -m "feat: add language toggle to Navbar, translate nav strings"
```

---

### Task 6: Footer

**Files:**
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1:** Add `useLanguage` import, call hook, replace all hardcoded strings with `t('footer.*')` keys.

- [ ] **Step 2:** No directional classes to fix in Footer (uses `gap-*`, `space-y-*`, `items-start` — all direction-neutral).

- [ ] **Step 3:** Commit
```bash
git add src/components/Footer.jsx
git commit -m "feat: translate Footer strings"
```

---

### Task 7: Home page

**Files:**
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1:** Add `useLanguage` import and hook call.

- [ ] **Step 2:** Replace all hardcoded strings with `t('home.*')` calls. Helmet title/description. Hero eyebrow, headline, body, buttons, scroll label. Products section eyebrow, heading, all 3 cards (title, body, cta). Philosophy section. CTA section. **Leave the `<script type="application/ld+json">` structured data block inside `<Helmet>` completely unchanged** — it must stay in English for search engines (spec scope exclusion).

- [ ] **Step 3:** Fix directional classes:
  - Hero gradient: `bg-gradient-to-r` → `bg-gradient-to-r rtl:bg-gradient-to-l`
  - Arrow SVGs: add `rtl:rotate-180` to SVG elements in CTA buttons
  - `ml-2` on arrow SVGs → `ms-2`
  - `mr-2` on phone icon SVG → `me-2`
  - Leave `left-1/2 -translate-x-1/2` on scroll indicator (centering, not directional)
  - Leave `-bottom-6 -right-6` decorative accent (intentionally asymmetric)

- [ ] **Step 4:** Commit
```bash
git add src/pages/Home.jsx
git commit -m "feat: translate Home page, fix RTL directional classes"
```

---

### Task 8: About page

**Files:**
- Modify: `src/pages/About.jsx`

- [ ] **Step 1:** Add `useLanguage` import and hook call.

- [ ] **Step 2:** Replace all hardcoded strings with `t('about.*')` calls.

- [ ] **Step 3:** Fix directional classes:
  - `ml-2` on arrow SVG in CTA button → `ms-2` + add `rtl:rotate-180`
  - Leave `-top-6 -left-6` decorative border accent (intentionally asymmetric)

- [ ] **Step 4:** Commit
```bash
git add src/pages/About.jsx
git commit -m "feat: translate About page, fix RTL directional classes"
```

---

### Task 9: Services page

**Files:**
- Modify: `src/pages/Services.jsx`

- [ ] **Step 1:** Add `useLanguage` import and hook call.

- [ ] **Step 2:** Replace all hardcoded strings with `t('services.*')` calls. Hero, all 4 product sections (pallets, boxes, crates, custom), eucalyptus section, CTA section.

- [ ] **Step 3:** Fix directional classes:
  - `ml-2` on arrow SVGs → `ms-2` + `rtl:rotate-180`
  - `mr-2` on phone icon SVG → `me-2`

- [ ] **Step 4:** Commit
```bash
git add src/pages/Services.jsx
git commit -m "feat: translate Services page, fix RTL directional classes"
```

---

### Task 10: Contact page

**Files:**
- Modify: `src/pages/Contact.jsx`

- [ ] **Step 1:** Move `selectChevronStyle` inside the component. Add `useLanguage` hook call (destructure `lang` in addition to `t`). Make `backgroundPosition` direction-aware:
```js
const selectChevronStyle = {
  backgroundImage: "url('...')", // keep existing SVG data URI
  backgroundRepeat: 'no-repeat',
  backgroundPosition: lang === 'ar' ? 'left 12px center' : 'right 12px center',
  backgroundSize: '20px',
};
```

- [ ] **Step 2:** Replace all hardcoded strings with `t('contact.*')` calls. Helmet, hero, intro paragraph, form (heading, subheading, all labels, all placeholders, submit button, success message, error message), select options (labels only, keep English values), info section (labels, hours using `whitespace-pre-line` or `\n` split), map section.

- [ ] **Step 3:** Hours rendering — use `whitespace-pre-line` class:
```jsx
<p className="text-muted whitespace-pre-line">{t('contact.info.hoursValue')}</p>
```

- [ ] **Step 4:** Commit
```bash
git add src/pages/Contact.jsx
git commit -m "feat: translate Contact page, RTL select chevron fix"
```

---

### Task 11: Smoke test

- [ ] **Step 1:** Run `npm run dev` — confirm no build errors.
- [ ] **Step 2:** Open browser, verify English renders correctly on all 4 pages.
- [ ] **Step 3:** Click "عربي" toggle — verify: page switches to Arabic text, `dir="rtl"` on `<html>`, Noto Sans Arabic font loads, arrows flip, hero gradient flips.
- [ ] **Step 4:** Refresh page — verify Arabic persists (no direction flash).
- [ ] **Step 5:** Click "EN" toggle — verify English restores correctly.
- [ ] **Step 6:** Final commit
```bash
git add -A
git commit -m "feat: complete Arabic/English i18n implementation"
```
