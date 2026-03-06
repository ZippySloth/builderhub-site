import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../FadeIn';

const CTASection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="gradient-text">stop guessing?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Book a free 15-minute call. No prep. We will tell you exactly what is broken.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25"
        >
          Book Your Free Call →
        </Link>
        <p className="mt-4 text-sm text-muted-foreground">
          <a href="mailto:contact@buildrhub.io" className="hover:text-white transition-colors">contact@buildrhub.io</a>
        </p>
      </FadeIn>
    </div>
  </section>
);

export default CTASection;
