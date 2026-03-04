import React from 'react';
import { ArrowDown, AlertTriangle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const steps = [
  {
    title: 'Your Data Sources',
    note: 'Stripe · HubSpot · QuickBooks · Postgres · Sheets',
    borderClass: 'border-green-500/30',
    badge: null,
  },
  {
    title: 'Raw Data — Bronze Layer',
    note: 'Lives in your warehouse. You own it. Always.',
    borderClass: 'border-blue-500/30',
    badge: { text: '✓ You own this', className: 'bg-green-500/10 text-green-400' },
  },
  {
    title: 'Transformation Models — Silver & Gold',
    note: 'Business logic, metric definitions, KPI calculations',
    borderClass: 'border-primary/40 glow-blue',
    badge: { text: 'BuilderHub IP', className: 'bg-primary/10 text-primary' },
  },
  {
    title: 'Live Dashboards',
    note: 'Auto-updating. Shareable. Always accurate.',
    borderClass: 'border-primary/40 glow-blue',
    badge: { text: 'Hosted by BuilderHub', className: 'bg-primary/10 text-primary' },
  },
  {
    title: 'You',
    note: 'Log in. See your numbers. Make decisions.',
    borderClass: 'border-accent/40',
    badge: null,
  },
];

const ArchitectureSection = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="how-it-works" className="py-20 md:py-28 lg:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
              The Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              You own your data. We run the intelligence.
            </h2>
          </div>

          {/* Flow diagram */}
          <div className="max-w-2xl mx-auto space-y-0">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div
                  className={`relative bg-card border ${step.borderClass} rounded-xl p-6 transition-all duration-300`}
                >
                  {step.badge && (
                    <span
                      className={`absolute -top-3 right-4 text-xs font-medium px-3 py-1 rounded-full ${step.badge.className}`}
                    >
                      {step.badge.text}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.note}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <ArrowDown className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-10">
            Don't have a data warehouse? We set one up for you. Zero existing infrastructure required.
          </p>

          {/* Warning callout */}
          <div className="max-w-2xl mx-auto mt-8 bg-destructive/5 border border-destructive/20 rounded-xl p-6 flex gap-4 items-start">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">If you cancel:</span> you keep your raw data.
              The models and dashboards stop running. Rebuilding from scratch = 3-6 months + a $120-180k hire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
