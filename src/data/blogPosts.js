export const blogPosts = [
  {
    slug: 'why-your-dashboards-dont-get-used',
    title: 'Why Your Dashboards Don\'t Get Used (And How to Fix It)',
    excerpt: 'Most dashboards get built, shared once, and never opened again. Here\'s the real reason — and the 3-part fix that actually sticks.',
    date: '2026-02-28',
    readTime: '5 min read',
    tags: ['Dashboards', 'Analytics'],
    content: `
Most companies have dashboards. Most of those dashboards get opened twice: the day they're built, and the day someone asks "does this still work?"

Here's why — and what to do instead.

## The 3 reasons dashboards die

**1. They answer questions nobody is asking.**
The classic mistake: building a dashboard that shows everything you *can* measure instead of the 5 things that actually drive decisions. If someone can't look at your dashboard and immediately know what to *do* differently, it's a report, not a tool.

**2. The data is stale by the time it matters.**
A dashboard that's updated once a week might as well not exist. By the time you see the problem, it's been a problem for a week. Dashboards need to be live or near-live — otherwise people go back to asking someone to "run the numbers."

**3. It wasn't built for the person using it.**
A finance dashboard for a sales rep is noise. A marketing attribution view for a CFO is confusing. The right dashboard surfaces the right 5 metrics to the right person, in language they already use.

## The fix: build around decisions, not metrics

Before building anything, ask: *"What decision will someone make differently if they see this number?"*

If you can't answer that question, don't build the chart.

For every metric on a dashboard, document: what it is, why it matters, what "good" looks like, and what action it should trigger. That documentation becomes the tooltip, the onboarding guide, and the maintenance spec.

## What a high-retention dashboard looks like

- 5–8 metrics maximum per view
- One clear "this week vs. last week" trend for each
- Alerts set for anything that moves more than 10% in a week
- Auto-delivered via email every Monday morning before anyone logs in

The dashboards people actually use are the ones that come to them.
    `,
  },
  {
    slug: 'fractional-data-team-vs-hiring',
    title: 'Fractional Data Team vs. Full-Time Hire: What Actually Makes Sense',
    excerpt: 'A senior data engineer costs $120–180k/year and takes 3–6 months to ramp. Here\'s when that\'s the right call — and when it\'s not.',
    date: '2026-03-01',
    readTime: '6 min read',
    tags: ['Hiring', 'Strategy'],
    content: `
Every growing company hits the same inflection point: the spreadsheets are breaking, the board wants a dashboard, and someone says "we need to hire a data person."

Before you do — here's the actual math.

## The cost of a full-time data hire

A senior data engineer in Canada or the US typically costs $120–180k in salary. Add 25% for benefits, equipment, and overhead. You're at $150–225k/year before they've built a single dashboard.

They'll spend the first 3 months learning your business, your tools, and your data. Month 4, they start building. Month 6, you have something usable.

**Total cost to first dashboard: $75–100k. Time to first dashboard: 6 months.**

## The case for fractional

A fractional data team — like what BuilderHub does — delivers:
- First dashboard live in 7–10 days
- Monthly cost: $1,500–$3,500 depending on scope
- No ramp time, no equity, no HR overhead

**Total cost to first dashboard: $750–1,500. Time: 10 days.**

## When a full-time hire is the right call

There are cases where hiring makes sense:
- You have a dedicated data-intensive product (ML features, recommendations)
- You need someone embedded in daily standups and product decisions
- Your data volume and complexity has grown to a point where external management creates lag

Most companies hit this point somewhere around Series C or when ARR crosses $20–30M with 5+ data sources feeding into daily product decisions.

## The hybrid path

Many companies do both: they use a fractional team to get the first stack built and running, then hand it off to an internal hire 12–18 months later when the business can support it. The fractional team builds the playbook the internal hire follows.

That's usually cheaper than hiring first and hoping they figure it out.
    `,
  },
  {
    slug: 'kpi-dashboard-for-saas',
    title: 'The 8 KPIs Every SaaS Company Should Track (And Most Don\'t)',
    excerpt: 'ARR and MRR are table stakes. Here are the 8 metrics that actually predict growth, churn, and investor questions at your next board meeting.',
    date: '2026-03-03',
    readTime: '7 min read',
    tags: ['SaaS', 'KPIs', 'Finance'],
    content: `
Most SaaS dashboards have ARR, MRR, and maybe churn. That's the beginning, not the dashboard.

Here are the 8 metrics that separate companies that understand their growth from companies that guess at it.

## 1. Net Revenue Retention (NRR)

NRR measures how much revenue you keep and expand from existing customers, excluding new sales. Formula: (Starting MRR + Expansion - Contraction - Churn) / Starting MRR.

If NRR > 100%, your existing customers are growing faster than they churn. That's the foundation of durable SaaS growth. Benchmark: Good = 100–110%. Great = 120%+.

## 2. CAC Payback Period

How many months of gross margin does it take to recoup the cost of acquiring a customer? CAC / (Monthly Revenue per Customer × Gross Margin %).

This tells you how capital-efficient your growth is. If CAC payback is 24 months, you're funding growth out of capital — which works in a bull market and kills you in a bear one.

## 3. Expansion MRR Rate

What % of revenue growth is coming from existing customers? Companies with strong expansion are far more capital-efficient than pure new-logo businesses. Track monthly.

## 4. Logo Churn vs. Revenue Churn

These tell different stories. Logo churn (# of customers lost) could look bad while revenue churn (% of ARR lost) looks fine — if you're losing small accounts and retaining big ones. Track both separately.

## 5. Time to Value (TTV)

How long from signup to the moment a customer gets their first meaningful value from your product? This is a leading indicator of retention. Long TTV = high churn risk.

## 6. Feature Adoption Rate

What % of your customers use each core feature? If 80% of churned customers never used Feature X, and 80% of retained customers use it daily — you've found your activation metric.

## 7. Support Ticket Volume per Customer

Divided by account size, this tells you where your product still has friction. High ticket volume in a segment = either a product problem or an onboarding problem.

## 8. Quick Ratio

(New MRR + Expansion MRR) / (Contraction MRR + Churned MRR). A quick ratio above 4 means you're growing efficiently. Below 1 means you're leaking faster than you're filling.

---

These 8 metrics don't require a data warehouse to track — but they do require clean, consistent data. If you can't pull these in under 10 minutes, that's the first problem to solve.
    `,
  },
];
