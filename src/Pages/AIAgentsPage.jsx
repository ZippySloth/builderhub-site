import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Bell, FileText, MessageSquare, AlertTriangle, Settings, Mail, Calendar, Search, Database, RefreshCw, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../Components/FadeIn';

const features = [
  { icon: Bell, title: 'Metric alerts', desc: 'Get notified the moment MRR drops, churn spikes, burn accelerates, or any threshold is crossed.' },
  { icon: FileText, title: 'Scheduled reports', desc: 'Weekly and monthly reports built and delivered automatically — inbox, Slack, or wherever your team lives.' },
  { icon: MessageSquare, title: 'Natural language queries', desc: 'Ask questions in plain English. Get back data answers, charts, and summaries instantly.' },
  { icon: AlertTriangle, title: 'Anomaly detection', desc: 'AI surfaces unusual patterns before they become crises — revenue drops, cost spikes, traffic anomalies.' },
  { icon: Settings, title: 'Custom automations', desc: 'Trigger downstream actions based on data thresholds — no manual intervention required.' },
  { icon: Mail, title: 'Slack & email delivery', desc: 'Every report and alert goes where your team already works. Zero dashboard-checking required.' },
  { icon: Calendar, title: 'Meeting prep briefs', desc: 'Auto-generated summaries of account health, pipeline status, and key metrics before every important call.' },
  { icon: Search, title: 'Competitive monitoring', desc: 'Track competitor pricing, reviews, job postings, and news changes — surfaced automatically when something shifts.' },
  { icon: Database, title: 'Data enrichment', desc: 'Auto-fill missing CRM fields, company firmographics, and contact details from external sources.' },
  { icon: RefreshCw, title: 'CRM auto-updates', desc: 'Sync data between your tools automatically. No manual entry — always up to date.' },
  { icon: TrendingUp, title: 'Forecast automation', desc: 'Revenue, cash flow, and capacity forecasts recalculated automatically whenever inputs change.' },
  { icon: Users, title: 'Stakeholder digests', desc: 'Board, investor, and partner updates written and delivered automatically on your schedule.' },
];

const steps = [
  { num: '1', title: 'Define', desc: 'We identify the metrics, thresholds, and reports you need.' },
  { num: '2', title: 'Automate', desc: 'Agents configured to monitor, report, and respond.' },
  { num: '3', title: 'Evolve', desc: 'New agents added as your needs grow. Zero extra effort.' },
];

const chatMessages = [
  { role: 'user', text: 'What was our churn last month?' },
  { role: 'agent', text: 'Churn was 3.2%, down 0.4% from February. Top reason: pricing page drop-off.' },
];

const AIAgentsPage = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="max-w-3xl">
            <Zap className="h-12 w-12 text-violet-400 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your data works <span className="gradient-text">while you sleep</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Alerts when metrics move. Reports that send themselves. Questions answered in plain English.
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

    {/* Mock chat */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-xl">
        <FadeIn>
          <div className="glass rounded-2xl p-6 glow-purple">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-5 w-5 text-violet-400" />
              <p className="text-sm font-medium text-white">BuilderHub Agent</p>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
              </span>
            </div>
            <div className="space-y-4">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.5 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.role === 'user' ? 'bg-violet-600 text-white' : 'glass text-white'}`}>
                    {msg.text}
                  </div>
                </motion.div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to <span className="gradient-text">automate your data?</span></h2>
          <Link to="/demo" className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25">
            Book a Free Call →
          </Link>
        </FadeIn>
      </div>
    </section>
  </div>
);

export default AIAgentsPage;
