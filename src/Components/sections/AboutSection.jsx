import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const credentials = [
  { emoji: '🏦', title: 'SaaS M&A', desc: 'Due diligence, unit economics, 50+ companies analyzed' },
  { emoji: '📊', title: 'Hedge Fund Analyst', desc: 'Small-cap equity research, financial modeling' },
  { emoji: '⚙️', title: 'Finance Automation', desc: 'Series C SaaS · dbt · Python · Databricks' },
  { emoji: '🛠️', title: 'Core Stack', desc: 'dbt · BigQuery · Airbyte · SQL · Python · Looker Studio' },
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
                About Faiçal
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I've spent my career at the intersection of finance and tech — SaaS M&A, hedge fund equity research, and now building the data and automation infrastructure at a Series C SaaS company.
                </p>
                <p>
                  I've seen how the best data stacks work at scale. And I've seen what happens when companies fly blind — bad decisions, board meetings where nobody can answer basic questions, finance teams spending two days on a close that should take two hours.
                </p>
                <p>
                  Most growth-stage companies need what I build. But they can't afford a full data team — and they don't need one. They need a managed service that runs like a product.
                </p>
                <p className="text-foreground font-medium">That's BuilderHub.</p>
              </div>
              <a
                href="https://www.linkedin.com/in/faicalalalawi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-blue-400 transition-colors mt-6 text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View LinkedIn Profile
              </a>
            </div>

            {/* Right — Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-5 glow-blue-hover transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{c.emoji}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
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
