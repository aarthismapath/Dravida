# Dravida NYC — Website Project

## Overview

Single-page premium restaurant website for **Dravida**, an Indian Diaspora restaurant in New York City by **Chef Aarthi Sampath**. The site is image-heavy, conversion-focused (Resy reservations), and designed to feel luxury/editorial.

---

## Client Information

- **Restaurant**: Dravida — Indian Diaspora
- **Chef/Owner**: Aarthi Sampath
- **Cuisine**: Indian & South Asian food beyond borders
- **Address**: 211 1st Ave, New York, NY 10003, United States
- **Hours**: Monday–Sunday, 5:00 PM – 11:00 PM (Open 7 days a week)
- **Email**: aarthi@dravidanyc.com / info@dravidanyc.com
- **Instagram**: @dravidanyc
- **Reservations**: Resy (14 days in advance)
- **Accessibility**: Wheelchair accessible (bathrooms in basement)
- **Private Events**: Private dining room + full restaurant buyouts available

## Brand Description

> Dravida is a celebration of Indian & South Asian food beyond borders. Inspired by the movement of people, spices, and stories, our menu explores how migration has shaped flavors across the world. The food is deeply rooted yet ever-evolving—flavor-packed dishes that feel nostalgic, comforting, and sometimes unexpected.

> Every detail is intentional — from coconut shell chandeliers to hand-painted spice murals, personal photographs, and music — each element thoughtfully chosen to create a sense of place. This is our home.

---

## Design System

### Typography
- **Headings**: Cormorant (serif) — luxury, high-end, refined
- **Body**: Montserrat (sans-serif) — geometric precision, clean
- **Google Fonts**: `Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500` + `Montserrat:wght@300;400;500;600`
- **Font weights**: Ultra-light (300) used extensively for luxury feel

### Color Palette (Earthy Warm Tones — Restaurant-Inspired)
```
--color-black:        #0E0C0A    (primary dark bg)
--color-charcoal:     #1A1612    (secondary dark bg)
--color-dark:         #2A2420    (dark accent)
--color-mid:          #4A3F38    (body text)
--color-muted:        #7A6E64    (muted text)
--color-light:        #C8BFB4    (borders)
--color-cream:        #F7F3EE    (primary light bg)
--color-warm-cream:   #F0E8DF    (warm light bg)
--color-accent:       #C27832    (burnt orange — primary accent/CTA)
--color-accent-light: #D4944E    (warm amber — hover accent)
--color-accent-dim:   rgba(194,120,50,0.15) (selection highlight)
--color-mustard:      #B8962E    (dark mustard / ochre)
--color-olive:        #5C6438    (olive green)
--color-teal:         #3A5454    (dark teal)
--color-navy:         #2C3544    (deep navy)
```
Semantic aliases `--color-gold`, `--color-gold-light`, `--color-gold-dim` map to the accent colors for backwards compatibility.

### Logo
Official brand logo: `images/logo/Dravida_signage_Indian_Diaspora_final_1-01.png`
- Dark navy text on transparent background
- Includes "Aarthi Sampath's", "Dravida" (stylized), star motif, and "Indian Diaspora"
- Used with `filter: brightness(0) invert(1)` on dark backgrounds (nav, hero, footer)
- Sizes: Nav (40px height), Hero (100–180px responsive), Footer (70px height)

### Spacing
- Generous luxury spacing: 120–192px between sections
- `--space-xl: 8rem` / `--space-2xl: 12rem`

---

## File Structure

```
Aarti_Website/
├── agent.md                    ← This file (project context)
├── index.html                  ← Single-page site (all sections)
├── webpage-information.md      ← Client brief
├── color.png                   ← Client-provided color palette reference
├── faq.png                     ← FAQ design reference (Kabawa-style)
├── css/
│   └── styles.css              ← Full design system & responsive styles
├── js/
│   └── main.js                 ← Scroll reveals, nav, parallax, mobile menu
├── images/
│   ├── logo/
│   │   └── Dravida_signage_Indian_Diaspora_final_1-01.png  ← Official logo
│   ├── gallery/
│   │   ├── slider.jpeg             ← Bar area, warm brass lighting (HERO IMAGE)
│   │   ├── signage-outdoor.jpeg    ← Gold outdoor sign
│   │   ├── window-lettering.jpeg   ← Gold window text, building reflection
│   │   ├── window-street.jpeg      ← Window text, yellow cab reflection
│   │   ├── personal-photograph.jpeg← Framed photo among pussy willows
│   │   ├── booth-seating.jpeg      ← Leather booth, lantern, brick walls
│   │   ├── chandeliers-dining.jpeg ← Coconut shell chandeliers, table settings
│   │   ├── dining-room-wide.jpeg   ← Wider dining room, chandeliers, brick
│   │   ├── dining-full-view.jpeg   ← Full dining room view (ABOUT IMAGE)
│   │   ├── private-bar.jpeg        ← Intimate bar, pendant lamps, art, stools
│   │   ├── lounge-area.jpeg        ← Lounge with tables and bar (EVENTS IMAGE)
│   │   └── spice-mural.jpeg        ← Spice mural wall, leather banquette
│   ├── hero/
│   │   └── hero-main.jpg          ← (Legacy, replaced by slider.jpeg)
│   ├── about/
│   │   └── chef-aarthi.jpg        ← (Legacy, replaced by dining-full-view.jpeg)
│   └── events/
│       └── private-dining.jpg     ← (Legacy, replaced by lounge-area.jpeg)
└── suggested_design.html          ← Reference design (Kabawa PDF-to-HTML)
```

## Image Assignments

| Section       | Image File                  | Description                                    |
|---------------|-----------------------------|------------------------------------------------|
| Hero          | `gallery/slider.jpeg`       | Bar with brass shelves, brick, warm lighting   |
| About         | `gallery/dining-full-view.jpeg` | Full dining room with chandeliers          |
| Image Band    | `gallery/dining-room-wide.jpeg`, `personal-photograph.jpeg`, `private-bar.jpeg`, `dining-full-view.jpeg`, `window-lettering.jpeg` | Scrolling strip |
| Gallery (6)   | `chandeliers-dining.jpeg` (wide), `signage-outdoor.jpeg` (tall), `booth-seating.jpeg`, `private-bar.jpeg`, `spice-mural.jpeg` (wide), `window-street.jpeg` (tall) | Mosaic grid |
| Events        | `gallery/lounge-area.jpeg`  | Private lounge/bar area                        |

---

## Page Sections (top to bottom)

1. **Fixed Nav** — Translucent floating bar, blurs to dark on scroll. Real logo PNG + About | Menu | Gallery | Events | Visit | Reserve (pill CTA)
2. **Hero** — Full-viewport `slider.jpeg`, dark overlay, centered logo PNG (white-inverted), "New York City" subtitle, reservation CTA, scroll cue
3. **Philosophy Quote** — Dark band with italic Cormorant quote from Chef Aarthi
4. **About** — 2-column (dining room photo + text), gold accent frame, chef story
5. **Image Band** — Horizontal scroll strip with 5 real photos, scroll-linked parallax motion
6. **Menu** — Dark bg, 2-column grid with accent dividers. Placeholder categories: Small Plates, Large Plates, Desserts, Beverages
7. **Gallery** — Dark bg, CSS Grid mosaic (4-col, `--wide` spans 2, `--tall` spans 2 rows), hover captions with gradient overlay, 6 real photos
8. **Private Events** — Cinematic parallax image bg (lounge-area.jpeg) with dark overlay, centered content
9. **Visit** — Warm cream bg, 4-column grid with 1px separators (Hours, Location, Contact, Reservations)
10. **FAQ** — Clean flat list on warm cream bg, circular +/- icons (fills accent on open), 8 items including BYOB and gift cards
11. **Mobile Reserve Bar** — Sticky accent-colored CTA at bottom (mobile only)
12. **Footer** — Black bg, logo PNG (white-inverted) + columns (Visit, Contact, Follow/Instagram), bottom bar

---

## Interactive Features (main.js)

- **Scroll Reveal**: IntersectionObserver-based fade-up animations with staggered delays (`data-delay` attribute)
- **Hero Ken Burns**: Subtle scale-down on load (1.05 → 1.0 over 8s)
- **Navbar**: Transparent → dark blur on scroll (80px threshold), active section highlighting
- **Mobile Nav**: Full-screen frosted-glass overlay with `menu-open` class on navbar (disables backdrop-filter to prevent stacking context clipping). Circular toggle button with hover glow, staggered link entrance (Cormorant 1.5rem), Escape key closes
- **Image Band**: Scroll-linked horizontal translation (parallax effect)
- **FAQ Accordion**: Native `<details>` with CSS transitions on circular plus/minus icon
- All animations respect `prefers-reduced-motion`

---

## Reference Sites (Client Inspiration)

- https://www.momofuku.com/restaurants/kabawa — Primary reference (Kabawa by Momofuku)
- https://jejunoodlebar.com — Secondary reference
- `suggested_design.html` is a PDF-to-HTML conversion of the Kabawa website

---

## Design Guidelines Applied

### Premium Design System
- **Pattern**: Storytelling + Feature-Rich
- **Style**: Liquid Glass-inspired (translucent nav, frosted mobile menu)
- **Typography**: Luxury Serif pairing (Cormorant / Montserrat)
- **Color Strategy**: Earthy warm tones (burnt orange, mustard, olive, teal, navy) on warm cream/charcoal backgrounds
- **Key Effects**: Scroll reveals (fade-up, 1000ms ease-out-expo), gallery hover zoom + caption slide-up, dynamic blur (backdrop-filter), staggered mobile menu entrance
- **Anti-patterns avoided**: No cheap visuals, no fast animations, no emojis as icons, no AI-generated images

### Accessibility Compliance
- Skip link present
- Heading hierarchy: h1 → h2 → h3
- `prefers-reduced-motion` fully honored (CSS + JS)
- `touch-action: manipulation` on all interactive elements
- `overscroll-behavior: contain` on mobile nav overlay
- `font-variant-numeric: tabular-nums` on hours/numbers
- `text-wrap: balance` on headings
- `aria-label` on icon-only buttons, `aria-hidden="true"` on decorative elements
- `focus-visible` outlines on all interactive elements
- Proper typographic entities: `&ldquo;`, `&mdash;`, `&ndash;`, `&nbsp;`
- `meta theme-color` set to match page background (#0E0C0A)
- Schema.org Restaurant structured data for SEO

---

## Deployment Plan

- **Stack**: Pure HTML/CSS/JS — no build step, no framework
- **Hosting**: Vercel / Netlify / GitHub Pages (static)
- **Domain**: dravidanyc.com (to be configured)
- **SSL**: Auto via hosting provider
- **Performance target**: Lighthouse 95+

---

## Pending Work

- [ ] Add actual menu items once Chef Aarthi provides the menu
- [ ] Set the correct Resy reservation URL (currently links to resy.com)
- [ ] Add mobile phone number (not provided yet by client)
- [ ] Get chef portrait photo for About section (currently using dining room photo)
- [ ] Deploy to hosting platform
- [ ] Configure custom domain (dravidanyc.com)
- [ ] Run Lighthouse audit and optimize images (WebP, srcset)
