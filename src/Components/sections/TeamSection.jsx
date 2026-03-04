import React from 'react';
import { Badge } from '@/Components/ui/badge';

const points = [
  { title: 'Finance background', desc: 'M&A, equity research, SaaS metrics. We know what boards ask for.' },
  { title: 'Technical depth', desc: 'Production-grade infrastructure, not spreadsheet workarounds.' },
  { title: 'Operator mindset', desc: "We've worked inside high-growth companies. We know what actually gets used." },
  { title: 'Managed model', desc: "We don't disappear after the build. We run it." },
];

const TeamSection = () => (
  <section id="about" className="py-14 md:py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <Badge variant="outline" className="mb-3">Team</Badge>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
            Operators, not just engineers.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We've seen the same problem everywhere: good companies, drowning in spreadsheets, making decisions on data nobody trusts. We fix that.
          </p>
        </div>
        <div className="grid gap-3">
          {points.map((p) => (
            <div key={p.title} className="border-l-2 border-primary pl-4 py-1">
              <p className="font-medium text-sm">{p.title}</p>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
