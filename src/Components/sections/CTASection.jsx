import React from 'react';
import { Button } from '@/Components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="py-12 md:py-20 lg:py-28">
    <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
        Ready to stop wrestling with your data?
      </h2>
      <p className="text-muted-foreground md:text-xl mb-8 max-w-2xl mx-auto">
        Book a 20-minute call. We'll tell you what's broken and how we'd fix it — whether you hire us or not.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <Button size="lg" className="gap-2" asChild>
          <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
            Book Your Free Diagnosis <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/contact">Fill out a brief →</Link>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Or email <a href="mailto:contact@buildrhub.io" className="underline underline-offset-2 hover:text-foreground">contact@buildrhub.io</a>
      </p>
      <p className="text-xs text-muted-foreground mt-4">
        Most clients save 10–20 hours/week in manual reporting. At $50/hr, that's $26–52k/year. The audit is $750.
      </p>
    </div>
  </section>
);

export default CTASection;
