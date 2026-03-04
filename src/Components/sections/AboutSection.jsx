import React from 'react';
import { useReveal } from '../../hooks/useReveal';

const strengths = [
  {
    title: 'Finance Fluency',
    desc: 'We think in unit economics, cohorts, and board metrics — not just queries. We build what actually matters to your business.',
  },
  {
    title: 'Engineering Depth',
    desc: 'Production-grade data pipelines, not spreadsheet workarounds. Infrastructure built to scale with your business.',
  },
  {
    title: 'SaaS Insider Experience',
    desc: "Our team has worked inside high-growth SaaS companies. We've seen what works at scale — and we bring that to you.",
  },
  {
    title: 'Managed Service Model',
    desc: "We don't drop a project and disappear. We run your data infrastructure long-term — maintaining, evolving, and improving it month over month.",
  },
];

const AboutSection = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The team behind BuilderHub
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We're a team of analysts, engineers, and operators with backgrounds across SaaS M&A, equity research, and data infrastructure at high-growth technology companies.
                </p>
                <p>
                  We started BuilderHub because we kept seeing the same problem: companies with great products, drowning in spreadsheets, making decisions on data nobody trusted. We fix that.
                </p>
                <p>
                  No fluff. No slide decks. Just a data layer that works — and a team that keeps it running.
                </p>
              </div>
            </div>

            {/* Right — Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <div
                  key={i}
                  className="bg-card border-l-2 border-l-primary border border-border rounded-xl p-5"
                >
                  <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
