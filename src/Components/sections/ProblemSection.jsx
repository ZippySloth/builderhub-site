import React from 'react';
import { Database, Clock, AlertTriangle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const problems = [
  {
    icon: Database,
    title: 'Data Everywhere, Answers Nowhere',
    body: "Your numbers live in 5+ tools that don't talk to each other. CRM says one thing. Billing says another. Nobody knows which one to trust.",
  },
  {
    icon: Clock,
    title: 'Manual Reporting Eating Your Week',
    body: 'Someone on your team spends hours every week copy-pasting numbers into spreadsheets that should update themselves.',
  },
  {
    icon: AlertTriangle,
    title: 'Flying Blind on Decisions',
    body: 'When your board asks for ARR, NRR, or churn, you spend two days pulling numbers instead of two minutes reading a dashboard.',
  },
];

const ProblemSection = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="problem" className="py-20 md:py-28 lg:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sound familiar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most growth companies have data. Almost none of them can actually use it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 glow-blue-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
