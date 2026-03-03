import React from 'react';
import { Bot, Bell, MessageSquare, Zap, Shield, Clock } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

const CAPABILITIES = [
  {
    icon: Bell,
    title: 'Proactive Alerts',
    description: 'Revenue dropped 15% this week? Churn spiked? Your agent catches it before you do and pings you on Slack.',
  },
  {
    icon: MessageSquare,
    title: 'Ask Your Data Anything',
    description: '"What was our NRR last quarter?" Your team asks in plain English. The agent queries your models and answers in seconds.',
  },
  {
    icon: Clock,
    title: 'Scheduled Reports',
    description: 'Board deck every Monday. Investor update every Friday. Auto-generated, auto-sent. No manual work.',
  },
  {
    icon: Zap,
    title: 'Anomaly Detection',
    description: 'Unusual patterns in billing, support tickets, or user behavior — flagged automatically so nothing slips through.',
  },
  {
    icon: Bot,
    title: 'Workflow Automation',
    description: 'When metric X crosses threshold Y, trigger action Z. Slack alerts, email reports, ticket creation — fully automated.',
  },
  {
    icon: Shield,
    title: 'Hosted & Managed by Me',
    description: 'Your AI agents run on my infrastructure. I configure, maintain, and evolve them. Same model — you get outputs, I handle the engine.',
  },
];

const AgentsSection = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="agents" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background pointer-events-none" />

      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            New: AI Layer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Agents that work while you sleep.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dashboards show you what happened. AI agents tell you what's happening <em>right now</em> — and what to do about it. Deployed on your data stack, hosted and managed by BuilderHub.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 glow-blue-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cap.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>

        {/* How it layers on top */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Built on top of your data stack.
              </h3>
              <p className="text-muted-foreground mb-4">
                Your data pipeline and dashboards are the foundation. AI agents sit on top — reading your dbt models, monitoring your metrics, and acting on patterns your team would miss.
              </p>
              <p className="text-muted-foreground mb-6">
                Same model as everything else: <span className="text-primary font-medium">I host it, I maintain it, you get the outputs.</span> If you cancel, the agents stop. Another layer of intelligence that runs only through BuilderHub.
              </p>
              <a
                href="https://calendly.com/fazio/audit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm"
                aria-label="Book a call to discuss AI agents for your data stack"
              >
                Ask me about agents →
              </a>
            </div>

            {/* Stack visualization */}
            <div className="space-y-3">
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-accent">🤖 AI Agents</p>
                <p className="text-xs text-muted-foreground mt-1">Alerts · Reports · Queries · Automation</p>
              </div>
              <div className="flex justify-center">
                <span className="text-muted-foreground text-xs">powered by ↓</span>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-primary">📊 Dashboards & BI</p>
                <p className="text-xs text-muted-foreground mt-1">Live, auto-updating</p>
              </div>
              <div className="flex justify-center">
                <span className="text-muted-foreground text-xs">↓</span>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-primary">⚙️ dbt Models</p>
                <p className="text-xs text-muted-foreground mt-1">Transformation layer · BuilderHub IP</p>
              </div>
              <div className="flex justify-center">
                <span className="text-muted-foreground text-xs">↓</span>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-green-400">💾 Your Raw Data</p>
                <p className="text-xs text-muted-foreground mt-1">You own it. Always.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Available as an add-on to any retainer tier. Pricing depends on complexity — most setups are <span className="text-foreground font-medium">$500-$1,500/month</span> on top of your retainer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
