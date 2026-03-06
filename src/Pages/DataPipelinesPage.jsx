import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, Plug, RefreshCw, Shield, Database, Settings, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../Components/FadeIn';

const features = [
  { icon: Plug, title: '200+ connectors', desc: 'Stripe, HubSpot, Salesforce, GA4, Shopify, and hundreds more.' },
  { icon: RefreshCw, title: 'Real-time sync', desc: 'Data flows automatically. Always fresh, always available.' },
  { icon: Settings, title: 'Data transformation', desc: 'dbt models that clean, join, and prepare your data for analysis.' },
  { icon: Shield, title: 'Quality monitoring', desc: 'Automated checks catch issues before they reach your dashboards.' },
  { icon: Database, title: 'Schema management', desc: 'We handle schema changes so your pipelines never break.' },
  { icon: GitBranch, title: 'Zero maintenance', desc: 'We monitor, fix, and optimize. You just use the data.' },
];

const steps = [
  { num: '1', title: 'Map', desc: 'We audit every tool and data source in your stack.' },
  { num: '2', title: 'Connect', desc: 'Pipelines built. Data flowing to your warehouse.' },
  { num: '3', title: 'Transform', desc: 'Clean, modeled data ready for dashboards and analysis.' },
];

const flowSteps = ['Your Tools', 'Pipeline', 'Warehouse', 'Dashboard'];

const DataPipelinesPage = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="max-w-3xl">
            <GitBranch className="h-12 w-12 text-violet-400 mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              All your data. One place. <span className="gradient-text">Always fresh.</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              We connect 200+ tools to your warehouse. Data flows automatically. You never export another CSV.
            </p>
            <Link to="/demo" className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25">
              Book a Demo →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn><h2 className="text-3xl font-bold text-center mb-16">What we build</h2></FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full">
                <f.icon className="h-8 w-8 text-violet-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn><h2 className="text-3xl font-bold text-center mb-16">How it works</h2></FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.15} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-xl font-bold text-white mb-4">{s.num}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Mock pipeline flow */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn>
          <div className="glass rounded-2xl p-5 sm:p-8 glow-purple">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {flowSteps.map((step, i) => (
                <React.Fragment key={step}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    className="glass rounded-xl px-6 py-4 text-center min-w-[120px]"
                  >
                    <p className="text-sm font-medium text-white">{step}</p>
                  </motion.div>
                  {i < flowSteps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-violet-400 shrink-0 rotate-90 md:rotate-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to <span className="gradient-text">unify your data?</span></h2>
          <Link to="/demo" className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25">
            Book a Free Call →
          </Link>
        </FadeIn>
      </div>
    </section>
  </div>
);

export default DataPipelinesPage;
