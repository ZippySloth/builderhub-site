import React from 'react';
import { useReveal } from '../../hooks/useReveal';

const CTASection = () => {
  const [ref, visible] = useReveal();

  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Subtle blue glow bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative z-10`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to stop wrestling with your data?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a 20-minute call. I'll tell you what's broken and how I'd fix it — whether you hire me or not.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://calendly.com/fazio/audit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Book Your Audit Call →
            </a>
            <p className="text-sm text-muted-foreground">
              Or email{' '}
              <a
                href="mailto:fazio@buildrhub.io"
                className="text-primary hover:text-blue-400 transition-colors"
              >
                fazio@buildrhub.io
              </a>
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-md">
              Most clients save 10-20 hours/week in manual reporting. At $50/hr, that's $26-52k/year. The audit is $750.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
