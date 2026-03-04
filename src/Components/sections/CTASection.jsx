import React from 'react';
import { Button } from '@/Components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="py-12 md:py-20 lg:py-28">
    <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">

      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        Next Step
      </p>

      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-5">
        Your data is already there.
        <br />
        <span className="gradient-text">It just needs to do its job.</span>
      </h2>

      <p className="text-muted-foreground text-base md:text-xl mb-3 max-w-2xl mx-auto leading-relaxed">
        Book a free 15-minute call. We'll look at your current setup, identify the biggest gaps, and tell you exactly what we'd build — and what it would cost. No decks, no pitch. Just clarity.
      </p>

      <p className="text-sm text-muted-foreground mb-8 italic">
        If we can't find $10,000 worth of fixable problems, we'll tell you not to hire us.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <Button size="lg" className="gap-2" asChild>
          <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
            Book a Free 15-min Call <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/contact">Send us a brief instead →</Link>
        </Button>
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-xs text-muted-foreground">
          Or reach us directly at{' '}
          <a href="mailto:contact@buildrhub.io" className="underline underline-offset-2 hover:text-foreground transition-colors">
            contact@buildrhub.io
          </a>
        </p>
        <p className="text-xs text-muted-foreground">
          Most clients save 10–20 hrs/week in manual reporting. At $75/hr, that's $39–78k/year. The audit starts at $750.
        </p>
      </div>

    </div>
  </section>
);

export default CTASection;
