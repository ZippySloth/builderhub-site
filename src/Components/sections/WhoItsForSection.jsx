import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';

const personas = [
  {
    num: '01',
    title: 'Post-Acquisition Companies',
    desc: 'Two data systems, mismatched metrics, investors want one dashboard. We unify everything in weeks — before the first board meeting.',
  },
  {
    num: '02',
    title: 'Series B SaaS Companies',
    desc: "Board is asking for ARR, NRR, cohort data, and CAC payback. You're still pulling it from spreadsheets. We automate the whole thing.",
  },
  {
    num: '03',
    title: 'Companies Considering a Data Hire',
    desc: 'About to spend $150k+ on a hire who needs 3-6 months to ramp. We deliver the same output in 3-6 weeks for a fraction of the cost.',
  },
  {
    num: '04',
    title: 'New Finance or Operations Leaders',
    desc: "Just started and inherited broken reporting. We map what's there, fix what's broken, and build what's missing — fast.",
  },
];

const WhoItsForSection = () => (
  <section id="who" className="py-20 md:py-28 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">Who We Serve</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Built for companies with data and no answers.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {personas.map((p) => (
          <Card key={p.num} className="relative overflow-hidden">
            <span className="absolute top-4 right-4 text-5xl font-black text-muted/20 leading-none select-none">{p.num}</span>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription className="text-base">{p.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsForSection;
