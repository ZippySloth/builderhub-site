import React from 'react';
import { useReveal } from '../../hooks/useReveal';

const personas = [
  {
    emoji: '🔄',
    title: 'Post-Acquisition',
    body: 'Just acquired a business? Two data systems, mismatched metrics, investors want one dashboard. We unify everything in weeks.',
  },
  {
    emoji: '📈',
    title: 'Series B SaaS',
    body: "Your board is asking for ARR, NRR, and cohort data. You're still pulling it from spreadsheets. We automate the board deck.",
  },
  {
    emoji: '👤',
    title: 'Hiring Your First Data Person',
    body: 'About to spend $150k on a hire. BuilderHub runs the full stack for $18k/year — with results in 3 weeks, not 6 months.',
  },
  {
    emoji: '🎯',
    title: 'New Finance or Ops Leader',
    body: "Just started and inherited broken reporting. We map what's there, fix what's broken, and build what's missing.",
  },
];

const WhoItsForSection = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="who" className="py-20 md:py-28 lg:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Built for companies that have data but no answers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personas.map((p, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 glow-blue-hover transition-all duration-300"
              >
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
