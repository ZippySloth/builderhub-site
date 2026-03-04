import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';

const personas = [
  {
    num: '01',
    title: 'Post-Acquisition Companies',
    desc: 'Two companies, two CRMs, two billing systems, two sets of numbers that never match. Investors want one dashboard before the next board meeting. We unify everything — fast.',
  },
  {
    num: '02',
    title: 'Series B SaaS Companies',
    desc: "Your board wants ARR, NRR, CAC payback, and cohort retention. You're still pulling it manually the night before. We automate the whole thing so board prep takes 30 minutes, not a day.",
  },
  {
    num: '03',
    title: 'Companies Evaluating a Data Hire',
    desc: "A senior data engineer costs $120–180k, takes 3–6 months to ramp, and builds things only they can maintain. We deliver the same output in 3–6 weeks, maintain it ourselves, and cost a fraction of the price.",
  },
  {
    num: '04',
    title: 'New Finance & Ops Leaders',
    desc: "You just joined and inherited broken reporting — three dashboards, none of them trusted, nobody knows which is right. We map what exists, fix what's wrong, and build what's missing. In weeks.",
  },
];

const WhoItsForSection = () => (
  <section id="who" className="py-12 md:py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-8 md:mb-12 lg:mb-14">
        <Badge variant="outline" className="mb-4">Who We Serve</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-3">
          You have data. You don't have answers.
        </h2>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          If any of these sound like your company right now, we should talk.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {personas.map((p) => (
          <Card key={p.num} className="relative overflow-hidden group hover:border-primary/40 transition-colors">
            <span className="absolute top-4 right-4 text-6xl font-black text-muted/15 leading-none select-none group-hover:text-primary/10 transition-colors">{p.num}</span>
            <CardHeader className="pr-16">
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription className="text-[0.9rem] leading-relaxed">{p.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsForSection;
