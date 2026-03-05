import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Target, Users, LayoutDashboard, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../Components/FadeIn';

const features = [
  { icon: TrendingUp, title: 'Revenue tracking', desc: 'Real-time MRR, ARR, and revenue breakdowns across all channels.' },
  { icon: Target, title: 'Marketing attribution', desc: 'See which campaigns drive real revenue, not just clicks.' },
  { icon: LayoutDashboard, title: 'Operations KPIs', desc: 'Team performance, capacity, and efficiency at a glance.' },
  { icon: Users, title: 'Cohort analysis', desc: 'Understand retention, churn, and customer behavior over time.' },
  { icon: BarChart3, title: 'Custom metrics', desc: 'Any metric you track, built exactly how you need it.' },
  { icon: Clock, title: 'Automated scheduling', desc: 'Reports sent to your inbox, Slack, or email — on schedule.' },
];

const steps = [
  { num: '1', title: 'Connect', desc: 'We plug into your tools — Stripe, HubSpot, GA4, whatever you use.' },
  { num: '2', title: 'Design', desc: 'We build dashboards around the questions your team actually asks.' },
  { num: '3', title: 'Ship', desc: 'Live dashboards in 2-4 weeks. Auto-updating. Zero maintenance.' },
];

const mockMetrics = [
  { label: 'MRR', value: '$127k', change: '+14%' },
  { label: 'Customers', value: '1,247', change: '+89' },
  { label: 'NRR', value: '112%', change: '+3%' },
  { label: 'CAC', value: '$340', change: '-12%' },
];

const DashboardsPage = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="max-w-3xl">
            <BarChart3 className="h-12 w-12 text-violet-400 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dashboards that actually <span className="gradient-text">get used</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Live, auto-updating dashboards built on your real data. No more exports. No more outdated reports.
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

    {/* Mock dashboard */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn>
          <div className="glass rounded-2xl p-8 glow-purple">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {mockMetrics.map((m) => (
                <div key={m.label} className="glass rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="text-2xl font-bold text-white">{m.value}</p>
                  <p className="text-xs text-emerald-400">{m.change}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-3">Revenue (12mo)</p>
                <div className="flex items-end gap-2 h-32">
                  {[30, 35, 40, 38, 45, 50, 55, 60, 58, 65, 70, 78].map((h, i) => (
                    <motion.div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600 to-purple-400"
                      initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.05 }} />
                  ))}
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-3">Churn trend</p>
                <div className="flex items-end gap-2 h-32">
                  {[80, 75, 70, 65, 55, 50, 45, 40, 38, 35, 32, 30].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-600 to-emerald-400" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-6">Ready to see your data <span className="gradient-text">clearly?</span></h2>
          <Link to="/demo" className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25">
            Book a Free Call →
          </Link>
        </FadeIn>
      </div>
    </section>
  </div>
);

export default DashboardsPage;
