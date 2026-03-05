export const batch2 = [
  {
    slug: 'what-is-business-intelligence',
    title: 'What Is Business Intelligence? A No-Jargon Guide for Operators',
    excerpt: 'What BI actually is, how it differs from data science, and what the stack looks like in plain English.',
    date: '2026-03-15',
    readTime: '5 min read',
    tags: ['Business Intelligence', 'Strategy'],
    content: `
Business intelligence sounds like enterprise software nobody asked for. In practice, it is the ability to answer questions about your business using data instead of gut feeling.

That is it. No PhD required.

## What BI actually does

At its core, BI answers three types of questions:

1. **What happened?** Last month's revenue, churn rate, cost per acquisition.
2. **Why did it happen?** Revenue dropped because one large client churned. CAC spiked because paid search CPCs doubled.
3. **What is likely to happen next?** Based on pipeline velocity and close rates, Q3 revenue will land between $1.2M and $1.4M.

Most companies are stuck on question one. They can tell you what happened, but only after someone spends two days pulling data from three different tools. BI done right gets you answers to all three questions in under 60 seconds.

## BI vs. data science vs. data engineering

These terms get used interchangeably, but they are different jobs:

- **Data engineering** is plumbing. It moves data from point A to point B and makes sure it arrives clean.
- **Business intelligence** is the layer on top. It organizes that data into dashboards, reports, and alerts that humans can act on.
- **Data science** is modeling and prediction. Think forecasting demand, scoring leads, or detecting fraud.

Most companies between $2M and $50M need data engineering and BI. They do not need data science yet. If you cannot answer "what is our gross margin by product line" in under a minute, a machine learning model is not your next move.

## What the BI stack looks like in 2026

A modern BI stack for a mid-market company typically has four layers:

| Layer | What it does | Common tools |
|-------|-------------|--------------|
| **Sources** | Where your data lives | QuickBooks, HubSpot, Stripe, Shopify, your app database |
| **Ingestion** | Moves data into one place | Fivetran, Airbyte, custom scripts |
| **Warehouse** | Central storage for analysis | BigQuery, Snowflake, DuckDB |
| **Visualization** | Dashboards and reports | Metabase, Looker, Power BI, Tableau |

Total cost for a company with 3-5 data sources: $200-$800/month in tooling. The expensive part is not the software. It is having someone who knows how to connect the pieces and keep them running.

## When to invest in BI

You need BI when any of these are true:

- Your board deck takes more than a day to assemble
- Two people in the same meeting cite different numbers for the same metric
- You cannot tell which customers are profitable without asking your accountant
- Your team spends more than five hours a week manually pulling reports

If three of those four apply, you are leaving real money on the table. The typical ROI on a BI investment at this stage is not some abstract percentage — it is 10-20 hours per week of senior time recovered, and decisions made two weeks faster.

## The bottom line

BI is not a product you buy. It is a capability you build. The companies that get it right treat data like a utility: always on, always accurate, accessible to anyone who needs it.
    `,
  },
  {
    slug: 'churn-lagging-indicator',
    title: 'Why Your Churn Rate Is a Lagging Indicator (And What to Watch Instead)',
    excerpt: 'By the time churn shows up in your dashboard, it is already too late. Here are the leading signals to watch upstream.',
    date: '2026-03-16',
    readTime: '5 min read',
    tags: ['SaaS', 'Churn'],
    content: `
Your monthly churn rate tells you how many customers left. It does not tell you why, and it definitely does not tell you who is about to leave. By the time that number ticks up from 3% to 5%, the damage is already done.

Churn is an autopsy report. You need vital signs.

## Why churn is always late

A customer who cancels in March probably made that decision in January. Something broke — they stopped getting value, a competitor showed up, their champion left the company, or they simply forgot you existed.

The cancellation is the final act. The leading indicators showed up weeks or months earlier, and most companies never tracked them.

## The five leading indicators worth watching

### 1. Login frequency drop

If a daily user becomes a weekly user, something changed. Track the 7-day and 30-day rolling average of logins per account. A 40% drop in engagement over two weeks is a reliable early warning. At one B2B SaaS company we worked with, accounts that dropped below 3 logins per week had a 4x higher churn rate within 90 days.

### 2. Feature adoption depth

Accounts that use only one feature churn at 2-3x the rate of accounts using three or more. Track the number of distinct features used per account per month. If an account has been live for 60 days and still only uses the core feature, that is a red flag — not a success story.

### 3. Support ticket sentiment and frequency

A spike in support tickets is obvious. What is less obvious: the customer who stops submitting tickets entirely. They have not figured it out — they have given up. Track both the volume trend and the silence. Accounts that go from active support conversations to zero contact in a 30-day window deserve a proactive check-in.

### 4. Time to value (TTV)

How long does it take a new customer to reach the moment where they say "this is worth it"? If your average TTV is 14 days but some accounts are still not activated after 30, those accounts are at serious risk. Every day past your benchmark TTV, churn probability increases.

### 5. Expansion signals (or lack thereof)

Healthy accounts grow. They add users, upgrade plans, or increase usage. Accounts that flatline — same seat count, same plan, no usage growth for six months — are coasting. Coasting accounts are one budget review away from cancellation.

## How to build a churn risk score

You do not need a machine learning model to start. A simple weighted score works:

- Login frequency below threshold: +2 points
- Feature adoption below 3 features: +2 points
- No support contact in 30 days: +1 point
- Past TTV benchmark with low activation: +3 points
- No expansion activity in 90 days: +1 point

Any account scoring 5 or above gets flagged for immediate outreach. This scoring model can live in a spreadsheet, but it works far better as an automated alert in your BI layer.

## The shift that matters

Stop reviewing churn monthly. Start reviewing churn risk weekly. The companies that hold churn below 2% are not better at win-back campaigns. They are better at catching problems before the customer ever thinks about leaving.
    `,
  },
  {
    slug: 'board-deck-automation',
    title: 'How to Build a Board Deck That Does Not Take Two Weeks to Prepare',
    excerpt: 'Automate the data collection, standardize the template, and deliver the first draft automatically. A practical guide.',
    date: '2026-03-17',
    readTime: '6 min read',
    tags: ['Finance', 'Automation'],
    content: `
Every quarter, the same thing happens. Two weeks before the board meeting, the CFO starts asking for numbers. The ops team pulls data from three tools. Marketing sends a spreadsheet that does not match finance's spreadsheet. Someone stays late reformatting slides.

This is a solvable problem. Here is how.

## Why board decks take so long

The time is not spent designing slides. It is spent on three things:

1. **Data collection** — pulling numbers from QuickBooks, your CRM, Stripe, payroll, Google Analytics, and whatever else feeds the business. This alone takes 3-5 days.
2. **Reconciliation** — figuring out why the revenue number from Stripe does not match the revenue number from QuickBooks. Add another 1-2 days.
3. **Formatting** — turning raw numbers into charts, commentary, and a coherent narrative. Another 2-3 days.

Total: 6-10 business days of senior team time per quarter. At a $10M company, that is roughly $15,000-$25,000 in loaded labor cost per board meeting — four times a year.

## The automation playbook

### Step 1: Standardize the template

Before automating anything, lock down what the board actually needs to see. Most effective board decks follow a predictable structure:

- **Financial summary** — Revenue, gross margin, burn rate, runway, cash position
- **Growth metrics** — New customers, expansion revenue, churn, pipeline
- **Operational highlights** — Key hires, product milestones, risks
- **Forward look** — Forecast vs. actual, updated projections, key decisions needed

Create a slide template with placeholders for every number. Label each placeholder with its exact data source. This becomes your automation spec.

### Step 2: Centralize the data

Every number on the board deck should flow from a single warehouse or data layer. Set up automated data pipelines that pull from your key sources daily:

- Accounting system (revenue, expenses, cash)
- CRM (pipeline, new deals, churn)
- Payment processor (MRR, expansion, contraction)
- HRIS or payroll (headcount, burn)

Tools like Fivetran or Airbyte handle most common integrations. The warehouse can be BigQuery or even a well-structured PostgreSQL database. The point is one source of truth, updated automatically.

### Step 3: Build the auto-populated draft

Using your BI tool or a simple script, generate the first draft of every data slide automatically. This means:

- Charts that update with the latest quarter's data
- Variance calculations (actual vs. budget, quarter over quarter)
- Red/yellow/green indicators on key metrics
- Auto-generated commentary for significant changes ("Revenue up 12% QoQ, driven by 3 new enterprise deals")

The output can be a Google Slides deck populated via API, a PDF generated from your BI tool, or a Notion page with embedded charts. The format matters less than the automation.

### Step 4: Reserve human time for narrative

Once the data slides are auto-generated, the CFO and CEO spend their time on what actually matters: the story. What happened, why, and what we are doing about it. The strategic context, the risks, the asks.

This is the part boards actually care about, and it is the part that gets squeezed when everyone is busy pulling numbers.

## What the timeline looks like after automation

- **Day 1:** Automated draft lands in a shared folder, already populated with current data
- **Day 2-3:** CFO reviews numbers, adds narrative and strategic commentary
- **Day 4:** CEO reviews, final edits
- **Day 5:** Done

Two weeks becomes one week. One week becomes five days. The data is accurate because it came from the same pipeline that feeds your dashboards — no more reconciliation battles.

## The real payoff

It is not just about saving time. Automated board decks mean your leadership team can look at board-quality data anytime, not just four times a year. That changes how you run the business between meetings.
    `,
  },
  {
    slug: 'subscription-metrics-predict-growth',
    title: 'The Subscription Business Metrics That Actually Predict Growth',
    excerpt: 'Beyond MRR: the leading metrics that tell you where your subscription business is headed before it gets there.',
    date: '2026-03-18',
    readTime: '6 min read',
    tags: ['SaaS', 'KPIs'],
    content: `
MRR is the number every subscription business tracks. It is also the number that tells you the least about where you are headed. MRR is a snapshot of today. Growth depends on what is happening upstream.

Here are the metrics that actually predict whether your subscription business will grow, stall, or shrink — and how to calculate each one.

## 1. Net Revenue Retention (NRR)

NRR measures how much revenue you keep and grow from your existing customers, excluding new sales. It is the single most predictive metric for subscription growth.

**Formula:** (Starting MRR + Expansion - Contraction - Churn) / Starting MRR

- **Below 90%:** Your bucket is leaking faster than you can fill it. Growth requires ever-increasing new sales.
- **90-100%:** Stable, but you are on a treadmill. New sales drive all growth.
- **100-110%:** Healthy. Your existing base is growing on its own.
- **Above 110%:** This is how the best SaaS companies scale efficiently. Existing customers are your growth engine.

Track this monthly and segment it by customer size, cohort, and product line. Aggregate NRR hides problems.

## 2. Expansion Revenue as a percentage of new ARR

If more than 30% of your new ARR each quarter comes from existing customers, you have a product that grows with usage. If it is under 15%, you have a flat product — customers buy once and stay at the same level forever.

This matters because expansion revenue is 3-5x cheaper to acquire than new logo revenue. Companies with strong expansion economics can grow faster while spending less on sales and marketing.

## 3. Gross margin trend

Not just gross margin — the trend. A subscription business with 72% gross margins that has been declining 1-2 points per quarter has a structural problem. Usually it is infrastructure costs scaling faster than revenue, support costs growing with the customer base, or discounting creeping in.

Plot your gross margin by quarter for the last eight quarters. If the trendline is flat or rising, you have leverage. If it is falling, find out why before it compounds.

## 4. CAC payback period

How many months does it take to recover the cost of acquiring a customer?

**Formula:** CAC / (Average MRR per customer x Gross Margin %)

- **Under 12 months:** Efficient. You can invest aggressively in growth.
- **12-18 months:** Acceptable for mid-market and enterprise.
- **Over 18 months:** You are financing customer acquisition with future cash. This only works with very high retention.

Track this by channel. Your blended CAC payback might be 14 months, but if paid search is at 24 months and referrals are at 6 months, you know where to shift budget.

## 5. Qualified pipeline coverage ratio

How much qualified pipeline do you have relative to your revenue target for the next quarter?

- **3x coverage or higher:** You are likely to hit your number.
- **2-3x:** Possible, but tight. Depends on close rates.
- **Below 2x:** You are probably going to miss. Start adjusting the forecast now.

This is the most forward-looking metric on the list. If your pipeline coverage drops below 3x with eight weeks left in the quarter, no amount of hustle will fix it. That is a signal to invest in pipeline generation for the following quarter.

## 6. Logo retention rate vs. revenue retention rate

These two numbers together tell a story. If your logo retention is 85% but your revenue retention is 105%, you are losing small customers and growing large ones. That might be fine — or it might mean your product does not work for the segment you are selling to most aggressively.

When logo retention and revenue retention diverge by more than 15 points, dig into which cohort is leaving and why.

## Putting it together

Build a single dashboard with these six metrics, updated weekly. Review it every Monday. The pattern you are looking for is all six trending in the right direction simultaneously. When one moves against the trend, that is your early warning — and your signal to act before it shows up in MRR three months from now.
    `,
  },
  {
    slug: 'ai-agents-changing-business-intelligence',
    title: 'How AI Agents Are Changing the Way Business Intelligence Works',
    excerpt: 'Real use cases, not hype. How AI agents are automating insight delivery and changing who has access to data answers.',
    date: '2026-03-19',
    readTime: '6 min read',
    tags: ['AI Agents', 'Analytics'],
    content: `
For the last decade, BI has followed the same pattern: someone with SQL skills builds a dashboard, shares it, and hopes people look at it. AI agents are breaking that pattern — not by replacing dashboards, but by making data accessible to people who never learned to query it.

Here is what is actually happening, beyond the hype.

## What an AI agent does in a BI context

An AI agent is software that can take a goal, break it into steps, use tools to execute those steps, and deliver a result. In BI, that looks like:

- A CFO types "What was our gross margin by product line last quarter compared to budget?" and gets a formatted answer in 15 seconds — no dashboard required.
- An operations manager asks "Which jobs are over budget this month?" and gets a ranked list with the specific cost categories driving the overrun.
- A weekly Slack message lands every Monday with a plain-English summary of the five most important things that changed in your business data last week.

The agent connects to your data warehouse, writes the SQL, runs the query, formats the result, and presents it in language the person understands. No analyst in the loop.

## Three real use cases in production today

### 1. Natural language data queries

This is the most mature use case. Tools like Metabase, ThoughtSpot, and custom GPT-based agents let business users ask questions in plain English. The agent translates the question into a database query and returns the answer.

The catch: this only works well when your data layer is clean. If your tables are named "tbl_xf_rev_03" and your columns are "val1" through "val47," no agent can make sense of that. The prerequisite is a well-modeled, well-documented data warehouse. The companies getting value from natural language queries invested in their data layer first.

### 2. Automated anomaly narratives

Instead of setting static alert thresholds ("notify me if revenue drops 10%"), agents can monitor your data continuously and generate context-aware narratives when something changes.

Example output: "Revenue dropped 8% week-over-week. This is outside the normal range for this time of year. The drop is concentrated in the SMB segment, specifically in the Northeast region. Three accounts representing $42K in MRR moved to annual billing last week, which shifted recognized revenue to future months. Excluding this timing effect, revenue grew 1.2%."

That narrative would take an analyst 30-60 minutes to produce. An agent generates it in seconds.

### 3. Report generation and distribution

Monthly investor updates, board deck data pages, weekly team summaries — these are repetitive documents that follow a known template and pull from known data sources. Agents can generate the first draft automatically and deliver it on schedule.

One company we work with reduced their monthly investor update from a full day of work to a 20-minute review of an agent-generated draft. The agent pulls data from their warehouse, generates charts, writes commentary on notable changes, and drops it into a Google Doc every month on the 5th.

## What agents cannot do yet

Agents are not good at ambiguity. "How is the business doing?" is too vague. "What was our customer acquisition cost by channel in February compared to our target?" is specific enough to get a reliable answer.

They also struggle with data quality issues. An agent will confidently return wrong numbers if the underlying data is wrong. You still need someone who understands the data to validate the outputs, especially in the first few months.

And they do not replace strategic thinking. An agent can tell you that churn spiked. It cannot tell you whether to invest in product improvements or customer success hires in response.

## The practical path forward

If you are considering AI agents for your BI stack, start here:

1. **Clean your data layer first.** Agents amplify the quality of your data — good or bad.
2. **Start with one specific use case.** The weekly business summary is a great first project.
3. **Keep a human in the review loop.** Trust builds over time as you verify the agent's outputs.
4. **Measure time saved.** Track how many hours per week the agent recovers. That is your ROI case.

The companies getting the most value are not replacing their analysts with agents. They are using agents to handle the repetitive 80% so their people can focus on the strategic 20%.
    `,
  },
  {
    slug: 'data-maturity-stages',
    title: 'Data Maturity: Where Is Your Business and What Comes Next?',
    excerpt: 'A four-stage maturity model for business data — with self-assessment questions and what moves you from one stage to the next.',
    date: '2026-03-20',
    readTime: '6 min read',
    tags: ['Strategy', 'Analytics'],
    content: `
Every company is somewhere on the data maturity spectrum. The problem is most do not know where — which means they either under-invest (and stay stuck) or over-invest (buying tools they are not ready to use).

Here is a four-stage model based on what we see across companies doing $2M-$50M in revenue. Find your stage, then focus on the next one.

## Stage 1: Spreadsheet Chaos

**What it looks like:**
- Revenue numbers live in QuickBooks, but everything else is in spreadsheets
- Different team members have different versions of the same report
- Monthly close takes 2-3 weeks because someone has to manually reconcile data
- The CEO asks a question and the answer takes 2-5 days to produce

**Self-assessment questions:**
- Do two people in your company report different numbers for the same metric?
- Does your monthly reporting require more than 10 hours of manual data pulling?
- Is there a single spreadsheet that, if deleted, would cripple your operations?

If you answered yes to two or more, you are in Stage 1.

**What moves you to Stage 2:** Pick your top 5 business metrics. Define them precisely — written definitions that everyone agrees on. Then build one central dashboard that displays those 5 numbers, updated at least weekly. This alone takes most companies from chaos to clarity.

## Stage 2: Central Dashboards

**What it looks like:**
- You have a BI tool (Metabase, Looker, Power BI) connected to your key data sources
- Leadership can see core KPIs without asking someone to pull numbers
- Data is refreshed daily or weekly
- Reporting still requires some manual work, but the foundation is there

**Self-assessment questions:**
- Can your CEO answer "how did we do last month?" in under 60 seconds?
- Are your dashboards used by more than two people at least weekly?
- Is there a single source of truth for your core metrics?

If you answered yes to all three, you are solidly in Stage 2.

**What moves you to Stage 3:** Start connecting operational data to financial data. When you can see not just revenue but revenue by customer segment, by channel, by product line — and track how operational metrics (support tickets, NPS, usage) correlate with financial outcomes — you are entering Stage 3.

## Stage 3: Integrated Analytics

**What it looks like:**
- Multiple data sources feed into a central warehouse
- You can slice metrics by segment, cohort, channel, and time period
- Automated alerts notify the right people when metrics move outside normal ranges
- Board decks and investor updates pull directly from the same data layer
- You start to see patterns: which customer segments are most profitable, which channels have the best CAC payback

**Self-assessment questions:**
- Can you calculate customer lifetime value by acquisition channel?
- Do you have automated alerts for key metric changes?
- Can your finance team access operational data without asking the ops team?

Yes to all three means you are in Stage 3.

**What moves you to Stage 4:** Predictive capabilities. Instead of "what happened," you start answering "what will happen." This requires clean historical data (which you now have) and either statistical models or AI-driven forecasting.

## Stage 4: Predictive and Prescriptive

**What it looks like:**
- Forecasting models predict revenue, churn, and cash flow with reasonable accuracy
- AI agents surface insights proactively — you do not have to go looking for problems
- Data informs strategic decisions: pricing changes, market expansion, product investment
- The data team (internal or fractional) operates as a strategic partner, not a reporting function

**Self-assessment questions:**
- Can you forecast next quarter's revenue within 10% accuracy?
- Do you use data to proactively identify at-risk customers before they churn?
- Are business experiments (pricing tests, channel tests) tracked and measured systematically?

Most companies between $2M and $50M are in Stage 1 or Stage 2. That is fine. The goal is not to leap to Stage 4 overnight. It is to identify where you are and take the specific actions that move you to the next stage.

## The key insight

Each stage builds on the one before it. Companies that try to skip stages — buying an AI tool before their data is centralized, or building predictive models on messy spreadsheets — waste money and lose trust in data. The path forward is sequential, and each step delivers real value on its own.
    `,
  },
  {
    slug: 'cost-of-siloed-data',
    title: 'The Hidden Cost of Siloed Data in Growing Companies',
    excerpt: 'When sales data does not talk to finance and operations is guessing — the real dollar cost of disconnected data.',
    date: '2026-03-21',
    readTime: '5 min read',
    tags: ['Data Strategy', 'Operations'],
    content: `
Sales uses HubSpot. Finance uses QuickBooks. Operations uses a custom spreadsheet. Marketing uses Google Analytics and a different spreadsheet. Nobody's numbers agree, and every meeting starts with 15 minutes of arguing about whose data is right.

This is not a minor inconvenience. It has a real, measurable cost.

## Where the money goes

### 1. Reconciliation labor

When data lives in silos, someone has to manually reconcile it. Every month, someone on the finance team spends 15-30 hours pulling numbers from different systems, cross-referencing them, and building reports.

At a $10M company with a finance team of 2-3 people, that is roughly $3,000-$6,000/month in loaded labor cost — just to answer the question "what actually happened last month?"

### 2. Slow decision-making

When getting an answer takes days instead of seconds, decisions get delayed. A pricing change that could have been made in March gets pushed to May because nobody could pull the margin data fast enough. A hiring decision stalls because the revenue forecast is "still being finalized."

The cost of a delayed decision is hard to quantify precisely, but consider: a one-month delay on a pricing optimization worth 3% of revenue at a $10M company is roughly $25,000 in lost upside.

### 3. Missed cross-sell and retention signals

When sales data does not connect to product usage data, your team cannot see which customers are ripe for expansion or at risk of churning. A customer whose usage doubled last quarter is an expansion opportunity — but if sales cannot see usage data, they never make the call.

One company we worked with found $180K in unrealized expansion revenue within 60 days of connecting their product usage data to their CRM. The opportunities were always there. Nobody could see them.

### 4. Duplicated effort

Siloed data creates siloed work. Marketing builds their own revenue dashboard. Sales builds theirs. Finance builds a third. Three teams, three dashboards, three different numbers — and nine hours of weekly maintenance across the organization.

### 5. Trust erosion

This is the most damaging cost. When numbers do not agree, people stop trusting the data. When people stop trusting the data, they fall back on intuition. And when a $15M company is making strategic decisions on intuition because nobody trusts the reports, that is a company flying blind with real money at stake.

## How to quantify the cost in your company

Here is a simple exercise. Ask your leadership team four questions:

1. How many hours per month does each department spend pulling and reconciling data? Multiply by loaded hourly rate.
2. How many decisions in the last quarter were delayed because data was not available? Estimate the cost of each delay.
3. When was the last time two people in a meeting cited different numbers for the same metric? How long did it take to resolve?
4. How many separate dashboards or reports exist across the company that track overlapping metrics?

Most companies doing this exercise for the first time find $50,000-$200,000/year in direct and indirect costs from data silos. At a $5M company, that is 1-4% of revenue spent on a problem that is entirely fixable.

## The fix is not a tool — it is a layer

The solution is not buying another tool. It is building a central data layer where all your key systems feed into one place. Once sales, finance, operations, and marketing data lives in a single warehouse with agreed-upon definitions, silos dissolve.

This does not require a six-figure data warehouse project. For most companies at this stage, a managed analytics setup can connect 3-5 data sources, build the central layer, and deliver unified dashboards in 2-4 weeks. The cost is a fraction of what the silos are costing you today.
    `,
  },
  {
    slug: 'construction-job-level-analytics',
    title: 'Why Construction Companies Need Job-Level Analytics (Not Just Accounting)',
    excerpt: 'Job costing vs. accounting. How to track profitability per job in real time — and what most contractors are missing.',
    date: '2026-03-22',
    readTime: '5 min read',
    tags: ['Construction', 'Analytics'],
    content: `
Most construction companies know their overall revenue and expenses. Very few can tell you — right now, today — which jobs are making money and which are bleeding it.

The difference between a contractor doing 8% net margin and one doing 15% is almost never about getting better jobs. It is about knowing which jobs are going sideways early enough to do something about it.

## Accounting tells you what happened. Job analytics tells you what is happening.

Your accounting system (Sage, QuickBooks, Foundation) records costs after they are incurred. By the time a job shows up as unprofitable in your financials, the damage is done. The concrete was poured, the overtime was paid, the change order was never documented.

Job-level analytics flips this. It tracks estimated vs. actual costs in real time, at the job level, by cost code. It answers:

- Are we over budget on labor for Job 4217? By how much? Since when?
- What is our projected final cost vs. original estimate?
- Which cost codes are consistently running over across all jobs?
- What is our committed cost (POs and subcontracts) vs. what has been billed?

## The three numbers every contractor should see daily

### 1. Cost to complete vs. budget remaining

For every active job, you need to know: how much is left to spend, and how much budget is left to spend it. If you have $200K of work remaining and $150K of budget, you have a $50K problem — and you need to know that today, not at job closeout.

### 2. Production rate vs. estimated rate

If you estimated 500 square feet of drywall per day and your crew is averaging 380, you are 24% behind. That compounds over weeks. Track actual production rates against estimates on a weekly basis. When a crew falls below 85% of estimated production for two consecutive weeks, that is an intervention trigger.

### 3. Change order capture rate

On average, contractors leave 3-5% of job revenue on the table through undocumented change orders. If you are running $10M in annual revenue, that is $300K-$500K. Track every scope change, no matter how small. The companies that capture change orders aggressively protect their margins.

## What the data stack looks like for a contractor

You do not need enterprise software to get job-level analytics. Here is a practical setup:

**Data sources:**
- Accounting system (Sage 300, QuickBooks, or similar) for costs and billing
- Project management tool (Procore, Buildertrend) for schedules and progress
- Time tracking system for labor hours by job and cost code
- Estimating tool for original budgets

**Central layer:**
- Pull data from these sources into a warehouse or even a well-structured database
- Map cost codes consistently across systems
- Calculate earned value, cost to complete, and projected margin automatically

**Output:**
- A job profitability dashboard updated daily
- Automated alerts when any job crosses a cost threshold (e.g., labor over 90% of budget with less than 75% of work complete)
- A weekly project manager report showing every job's health at a glance

## The real-world impact

A general contractor we worked with was running 20+ active jobs at any given time. Before job-level analytics, they reviewed job cost reports monthly — printed PDFs from their accounting system, reviewed in a two-hour meeting.

After setting up real-time job dashboards, they caught a $140K labor overrun on a commercial project three weeks earlier than they would have otherwise. They adjusted crew allocation and recovered roughly $80K of that overrun.

That single save paid for two years of analytics infrastructure.

## The bottom line

If you cannot tell me the projected margin on every active job within 30 seconds, you are managing by rearview mirror. The margin is there — you just need to see it before it is gone.
    `,
  },
  {
    slug: 'what-managed-analytics-means',
    title: 'What Managed Analytics Actually Means (And Why Agencies Offer It)',
    excerpt: 'How managed analytics differs from consulting, software, and hiring — and how to evaluate if it is right for you.',
    date: '2026-03-23',
    readTime: '5 min read',
    tags: ['Managed Services', 'Strategy'],
    content: `
The term "managed analytics" gets used loosely. Some companies use it to mean a BI tool with onboarding support. Others mean a full outsourced data team. The ambiguity makes it hard to evaluate.

Here is a clear breakdown of what managed analytics actually is, how it compares to the alternatives, and when it makes sense.

## The four ways companies get analytics done

### Option 1: DIY with software

You buy Tableau, Power BI, or Metabase. Someone on your team — usually a finance person or ops manager — learns the tool and builds reports.

**Pros:** Low monthly cost ($50-$500/month for the tool).
**Cons:** That person has a day job. The dashboards get built when they have time, which is rarely. When they leave, the dashboards break and nobody knows how to fix them.

**Best for:** Companies with less than $2M in revenue and simple data needs.

### Option 2: Consulting engagement

You hire a consulting firm to assess your data needs, recommend a strategy, and maybe build some initial infrastructure. Engagements typically run $20,000-$100,000 and last 2-6 months.

**Pros:** You get experienced people and a clear roadmap.
**Cons:** When the engagement ends, you own the output but not the expertise. Maintenance, updates, and new requests require another engagement — or a hire.

**Best for:** Companies that know they have a data problem but do not know what the solution looks like.

### Option 3: Full-time hire

You hire a data analyst or data engineer. Salary: $90K-$180K plus benefits. Ramp time: 3-6 months.

**Pros:** Dedicated resource, deeply embedded in your business.
**Cons:** Expensive. One person cannot cover analytics, engineering, and visualization. You often end up needing two hires. And if they leave, you are back to square one.

**Best for:** Companies above $20M with complex, ongoing data needs that require daily attention.

### Option 4: Managed analytics

A team handles your data infrastructure, dashboards, and reporting on an ongoing basis for a fixed monthly fee. They build the pipelines, maintain the dashboards, respond to ad hoc questions, and evolve the system as your business changes.

**Pros:** Faster to start (days, not months). Lower cost than hiring ($1,500-$5,000/month vs. $10K-$20K/month for a full-time hire). No single point of failure. You get a team, not a person.
**Cons:** Less embedded than a full-time hire. Not the right fit if you need someone in every standup and deeply involved in product decisions.

**Best for:** Companies doing $2M-$50M that need real analytics infrastructure but are not ready (or do not need) to build an internal data team.

## How to evaluate a managed analytics provider

Ask these five questions:

**1. What does the first 30 days look like?**
A good provider has a structured onboarding process. They should connect your data sources, build your first dashboards, and deliver value within 2-4 weeks. If the answer is "we will start with a 6-week discovery phase," keep looking.

**2. Who owns the data and infrastructure?**
You should own everything. If you part ways, the dashboards, the data warehouse, and the pipelines should stay with you. Ask this explicitly.

**3. How do you handle ad hoc requests?**
Business questions do not follow a schedule. A managed analytics provider should be able to handle 5-10 ad hoc data questions per month without a separate SOW for each one.

**4. What is included in the monthly fee and what costs extra?**
Get specifics. How many data sources? How many dashboards? How many users? What happens when you need to add a new data source?

**5. Can you show me a sample dashboard or deliverable?**
If they cannot show you what their output looks like before you sign, that is a red flag.

## The managed analytics sweet spot

The model works best for companies that have outgrown spreadsheets but are not ready to invest $200K+ per year in a data team. You get the infrastructure, the expertise, and the ongoing support — without the overhead, the hiring risk, or the six-month ramp time.
    `,
  },
  {
    slug: 'ceo-dashboard-five-questions',
    title: 'The 5 Questions Every CEO Should Be Able to Answer From a Dashboard',
    excerpt: 'If pulling these five answers takes more than 60 seconds, you have a data problem worth solving.',
    date: '2026-03-24',
    readTime: '5 min read',
    tags: ['Leadership', 'Dashboards'],
    content: `
A CEO's dashboard is not about having the most charts. It is about being able to answer the five questions that determine whether the business is healthy — in under 60 seconds, without asking anyone.

If you cannot answer these five questions right now, from a screen you can pull up on your phone, you have a data gap worth closing.

## Question 1: Are we making money?

Not revenue. Profitability. Specifically:

- What is our gross margin this month vs. last month vs. budget?
- What is our net income (or burn rate) and how does it compare to plan?
- What is our cash position and how many months of runway do we have at current burn?

Revenue growth with deteriorating margins is a crisis masquerading as success. The CEO needs to see margin trends alongside revenue, updated at least weekly. If your gross margin has dropped two points in the last quarter and you did not notice until the board asked, that is exactly the problem a dashboard should solve.

## Question 2: Are we growing?

Growth means different things for different businesses, but the core metrics are:

- **New customer acquisition:** How many new customers this month vs. last month and vs. the same month last year?
- **Revenue growth rate:** Month-over-month and year-over-year.
- **Pipeline:** What is the value and stage of the current pipeline, and is coverage sufficient for next quarter's target?

The key is seeing the trend, not just the current number. A single month of 10% growth means nothing. Six consecutive months of 10% growth is a pattern you can plan around.

## Question 3: Are we keeping our customers?

Customer retention is the foundation of sustainable growth. On your dashboard:

- **Churn rate:** Monthly and trailing 12-month.
- **Net revenue retention:** Are existing customers spending more or less over time?
- **Customer health indicators:** Usage trends, support ticket volume, NPS or satisfaction scores.

A company growing 20% with 5% monthly churn is running on a treadmill. The CEO needs to see retention data next to growth data — always — because growth without retention is expensive and unsustainable.

## Question 4: Where is the cash going?

This is not a P&L review. It is a cash flow question:

- What are our top five expense categories and how are they trending?
- What is our accounts receivable aging — who owes us money and how overdue is it?
- Are there any expense categories growing faster than revenue?

One pattern we see repeatedly: a company growing revenue at 15% per year while headcount costs grow at 25% per year. That math catches up. The CEO needs to see expense growth rates relative to revenue growth — not just totals.

## Question 5: What needs my attention right now?

This is the most important question and the hardest to automate. But a well-built dashboard handles it with exception-based alerts:

- Any KPI that moved more than 15% from the trailing average — flagged in red
- Any key account with a significant change in engagement or spending
- Any financial metric that is off plan by more than 10%
- Any operational bottleneck (support backlog, delivery delays, hiring gaps)

The dashboard should not require the CEO to hunt for problems. It should surface them. The ideal experience is: open the dashboard, see green across the board, close it in 30 seconds. Or: open the dashboard, see one red flag, click into it, understand the issue, and take action.

## How to build this

Start with these five questions. For each one, identify the 2-3 specific metrics that answer it. That gives you 10-15 metrics total — which is the right size for a CEO dashboard.

Then work backward: where does each metric come from? What system is the source of truth? How often does it need to refresh?

Most companies can have this dashboard live in 2-3 weeks with the right data infrastructure. The investment is small relative to the cost of a CEO making a major decision with incomplete information. And that is the real question: how many decisions are you making right now without the data you need to make them well?
    `,
  },
];
