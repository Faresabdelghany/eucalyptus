# Timber & Grain Cabinetry

A handcrafted website for a custom cabinet maker based in Milwaukie, Oregon. Built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- **React 19** with React Router v7
- **Vite 7** for fast dev/build
- **Tailwind CSS v4** with custom theme
- **Cloudflare Pages** for deployment

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, service showcase cards, philosophy with stats, CTA |
| About | `/about` | Company story, values, 4-step process |
| Services | `/services` | Kitchen cabinets, bathroom vanities, built-ins, cabinet refacing, materials |
| Contact | `/contact` | Contact form, business info sidebar, Google Maps embed |

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
| Sage | `#8b9e7e` | Success states |

### Fonts

- **Playfair Display** - Headings
- **DM Sans** - Body text

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview (Cloudflare Pages local)

```bash
npm run preview
```

### Deploy

```bash
npm run deploy
```

## Project Structure

```
src/
  components/
    Navbar.jsx          # Fixed nav with mobile menu, scroll effects
    Footer.jsx          # 4-column footer with contact info
  pages/
    Home.jsx            # Landing page with hero and service cards
    About.jsx           # Story, values, and process
    Services.jsx        # Service details and materials showcase
    Contact.jsx         # Form with validation and info sidebar
  hooks/
    useScrollReveal.js  # Intersection Observer for scroll animations
  App.jsx               # Router setup and layout
  index.css             # Tailwind config and custom animations
public/
  images/               # All site images
  _redirects            # SPA routing for Cloudflare Pages
functions/
  api/contact.js        # Cloudflare Pages function for form submission
```

## Features

- Fully responsive design (mobile, tablet, desktop)
- Scroll-triggered reveal animations
- Active page highlighting in navigation
- Mobile hamburger menu with smooth toggle
- Contact form with API submission and status feedback
- Google Maps embed
- Cloudflare Pages deployment ready
