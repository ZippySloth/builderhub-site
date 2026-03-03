# BuilderHub Website Remodel — Full Build Brief

## Context
You are rebuilding the BuilderHub website from scratch on branch `remodel-v1`. The current site is an old version selling $200/month website packages to small businesses. We are completely pivoting to a new business: BuilderHub is now a **managed data intelligence service** for growth companies.

## Working Directory
`/home/fazio/dev-codz/buildrhub-biz/remodel/BuildrHub`
You are already on branch `remodel-v1`. Do all work here.

## Tech Stack (KEEP)
- React 18 + Vite + Tailwind CSS + shadcn/ui
- React Router (react-router-dom)
- Supabase (keep for form submission — audit request form)
- Framer Motion (use for subtle animations)
- Vercel deployment
- All existing shadcn/ui components in src/Components/ui/ — keep these

## What to REMOVE / Kill
- `src/Pages/RedditDatabase.jsx` — delete
- `src/Components/ScrapedDatabase/` — delete
- `src/Components/SynthwaveBackground.jsx` — delete
- `src/Components/Joinus/` — delete
- `src/Components/Hero/Hero.jsx` — replace completely
- `src/translations.js` — delete
- `src/LanguageContext.jsx` — delete
- `src/reddit_scraper.py` — delete
- `src/vercel.json` — delete (keep only root vercel.json)
- Remove i18next and react-i18next from usage (but don't touch package.json)
- Route `/viral` — remove
- Route `/classic` — remove
- Route `/web` (ServicesPage) — replace with redirect to `/`

## What to BUILD

### 1. New Route Structure
```
/ → New HomePage (single-page with all sections)
/contact → Updated ContactPage (keep Supabase form, update copy)
/privacypolicy → Keep as-is
```

### 2. Design System
Apply these CSS variables in `src/index.css`:
```css
:root {
  --background: 220 30% 6%;        /* deep dark navy #0a0f1c */
  --foreground: 210 40% 98%;       /* near white */
  --card: 220 25% 9%;              /* slightly lighter dark */
  --card-foreground: 210 40% 98%;
  --primary: 217 91% 60%;          /* electric blue #3b82f6 */
  --primary-foreground: 0 0% 100%;
  --secondary: 220 20% 14%;
  --secondary-foreground: 210 40% 98%;
  --muted: 220 20% 14%;
  --muted-foreground: 215 20% 55%;
  --accent: 171 77% 40%;           /* teal accent #14b8a6 */
  --accent-foreground: 0 0% 100%;
  --border: 220 20% 18%;
  --input: 220 20% 14%;
  --ring: 217 91% 60%;
  --radius: 0.75rem;
}
```
Dark mode only — remove light mode. Remove the ThemeProvider/mode-toggle. Site is always dark.

Add Inter font: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');`
Set body font to Inter.

Add these utility classes:
```css
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #14b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.glow-blue { box-shadow: 0 0 40px rgba(59, 130, 246, 0.15); }
.grid-bg {
  background-image: linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### 3. index.html — Full SEO Overhaul
Replace the entire `<head>` with:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary SEO -->
  <title>BuilderHub — Managed Data Intelligence for Growth Companies</title>
  <meta name="description" content="BuilderHub builds the data pipelines, dbt models, and dashboards that turn your scattered data into one source of truth. Managed analytics for post-acquisition SMBs, Series B SaaS, and growth companies. Book a data audit." />
  <meta name="keywords" content="managed analytics service, data pipeline consultant, dbt consultant, fractional data team, SaaS metrics dashboard, outsourced analytics, data stack for startups, automate business reporting, analytics engineer, data infrastructure" />
  <meta name="author" content="Faiçal Al Alawi, BuilderHub" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://buildrhub.io" />
  
  <!-- Open Graph (LinkedIn/Facebook) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://buildrhub.io" />
  <meta property="og:title" content="BuilderHub — Managed Data Intelligence for Growth Companies" />
  <meta property="og:description" content="You own your raw data. I run the intelligence on top of it. Pipelines, dbt models, and dashboards that turn scattered data into decisions. Book a $750 data audit." />
  <meta property="og:image" content="https://buildrhub.io/og-image.png" />
  <meta property="og:site_name" content="BuilderHub" />
  <meta property="og:locale" content="en_US" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BuilderHub — Managed Data Intelligence" />
  <meta name="twitter:description" content="You own your raw data. I run the intelligence on top of it." />
  <meta name="twitter:image" content="https://buildrhub.io/og-image.png" />
  
  <!-- Structured Data: Organization -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BuilderHub",
    "description": "Managed data intelligence service. We build and run the data layer for growth companies — pipelines, dbt models, and dashboards.",
    "url": "https://buildrhub.io",
    "email": "fazio@buildrhub.io",
    "founder": {
      "@type": "Person",
      "name": "Faiçal Al Alawi",
      "jobTitle": "Founder & Principal",
      "sameAs": "https://www.linkedin.com/in/faicalalalawi/"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montreal",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "areaServed": ["US", "CA"],
    "serviceType": ["Data Pipeline Engineering", "Analytics Engineering", "dbt Consulting", "Managed Analytics", "Business Intelligence"],
    "priceRange": "$750 - $15000"
  }
  </script>
  
  <!-- Structured Data: Service Offerings -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "BuilderHub Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Data Audit",
          "description": "3-5 day assessment of your current data stack. Full gap analysis and prioritized build roadmap.",
          "offers": { "@type": "Offer", "price": "750", "priceCurrency": "USD" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Foundation Build",
          "description": "Full data stack build: pipelines, dbt models, dashboards. 3-6 weeks.",
          "offers": { "@type": "Offer", "price": "5000", "priceCurrency": "USD" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Managed Retainer",
          "description": "Ongoing hosting, maintenance, and evolution of your data stack.",
          "offers": { "@type": "Offer", "price": "1500", "priceCurrency": "USD" }
        }
      }
    ]
  }
  </script>

  <!-- FAQ Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is BuilderHub different from hiring a data analyst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most analysts can build dashboards but don't understand business context. Most business people know what metrics matter but can't build systems. BuilderHub does both — and maintains everything ongoing as a managed service."
        }
      },
      {
        "@type": "Question",
        "name": "What if we don't have a data warehouse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No problem. BuilderHub sets up the full infrastructure — you don't need any existing data warehouse. Your SaaS tools connect directly and data flows into BuilderHub's managed warehouse."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if we cancel the retainer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You keep your raw data. But the dbt transformation models and dashboards stop running. Rebuilding from scratch typically takes 3-6 months and a $120-180k engineering hire."
        }
      },
      {
        "@type": "Question",
        "name": "How long until we see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The audit delivers a full roadmap in 3-5 days. The foundation build delivers working dashboards in 3-6 weeks."
        }
      }
    ]
  }
  </script>
  
  <link rel="icon" href="/src/assets/buildrhub-favicon-black.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
</head>
```

### 4. App.jsx — Clean Routing
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import './index.css';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/web" element={<Navigate to="/" replace />} />
          <Route path="/viral" element={<Navigate to="/" replace />} />
          <Route path="/classic" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
```

### 5. Navbar.jsx — New Navigation
Clean, minimal dark navbar. Logo left. Nav links center. CTA button right.
Nav links: Services (smooth scroll to #services), About (#about), FAQ (#faq), Contact (/contact)
CTA button: "Book an Audit" → href="https://calendly.com/fazio/audit" target="_blank"
Remove ModeToggle. Always dark.
Mobile: hamburger menu with Sheet component.

### 6. HomePage.jsx — The Full Single-Page Site
Build this as a series of sections. Each section is a separate component imported into HomePage:

```jsx
import HeroSection from '../Components/sections/HeroSection';
import ProblemSection from '../Components/sections/ProblemSection';
import HowItWorksSection from '../Components/sections/HowItWorksSection';
import ArchitectureSection from '../Components/sections/ArchitectureSection';
import WhoItsForSection from '../Components/sections/WhoItsForSection';
import AboutSection from '../Components/sections/AboutSection';
import FAQSection from '../Components/sections/FAQSection';
import CTASection from '../Components/sections/CTASection';
```

Create `src/Components/sections/` directory with these components:

#### HeroSection.jsx
- Full viewport height
- Dark navy background with subtle grid pattern (use .grid-bg class)
- Headline: "Your data is everywhere. Your answers are nowhere." — Large, bold, white
- Subheadline: "BuilderHub builds the pipelines, models, and dashboards that turn your scattered data into one source of truth. You own your raw data. I run the intelligence on top of it." — muted text
- Primary CTA: "Book an Audit Call →" (electric blue button, links to https://calendly.com/fazio/audit)
- Secondary: "See how it works ↓" smooth scroll down
- Right side: animated terminal/dashboard mock (like the existing terminal but showing dbt/data pipeline commands):
  ```
  $ dbt run --select staging.*
  Running 12 models...
  ✓ stg_stripe__charges
  ✓ stg_hubspot__contacts
  ✓ stg_quickbooks__invoices
  ...
  ✓ fct_mrr_waterfall
  ✓ fct_churn_by_cohort
  12 of 12 passed ✓
  $ Dashboard updated: 14 seconds ago
  ```
- Below hero: 3 social proof numbers: "95% gross margin on retainers" | "$150k/yr saved vs. in-house hire" | "3-6 week delivery"

#### ProblemSection.jsx
- Section id="problem"
- Headline: "Sound familiar?"
- Subheadline: "Most growth companies have data. Almost none of them can actually use it."
- 3 problem cards in a grid:
  1. Icon: Database with X | "Data Everywhere, Answers Nowhere" | "Your numbers live in 5+ tools that don't talk to each other. CRM says one thing. Billing says another. Nobody knows which to trust."
  2. Icon: Clock | "Manual Reporting Eating Your Week" | "Someone on your team spends hours every week copy-pasting numbers into spreadsheets that should update themselves."
  3. Icon: AlertTriangle | "Flying Blind on Decisions" | "When your board asks for ARR, NRR, or churn, you spend two days pulling numbers instead of two minutes reading a dashboard."
- Cards should have subtle blue border glow on hover

#### HowItWorksSection.jsx
- Section id="services"
- Badge: "The Process"
- Headline: "One system. Three steps."
- 3 step cards, numbered prominently:

**Step 01 — The Audit** ($750–$1,500 | 3-5 days)
- Badge: "Start here"
- "I dig into your current data stack — what tools you use, what's connected, what's broken, what's missing. You get a full gap analysis and a prioritized roadmap of exactly what to fix. Whether you hire me to build anything or not."
- Highlight: "Credited toward the build if you proceed"

**Step 02 — The Build** ($5,000–$15,000 | 3-6 weeks)
- "I connect your data sources, build the transformation models (dbt), and put live auto-updating dashboards on top. No more manual updates. No more 'the numbers don't match.'"
- Bullet checklist:
  - ✓ 2-5 data source connections
  - ✓ Full dbt model layer (staging → marts)
  - ✓ 4-6 live dashboards
  - ✓ Documentation + training

**Step 03 — The Retainer** (monthly)
- "I host and maintain everything. Models, dashboards, metrics — all running, all evolving as your business grows."
- Pricing table (3 tiers):
  | Core $1,500/mo | Growth $2,500/mo | Command $3,500/mo |
  | Model hosting + maintenance + 1 new report/mo | + 2 reports/mo + monthly call | + ad hoc pulls + priority Slack |
- Highlight the Growth tier as "Most Popular"

#### ArchitectureSection.jsx
- Section id="how-it-works"
- Dark card with subtle border
- Badge: "The Architecture"
- Headline: "You own your data. I run the intelligence."
- Subtext: "Here's exactly what lives where — and why it matters."
- Build a visual flow diagram using CSS/JSX (no images needed):
  
  Flow (vertical on mobile, can be horizontal on desktop):
  ```
  [Your Data Sources]
  Stripe · HubSpot · QuickBooks · Postgres · Sheets
         ↓  Airbyte (managed by BuilderHub)
  [Your Raw Data — Bronze Layer]
  Lives in your warehouse. You own it. Always.
         ↓  dbt Core (BuilderHub's IP)
  [Transformation Models — Silver & Gold]
  Business logic, metric definitions, KPI calculations
         ↓  Hosted by BuilderHub
  [Live Dashboards]
  Auto-updating. Shareable. Always accurate.
         ↓
  [You]
  Log in. See your numbers. Make decisions.
  ```
  
  Style each box differently:
  - "Your Data Sources" → subtle green border (client owns)
  - "Raw Data" → blue border + "✓ You own this" label
  - "Transformation Models" → blue glow + "BuilderHub IP" badge
  - "Dashboards" → blue glow + "Hosted by BuilderHub" badge
  
- Below diagram: "If you don't have a data warehouse, BuilderHub sets one up. You need zero existing infrastructure."
- Key callout box: "If you cancel: You keep your raw data. The models and dashboards stop running. Rebuilding from scratch = 3-6 months + a $120-180k hire."

#### WhoItsForSection.jsx
- Section id="who"
- Badge: "Who We Serve"
- Headline: "Built for companies that have data but no answers."
- 4 target cards (2x2 grid):
  1. 🔄 **Post-Acquisition** | "Just acquired a business? Two data systems, mismatched metrics, investors want one dashboard. We unify everything in weeks."
  2. 📈 **Series B SaaS** | "Your board is asking for ARR, NRR, and cohort data. You're still pulling it from spreadsheets. We automate the board deck."
  3. 👤 **Hiring Your First Data Person** | "About to spend $150k on a hire. BuilderHub runs the full stack for $18k/year. Get results in 3 weeks, not 6 months."
  4. 🎯 **New Finance or Ops Leader** | "Just started and inherited broken reporting. We map what's there, fix what's broken, and build what's missing — before your first board meeting."

#### AboutSection.jsx
- Section id="about"
- 2-column layout: text left, credential grid right
- Headline: "About Faiçal"
- Bio: "I've spent my career at the intersection of finance and tech. SaaS M&A, hedge fund equity research, and now building the data and automation infrastructure at a Series C SaaS company.

I've seen how the best data stacks work at scale. And I've seen what happens when companies fly blind — bad decisions, board meetings where nobody can answer basic questions, finance teams spending two days on a close that should take two hours.

Most companies at the growth stage need what I build. But they can't afford a full data team — and they don't need one. They need a managed service that runs like a product.

That's BuilderHub."

- Credential cards on right (4 cards in 2x2):
  1. 🏦 SaaS M&A Analyst | Due diligence, unit economics, 50+ companies analyzed
  2. 📊 Hedge Fund Analyst | Small-cap equity research, financial modeling
  3. ⚙️ Finance Automation Lead | Series C SaaS, dbt · Python · Databricks
  4. 🛠️ Stack | dbt · BigQuery · Airbyte · SQL · Python · Looker Studio

- LinkedIn link: https://www.linkedin.com/in/faicalalalawi/

#### FAQSection.jsx
- Section id="faq"
- Badge: "FAQ"
- Headline: "Common questions"
- Use the existing Accordion component from shadcn/ui
- 7 FAQ items:
  1. Q: "How is this different from hiring a data analyst?" | A: "Most analysts can build dashboards but don't understand the business context behind the numbers. Most business people know what metrics matter but can't build the systems. I do both — and I maintain everything ongoing as a managed service, not a one-time project."
  2. Q: "What if our data is a complete mess?" | A: "That's normal. Most of my clients start there. Scattered tools, manual processes, numbers nobody trusts. That's exactly what the audit surfaces — and what the build fixes."
  3. Q: "What tools do you work with?" | A: "Core stack: dbt, Airbyte, BigQuery, Looker Studio. But I'm tool-agnostic on the client side — Snowflake, Redshift, Postgres, whatever you have. The ingestion and transformation layer adapts to your infrastructure."
  4. Q: "What if we don't have a data warehouse?" | A: "No problem. I set one up for you. Your SaaS tools connect directly — no existing infrastructure required. Most non-technical clients never see a database."
  5. Q: "Why do you host the dbt models instead of handing them over?" | A: "The models need ongoing maintenance — schema changes, API updates, new requirements. If you're not a dbt shop, they'll break within months. Hosting is how I ensure quality. You get the outputs: dashboards, reports, clean metrics. I handle the plumbing."
  6. Q: "What happens if we cancel the retainer?" | A: "You keep your raw data — it's always in your warehouse. But the transformation models stop running. Dashboards go dark. Rebuilding that layer from scratch typically takes a $120-180k engineering hire and 3-6 months. Most clients stay because the math is obvious."
  7. Q: "How long until we see results?" | A: "The audit delivers a full roadmap in 3-5 days. The foundation build delivers working, auto-updating dashboards in 3-6 weeks."

#### CTASection.jsx
- Full-width dark section with blue gradient background glow
- Headline: "Ready to stop wrestling with your data?"
- Subtext: "Book a 20-minute call. I'll tell you what's broken and how I'd fix it — whether you hire me or not."
- Primary CTA: "Book Your Audit Call →" (large button, Calendly link)
- Secondary: "Or email fazio@buildrhub.io"
- Small print: "No obligation. No deck. Just a diagnostic conversation."
- ROI callout: "Most clients save 10-20 hours/week in manual reporting. At $50/hr, that's $26-52k/year. The audit is $750."

### 7. Footer.jsx — Updated
```
© 2026 BuilderHub · Built in Montreal 🇨🇦
Links: LinkedIn | fazio@buildrhub.io | Privacy Policy
```
Remove Reddit database link. Remove "Home" link. Keep Privacy link.

### 8. ContactPage.jsx — Updated
Keep the Supabase form but update copy:
- Headline: "Book a Data Audit"
- Subtext: "Tell me a bit about your situation. I'll review and get back to you within 24 hours to schedule a call."
- Update form fields:
  - Name (required)
  - Email (required)
  - Company (required)
  - What tools do you use? (textarea — "e.g. Stripe, HubSpot, QuickBooks, Postgres...")
  - What's your biggest data challenge right now? (textarea)
  - How did you hear about BuilderHub? (optional)
- Submit to Supabase table: `audit_requests` (update the table name in the insert)
- Success message: "Got it. I'll review your situation and reach out within 24 hours to schedule a call."

### 9. Layout.jsx — Simplified
Remove ThemeProvider wrapping. Just Navbar + main + Footer.

### 10. Additional SEO files to create

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://buildrhub.io/sitemap.xml
```

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://buildrhub.io/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://buildrhub.io/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Design Requirements
- Dark mode only. No light mode toggle. Remove ThemeProvider and ModeToggle.
- All sections must have id attributes for scroll navigation
- Use Framer Motion for subtle fade-in-up animations on scroll (IntersectionObserver or motion.div with viewport prop)
- Smooth scroll between sections
- Mobile-first — test layouts at 375px, 768px, 1280px
- All external links open in new tab
- Buttons must have hover states with scale transform
- Cards must have hover states with border glow

## SEO Requirements (Critical)
1. Semantic HTML: Use proper h1 (one per page), h2, h3 hierarchy
2. Alt text on all images
3. All CTA buttons have descriptive aria-labels
4. Page title must be in index.html (not just React state)
5. Structured data (JSON-LD) already in index.html as specified above
6. robots.txt and sitemap.xml in public/
7. Canonical URL in head
8. OG image: create a placeholder comment in code where og-image.png should be placed
9. Loading performance: lazy load any images, use font-display: swap

## Completion Steps
When done:
1. Run `npm run build` and confirm it builds without errors
2. Fix any build errors
3. `git add -A && git commit -m "feat: complete remodel-v1 — managed data intelligence site"`
4. Run: `openclaw system event --text "Done: BuilderHub remodel-v1 complete. Site rebuilt as managed data intelligence platform. All sections done, SEO implemented, builds clean." --mode now`

## Final Checklist
- [ ] index.html has all SEO meta tags + JSON-LD structured data
- [ ] Dark theme applied, no mode toggle
- [ ] Inter font loaded
- [ ] All 8 page sections built and connected
- [ ] Navbar has new links + CTA button
- [ ] Footer updated
- [ ] ContactPage updated for audit requests
- [ ] Supabase table updated to `audit_requests`
- [ ] robots.txt and sitemap.xml in public/
- [ ] Smooth scroll working
- [ ] Mobile responsive
- [ ] Framer motion animations on scroll
- [ ] Build passes (npm run build)
- [ ] Committed to remodel-v1
