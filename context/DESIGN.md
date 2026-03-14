# DESIGN.md — BuildrHub Design System

## Core Principles
- **Dark theme. Always.** Background near-black. Don't lighten it.
- **Spacious.** Generous padding. Content breathes.
- **Mobile-first.** Every layout works at 375px. Check it.
- **No stock photos.** Icons, gradients, code snippets, clean typography.
- **One accent color.** Electric blue or teal. Used sparingly for CTAs and highlights.
- **Subtle motion.** FadeIn component already exists. Use it. No heavy animations.

---

## Colors (Keep Existing Palette)

```
Background:     #0a0a0a  (near-black)
Surface:        #111111  (cards, sections)
Border:         #1f1f1f  (subtle dividers)
Text primary:   #f5f5f5  (headings)
Text secondary: #a1a1aa  (body, captions)
Accent:         existing blue/teal from codebase
Accent hover:   slightly lighter version
Danger/alert:   #ef4444
Success:        #22c55e
```

Check `src/index.css` or `tailwind.config.js` for exact values already in use. Match them.

---

## Typography

- **Headings:** Bold, large, tight leading. H1 at 48–64px on desktop, 32–40px on mobile.
- **Body:** 16–18px, relaxed leading (1.6–1.7). Easy to read on dark background.
- **Labels/captions:** 12–14px, uppercase tracking for section labels.
- **Font:** Whatever is already configured. Don't change it.

---

## Layout

### Sections
- Max width: 1200px, centered
- Section padding: 80–120px vertical on desktop, 48–64px on mobile
- Consistent horizontal padding: 24px on mobile, auto on desktop

### Grid
- Services/features: 3-column on desktop, 1-column on mobile
- Pricing cards: 3-column on desktop (or 2+1), stack on mobile
- Hero: full-width, centered text, max 700px for text column

### Cards
- Rounded corners (rounded-xl or rounded-2xl)
- Subtle border (#1f1f1f)
- Background slightly lighter than page (#111 or #141414)
- Hover: subtle border brightening or slight lift (translate-y-1)

---

## Components (Already Built — Use Them)

| Component | Location | Notes |
|---|---|---|
| FadeIn | `src/Components/FadeIn.jsx` | Wrap sections for scroll animation |
| Navbar | `src/Components/Navbar/` | Keep. Update nav links only. |
| Footer | `src/Components/Footer/` | Keep. Update links. |
| Layout | `src/Components/Layout.jsx` | Wraps all pages |
| UI components | `src/Components/ui/` | shadcn components (Button, Card, etc.) |

**Build new sections using existing primitives. Don't reinvent.**

---

## CTA Button

Primary CTA ("Book a Free Audit"):
- Solid accent color background
- White text, medium font weight
- Padding: px-6 py-3 or px-8 py-4 for hero
- Rounded: rounded-lg
- Hover: slightly brighter / scale-105
- One per section max. Don't scatter them.

Secondary CTA ("See how it works →"):
- Ghost/outline style
- Same border color as accent
- Accent colored text

---

## Section Patterns

### Hero
```
[Section label — small, uppercase, accent color]
[H1 — large, punchy, 2–3 lines max]
[Subheading — 1–2 sentences, outcome-focused]
[CTA button]
[Optional: proof stat or trust signal below fold]
```

### Feature/Service Card
```
[Icon — accent color, 24–32px]
[Title — bold, 18–20px]
[Description — 2–3 sentences max]
[Optional: price or CTA link]
```

### Pricing Card
```
[Tier name + badge]
[Price — large, prominent]
[What's included — bullet list]
[CTA button]
[Highlight the middle tier as "Most Popular"]
```

### Stats Bar
```
[3–4 metrics side by side]
[Number — large, accent color]
[Label — small, secondary text]
```

---

## What Not to Do

- ❌ No white or light gray backgrounds — breaks the dark theme
- ❌ No multiple accent colors — pick one and stick with it
- ❌ No full-bleed images (no stock photos)
- ❌ No complex animations or parallax
- ❌ No more than 2 CTAs per page view
- ❌ No tables on mobile without horizontal scroll
- ❌ No justified text — always left-align body copy
