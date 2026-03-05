# REBUILD SPEC — BuilderHub v2

You are completely rebuilding the BuilderHub website. This is a Vite + React + Tailwind + shadcn/ui + framer-motion + react-router-dom site.

CONTEXT: BuilderHub is a managed data intelligence service for businesses. We connect your tools (Stripe, HubSpot, QuickBooks, etc.), build data pipelines, create dashboards, and maintain everything monthly. The current site is too wordy, too consulting-jargon heavy, and everything lives on one page. We're rebuilding it to be world-class — inspired by gomega.ai but BETTER.

## DESIGN PHILOSOPHY

- Dark theme DEFAULT (force dark mode, remove the toggle — dark only like GoMega)
- Purple/violet gradient accents (#7c3aed to #a855f7) as the primary brand color
- Glassmorphism: cards with bg-white/5 backdrop-blur-xl border border-white/10
- Big bold typography — hero text should be 5xl-7xl
- Generous whitespace between sections (py-24 md:py-32)
- Smooth scroll-triggered animations via framer-motion (fade up on scroll, stagger children)
- Inter font (already set)
- All visual mockups built with CSS/Tailwind — no external images needed except logos

## NEW COLOR SCHEME (update index.css)

Dark theme only. Update the .dark vars and remove the :root light theme vars. Set html to always have class="dark".

- background: very dark navy (#0a0a1a → hsl 230 60% 5%)
- foreground: white
- primary: violet (#7c3aed)
- primary-foreground: white  
- card: slightly lighter than bg with glassmorphism (rgba(255,255,255,0.03))
- muted: dark gray
- accent: purple

Add to index.css:
```css
.gradient-text {
  background: linear-gradient(135deg, #7c3aed, #a855f7, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.glow-purple { box-shadow: 0 0 60px rgba(124, 58, 237, 0.15); }
.glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
```

## NEW PAGE STRUCTURE (update App.jsx)

Routes:
- / → HomePage (complete rewrite)
- /dashboards → DashboardsPage (NEW service page)
- /data-pipelines → DataPipelinesPage (NEW service page)  
- /ai-agents → AIAgentsPage (NEW service page)
- /pricing → PricingPage (NEW dedicated page)
- /demo → DemoPage (NEW — Calendly embed)
- /industries → IndustriesPage (NEW — industry hub)
- /industries/:slug → IndustryPage (NEW — dynamic)
- /blog → BlogListPage (keep)
- /blog/:slug → BlogPostPage (keep)
- /contact → ContactPage (keep, refresh styling)
- /privacypolicy → PrivacyPolicy (keep)

## NAVBAR (rewrite Components/Navbar/Navbar.jsx)

- Dark bg, glassmorphism when scrolled (bg-background/80 backdrop-blur-xl)
- Logo on left (keep existing logo_black.png and logo_white.png — since dark only, just use logo_white.png)
- Center nav links: Services (dropdown with Dashboards, Data Pipelines, AI Agents), Pricing, Industries, Blog
- Right: single CTA 'Book a Demo →' with purple gradient bg
- Mobile: hamburger → full-screen overlay
- REMOVE mode-toggle import and component. REMOVE ThemeContext import. Dark only.

## HOMEPAGE — All new sections

### 1. Hero Section (HeroSection.jsx — REWRITE)
- Full viewport height (min-h-screen), centered
- Headline: 'Your data is a mess.' (text-5xl md:text-7xl, white, bold) then new line: 'We fix it.' (same size, gradient-text class)
- Subheadline (text-lg text-muted-foreground max-w-2xl): 'We connect your tools, build your dashboards, and run your data stack — so you stop pulling numbers and start making decisions.'
- CTA: 'Book a Free Call →' (large button, bg-gradient-to-r from-violet-600 to-purple-500, rounded-full, px-8 py-4)
- Below CTA: '15 minutes. No prep needed.' in small muted text
- RIGHT SIDE: Animated mock dashboard card. Glassmorphism card with:
  - Top row: 3 mini metric cards (MRR $84k ↑12%, Churn 3.2% ↓0.4%, LTV $2,400 ↑8%)
  - Bottom: fake bar chart (6 bars of varying heights using div elements, purple gradient fill, animate up with framer-motion on load)
  - Card has purple glow border
- BACKGROUND: 2-3 large blurred purple/violet gradient circles (absolute positioned, opacity-20, slowly floating with CSS keyframe animation, z-0)

### 2. Logo Cloud (NEW — LogoCloud.jsx)
- Dark strip with 'Built with tools trusted by the best'
- Row of tool names as subtle bordered pills, infinite CSS marquee scroll:
  dbt · BigQuery · Looker · Airbyte · Stripe · HubSpot · Google Analytics · Snowflake · PostgreSQL · Tableau

### 3. Services Overview (ServicesOverview.jsx — NEW)
- Heading: 'Everything your data needs. One team.'
- 3 large glassmorphism cards in a row, each is a Link to service page:
  1. BarChart3 icon — 'Dashboards' — 'Live, auto-updating dashboards that your team actually uses.'
  2. GitBranch icon — 'Data Pipelines' — 'We connect your tools and keep your data flowing. Always fresh.'
  3. Zap icon — 'AI Agents' — 'Automated alerts, reports, and queries. Your data works while you sleep.'
- Hover: purple glow + slight scale up (framer-motion whileHover)

### 4. Before/After (BeforeAfter.jsx — NEW)
- Heading: 'From spreadsheet chaos to one source of truth'
- Two side-by-side glassmorphism cards:
  LEFT ('Before' badge, red-tinted): Mock spreadsheet — CSS grid with ~4 rows x 4 cols, messy fake numbers, some cells highlighted yellow/red, header 'Q4_Revenue_FINAL_v3.xlsx', 'Last updated: 3 weeks ago' muted text at bottom, desaturated/dim
  RIGHT ('After' badge, green-tinted): Mock dashboard — 3 mini metric cards on top, mini bar chart below, 'Live · Auto-updating' green badge at top, vibrant purple accents
- framer-motion: left slides from left, right slides from right, triggered on scroll

### 5. How It Works (HowItWorks.jsx — NEW)
- Heading: 'Three steps. That is it.'
- 3 steps horizontal on desktop, vertical on mobile:
  1. Purple circle with '1' — 'We Audit' — 'Free 15-min call. We look at your tools, find the gaps, tell you what is fixable.'
  2. Purple circle with '2' — 'We Build' — '2-4 weeks. Dashboards live. Data flowing. Reports automated.'
  3. Purple circle with '3' — 'We Run' — 'Monthly maintenance. New reports. Optimizations. You just log in and decide.'
- Connecting dotted line between circles (horizontal on desktop, vertical on mobile)
- Stagger animation

### 6. ROI Calculator (ROICalculator.jsx — NEW)
- Heading: 'What is manual reporting costing you?'
- Two sliders (use shadcn Slider or range inputs styled with Tailwind):
  - 'Hours per week on reports' (5-40, default 15)
  - 'Average hourly cost' ($30-$150, default $75)
- Big output: 'You spend $X,XXX/month on manual reporting' (calculated: hours * cost * 4.33)
- Below: 'BuilderHub starts at $1,500/mo. Do the math.' in muted text
- Glassmorphism card with purple glow

### 7. Integrations (Integrations.jsx — NEW)
- Heading: 'Connect the tools you already use'
- Sub: 'No rip-and-replace. We plug into your existing stack.'
- 4x4 grid of glassmorphism mini cards, each with tool name + simple icon (use Lucide where possible, text otherwise):
  Stripe, HubSpot, Salesforce, QuickBooks, Google Analytics, Shopify, Intercom, Zendesk, Airtable, Google Sheets, Slack, Xero, Notion, PostgreSQL, MySQL, Snowflake
- Subtle hover glow

### 8. Testimonials (Testimonials.jsx — REWRITE)
- Heading: 'Teams that stopped guessing'
- 3 glassmorphism testimonial cards:
  1. 'Board prep went from 2 days to 30 minutes. We actually trust our numbers now.' — Sarah K., Head of Finance, Series B SaaS
  2. 'We finally see which channels drive real revenue, not just clicks.' — Marcus T., CEO, E-Commerce Brand
  3. 'Two companies, two CRMs, one dashboard. Delivered in 18 days.' — Jennifer L., COO, Post-Acquisition
- Quote icon ("), 5 star rating, glassmorphism card

### 9. FAQ (FAQSection.jsx — RESTYLE)
- Keep existing FAQ content but glassmorphism styling
- Dark accordion with purple accent on open state

### 10. CTA (CTASection.jsx — REWRITE)
- Big heading: 'Ready to stop guessing?'
- Sub: 'Book a free 15-minute call. No prep. We will tell you exactly what is broken.'
- CTA button: 'Book Your Free Call →' (large, purple gradient, rounded-full)
- Below: contact@buildrhub.io

## FOOTER (rewrite Footer/Footer.jsx)
- Dark, minimal, no glassmorphism — just clean dark
- 4 columns: Brand (logo + tagline), Services (Dashboards, Data Pipelines, AI Agents), Company (Pricing, Industries, Blog, Contact), Legal (Privacy Policy)
- Bottom: © 2026 BuilderHub · Montreal, Canada

## SERVICE PAGES (create new in src/Pages/)

Each service page follows this template structure:
1. Hero with icon + heading + description + CTA
2. Features grid (6 items with icons and descriptions)
3. How it works (3 steps specific to that service)
4. Mock visual (CSS-built)
5. CTA section

### /dashboards (DashboardsPage.jsx)
- Hero: BarChart3 icon, 'Dashboards that actually get used', 'Live, auto-updating dashboards built on your real data. No more exports. No more outdated reports.'
- Features: Revenue tracking, Marketing attribution, Operations KPIs, Cohort analysis, Custom metrics, Automated scheduling
- Mock: A larger fake dashboard with 4 metric cards + bar chart + line chart (all CSS)

### /data-pipelines (DataPipelinesPage.jsx)
- Hero: GitBranch icon, 'All your data. One place. Always fresh.', 'We connect 200+ tools to your warehouse. Data flows automatically. You never export another CSV.'
- Features: 200+ connectors, Real-time sync, Data transformation (dbt), Quality monitoring, Schema management, Zero maintenance
- Mock: Animated flow — source logos on left → arrow → 'Pipeline' box → arrow → 'Warehouse' → arrow → 'Dashboard'

### /ai-agents (AIAgentsPage.jsx)
- Hero: Zap icon, 'Your data works while you sleep', 'Alerts when metrics move. Reports that send themselves. Questions answered in plain English.'
- Features: Metric alerts, Scheduled reports, Natural language queries, Anomaly detection, Custom automations, Slack/email delivery
- Mock: Chat-style card — message: 'What was our churn last month?' → response: 'Churn was 3.2%, down 0.4% from February. Top reason: pricing page drop-off.'

## PRICING PAGE (PricingPage.jsx)
- Heading: 'Simple pricing. No surprises.'
- 3 glassmorphism cards, center one is featured (purple border + 'Most Popular' badge):
  1. Audit — $750 — 'Full data health check with a prioritized roadmap.' — Items: Data source inventory, Gap analysis, Maturity score, Written report, 30-min walkthrough — CTA: 'Book Audit Call →'
  2. Build — From $5,000 — 'Complete setup in 2-4 weeks.' (POPULAR) — Items: All source connections, Pipeline + transformation, Live dashboards, Documentation, 30-day support — CTA: 'Book a Call →'  
  3. Retainer — From $1,500/mo — 'Ongoing. We run everything.' — Items: Hosting + maintenance, Bug fixes + updates, New reports monthly, Email support <24h, Strategy calls — CTA: 'Book a Call →'
- Below cards: AI Agents add-on glassmorphism card with Zap icon
- Bottom: Pricing FAQ accordion

## DEMO PAGE (DemoPage.jsx)
- Heading: 'Book a free call'
- Sub: 'See what we would build for your business. 15 minutes. No prep.'
- Left side: 3 points (What to expect): '1. We review your current tools', '2. We identify the biggest gaps', '3. You leave with a clear plan'
- Right side: Calendly embed iframe (https://calendly.com/fazio/audit) or a placeholder card saying 'Calendly booking widget'

## INDUSTRY PAGES

### Data file (src/data/industries.js)
Export an array of industry objects:
```
{ slug: 'saas', name: 'SaaS Companies', headline: 'Data intelligence built for SaaS', description: 'MRR, churn, cohorts, CAC payback — all in one dashboard.', painPoints: ['Board reporting takes days', 'Metrics scattered across tools', 'No cohort analysis'], whatWeBuild: ['MRR + ARR dashboard', 'Churn cohort analysis', 'Marketing attribution', 'CAC payback periods', 'Revenue forecasting'], icon: 'Layers' },
{ slug: 'ecommerce', name: 'E-Commerce', headline: 'Know where every dollar comes from', description: 'Revenue by channel, AOV, customer LTV, inventory — unified.', painPoints: ['Revenue attribution is guesswork', 'Inventory data lives in spreadsheets', 'No customer lifetime view'], whatWeBuild: ['Revenue by channel dashboard', 'Customer LTV analysis', 'Inventory tracking', 'AOV + basket analysis', 'Return rate monitoring'], icon: 'ShoppingCart' },
{ slug: 'agencies', name: 'Marketing Agencies', headline: 'Client reporting on autopilot', description: 'Multi-client dashboards, campaign ROI, automated reports.', painPoints: ['Hours wasted on client reports', 'Each client has different tools', 'No clear ROI attribution'], whatWeBuild: ['Multi-client dashboard', 'Campaign ROI tracking', 'Automated weekly reports', 'Cross-platform analytics', 'Client-facing portals'], icon: 'Megaphone' },
{ slug: 'finance', name: 'Financial Services', headline: 'Compliance-ready analytics', description: 'Portfolio analytics, risk metrics, regulatory reporting.', painPoints: ['Regulatory reporting is manual', 'Portfolio data scattered', 'Risk metrics lag behind'], whatWeBuild: ['Portfolio dashboard', 'Risk metric monitoring', 'Compliance report automation', 'Client performance tracking', 'AUM analytics'], icon: 'DollarSign' },
{ slug: 'healthcare', name: 'Healthcare', headline: 'Patient flow meets revenue clarity', description: 'Operational efficiency, revenue cycle, patient analytics.', painPoints: ['Revenue cycle is opaque', 'Patient flow is untracked', 'Operational waste is invisible'], whatWeBuild: ['Revenue cycle dashboard', 'Patient flow analytics', 'Operational efficiency KPIs', 'Scheduling optimization', 'Department cost tracking'], icon: 'Heart' },
{ slug: 'construction', name: 'Construction & Trades', headline: 'Job costing without the headache', description: 'Project tracking, cash flow, profitability per job.', painPoints: ['Job costing is all spreadsheets', 'Cash flow visibility is poor', 'Project profitability unclear'], whatWeBuild: ['Job costing dashboard', 'Project P&L tracking', 'Cash flow forecasting', 'Equipment utilization', 'Subcontractor spend analysis'], icon: 'Wrench' }
```

### /industries (IndustriesPage.jsx)
- Heading: 'Built for your industry'
- Sub: 'We have seen the data problems in your space. Here is how we fix them.'
- Grid of industry cards (3x2) linking to /industries/:slug
- Each card: glassmorphism, icon, name, short description

### /industries/:slug (IndustryPage.jsx)
- Read slug from URL, look up in industries data
- Hero: Icon + headline + description + CTA
- Pain points: 3 cards showing the problems
- What we build: list of dashboards/tools specific to that industry
- Mock dashboard visual (reuse the generic mock dashboard component but with industry-specific metric labels)
- CTA section

## ANIMATION COMPONENT (create src/Components/FadeIn.jsx)

```jsx
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
```

## CLEANUP

- Remove src/context/ThemeContext.jsx
- Remove src/Components/mode-toggle.jsx
- Remove SynthwaveBackground.jsx (replace with gradient orbs in hero)
- Update index.html: add class="dark" to the <html> element
- Remove all imports of ThemeContext, ModeToggle, SynthwaveBackground
- Remove dark: prefix classes that are no longer needed (since always dark)

## FINAL STEPS

After building everything:
1. Run 'npm run build' 
2. Fix any errors
3. Make sure all routes work
4. Verify no broken imports

The site must build cleanly. Go.
