import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const metrics = [
  { label: 'MRR', value: '$84k', change: '↑ 12%' },
  { label: 'Churn', value: '3.2%', change: '↓ 0.4%' },
  { label: 'LTV', value: '$2,400', change: '↑ 8%' },
];

const barHeights = [45, 65, 55, 80, 70, 90];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Floating gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-violet-600/20 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-1/4 -right-32 w-48 h-48 sm:w-80 sm:h-80 bg-purple-500/15 rounded-full blur-3xl animate-float-slow" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-violet-400/10 rounded-full blur-3xl animate-float" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Your data is a mess.
            <br />
            <span className="gradient-text">We fix it.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We connect your tools, build your dashboards, and run your data stack — so you stop pulling numbers and start making decisions.
          </p>
          <div className="mt-8">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25"
            >
              Book a Free Call →
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">15 minutes. No prep needed.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="hidden lg:block">
          <div className="glass rounded-2xl p-6 glow-purple">
            <div className="grid grid-cols-3 gap-3 mb-6">
              {metrics.map((m) => (
                <div key={m.label} className="glass rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                  <p className="text-xl font-bold text-white">{m.value}</p>
                  <p className="text-xs text-emerald-400 mt-1">{m.change}</p>
                </div>
              ))}
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-xs text-muted-foreground mb-3">Revenue (6mo)</p>
              <div className="flex items-end gap-3 h-32">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600 to-purple-400"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default HeroSection;
