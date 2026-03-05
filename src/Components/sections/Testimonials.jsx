import React from 'react';
import { Star } from 'lucide-react';
import FadeIn from '../FadeIn';

const testimonials = [
  { quote: 'Board prep went from 2 days to 30 minutes. We actually trust our numbers now.', name: 'Sarah K.', role: 'Head of Finance, Series B SaaS' },
  { quote: 'We finally see which channels drive real revenue, not just clicks.', name: 'Marcus T.', role: 'CEO, E-Commerce Brand' },
  { quote: 'Two companies, two CRMs, one dashboard. Delivered in 18 days.', name: 'Jennifer L.', role: 'COO, Post-Acquisition' },
];

const Testimonials = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Teams that <span className="gradient-text">stopped guessing</span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div className="glass rounded-2xl p-8 h-full flex flex-col">
              <span className="text-4xl text-violet-400 mb-4">&ldquo;</span>
              <p className="text-white text-lg mb-6 flex-1">{t.quote}</p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-violet-400 text-violet-400" />
                ))}
              </div>
              <p className="text-sm font-medium text-white">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
