import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, GitBranch, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const services = [
  { icon: BarChart3, title: 'Dashboards', desc: 'Live, auto-updating dashboards that your team actually uses.', to: '/dashboards' },
  { icon: GitBranch, title: 'Data Pipelines', desc: 'We connect your tools and keep your data flowing. Always fresh.', to: '/data-pipelines' },
  { icon: Zap, title: 'AI Agents', desc: 'Automated alerts, reports, and queries. Your data works while you sleep.', to: '/ai-agents' },
];

const ServicesOverview = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything your data needs. <span className="gradient-text">One team.</span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.15}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Link to={s.to} className="block glass rounded-2xl p-8 h-full hover:glow-purple transition-shadow">
                <s.icon className="h-10 w-10 text-violet-400 mb-5" />
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </Link>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
