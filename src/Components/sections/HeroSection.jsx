import React, { useEffect, useState } from 'react';
import { useReveal } from '../../hooks/useReveal';

const terminalLines = [
  { text: '$ dbt run --select staging.*', delay: 0 },
  { text: 'Running 12 models...', delay: 600 },
  { text: '✓ stg_stripe__charges', delay: 1200 },
  { text: '✓ stg_hubspot__contacts', delay: 1600 },
  { text: '✓ stg_quickbooks__invoices', delay: 2000 },
  { text: '✓ int_revenue_by_customer', delay: 2400 },
  { text: '✓ fct_mrr_waterfall', delay: 2800 },
  { text: '12 of 12 passed ✓', delay: 3400 },
  { text: '', delay: 3600 },
  { text: 'Dashboard updated — 14s ago', delay: 4000 },
];

const TerminalMock = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl glow-blue">
      {/* Traffic light dots */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-muted-foreground">terminal — dbt</span>
      </div>
      {/* Terminal content */}
      <div className="terminal p-4 min-h-[280px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`${
              line.text.startsWith('✓')
                ? 'text-green-400'
                : line.text.startsWith('$')
                ? 'text-primary'
                : line.text.includes('passed')
                ? 'text-green-400 font-bold'
                : line.text.includes('Dashboard')
                ? 'text-accent'
                : 'text-muted-foreground'
            }`}
          >
            {line.text}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-blink" />
        )}
      </div>
    </div>
  );
};

const metrics = [
  { value: '95%+', label: 'gross margin', sub: 'Retainer margins' },
  { value: '$150k+/yr', label: 'saved', sub: 'vs. in-house hire' },
  { value: '3-6 weeks', label: '', sub: 'To working dashboards' },
];

const HeroSection = () => {
  const [ref, visible] = useReveal(0.1);

  return (
    <section className="relative min-h-screen grid-bg flex flex-col justify-center pt-20">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your data is everywhere.
                <br />
                <span className="gradient-text">Your answers are nowhere.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                BuilderHub builds the pipelines, models, and dashboards that turn your scattered data into one source of truth.
              </p>
              <p className="text-sm text-primary font-medium italic">
                You own your raw data. We run the intelligence on top of it.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://calendly.com/fazio/audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Get a Free Data Diagnosis →
                </a>
                <a
                  href="#services"
                  className="btn-secondary inline-block"
                >
                  See how it works ↓
                </a>
              </div>
              <p className="text-xs text-muted-foreground">No obligation · 20 minutes · We'll tell you what's broken</p>
            </div>

            {/* Right: terminal on desktop, stats on mobile */}
            <div className="lg:hidden">
              {/* Mobile: clean results card */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">What clients gain</p>
                {[
                  { metric: '10–20 hrs/week', label: 'saved on manual reporting' },
                  { metric: '3–6 weeks', label: 'to working dashboards' },
                  { metric: '$150k+/yr', label: 'saved vs. in-house hire' },
                  { metric: '1 source of truth', label: 'across all data tools' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <span className="text-foreground font-semibold">{item.metric}</span>
                      <span className="text-muted-foreground text-sm"> — {item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <TerminalMock />
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 lg:mt-20">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 text-center glow-blue-hover transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {m.value} {m.label && <span className="text-foreground">{m.label}</span>}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
