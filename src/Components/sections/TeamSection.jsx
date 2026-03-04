import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';

const strengths = [
  { title: 'Finance Fluency', desc: "We think in unit economics, cohorts, and board metrics — not just data models. We build what matters to your business, not what's technically impressive." },
  { title: 'Engineering Depth', desc: 'Production-grade data infrastructure, not spreadsheet workarounds. Built to scale with your business.' },
  { title: 'SaaS Insider Knowledge', desc: "Our team has worked inside high-growth SaaS companies — in M&A, equity research, and finance automation. We've seen what good looks like at scale." },
  { title: 'Managed Service Model', desc: "We don't drop a project and disappear. We run your data infrastructure month over month — maintaining, evolving, and improving as your business grows." },
];

const TeamSection = () => (
  <section id="about" className="py-20 md:py-28 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <Badge variant="outline" className="mb-4">The Team</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
            Experienced operators. Not just data engineers.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We're a team of analysts, engineers, and operators with backgrounds across SaaS M&A, equity research, and data infrastructure at high-growth technology companies.
            </p>
            <p>
              We started BuilderHub because we kept seeing the same problem: companies with great products, drowning in spreadsheets, making decisions on data nobody trusted.
            </p>
            <p className="text-foreground font-medium">
              We fix that. No fluff. No decks. Just a data layer that works — and a team that keeps it running.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          {strengths.map((s) => (
            <Card key={s.title} className="border-l-2 border-l-primary rounded-l-none">
              <CardHeader className="py-4">
                <CardTitle className="text-base">{s.title}</CardTitle>
                <CardDescription>{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
