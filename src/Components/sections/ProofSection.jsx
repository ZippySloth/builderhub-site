import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent } from '@/Components/ui/card';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/Components/ui/button';

const dashboards = [
  { title: 'Revenue Dashboard', desc: 'MRR, churn, expansion, cohort LTV' },
  { title: 'Marketing Attribution', desc: 'CAC by channel, first-touch vs last-touch' },
  { title: 'Operations KPIs', desc: 'Ticket volume, SLA, utilization' },
];

const cases = [
  {
    type: 'Series B SaaS',
    problem: 'Board wanted ARR, NRR, and cohorts. Team spent 2 days before every meeting pulling from 4 spreadsheets.',
    result: 'Board prep: 2 days → 30 minutes. 12 hours/week saved.',
    time: '3 weeks',
  },
  {
    type: 'Post-Acquisition',
    problem: 'Two companies merged. Two CRMs, two billing systems. Investors wanted one dashboard.',
    result: 'First unified report delivered in 18 days. $0 new tooling.',
    time: '18 days',
  },
];

const ProofSection = () => (
  <section id="proof" className="py-14 md:py-24">
    <div className="container mx-auto px-4 md:px-6">

      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-3">Results</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What we deliver.</h2>
      </div>

      {/* Dashboard previews */}
      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        {dashboards.map((d) => (
          <Card key={d.title} className="overflow-hidden">
            <div className="h-28 bg-gradient-to-br from-muted to-muted/40 flex items-center justify-center border-b">
              <TrendingUp className="h-6 w-6 text-primary/50" />
            </div>
            <CardContent className="pt-3 pb-3">
              <p className="font-semibold text-sm">{d.title}</p>
              <p className="text-xs text-muted-foreground">{d.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Case studies */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4 text-center">Case Studies</p>
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <Card key={c.type}>
              <CardContent className="pt-5 pb-5 space-y-3">
                <Badge variant="secondary">{c.type}</Badge>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Problem</p>
                  <p className="text-sm">{c.problem}</p>
                </div>
                <div className="rounded bg-green-500/10 border-l-2 border-green-500 p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Result</p>
                  <p className="text-sm font-medium">{c.result}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.time} to live</p>
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
