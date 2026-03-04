import React from 'react';
import { Button } from '@/Components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="py-14 md:py-24">
    <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        Your data already exists.<br />Make it useful.
      </h2>

      <p className="text-muted-foreground mb-6">
        15-minute call. No prep. We'll tell you what's broken and what to fix first.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
        <Button size="lg" asChild>
          <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
            Book a free call <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/contact">Send a brief</Link>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        <a href="mailto:contact@buildrhub.io" className="underline underline-offset-2 hover:text-foreground">contact@buildrhub.io</a>
      </p>

    </div>
  </section>
);

export default CTASection;
