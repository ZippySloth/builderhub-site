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
    features: ['Transformation model hosting', 'Maintenance & bug fixes', '1 new report or dashboard/mo', 'Email support (<24h)'],
  },
  {
    name: 'Growth',
    price: '$2,500',
    popular: true,
    description: 'Everything in Core plus more reports and a monthly strategy call',
    features: ['Everything in Core', '2 new reports/mo', 'Monthly 30-min analytics call', 'Slack access'],
  },
  {
    name: 'Command',
    price: '$3,500',
    description: 'Full managed analytics team. Ad hoc requests, priority access.',
    features: ['Everything in Growth', 'Unlimited ad hoc data pulls', 'Priority Slack (<4h response)', 'Quarterly roadmap review'],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">The Process</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          One system. Three steps.
        </h2>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Start with a low-risk audit. Build the full stack. Then let us run it.
        </p>
      </div>

      {/* Step 1 + Step 2 */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Audit */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge>Step 01</Badge>
              <Badge variant="secondary">Low Risk Entry</Badge>
            </div>
            <CardTitle className="text-2xl mt-3">The Data Audit</CardTitle>
            <CardDescription className="text-base">
              We dig into your current stack — what tools you use, what's connected, what's broken. You get a full gap analysis and prioritized roadmap. Valuable whether you hire us to build or not.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {auditIncludes.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Fee credited toward the build if you proceed within 30 days.
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">$750</span>
              <span className="text-muted-foreground text-sm"> – $1,500</span>
            </div>
            <span className="text-sm text-muted-foreground">3–5 days</span>
          </CardFooter>
        </Card>

        {/* Build */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge>Step 02</Badge>
              <Badge variant="secondary">3–6 Weeks</Badge>
            </div>
            <CardTitle className="text-2xl mt-3">The Foundation Build</CardTitle>
            <CardDescription className="text-base">
              We connect your data sources, build the transformation layer, and deliver live dashboards. No more manual updates. No more "the numbers don't match."
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {buildIncludes.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">$5,000</span>
              <span className="text-muted-foreground text-sm"> – $15,000</span>
            </div>
            <span className="text-sm text-muted-foreground">Scope-dependent</span>
          </CardFooter>
        </Card>
      </div>

      {/* Step 3 — Retainer */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-6">
          <Badge>Step 03</Badge>
          <h3 className="text-xl font-semibold">The Managed Retainer — Always Running. Always Evolving.</h3>
        </div>
        <Tabs defaultValue="growth">
          <TabsList className="mb-6">
            <TabsTrigger value="core">Core</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
            <TabsTrigger value="command">Command</TabsTrigger>
          </TabsList>
          {retainerTiers.map((tier) => (
            <TabsContent key={tier.name} value={tier.name.toLowerCase()}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
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
                  <ul className="space-y-2">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
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
      <Card className="mt-8 border-dashed">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Add-On or Standalone</Badge>
          </div>
          <CardTitle>AI Agents — Alerts, Reports & Automation</CardTitle>
          <CardDescription>
            Agents that monitor your data, send alerts when metrics move, generate scheduled reports, and answer questions about your data in plain language. Deployed on your data stack and maintained by us.
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
              <p className="text-muted-foreground">$500 – $3,500/mo depending on complexity</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ServicesSection;
