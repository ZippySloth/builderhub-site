# BuilderHub Automation Library
*Living document — keep expanding. Last updated: Mar 14, 2026.*

This is the master list of automation workflows BuilderHub can sell, build, and productize.
Each workflow should eventually have its own n8n template that can be deployed in under 1 hour.

---

## Tier Structure

```
AUTOMATE  ($800-3,000 setup + $150-700/mo)
└── Focused, single-workflow automations
└── Fast to close, fast to build, visible ROI
└── Entry point for all new clients

OPERATE   ($3,000-8,000 setup + $700-2,000/mo)
└── Multi-workflow bundles (e.g. full lead lifecycle)
└── Deeper integration into their existing systems

ANALYZE   ($5,000-15,000 + $1,500-3,500/mo)
└── dbt models, dashboards, data intelligence
└── Natural upsell from Automate/Operate clients
```

---

## 🔥 Lead & Sales Automation

### Speed-to-Lead Agent
**What it does:** Form/inquiry submitted → AI responds via SMS within 60 seconds, 24/7. Asks qualifying questions, captures answers, books meeting into calendar. Owner gets daily summary of qualified leads.
**Who buys it:** Dental offices, clinics, contractors, real estate agents, law firms, any service business with a contact form.
**Stack:** n8n + Twilio + Claude API + Calendly/Cal.com + Google Sheets
**Setup:** $1,500–2,500 | **Monthly:** $300–500
**Build time (template):** 3–5 hrs | **Redeploy per client:** ~1 hr
**Demo pitch:** Submit a test inquiry to their site, show them it took 2 days to respond, show the agent responding in 45 seconds.

---

### Missed Call Text-Back
**What it does:** Business misses a phone call → within 30 seconds, caller gets an SMS: "Sorry we missed you! We'd love to help — what were you calling about?" Starts a text conversation captured in a log.
**Who buys it:** Contractors (on job sites, can't answer), clinics, any owner-operated business.
**Stack:** n8n + Twilio + call forwarding or missed call webhook
**Setup:** $800–1,200 | **Monthly:** $150–200
**Build time (template):** 2–3 hrs | **Redeploy:** 30 min

---

### New Lead Nurture Sequence
**What it does:** Lead submits inquiry but doesn't book → multi-touch follow-up over 7 days (Day 1, 3, 7). Each message personalized with their name + what they asked about. Sequence stops the moment they respond or book.
**Who buys it:** Any service business where leads go cold.
**Stack:** n8n + Twilio/Gmail + Claude API
**Setup:** $1,500–2,000 | **Monthly:** $300
**Build time (template):** 3–4 hrs | **Redeploy:** 45 min

---

### Proposal Auto-Generator
**What it does:** New inquiry comes in with details → AI fills a proposal template (scope, price range, timeline) based on their answers → sends draft to owner for 1-click approval → sends to prospect.
**Who buys it:** Contractors, agencies, consultants, anyone who writes custom quotes.
**Stack:** n8n + Claude API + Google Docs/PandaDoc + Gmail
**Setup:** $2,000–3,000 | **Monthly:** $300–400
**Build time (template):** 4–6 hrs | **Redeploy:** 1–2 hrs (needs proposal template customization)

---

## ⭐ Retention & Reputation

### Appointment Reminder Sequence
**What it does:** Automated reminders at 24hrs + 2hrs before appointment via SMS/email. Includes 1-click reschedule link. Tracks no-show rate before and after.
**Who buys it:** Dental, medical, legal, any appointment-based business.
**Stack:** n8n + Twilio/Gmail + Calendly webhook or their booking system
**Setup:** $1,000–1,500 | **Monthly:** $200–300
**Build time (template):** 2–3 hrs | **Redeploy:** 30 min
**ROI angle:** "If you see 100 patients/month at $200 avg, reducing no-shows from 15% to 5% = $2,000/month recovered."

---

### Review Request Bot
**What it does:** 2 hours after an appointment/job completion → auto-SMS asking for a Google review, with a direct link to their Google Business page. Tracks how many reviews come in each month.
**Who buys it:** Any local service business that competes on reputation (dental, HVAC, contractors, restaurants).
**Stack:** n8n + Twilio + Google Business API (or just a direct link)
**Setup:** $800–1,200 | **Monthly:** $150–200
**Build time (template):** 1–2 hrs | **Redeploy:** 20 min
**ROI angle:** "10 new Google reviews = measurable SEO lift. Most businesses get 1-2/month manually. This gets them 15-20."

---

### Reactivation Campaign
**What it does:** Pulls a list of customers who haven't visited/purchased in 90+ days. Sends a personalized "we miss you" sequence (2-3 touches) with a specific offer or just a check-in. Logs responses.
**Who buys it:** Medical/dental (lapsed patients), fitness studios, any business with a repeat-customer model.
**Stack:** n8n + their CRM/booking system + Twilio/Gmail + Claude API
**Setup:** $1,500–2,000 | **Monthly:** $250–350
**Build time (template):** 3–4 hrs | **Redeploy:** 1 hr (needs CRM access)

---

## 📋 Operations & Back-Office

### Intake Form → CRM Pipeline
**What it does:** New client fills out an intake form → entry automatically created in their CRM (or Google Sheets if they don't have one) with all fields mapped, tags applied, and owner notified via Slack/email.
**Who buys it:** Law firms, medical practices, financial advisors — anyone doing manual data entry from forms.
**Stack:** n8n + Typeform/JotForm webhook + HubSpot/Airtable/Sheets + Slack/Gmail
**Setup:** $1,000–1,500 | **Monthly:** $150–200
**Build time (template):** 2–3 hrs | **Redeploy:** 30–45 min

---

### Weekly/Monthly Reporting Bot
**What it does:** Pulls data from their systems (booking platform, CRM, POS, spreadsheet) every Monday. Generates a plain-English summary of the week: revenue, leads, appointments, no-shows, etc. Sends to owner via email.
**Who buys it:** Owner-operators who are too busy to pull reports manually but need to know what's happening.
**Stack:** n8n + their data source + Claude API + Gmail
**Setup:** $1,500–2,500 | **Monthly:** $200–400
**Build time (template):** 3–5 hrs | **Redeploy:** 1–2 hrs (data source varies)
**Note:** This is the natural bridge to the ANALYZE tier.

---

### Invoice & Payment Follow-Up
**What it does:** Invoice sent → if unpaid after 3 days → polite auto-reminder → again at 7 days → escalation at 14 days. All personalized, stops when paid. Log of overdue invoices with amounts.
**Who buys it:** Contractors, freelancers, service businesses with net terms.
**Stack:** n8n + QuickBooks/FreshBooks webhook or API + Twilio/Gmail
**Setup:** $1,200–1,800 | **Monthly:** $200–300
**Build time (template):** 3 hrs | **Redeploy:** 45 min

---

### Job/Project Status Updates
**What it does:** When a job status changes in their system (e.g., "scheduled" → "in progress" → "complete"), client auto-receives an SMS update. No more "where's my contractor" calls.
**Who buys it:** Contractors, HVAC, plumbers, any field service business.
**Stack:** n8n + their job management tool (Jobber, ServiceTitan, etc.) + Twilio
**Setup:** $1,200–2,000 | **Monthly:** $200–300
**Build time (template):** 3–4 hrs | **Redeploy:** 1 hr

---

## 📣 Marketing & Content (Future)

### Social Proof Engine
**What it does:** When a 5-star review comes in on Google → automatically reformatted as a social media post and queued in Buffer/Hootsuite for approval. Owner sees a draft, 1-click approve to publish.
**Stack:** n8n + Google Business API + Claude API + Buffer
**Setup:** $1,200 | **Monthly:** $200
**Status:** Spec only — build when there's client demand

---

### Monthly Newsletter Auto-Draft
**What it does:** Pulls recent activity (new services, reviews, blog posts, promotions) from their systems → AI drafts a monthly email newsletter → sends to owner for approval → 1-click send to their list.
**Stack:** n8n + their data sources + Claude API + Mailchimp/Beehiiv
**Setup:** $1,500 | **Monthly:** $250
**Status:** Spec only — build when there's client demand

---

## Bundle Ideas

| Bundle Name | Workflows Included | Setup | Monthly |
|---|---|---|---|
| **New Patient Engine** (dental/medical) | Speed-to-Lead + Appointment Reminders + Review Request | $3,500 | $700 |
| **Contractor Growth Pack** | Missed Call Text-Back + Proposal Generator + Job Status Updates + Review Request | $5,000 | $900 |
| **Full Lead Lifecycle** | Speed-to-Lead + Nurture Sequence + Reactivation | $4,500 | $900 |
| **Owner's Weekly Brief** | Intake → CRM + Reporting Bot | $3,000 | $550 |

---

## Technical Stack (Standard Across All Workflows)

| Layer | Tool | Cost |
|---|---|---|
| Workflow engine | n8n (self-hosted on Railway or fly.io) | ~$5-20/mo |
| SMS | Twilio | ~$1/number + $0.0075/SMS |
| AI responses | Claude API (Haiku for cost) | ~$1-5/mo at SMB volume |
| Scheduling | Cal.com (free) or Calendly | Free–$10/mo |
| Data logging | Google Sheets or Airtable | Free |
| Email | Gmail via gog or SMTP | Free |

**Total infrastructure per client:** ~$20–50/month
**Charge:** $150–700/month depending on workflow
**Margin:** 85–95%

---

## Expansion Queue (Ideas to Spec Next)
- AI phone receptionist (Twilio voice + AI transcription + routing)
- Referral request automation (ask happy clients for referrals automatically)
- Contract e-sign workflow (proposal accepted → DocuSign link auto-sent)
- HR onboarding workflow (new hire → sends forms, logins, welcome sequence)
- Inventory alert bot (stock falls below threshold → owner notified + supplier emailed)

---

*Add new workflows here as they're identified. When a template is built, mark it ✅ TEMPLATE READY.*
