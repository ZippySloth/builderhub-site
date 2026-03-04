import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent } from '@/Components/ui/card';
import { ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  { n: '01', title: 'Audit', time: '15 minutes', desc: 'We look at your current tools, data, and reporting gaps. You leave with a priority list — no obligation.' },
  { n: '02', title: 'Build', time: '1–3 weeks', desc: 'We connect your sources, build the transformation layer, and deliver your first live dashboard.' },
  { n: '03', title: 'Weekly Cadence', time: 'Ongoing', desc: 'Automated reports hit your inbox every week. Dashboards update hourly. We handle maintenance.' },
];

const layers = [
  { label: 'Your Data Sources', desc: 'Stripe · HubSpot · QuickBooks · GA4 · Spreadsheets', note: 'You own this', highlight: false },
  { label: 'Ingestion Layer', desc: 'Automated syncs on a schedule — no manual exports, ever', note: 'We manage', highlight: false },
  { label: 'Transformation Models', desc: 'Raw data → clean metrics: revenue, churn, LTV, attribution', note: 'BuilderHub IP', highlight: true },
  { label: 'Live Dashboards + Reports', desc: 'Auto-updating. Shareable. Always accurate.', note: 'We host & maintain', highlight: true },
  { label: 'Your Team', desc: 'Log in. See your numbers. Make decisions.', note: null, highlight: false },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-12 md:py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">

      {/* 3-step strip */}
      <div className="text-center mb-10 md:mb-14">
        <Badge variant="outline" className="mb-4">How It Works</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-3">
          From audit to live in weeks.
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-14 md:mb-20">
        {steps.map((s, i) => (
          <div key={s.n} className="flex flex-col items-start gap-3 relative">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                {s.n}
              </div>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.time}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden sm:block absolute -right-3 top-4 h-5 w-5 text-muted-foreground/40" />
            )}
          </div>
        ))}
      </div>

      {/* Architecture diagram */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h3 className="text-xl font-bold mb-3">You own your data. We run the intelligence.</h3>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Every layer above your raw data — transformation models, metric definitions, dashboards — lives on our infrastructure. You get the outputs. We handle the engine.
          </p>
          <Card>
            <CardContent className="pt-4 pb-4">
              <p className="text-sm font-medium mb-1">What happens if you cancel?</p>
              <p className="text-sm text-muted-foreground">
                You keep your raw data — always. But the transformation layer stops running. Rebuilding from scratch typically costs $120–180k and 3–6 months. Most clients stay because the math is obvious.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center gap-2 w-full max-w-sm mx-auto">
          {layers.map((layer, i) => (
            <React.Fragment key={i}>
              <Card className={`w-full ${layer.highlight ? 'border-primary/40 bg-primary/5' : ''}`}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm">{layer.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{layer.desc}</p>
                    </div>
                    {layer.note && (
                      <Badge variant={layer.highlight ? 'default' : 'secondary'} className="text-xs shrink-0 whitespace-nowrap">
                        {layer.note}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
              {i < layers.length - 1 && <ArrowDown className="h-4 w-4 text-muted-foreground shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default HowItWorksSection;
