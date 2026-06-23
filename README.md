# MJ Interior Designer

> Official business website for **Muaaj Jamadar** — Luxury residential & commercial interior design services based in Kolhapur, Maharashtra.

🌐 **Live Site:** [mj-interior-designer.netlify.app](https://mj-interior-designer.netlify.app)

---

## Overview

A premium, fully responsive single-page business website built for MJ Interior Designer. Designed to attract high-intent clients, showcase design capabilities, and drive consultation bookings through an elegant dark-luxury aesthetic.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS 3 + Custom CSS Variables |
| Fonts | Cormorant Garamond (headings) · DM Sans (body) |
| Deployment | Netlify (auto-deploy from GitHub) |
| Contact | WhatsApp deep links + mailto fallback |

---

## Features

- **Branded Loader** — Gold MJ splash screen on first load
- **Sticky Navbar** — Scroll-aware active section highlighting, fully responsive (mobile hamburger → desktop)
- **Hero Section** — Full-viewport background image with rotating eyebrow badge and animated headline
- **About Section** — Animated counter stats, "Worked With" company marquee
- **Design Capabilities** — 3D card carousel with swipe/keyboard support, Concept badges on demo images
- **Services (7 cards)** — 3-3-1 responsive grid, each card links to a full image gallery modal
- **Gallery Modal (ProjectShowcase)** — Lightbox with keyboard nav, touch swipe, thumbnail strip, 65+ reference images across 7 service categories
- **Process Section** — Scroll-triggered step animator (desktop horizontal / mobile vertical)
- **Contact Section** — WhatsApp CTA + enquiry form (mailto)
- **Footer** — Navigation, contact details, social links (Instagram, WhatsApp, LinkedIn), developer credit
- **Floating WhatsApp Button** — Pre-filled message, mobile-position aware

---

## Project Structure

```
muaj-jamadar/
├── public/
│   └── favicon.svg              # Gold MJ brand icon
├── src/
│   ├── assets/
│   │   ├── interior images/     # 65+ service gallery images (7 categories)
│   │   └── *.jpg / *.png        # Hero, About, Carousel images
│   ├── components/
│   │   ├── icons.jsx            # Shared SVG icon library
│   │   ├── Loader.jsx           # Branded splash screen
│   │   ├── Navbar.jsx           # Responsive navigation
│   │   ├── Hero.jsx             # Landing hero section
│   │   ├── TrustMarquee.jsx     # Scrolling trust indicators
│   │   ├── About.jsx            # Story + animated stats
│   │   ├── Carousel.jsx         # 3D design capabilities carousel
│   │   ├── Services.jsx         # 7-card services grid
│   │   ├── ProjectShowcase.jsx  # Image gallery lightbox modal
│   │   ├── Process.jsx          # Step-by-step process section
│   │   ├── ProjectsMarquee.jsx  # Design styles scrolling marquee
│   │   ├── Contact.jsx          # Contact form + WhatsApp CTA
│   │   ├── Footer.jsx           # Site footer
│   │   └── WhatsAppFloat.jsx    # Floating WhatsApp button
│   ├── data/
│   │   ├── data.js              # PROJECTS, SERVICES, STATS, TRUST_ITEMS, PROJECT_PILLS
│   │   └── showcaseImages.js    # Gallery image imports (65+ images)
│   ├── App.jsx                  # Root component, scroll reveal, loader state
│   ├── main.jsx                 # React entry point
│   └── style.css                # CSS variables, global styles, animations
├── index.html                   # Document shell + page title
├── netlify.toml                 # Netlify build config (npm ci + dist)
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

This project auto-deploys to Netlify on every push to `main`.

```bash
git add .
git commit -m "your message"
git push
# Netlify auto-deploys in ~1-2 minutes
```

**Build config** (`netlify.toml`):
```toml
[build]
  command = "npm ci && npm run build"
  publish = "dist"
```

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#0C0B09` |
| Surface | `#1A1610` |
| Card | `#252018` |
| Accent (Gold) | `#D4AF37` |
| Text | `#E8E0CC` |
| Muted | `#6B5E4A` |
| Border | `#2E2820` |

---

## Content Notes

- **Gallery images** are curated reference/concept images demonstrating design range — not completed client projects
- As real client projects are completed, replace concept images in `src/assets/interior images/` and remove the `Concept` badge in `Carousel.jsx`
- Stats in `src/data/data.js` → `STATS` array can be updated as the business grows

---

## Contact

**Muaaj Jamadar** — Interior Designer, Kolhapur  
📧 muaajjamadar3@gmail.com  
📞 +91 91195 10459  
🔗 [Instagram](https://www.instagram.com/_muaaj_585_) · [LinkedIn](https://www.linkedin.com/in/m-j-52348232a)

---

## Developer

**Designed & Developed by [Kaif Mulla](https://wa.me/918624913335)**
