import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent } from '@/Components/ui/card';
import { ArrowDown } from 'lucide-react';

const layers = [
  {
    label: 'Your Data Sources',
    desc: 'CRM · Billing · Support · Ops · Spreadsheets',
    note: 'You own this',
    variant: 'outline',
  },
  {
    label: 'Ingestion Layer',
    desc: 'We connect all your sources and move data on a schedule — no manual exports',
    note: 'Managed by us',
    variant: 'secondary',
  },
  {
    label: 'Transformation Models',
    desc: 'Raw data becomes clean, business-ready metrics. Revenue, churn, LTV — defined once, consistently',
    note: 'BuilderHub IP',
    variant: 'default',
  },
  {
    label: 'Live Dashboards',
    desc: 'Auto-updating dashboards your team actually uses. Always accurate, no manual work',
    note: 'Hosted by us',
    variant: 'default',
  },
  {
    label: 'You',
    desc: 'Log in. See your numbers. Make decisions.',
    note: null,
    variant: 'outline',
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 md:py-28 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — copy */}
        <div>
          <Badge variant="outline" className="mb-4">The Architecture</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            You own your data.<br />We run the intelligence.
          </h2>
          <p className="text-muted-foreground md:text-lg mb-6">
            Every layer above your raw data — transformation models, metric definitions, dashboards — lives on our infrastructure. You get the outputs. We handle the engine.
          </p>
          <Card>
            <CardContent className="pt-4 pb-4">
              <p className="text-sm font-medium mb-1">What happens if you cancel?</p>
              <p className="text-sm text-muted-foreground">
                You keep your raw data — it's always yours. But the transformation models stop running and dashboards go dark. Rebuilding that layer typically requires a $120–180k engineering hire and 3–6 months. Most clients stay because the math is obvious.
              </p>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mt-4">
            No data warehouse? We set one up. Zero existing infrastructure required.
          </p>
        </div>

        {/* Right — layer diagram */}
        <div className="flex flex-col items-center gap-2 w-full max-w-sm mx-auto">
          {layers.map((layer, i) => (
            <React.Fragment key={i}>
              <Card className={`w-full ${layer.variant === 'default' ? 'border-primary/40 bg-primary/5' : ''}`}>
                <CardContent className="py-3 px-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm">{layer.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{layer.desc}</p>
                    </div>
                    {layer.note && (
                      <Badge
                        variant={layer.variant === 'default' ? 'default' : 'secondary'}
                        className="text-xs shrink-0 whitespace-nowrap"
                      >
                        {layer.note}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
              {i < layers.length - 1 && (
                <ArrowDown className="h-4 w-4 text-muted-foreground shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default HowItWorksSection;
