import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';

const auditIncludes = [
  'Full data source inventory',
  'Gap analysis & friction map',
  'Data maturity score (1–5)',
  'Prioritized build roadmap',
  'Written report + walkthrough call',
];

const buildIncludes = [
  '2–5 data source connections',
  'Full transformation model layer',
  '4–6 live, auto-updating dashboards',
  'Documentation & training call',
  '30-day support window',
];

const retainerTiers = [
  {
    name: 'Core',
    price: '$1,500',
    description: 'Model hosting + maintenance + 1 new report/month',
    features: [
      'Transformation model hosting',
      'Maintenance & bug fixes',
      '1 new report or dashboard/mo',
      'Email support (<24h)',
    ],
  },
  {
    name: 'Growth',
    price: '$2,500',
    popular: true,
    description: 'Everything in Core plus more reports and a monthly strategy call',
    features: [
      'Everything in Core',
      '2 new reports/mo',
      'Monthly 30-min analytics call',
      'Slack access',
    ],
  },
  {
    name: 'Command',
    price: '$3,500',
    description: 'Full managed analytics team — ad hoc requests, priority access.',
    features: [
      'Everything in Growth',
      'Unlimited ad hoc data pulls',
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

      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <Badge variant="outline" className="mb-4">The Process</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          One system. Three steps.
        </h2>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Start with a low-risk audit. Build the full stack. Then let us run it.
        </p>
      </div>

      {/* Step 1 + Step 2 */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">

        {/* Audit */}
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Badge>Step 01</Badge>
              <Badge variant="secondary">Low Risk Entry</Badge>
            </div>
            <CardTitle className="text-xl mt-2">The Data Audit</CardTitle>
            <CardDescription>
              We dig into your current stack — what's connected, what's broken. You get a full gap analysis and prioritized roadmap. Valuable whether you hire us or not.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <FeatureList items={auditIncludes} />
            <p className="text-xs text-muted-foreground mt-4 italic">
              Fee credited toward the build if you proceed within 30 days.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between mt-auto pt-4">
            <div>
              <span className="text-2xl font-bold">$750</span>
              <span className="text-muted-foreground text-sm"> – $1,500</span>
            </div>
            <span className="text-sm text-muted-foreground">3–5 days</span>
          </CardFooter>
        </Card>

        {/* Build */}
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Badge>Step 02</Badge>
              <Badge variant="secondary">3–6 Weeks</Badge>
            </div>
            <CardTitle className="text-xl mt-2">The Foundation Build</CardTitle>
            <CardDescription>
              We connect your data sources, build the transformation layer, and deliver live dashboards. No more manual updates. No more "the numbers don't match."
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <FeatureList items={buildIncludes} />
          </CardContent>
          <CardFooter className="flex items-center justify-between mt-auto pt-4">
            <div>
              <span className="text-2xl font-bold">$5,000</span>
              <span className="text-muted-foreground text-sm"> – $15,000</span>
            </div>
            <span className="text-sm text-muted-foreground">Scope-dependent</span>
          </CardFooter>
        </Card>
      </div>

      {/* Step 3 — Retainer */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge>Step 03</Badge>
          <h3 className="text-lg font-semibold">The Managed Retainer — Always Running. Always Evolving.</h3>
        </div>

        <Tabs defaultValue="growth">
          <TabsList className="w-full sm:w-auto mb-6">
            <TabsTrigger value="core" className="flex-1 sm:flex-none">Core</TabsTrigger>
            <TabsTrigger value="growth" className="flex-1 sm:flex-none">Growth</TabsTrigger>
            <TabsTrigger value="command" className="flex-1 sm:flex-none">Command</TabsTrigger>
          </TabsList>

          {retainerTiers.map((tier) => (
            <TabsContent key={tier.name} value={tier.name.toLowerCase()}>
              <Card>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <CardTitle>{tier.name}</CardTitle>
                    {tier.popular && <Badge>Most Popular</Badge>}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <FeatureList items={tier.features} />
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full sm:w-auto">
                    <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                      Start with an Audit <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Agents add-on */}
      <Card className="border-dashed">
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-1">Add-On or Standalone</Badge>
          <CardTitle>AI Agents — Alerts, Reports & Automation</CardTitle>
          <CardDescription>
            Agents that monitor your data, fire alerts when metrics move, generate scheduled reports, and answer plain-language questions about your numbers. Hosted and maintained by us.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-1">Implementation</p>
              <p className="text-muted-foreground">$1,000 – $5,000 one-time</p>
            </div>
            <div>
              <p className="font-medium mb-1">Monthly Maintenance</p>
              <p className="text-muted-foreground">$500 – $3,500/mo</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  </section>
);

export default ServicesSection;
