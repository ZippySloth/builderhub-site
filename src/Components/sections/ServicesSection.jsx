import React from 'react';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';

const tiers = [
  {
    badge: 'Starter',
    name: 'Data Cleanup + Dashboard',
    timeline: '1–2 weeks',
    price: 'from $750',
    priceNote: 'one-time',
    forWho: 'For teams that have data scattered everywhere and need one place to see what\'s happening.',
    deliverables: [
      '1 consolidated dashboard (sales, ops, or finance)',
      '1 automated weekly report delivered to your inbox',
      'Tracking fix list — what\'s broken and how to fix it',
      '30-day support window',
    ],
    cta: 'Start with an Audit',
    popular: false,
  },
  {
    badge: 'Growth',
    name: 'Managed Reporting + Insights',
    timeline: 'Monthly',
    price: '$1,500–$2,500',
    priceNote: '/month',
    forWho: 'For companies that need ongoing data ownership — weekly insights, KPI tracking, and automation — without a full-time hire.',
    deliverables: [
      'Weekly KPI insights delivered every Monday',
      'Automated Slack/email alerts when metrics move',
      'Dashboard maintenance & new reports as needed',
      'Monthly 30-min strategy call',
    ],
    cta: 'Book a Free Audit',
    popular: true,
  },
  {
    badge: 'Scale',
    name: 'Fractional Data Team',
    timeline: 'Monthly',
    price: '$2,500–$3,500',
    priceNote: '/month',
    forWho: 'For companies scaling into Series B+ territory — full data stack, modeling, attribution, governance, and stakeholder reporting.',
    deliverables: [
      'Full data pipeline — ingestion, transformation, dashboards',
      'Revenue attribution and marketing mix modeling',
      'Stakeholder-ready reporting cadence',
      'AI agents for automated monitoring and alerts',
    ],
    cta: 'Talk to Us',
    popular: false,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-12 md:py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">

      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <Badge variant="outline" className="mb-4">Services</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Pick the engagement that fits.
        </h2>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Not sure which tier you need? Book a 15-min audit — we'll tell you exactly what you need and what it'll cost.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {tiers.map((tier) => (
          <Card key={tier.badge} className={`flex flex-col ${tier.popular ? 'border-primary ring-1 ring-primary/20' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant={tier.popular ? 'default' : 'secondary'}>{tier.badge}</Badge>
                {tier.popular && <Badge variant="outline" className="text-xs">Most Popular</Badge>}
              </div>
              <CardTitle className="text-xl">{tier.name}</CardTitle>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground text-sm">{tier.priceNote}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{tier.timeline}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{tier.forWho}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">What you get</p>
              <ul className="space-y-2">
                {tier.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto pt-4">
              <Button className="w-full" variant={tier.popular ? 'default' : 'outline'} asChild>
                <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                  {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        All engagements start with a <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">free 15-min audit</a>. If there's no clear ROI path, we'll tell you not to hire us.
      </p>

    </div>
  </section>
);

export default ServicesSection;
