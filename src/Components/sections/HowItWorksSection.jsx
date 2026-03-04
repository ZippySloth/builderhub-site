import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent } from '@/Components/ui/card';
import { ArrowDown } from 'lucide-react';

const steps = [
  { n: '1', title: 'Audit', time: '15 min call', desc: 'We look at your tools and data. You leave with a priority list.' },
  { n: '2', title: 'Build', time: '3–6 weeks', desc: 'We connect sources, build models, deliver dashboards.' },
  { n: '3', title: 'Run', time: 'Ongoing', desc: 'We maintain everything. Reports arrive automatically.' },
];

const layers = [
  { label: 'Your Data Sources', note: 'You own', desc: 'Stripe · HubSpot · QuickBooks · GA4', hl: false },
  { label: 'Ingestion', note: 'We manage', desc: 'Automated syncs — no exports', hl: false },
  { label: 'Transformation', note: 'Our IP', desc: 'Raw → clean metrics', hl: true },
  { label: 'Dashboards', note: 'We host', desc: 'Live. Auto-updated.', hl: true },
  { label: 'You', note: null, desc: 'Log in. Decide.', hl: false },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-14 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">

      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-3">Process</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Audit → Build → Run</h2>
      </div>

      {/* 3 steps */}
      <div className="grid sm:grid-cols-3 gap-6 mb-14">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">{s.n}</div>
            <div>
              <p className="font-semibold">{s.title} <span className="font-normal text-xs text-muted-foreground">· {s.time}</span></p>
              <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-bold mb-2">You own your data. We run the stack.</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Everything above raw data — models, metrics, dashboards — lives on our infrastructure. You get the outputs. We handle the engine.
          </p>
          <Card>
            <CardContent className="pt-4 pb-4">
              <p className="text-sm font-medium mb-1">What if you cancel?</p>
              <p className="text-sm text-muted-foreground">
                Raw data is yours. Models stop running. Rebuilding costs $120–180k and 6 months. Most stay.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-1.5 max-w-xs mx-auto w-full">
          {layers.map((l, i) => (
            <React.Fragment key={i}>
              <Card className={`w-full ${l.hl ? 'border-primary/50 bg-primary/5' : ''}`}>
                <CardContent className="py-2.5 px-3 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-medium text-sm">{l.label}</p>
                    <p className="text-xs text-muted-foreground truncate">{l.desc}</p>
                  </div>
                  {l.note && <Badge variant={l.hl ? 'default' : 'secondary'} className="text-[10px] shrink-0">{l.note}</Badge>}
                </CardContent>
              </Card>
              {i < layers.length - 1 && <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default HowItWorksSection;
