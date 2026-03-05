import React from 'react';
import FadeIn from '../FadeIn';

const steps = [
  { num: '1', title: 'We Audit', desc: 'Free 15-min call. We look at your tools, find the gaps, tell you what is fixable.' },
  { num: '2', title: 'We Build', desc: '2-4 weeks. Dashboards live. Data flowing. Reports automated.' },
  { num: '3', title: 'We Run', desc: 'Monthly maintenance. New reports. Optimizations. You just log in and decide.' },
];

const HowItWorksSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Three steps. <span className="gradient-text">That is it.</span>
        </h2>
      </FadeIn>
      <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
        <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-violet-500/30" />

        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.2} className="text-center relative">
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mb-6 relative z-10">
              {s.num}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
