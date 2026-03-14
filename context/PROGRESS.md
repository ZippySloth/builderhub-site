# PROGRESS.md — BuildrHub Rebuild Tracker

Last updated: Mar 14, 2026

## Status: IN PROGRESS — Full Rebuild

The site is being rebuilt to reflect the new positioning:
**One-stop digital ops shop for boring businesses (Automate → Operate → Analyze)**

Old positioning was "managed data intelligence" — too complex, too expensive as entry point.
New positioning leads with automation (cheap, fast, visible ROI) and upsells to analytics.

---

## Pages

| Page | Status | Notes |
|---|---|---|
| `/` Home | 🔴 Rebuild | New hero, new sections, 3-tier overview |
| `/services` | 🔴 Build new | Overview of all 3 tiers |
| `/automate` | 🔴 Build new | All automation workflows + pricing |
| `/analyze` | 🔴 Build new | Data intelligence offering |
| `/pricing` | 🔴 Rebuild | 3-tier pricing table with ROI angles |
| `/contact` | 🔴 Rebuild | Book Free Audit form (Netlify Forms) |
| `/blog` | 🟡 Keep | Existing system works, don't touch |
| `/blog/[slug]` | 🟡 Keep | Existing system works, don't touch |
| `/privacy` | 🟡 Keep | Minor text updates if needed |
| `/ai-agents` | 🔴 Delete | Redirect to /services |
| `/dashboards` | 🔴 Delete | Redirect to /analyze |
| `/data-pipelines` | 🔴 Delete | Redirect to /analyze |
| `/industries` | 🔴 Delete | Fold content into homepage |
| `/demo` | 🔴 Delete | Replace with /contact |

---

## Components

| Component | Status | Notes |
|---|---|---|
| Navbar | 🟡 Update | New nav links only |
| Footer | 🟡 Update | New links + tagline |
| FadeIn | 🟢 Keep | Working, use it |
| Layout | 🟢 Keep | No changes needed |
| Hero section | 🔴 Rebuild | New copy and structure |
| Service cards | 🔴 Build | For automate page |
| Pricing table | 🔴 Rebuild | 3-tier |
| Stats bar | 🔴 Build | Proof numbers |
| CTA section | 🔴 Build | "Book a Free Audit" block |
| Contact form | 🔴 Rebuild | Netlify Forms, 4 fields |

---

## Content Priority (Do In This Order)

1. **Homepage** — most important page, drives everything
2. **Pricing** — second most important for conversions
3. **Automate page** — primary service offering
4. **Contact/Audit page** — conversion endpoint
5. **Analyze page** — secondary offering
6. **Services overview** — can be simple, links to Automate + Analyze

---

## Known Issues

- Old pages (ai-agents, dashboards, data-pipelines, demo) need redirects in `netlify.toml` or via React Router
- Blog system has date-gate logic in it — don't break it when updating routing
- `supabaseClient.js` exists in src — this is a leftover, the site doesn't actually use it

---

## Deployment Notes

- Netlify auto-deploys on push to master
- Build: `npm run build` → outputs to `/dist`
- Custom domain: buildrhub.io (configured in Netlify)
- Do NOT change build config without testing locally first
