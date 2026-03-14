# CLAUDE.md — BuildrHub Website

> Auto-read by Claude Code. Single source of truth for this project.
> Read this file + all files in `context/` before writing a single line of code.

---

## What You're Building

The **BuildrHub marketing website** — a consulting/services site for a company that helps boring businesses run better through automation and data intelligence.

This is NOT a SaaS app. There is no auth, no dashboard, no database. It is a marketing site that converts visitors into leads.

**Live URL:** https://buildrhub.io (Netlify)
**Repo:** https://github.com/ZippySloth/buildrhub-biz (branch: main or master)
**Owner:** Fazio (@ZippySloth)

---

## The Stack

| Layer | Tech | Notes |
|---|---|---|
| Framework | React + Vite | Keep. Don't migrate to Next.js. |
| Styling | Tailwind CSS + shadcn/ui | Keep existing design system |
| Routing | React Router | Keep existing route structure |
| Deployment | Netlify | `vercel.json` exists but Netlify is live |
| Icons | Lucide React | Already installed |

**Rule: Do not add new dependencies without a clear reason. Use what's already installed.**

---

## The Business (Read This Carefully)

BuildrHub is a **digital operations consultancy** for boring businesses — dental offices, law firms, contractors, PE firms, logistics companies, medical practices. These businesses make good money, have zero technical sophistication, and have repetitive operational problems that are easy to automate.

**The mission:** Help boring businesses automate their workflows, understand their data, and stop losing revenue to broken processes.

**The ICP (Ideal Customer Profile):**
- Titles: CFO, VP Finance, COO, Practice Manager, Owner, Managing Director
- Companies: dental, medical, legal, contractors, real estate, PE/hedge funds, logistics
- Size: 10–300 employees, $500k–$20M revenue
- Pain: manual ops, slow lead response, no reporting, repetitive tasks eating time

**Why they buy:** ROI is immediate and measurable. A $500/month automation that prevents one lost lead per week at $2,000/lead = 16x ROI. They can see it.

---

## The Three-Tier Service Model

See `context/SERVICES.md` for full detail on every service.

### Tier 1: AUTOMATE ($800–3,000 setup + $150–700/mo)
Focused, single-workflow automations. Fast to close, fast to build, visible ROI.
Entry point for all new clients.

**Key services:**
- Speed-to-Lead Agent — responds to new leads via SMS in <60 seconds, 24/7
- Missed Call Text-Back — instant SMS when they miss a call
- Appointment Reminder Sequence — automated 24hr + 2hr reminders, reduces no-shows
- Review Request Bot — auto-asks for Google reviews after appointments
- New Lead Nurture Sequence — 7-day multi-touch follow-up for unconverted leads
- Proposal Auto-Generator — AI drafts proposals from inquiry details

### Tier 2: OPERATE ($3,000–8,000 setup + $700–2,000/mo)
Multi-workflow bundles. Full lead lifecycle or ops stack for a specific business type.

**Key bundles:**
- New Patient Engine (dental/medical): Speed-to-Lead + Reminders + Review Bot
- Contractor Growth Pack: Missed Call + Proposal Gen + Job Updates + Reviews
- Full Lead Lifecycle: Speed-to-Lead + Nurture + Reactivation

### Tier 3: ANALYZE ($5,000–15,000 + $1,500–3,500/mo)
Data intelligence layer. dbt models, hosted dashboards, automated reporting.
For clients who want to understand their numbers, not just automate their ops.
Natural upsell from Automate/Operate clients.

---

## Site Structure

```
/                   Home — hook, problem, 3-tier solution, social proof, CTA
/services           Services overview — all three tiers with detail
/automate           Focused automation workflows + pricing
/analyze            Data intelligence offering
/pricing            Clear pricing table for all tiers
/contact            Lead capture form (name, company, pain point, email)
/blog               Blog listing (keep existing date-gate system)
/blog/[slug]        Individual post
/privacy            Privacy policy
```

**Pages to kill or redirect:**
- `/ai-agents` → redirect to `/services`
- `/dashboards` → redirect to `/analyze`
- `/data-pipelines` → redirect to `/analyze`
- `/industries` → fold into homepage or `/services`
- `/demo` → replace with `/contact`

---

## Design System

See `context/DESIGN.md` for full detail.

**Core principles:**
- Dark theme. Background: near-black (#0a0a0a or similar). Don't lighten it.
- One accent color: electric blue or teal. Use sparingly.
- Clean, spacious layouts. Not cluttered.
- Mobile-first. Every section must look good at 375px.
- No stock photos. Icons, gradients, and clean typography only.
- Subtle animations (FadeIn is already built — use it)

---

## Copy & Tone

See `context/SOUL.md` for full tone guide.

**Short version:**
- Direct. No fluff. No "we leverage cutting-edge AI solutions."
- Business outcomes first. "Your leads get a response in 60 seconds" not "our AI agent uses NLP."
- Specific numbers when possible. "Reduces no-shows by 30%" beats "improves attendance."
- The word "boring" is intentional and part of the brand. Own it.
- CTA is always: **Book a Free Audit** (not "contact us", not "learn more")

---

## Lead Capture

Every page should drive to one CTA: **Book a Free Audit**

The audit is free, 20 minutes, no pitch — just a diagnosis of what's broken. This is the top of funnel. Clicking this CTA should either:
1. Open a Calendly embed (if Fazio has one)
2. Route to `/contact` with a short form (name, company type, biggest pain point, email)

The form does NOT need a backend. Use Netlify Forms (`netlify` attribute on `<form>`). Submissions go to Fazio's email automatically.

---

## What NOT to Do

- ❌ Don't add auth, login, or user accounts
- ❌ Don't add Supabase or any database
- ❌ Don't add Stripe (no payments on this site)
- ❌ Don't remove the blog system — it's working and SEO matters
- ❌ Don't change the Netlify deploy config
- ❌ Don't use placeholder copy ("Lorem ipsum" or "Coming soon") — use real copy from `context/SERVICES.md`
- ❌ Don't make the site white/light theme
- ❌ Don't over-engineer. Simple components > clever abstractions.

---

## Deployment

```bash
npm run build     # Builds to /dist
npm run dev       # Local dev server
npm run lint      # ESLint check
```

Netlify auto-deploys on push to master. Build command: `npm run build`. Publish dir: `dist`.

**Do not modify `netlify.toml` or `vercel.json` without asking.**

---

## Context Files

| File | What's in it |
|---|---|
| `context/MISSION.md` | Full business strategy, ICP, competitive positioning |
| `context/SERVICES.md` | Every service with pricing, stack, ROI angles, sales notes |
| `context/DESIGN.md` | Design tokens, component patterns, layout rules |
| `context/SOUL.md` | Voice, tone, copy examples, what not to say |
| `context/PROGRESS.md` | What's done, what's in progress, what's next |

---

## When You're Stuck

1. Re-read `context/SERVICES.md` — the answer to "what should this section say" is always there
2. Check existing components in `src/Components/` before building new ones
3. Check `context/DESIGN.md` for spacing, color, and layout decisions
4. If a feature requires a database or auth → it doesn't belong on this site
5. If in doubt about copy → use outcome-first language from `context/SOUL.md`

---

*BuildrHub — We fix what's costing you money.*
