import React from 'react';
import { Check } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const tiers = [
  {
    name: 'Core',
    price: '$1,500',
    desc: 'Model hosting + maintenance + 1 report/mo',
    badge: null,
  },
  {
    name: 'Growth',
    price: '$2,500',
    desc: '+ 2 reports/mo + monthly call',
    badge: 'Most Popular',
  },
  {
    name: 'Command',
    price: '$3,500',
    desc: '+ ad hoc pulls + priority Slack',
    badge: null,
  },
];

const HowItWorksSection = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="services" className="py-20 md:py-28 lg:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              One system. Three steps.
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {/* Step 01 */}
            <div className="bg-card border border-border rounded-xl p-8 glow-blue-hover transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-primary font-bold text-sm tracking-wider">STEP 01</span>
                <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                  Low Risk Entry
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                The Audit{' '}
                <span className="text-muted-foreground font-normal text-lg">
                  $750–$1,500 · 3-5 days
                </span>
              </h3>
              <p className="text-muted-foreground mb-4 max-w-3xl">
                We dig into your current data stack — what tools you use, what's connected, what's broken, what's missing. You get a full gap analysis and a prioritized roadmap of exactly what to fix. Whether you work with us to build anything or not.
              </p>
              <p className="text-sm text-primary font-medium mb-2">
                If we can't find $10,000 of fixable problems in your data stack, we'll refund the audit fee.
              </p>
              <p className="text-sm text-primary italic">
                Credited toward the build if you proceed.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-card border border-border rounded-xl p-8 glow-blue-hover transition-all duration-300">
              <div className="mb-4">
                <span className="text-primary font-bold text-sm tracking-wider">STEP 02</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                The Build{' '}
                <span className="text-muted-foreground font-normal text-lg">
                  $5,000–$15,000 · 3-6 weeks
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                We connect your data sources, build the transformation models, and put live auto-updating dashboards on top. No more manual updates. No more "the numbers don't match."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  '2-5 data source connections',
                  'Full data model layer (staging → marts)',
                  '4-6 live dashboards',
                  'Documentation + training',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-card border border-border rounded-xl p-8 glow-blue-hover transition-all duration-300">
              <div className="mb-4">
                <span className="text-primary font-bold text-sm tracking-wider">STEP 03</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                The Retainer{' '}
                <span className="text-muted-foreground font-normal text-lg">monthly</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                We host and maintain everything. Models, dashboards, metrics — all running, all evolving as your business grows.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tiers.map((tier, i) => (
                  <div
                    key={i}
                    className={`relative bg-secondary/50 border rounded-xl p-5 ${
                      tier.badge
                        ? 'border-primary/50 glow-blue'
                        : 'border-border'
                    }`}
                  >
                    {tier.badge && (
                      <span className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {tier.badge}
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-foreground">{tier.name}</h4>
                    <div className="text-2xl font-bold text-primary mt-1">
                      {tier.price}
                      <span className="text-sm text-muted-foreground font-normal">/mo</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
