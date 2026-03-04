import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/Components/ui/button';

const dashboards = [
  { title: 'Revenue Dashboard', desc: 'MRR, churn, new vs. expansion, cohort LTV — updated hourly', tags: ['SaaS', 'Finance'] },
  { title: 'Marketing Attribution', desc: 'Channel performance, CAC by source, first-touch vs. last-touch', tags: ['Marketing', 'Growth'] },
  { title: 'Operations KPIs', desc: 'Ticket volume, SLA compliance, team utilization, escalation rate', tags: ['Ops', 'Support'] },
];

const caseStudies = [
  {
    label: 'Series B SaaS',
    problem: 'Board asked for ARR, NRR, cohort data, and CAC payback. Team was pulling everything from 4 spreadsheets the night before every board meeting.',
    built: 'Unified data pipeline from Stripe + HubSpot + Intercom → automated weekly KPI report + live board dashboard.',
    result: '12 hours of manual reporting eliminated per week. Board prep went from 1 day to 30 minutes.',
    time: '3 weeks to live',
  },
  {
    label: 'Post-Acquisition SMB',
    problem: 'Two companies merged. Two CRMs, two billing systems, two reporting cadences. Investors wanted one dashboard.',
    built: 'Single consolidated data layer bridging both systems. Automated reconciliation report for finance.',
    result: 'First unified board report delivered within 18 days of engagement start. $0 new tooling cost.',
    time: '18 days to live',
  },
];

const ProofSection = () => (
  <section id="proof" className="py-12 md:py-20 lg:py-28">
    <div className="container mx-auto px-4 md:px-6">

      {/* Dashboard previews */}
      <div className="text-center mb-8 md:mb-10">
        <Badge variant="outline" className="mb-4">Sample Builds</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-3">
          This is what we deliver.
        </h2>
        <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
          Live, auto-updating dashboards built on your actual data. Here's what clients get on day one.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-14 md:mb-20">
        {dashboards.map((d) => (
          <Card key={d.title} className="overflow-hidden">
            {/* Placeholder dashboard visual */}
            <div className="h-36 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-b relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-4 gap-px p-3 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="rounded bg-primary" style={{ height: `${20 + (i % 5) * 12}px`, alignSelf: 'flex-end' }} />
                ))}
              </div>
              <TrendingUp className="h-8 w-8 text-primary/60 relative z-10" />
            </div>
            <CardHeader className="pb-2">
              <div className="flex gap-2 mb-1">
                {d.tags.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
              </div>
              <CardTitle className="text-base">{d.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Case studies */}
      <div className="mb-8 md:mb-10">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">Case Studies</Badge>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Real problems. Real results.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <Card key={cs.label}>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-1">{cs.label}</Badge>
                <CardTitle className="text-base">The Problem</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{cs.problem}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">What We Built</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.built}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 border-l-2 border-l-green-500">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Result</p>
                  <p className="text-sm font-medium">{cs.result}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cs.time}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button asChild>
          <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
            See what we'd build for you <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

    </div>
  </section>
);

export default ProofSection;
