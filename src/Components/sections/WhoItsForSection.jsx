import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';

const personas = [
  {
    title: 'Post-Acquisition',
    desc: 'Two systems. Two sets of numbers. Investors want one dashboard before next board meeting.',
  },
  {
    title: 'Series B SaaS',
    desc: "Board wants ARR, NRR, cohorts, CAC payback. You're pulling it from spreadsheets the night before.",
  },
  {
    title: 'Evaluating a Data Hire',
    desc: '$150k salary. 6 months to ramp. Builds things only they understand. We deliver in 3 weeks.',
  },
  {
    title: 'New Finance/Ops Leader',
    desc: 'Inherited broken reporting. Three dashboards, none trusted. Need to fix it fast.',
  },
];

const WhoItsForSection = () => (
  <section id="who" className="py-14 md:py-24 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-3">Who This Is For</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sound familiar?</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {personas.map((p, i) => (
          <Card key={i} className="group hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{p.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsForSection;
