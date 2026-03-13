// Auto-generated BuilderHub blog posts (published by cron)
// Keep newest posts at the top.

export const aiBatch = [
  {
    slug: 'dental-group-kpi-dashboard',
    title: 'The Dental Group KPI Dashboard Every DSO Needs (But Almost None Have)',
    excerpt: "When you're running 3+ dental locations, chair utilization and AR aging in a spreadsheet is already costing you money. Here's what a real dental group KPI dashboard tracks — and why it changes how multi-location practices are run.",
    date: '2026-03-13',
    readTime: '7 min read',
    tags: ['Dental', 'Healthcare', 'Dashboards', 'Multi-Location', 'Operations'],
    content: `
If you're running three or more dental locations, you already know the problem: your practice management software shows you each location in isolation, your office managers email you weekly spreadsheets that don't match each other, and asking "which location is actually producing well this month?" takes half a day to piece together — if it gets answered at all.

A dental group KPI dashboard changes this. Not a practice management report you export on Friday afternoons, and not a generic BI template — a purpose-built view of the metrics that drive profitability in a multi-location dental group. This post walks through what that dashboard should contain, what most DSOs get wrong when they try to build one, and what to do about it.

## Why Multi-Location Dental Reporting Is Uniquely Difficult

A single-location practice can survive on practice management software reports. The moment you add a second location — or a third, a fifth, a fifteenth — the reporting breaks down fast.

Dental groups typically run one or more of the following: Dentrix, Eaglesoft, OpenDental, or Curve. These platforms are built for clinical and scheduling workflows, not for cross-location financial analysis. Exporting data from them is manual, inconsistent, and often requires someone who knows how to navigate their specific version of the software.

Add to that: each location may have its own payer contracts, its own provider mix, its own overhead structure. Your hygiene team's reappointment rate at the downtown location doesn't mean the same thing as it does at the suburban location with a different patient demographic. Rolling up those numbers without context produces data that looks clean but misleads.

The result: most DSOs are making capital allocation, staffing, and expansion decisions based on data that's a month old, manually compiled, and already partially wrong.

## The 8 Metrics a Dental Group KPI Dashboard Must Show

### 1. Production per Provider per Day

This is the most direct measure of clinical capacity utilization. Production per provider per day = total production ÷ (providers on schedule × scheduled days). Track it by provider, by location, and in aggregate.

Industry benchmarks for GP production run $1,200–$2,000+ per provider per day depending on market and case mix. Knowing where each provider sits against that range — and watching the trend — tells you whether a location is running efficiently or has scheduling, case acceptance, or staffing issues hiding underneath the headline number.

### 2. Chair Utilization Rate

Physical chairs are your fixed cost. Chair utilization = total scheduled hours ÷ total available chair hours. A location running at 65% chair utilization when your lease and overhead is built for 85% is burning margin invisibly. Tracking this across locations lets you identify where you have capacity to grow without adding overhead, and where you're running into real capacity constraints.

### 3. Treatment Acceptance Rate

How much of the treatment you're diagnosing and presenting is actually being accepted and scheduled? Treatment acceptance rates typically run 50–75% across dental groups, with significant variation by location and by provider. A provider with a 40% acceptance rate isn't just underperforming — they're creating a downstream hygiene problem as patients defer treatment and eventually leave the practice.

This metric requires clean case presentation data from your practice management system. Most DSOs don't track it systematically. The ones that do find it one of the highest-leverage numbers to move.

### 4. AR Aging by Payer Type

Insurance AR and patient AR have different aging profiles and different collection levers. Your dashboard should show outstanding balances broken into 30/60/90/120+ day buckets, split by payer type (commercial insurance, Medicaid/government payers, patient responsibility).

A $200K insurance AR balance aging past 90 days is a billing and follow-up problem. A $200K patient AR balance aging past 60 days is a collections conversation and potentially a credit policy problem. Treating them the same is one of the most common ways dental groups lose revenue they've already earned.

### 5. Payer Mix and Reimbursement Rate by Location

Not all patients are equally profitable. Your payer mix — the proportion of production coming from fee-for-service, PPO, HMO, and Medicaid patients — directly determines your effective reimbursement rate and, downstream, your margin.

A location that's shifted from 60% PPO / 40% FFS to 75% PPO / 25% FFS over 18 months has a profitability trend worth understanding. Your dashboard should show payer mix by location, trended quarterly, alongside the effective reimbursement rate for your top five payers. Changes in that rate — even half a percentage point — compound across a group your size.

### 6. Hygiene Reappointment Rate

Your hygiene department is both a recurring revenue engine and a patient retention metric in disguise. Hygiene reappointment rate = patients who scheduled their next appointment before leaving ÷ total hygiene patients seen. The industry benchmark for a well-run practice is 85–90%+.

A location running at 65% reappointment means 35% of your hygiene patients are walking out the door without a follow-up scheduled. Some of them will call back. Many won't. Track this by location and by hygienist — it surfaces training and protocol issues faster than any other single metric.

### 7. New Patient Volume and Source

New patients are the top of your funnel and one of the most expensive assets in a dental group to acquire. Your dashboard should show new patient count by location, month-over-month trend, and — if you have it — source (Google, referral, insurance directory, walk-in).

New patient volume below replacement rate at any location is an early warning sign of a retention or marketing problem. Catching it when it first appears — instead of six months later when the schedule starts thinning out — is the difference between a recoverable problem and an urgent one.

### 8. Lab Cost as a Percentage of Production

Lab fees are one of the most controllable variable costs in a dental group, and most groups don't track them at the location level. Lab cost as a % of production should run 8–12% for most general practices; higher percentages indicate either case mix changes (more complex restorative work) or lab contract issues worth reviewing.

When you see lab costs jump at a specific location without a corresponding change in case mix, it usually points to a specific provider ordering outside the group's preferred lab — a meaningful variance once you're at scale.

## What the Dashboard Should Actually Look Like

**Group summary view** — One page showing all locations side by side: production per provider, chair utilization, new patients, and any alerts (AR aging spike, reappointment rate drop, production variance). This is the Monday morning view.

**Location drill-down** — Click into any location for the full picture: production by provider, treatment acceptance rate, AR by payer, schedule efficiency, and trailing 12-month trend.

**Billing and AR detail** — Dedicated view for revenue cycle: aging breakdown by payer, recent claim submission vs. payment timelines, and outstanding balance by responsible party.

**Provider performance** — Each provider's production, case acceptance, and schedule efficiency, normalized for days worked. This view becomes critical as your group grows and you're evaluating expansion, compensation structures, or associate performance.

Each view should update daily, automatically — pulling from your practice management software and your billing system without requiring anyone to export a spreadsheet.

## Where Most DSOs Stall

The data to build a dental group KPI dashboard exists in your systems. The problem is that practice management software exports are inconsistent across versions, payer data lives separately from clinical data, and nobody has gone through the work of standardizing the data model across locations.

What "production" means in Dentrix doesn't always mean the same thing as it means in Eaglesoft if you've grown through acquisitions. Your two locations on OpenDental may have different chart of accounts structures. Before you can build a meaningful dashboard, someone has to do the integration and normalization work — connecting sources, defining what each metric means and how it's calculated, and ensuring the numbers your dashboard shows match what your team believes to be true.

This is exactly where most dental groups stall. They know they need better visibility. They look at hiring a data analyst, realize that person also needs to know dental operations well enough to build the right thing, and put it off until the pain gets bad enough. Meanwhile, the spreadsheets multiply.

## How BuilderHub Helps

BuilderHub builds and maintains analytics infrastructure for multi-location operators — including dental groups and DSOs — that have real data complexity but no dedicated data team.

For a dental group, that typically means connecting your practice management system and billing platform, standardizing the data model across locations, and building the group-level KPI dashboard your leadership team actually uses daily. The output is a live dashboard that updates automatically — not a one-time report that becomes stale in two weeks.

The setup takes a few weeks, not months. The ongoing cost is a fraction of what a data analyst hire would run. And unlike a generic BI tool, the dashboard is built around the actual metrics that matter in dental — chair utilization, payer mix, treatment acceptance, AR aging — not whatever default charts came with the software.

## Getting Started Without Overbuilding

If you're building this for the first time, start with four numbers: production per provider per day, AR aging by payer, hygiene reappointment rate, and new patient volume. Get those clean, live, and trusted before adding anything else.

A dental group KPI dashboard your leadership team checks every Monday morning is worth more than a comprehensive reporting suite nobody opens. Build for daily use first, completeness second.

## The Bottom Line

A dental group KPI dashboard isn't a reporting upgrade — it's the operating infrastructure for a multi-location practice that wants to be run like a business. When chair utilization, payer mix, treatment acceptance, and AR aging are visible in one place, updated daily, broken out by location and provider, decisions get faster and better: staffing adjustments, billing follow-up, location expansion, associate performance reviews.

The DSOs that build this reporting foundation early consistently outperform those that don't. Not by accident — because they can see where the money is going and act on it before it's already gone.
`,
  },
  {
    slug: 'property-management-reporting-dashboard',
    title: 'The Property Management Reporting Dashboard Every PM Company Needs',
    excerpt: "When you're managing 15+ properties, your QuickBooks P&L is useless — everything is blended. Here's what a real property management reporting dashboard looks like and why it changes how you run the business.",
    date: '2026-03-10',
    readTime: '7 min read',
    tags: ['Property Management', 'Dashboards', 'Real Estate', 'Operations'],
    content: `
If you manage more than a handful of properties, you already know the problem: your accounting software shows you one blended P&L, your leasing spreadsheets live in five different tabs, and your maintenance costs are buried in a folder nobody's touched since Q3. Asking "which property is actually making money this month?" takes half a day to answer — if it gets answered at all.

A property management reporting dashboard solves this. Not a generic BI tool or a tweaked version of something your accountant gave you — a purpose-built view of the metrics that actually drive profitability in a property management business. This post walks through what that dashboard should contain, why most PM companies don't have it, and what to do about it.

## Why Property Management Reporting Is Uniquely Hard

Property management sits at a messy intersection of real estate, operations, and finance. You're tracking rent rolls, maintenance tickets, lease expirations, vacancy rates, and vendor invoices — often across dozens of properties with different ownership structures, expense categories, and reporting requirements.

Most PM operators deal with this by maintaining a sprawling patchwork of tools: QuickBooks or AppFolio for accounting, a leasing platform like Yardi or Buildium for tenant data, spreadsheets for anything that doesn't fit elsewhere, and email for everything in between. None of these systems talk to each other cleanly. So the real story — which properties are profitable, where costs are running hot, which units are dragging performance — exists only in someone's head or in a Friday afternoon manual report.

This isn't a staffing problem. It's a data infrastructure problem.

## The 8 Metrics a Property Management Reporting Dashboard Must Show

### 1. NOI by Property (Net Operating Income)

This is the single most important number in property management, and most operators can't see it at the property level without a manual calculation. NOI = Gross Rent Collected − Operating Expenses. It strips out financing and taxes so you can compare properties on an apples-to-apples basis.

Your dashboard should show NOI for each property, trended over the last 12 months, and benchmarked against budget. The moment you can see NOI per property in one view, you start making different decisions about where to invest and what to fix.

### 2. Vacancy Rate and Economic Occupancy

Physical occupancy (are the units occupied?) and economic occupancy (are you collecting rent on all occupied units?) are not the same number. A property can be 100% physically occupied and 92% economically occupied if you have tenants in arrears.

Your dashboard should show both, by property and in aggregate. Economic occupancy below 90% is usually a red flag that warrants immediate investigation — whether it's a collections problem, a lease renewal problem, or something else.

### 3. Rent Collection Rate and Aging AR

How much of the rent you're owed are you actually collecting, and how old is the outstanding balance? Aging AR — broken into 30/60/90+ day buckets, by property — is one of the most actionable views in property management. A tenant who's 30 days late is a different conversation than a tenant who's 90 days late and hasn't responded in two weeks.

Most PM accounting platforms have this data. The problem is it lives buried in a report that someone has to pull and format manually. A live dashboard surfaces it automatically every morning.

### 4. Maintenance Cost per Unit

Maintenance spend is one of the fastest ways property managers lose margin — and it's almost never tracked at the unit level. You know your total maintenance budget. You probably don't know that Unit 4B in the Riverside complex has had $11,000 in maintenance over the last 18 months, or that one vendor is generating 40% of your total ticket volume.

Break maintenance cost down by property, by unit, and by vendor. That view alone often reveals a few properties (or a few units) that are pulling down portfolio-wide performance, and a few vendor relationships worth renegotiating.

### 5. Lease Expiration Schedule (Rolling 90 Days)

Vacancies don't appear out of nowhere — they're predictable. Your dashboard should show every lease expiring in the next 30, 60, and 90 days, by property. This lets your leasing team get ahead of renewals rather than scrambling to fill units after the fact. Proactive renewal outreach typically reduces vacancy days by 30–50% compared to reactive outreach.

### 6. Same-Property Revenue Growth

If you're adding properties over time, your aggregate revenue will go up even if your existing portfolio is declining. Same-property (or same-store) revenue growth isolates how your existing assets are performing year-over-year, independent of portfolio growth. It's a much more honest picture of operational health.

### 7. Operating Expense Ratio by Property

Operating Expense Ratio = Total Operating Expenses ÷ Gross Revenue. It tells you what share of revenue is being consumed by operations before you get to NOI. A ratio creeping from 45% to 55% at a specific property is a warning sign worth catching early — and it's almost invisible in a blended P&L.

### 8. Vendor Spend by Category

Insurance, landscaping, utilities, repairs, cleaning — each category should be tracked at the property level, with month-over-month trends. Vendors who are increasing scope quietly (or billing for work that wasn't authorized) show up immediately in this view. Property managers who track vendor spend at this level consistently negotiate better rates at renewal.

## What This Dashboard Should Actually Look Like

The best property management reporting dashboards follow a simple structure:

**Portfolio summary view** — One page showing all properties: NOI, occupancy rate, 30-day AR balance, and any alerts (lease expiring, maintenance spike, collection below threshold). This is the Monday morning view.

**Property drill-down** — Click into any property to see a full financial view: rent roll, MTD vs. budget, trailing 12-month NOI, maintenance log, and open work orders.

**Aging AR detail** — Dedicated view for collections: every tenant with a balance, amount owed, days outstanding, and last payment date.

**Lease pipeline** — Calendar-style view of upcoming expirations, renewal status (contacted / not contacted / renewed / not renewing), and projected vacancy impact.

**Expense breakdown** — Vendor-level spend by property and category, with variance to budget.

Each view should update automatically — daily, not weekly — so you're never making decisions on data that's a week old.

## Why Most PM Companies Don't Have This

The data to build this dashboard usually exists. It's in AppFolio, Yardi, Buildium, or QuickBooks. The problem is it's fragmented across those systems, inconsistently categorized, and requires manual effort to consolidate into anything useful.

Building a property management reporting dashboard is a data engineering problem before it's a visualization problem. You need someone to connect those sources, standardize the data model (how do you define "NOI"? how do you categorize maintenance vs. capital improvements?), and build the logic that keeps it updated automatically.

That's exactly where most PM companies stall. They know they need this. They look at hiring someone, realize it's a $150k problem for a role that would be 40% utilized, and put it off for another quarter. The spreadsheets limp along. The manual reports keep coming.

## How BuilderHub Helps

BuilderHub builds and maintains analytics infrastructure for companies like property management firms — businesses with real data complexity and no dedicated data team.

For a typical PM company, that looks like: connecting your accounting system and property management platform, standardizing the data model across properties, and building the portfolio reporting dashboard your leadership team actually uses. The output is a live dashboard your team can access every day — not a one-time report that goes stale in two weeks.

The setup takes a few weeks, not months. Ongoing maintenance runs a fraction of what a full-time hire would cost. And the dashboard is yours — hosted in your environment, updated automatically, no black box.

## Getting Started Without Overbuilding

If you're building this for the first time, resist the urge to instrument everything at once. Start with three numbers: NOI by property, economic occupancy by property, and maintenance cost per unit. Get those clean, live, and trusted. Then add the lease pipeline view, then AR aging, then vendor spend.

A dashboard your team checks every Monday is worth more than a comprehensive dashboard nobody opens. Build for daily use first, completeness second.

## The Bottom Line

A property management reporting dashboard isn't a luxury — it's the operating infrastructure for a business that manages multiple properties with any degree of profitability discipline. When you can see NOI, occupancy, AR, and maintenance in one place, updated daily, by property, the business starts making different decisions. Faster lease renewals, earlier collections intervention, better vendor negotiations, more accurate budgeting.

The property management companies that build this reporting foundation early consistently outperform those that don't — not because they got lucky, but because they stopped flying blind.
`,
  },
];
