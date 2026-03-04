import React from 'react';
import { Check, ArrowRight, Clock, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';

const auditIncludes = [
  'Full data source inventory — every tool, every gap',
  'Dollar-impact analysis: what broken reporting is costing you',
  'Data maturity score with honest benchmarking',
  'Prioritized build roadmap you can act on immediately',
  'Written report + 60-min walkthrough call',
];

const buildTiers = [
  {
    name: 'Foundation',
    price: '$5,000',
    range: '– $8,000',
    desc: '2–3 data sources, 3–4 dashboards, core metrics defined. The starting point for teams with clean-enough data who need a single source of truth.',
  },
  {
    name: 'Growth Stack',
    price: '$8,000',
    range: '– $12,000',
    desc: '4–6 sources, 5–7 dashboards, full metric layer including revenue attribution, cohort analysis, and automated weekly reports.',
    popular: true,
  },
  {
    name: 'Full Intelligence',
    price: '$12,000',
    range: '– $15,000',
    desc: 'Complex multi-source environments, AI agent layer, custom semantic models, governance documentation, and stakeholder reporting cadence.',
  },
];

const buildIncludes = [
  'All data source connections (2–5+ depending on tier)',
  'Full transformation model layer — metrics defined once, used everywhere',
  '4–8 live dashboards, auto-updating on a schedule',
  'Documentation + 60-min team onboarding call',
  '30-day post-launch support window',
];

const retainerTiers = [
  {
    name: 'Core',
    price: '$1,500',
    forWho: 'Models running. Maintenance covered. One new report per month.',
    features: [
      'Transformation model hosting & maintenance',
      'Bug fixes and data source updates',
      '1 new report or dashboard per month',
      'Email support with <24h response',
    ],
  },
  {
    name: 'Growth',
    price: '$2,500',
    popular: true,
    forWho: 'Weekly insights delivered to your inbox. Slack access. Evolving stack.',
    features: [
      'Everything in Core',
      '2 new reports or dashboards per month',
      'Automated weekly KPI digest to your team',
      'Monthly 30-min strategy call',
      'Slack channel access',
    ],
  },
  {
    name: 'Command',
    price: '$3,500',
    forWho: 'Full fractional data team. Unlimited requests. Priority everything.',
    features: [
      'Everything in Growth',
      'Unlimited ad hoc data pulls and analysis',
      'AI agent monitoring and alerting included',
      'Priority Slack (<4h response)',
      'Quarterly roadmap review',
    ],
  },
];

const FeatureList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-sm">
        <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ServicesSection = () => (
  <section id="services" className="py-12 md:py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">

      <div className="text-center mb-8 md:mb-14">
        <Badge variant="outline" className="mb-4">How We Engage</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Start small. Build the stack. Let us run it.
        </h2>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Three phases. Each one is a standalone engagement — or a natural step to the next.
        </p>
      </div>

      {/* ── PHASE 1: AUDIT ─────────────────────────────── */}
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">1</div>
          <div>
            <h3 className="text-lg font-bold">The Data Audit</h3>
            <p className="text-sm text-muted-foreground">3–5 days · Low-risk entry point</p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="flex-1">
                <CardTitle className="text-xl mb-2">Find out exactly what's broken — and what it's costing you.</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Before we build anything, we map your entire data landscape. What you have, what's missing, what's wrong, and what it would take to fix it. You leave with a full audit report and a prioritized roadmap — regardless of whether you hire us to build it.
                </CardDescription>
              </div>
              <div className="sm:text-right shrink-0">
                <div className="text-3xl font-bold">$750</div>
                <div className="text-muted-foreground text-sm">– $1,500</div>
                <Badge variant="secondary" className="mt-1 text-xs">Fee credited if you build</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <FeatureList items={auditIncludes} />
            <p className="text-xs text-muted-foreground mt-4 italic">
              Not sure if you need a full build? Start here. The audit tells you exactly what to prioritize — and whether the ROI justifies it. If we can't find $10,000 in fixable problems, we'll say so.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                Book a Free 15-min Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* ── PHASE 2: BUILD ─────────────────────────────── */}
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">2</div>
          <div>
            <h3 className="text-lg font-bold">The Foundation Build</h3>
            <p className="text-sm text-muted-foreground">3–6 weeks · One-time project fee</p>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            We connect your data sources, build the full transformation layer, and deliver live auto-updating dashboards. Scoped to your environment — choose the tier that fits where you are now.
          </p>
        </div>

        {/* Build tier cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {buildTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary ring-1 ring-primary/20' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant={tier.popular ? 'default' : 'secondary'}>{tier.name}</Badge>
                  {tier.popular && <Badge variant="outline" className="text-xs">Most Common</Badge>}
                </div>
                <div className="flex items-baseline gap-0.5 mt-2">
                  <span className="text-2xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.range}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/30">
          <CardContent className="pt-5 pb-5">
            <p className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide text-xs">Every build includes</p>
            <FeatureList items={buildIncludes} />
          </CardContent>
        </Card>
      </div>

      {/* ── PHASE 3: RETAINER ─────────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">3</div>
          <div>
            <h3 className="text-lg font-bold">The Managed Retainer</h3>
            <p className="text-sm text-muted-foreground">Monthly · Cancel anytime</p>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            We don't hand you a stack and walk away. Every build transitions into a managed retainer — we host the models, maintain the pipelines, and keep everything running as your business evolves. Pick the tier that matches your pace.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {retainerTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary ring-1 ring-primary/20' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant={tier.popular ? 'default' : 'secondary'}>{tier.name}</Badge>
                  {tier.popular && <Badge variant="outline" className="text-xs">Most Popular</Badge>}
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-2xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{tier.forWho}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <FeatureList items={tier.features} />
              </CardContent>
              <CardFooter className="mt-auto pt-3">
                <Button variant={tier.popular ? 'default' : 'outline'} className="w-full" asChild>
                  <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                    Start with an Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* AI Agents add-on */}
        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <CardTitle className="text-base">AI Agents — Monitoring, Alerts & Automation</CardTitle>
                  <Badge variant="secondary" className="text-xs">Add-on to any retainer</Badge>
                </div>
                <CardDescription className="leading-relaxed">
                  Agents that watch your data 24/7 — alerting you when revenue drops, churn spikes, or any metric moves outside normal range. Scheduled reports, natural language data queries, anomaly detection. Hosted and maintained by us.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="font-medium mb-0.5">Implementation</p>
                <p className="text-muted-foreground">$1,000 – $5,000 one-time, scope-dependent</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="font-medium mb-0.5">Monthly Maintenance</p>
                <p className="text-muted-foreground">$500 – $3,500/mo included in Command tier</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  </section>
);

export default ServicesSection;
