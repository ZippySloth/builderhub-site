import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';

const Li = ({ children }) => (
  <li className="flex items-start gap-2 text-sm">
    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const ServicesSection = () => (
  <section id="services" className="py-14 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">

      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-3">Pricing</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Audit. Build. Run.
        </h2>
        <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
          Start small or go all-in. Every engagement begins with a call.
        </p>
      </div>

      {/* ─── AUDIT ─── */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">01</span>
          <h3 className="font-semibold">Data Audit</h3>
          <span className="text-xs text-muted-foreground">3–5 days</span>
        </div>
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <CardTitle className="text-lg">Find out what's broken and what it's costing you.</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Full gap analysis. Prioritized roadmap. Valuable whether you hire us or not.</p>
            </div>
            <div className="sm:text-right shrink-0">
              <div className="text-2xl font-bold">$750<span className="text-base font-normal text-muted-foreground"> – $1,500</span></div>
              <p className="text-xs text-muted-foreground">credited toward build</p>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              <Li>Data source inventory</Li>
              <Li>Gap analysis with dollar impact</Li>
              <Li>Data maturity score</Li>
              <Li>Prioritized fix list</Li>
              <Li>Written report + walkthrough</Li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                Book audit call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* ─── BUILD ─── */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">02</span>
          <h3 className="font-semibold">Foundation Build</h3>
          <span className="text-xs text-muted-foreground">3–6 weeks</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          {[
            { name: 'Starter', price: '$5,000', range: '–$8,000', desc: '2–3 sources. 3–4 dashboards. Core metrics.' },
            { name: 'Growth', price: '$8,000', range: '–$12,000', desc: '4–6 sources. 5–7 dashboards. Attribution + cohorts.', pop: true },
            { name: 'Scale', price: '$12,000', range: '–$15,000', desc: 'Complex environments. AI agents. Full governance.' },
          ].map((t) => (
            <Card key={t.name} className={t.pop ? 'border-primary' : ''}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant={t.pop ? 'default' : 'secondary'}>{t.name}</Badge>
                  {t.pop && <Badge variant="outline" className="text-[10px]">Common</Badge>}
                </div>
                <div className="text-xl font-bold mt-2">{t.price}<span className="text-sm font-normal text-muted-foreground">{t.range}</span></div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/40">
          <CardContent className="pt-4 pb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Every build includes</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              <Li>All data source connections</Li>
              <Li>Transformation model layer</Li>
              <Li>Live auto-updating dashboards</Li>
              <Li>Documentation + onboarding</Li>
              <Li>30-day support</Li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* ─── RETAINER ─── */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">03</span>
          <h3 className="font-semibold">Managed Retainer</h3>
          <span className="text-xs text-muted-foreground">Monthly</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              name: 'Core', price: '$1,500', sub: '/mo',
              items: ['Model hosting + maintenance', 'Bug fixes & data updates', '1 new report/month', 'Email support (<24h)'],
            },
            {
              name: 'Growth', price: '$2,500', sub: '/mo', pop: true,
              items: ['Everything in Core', '2 new reports/month', 'Weekly KPI digest', 'Monthly strategy call', 'Slack access'],
            },
            {
              name: 'Command', price: '$3,500', sub: '/mo',
              items: ['Everything in Growth', 'Unlimited data pulls', 'AI agent monitoring', 'Priority Slack (<4h)', 'Quarterly roadmap'],
            },
          ].map((t) => (
            <Card key={t.name} className={`flex flex-col ${t.pop ? 'border-primary' : ''}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant={t.pop ? 'default' : 'secondary'}>{t.name}</Badge>
                  {t.pop && <Badge variant="outline" className="text-[10px]">Popular</Badge>}
                </div>
                <div className="text-xl font-bold mt-2">{t.price}<span className="text-sm font-normal text-muted-foreground">{t.sub}</span></div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-1.5">
                  {t.items.map((item, i) => <Li key={i}>{item}</Li>)}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-3">
                <Button variant={t.pop ? 'default' : 'outline'} className="w-full" asChild>
                  <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                    Start with audit <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* ─── AGENTS ADD-ON ─── */}
      <Card className="border-dashed">
        <CardContent className="pt-5 pb-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">AI Agents</p>
              <p className="text-sm text-muted-foreground">Alerts when metrics move. Scheduled reports. Natural language queries. Hosted by us.</p>
            </div>
          </div>
          <div className="text-sm text-right shrink-0">
            <p><span className="font-semibold">$1k–$5k</span> <span className="text-muted-foreground">setup</span></p>
            <p><span className="font-semibold">$500–$3.5k</span><span className="text-muted-foreground">/mo</span></p>
          </div>
        </CardContent>
      </Card>

    </div>
  </section>
);

export default ServicesSection;
