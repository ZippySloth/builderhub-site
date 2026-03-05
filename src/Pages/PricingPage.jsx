import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/Components/ui/accordion';
import FadeIn from '../Components/FadeIn';

const plans = [
  {
    name: 'Audit',
    price: '$750',
    desc: 'Full data health check with a prioritized roadmap.',
    items: ['Data source inventory', 'Gap analysis', 'Maturity score', 'Written report', '30-min walkthrough'],
    cta: 'Book Audit Call →',
    featured: false,
  },
  {
    name: 'Build',
    price: 'From $5,000',
    desc: 'Complete setup in 2-4 weeks.',
    items: ['All source connections', 'Pipeline + transformation', 'Live dashboards', 'Documentation', '30-day support'],
    cta: 'Book a Call →',
    featured: true,
  },
  {
    name: 'Retainer',
    price: 'From $1,500/mo',
    desc: 'Ongoing. We run everything.',
    items: ['Hosting + maintenance', 'Bug fixes + updates', 'New reports monthly', 'Email support <24h', 'Strategy calls'],
    cta: 'Book a Call →',
    featured: false,
  },
];

const pricingFaqs = [
  { q: 'Can I start with just an audit?', a: 'Yes. The audit is standalone. You get a full report and roadmap with no obligation to continue.' },
  { q: 'What is included in the Build?', a: 'Everything: source connections, data pipeline, transformation models, live dashboards, documentation, and 30 days of support.' },
  { q: 'Is there a contract for the retainer?', a: 'Month-to-month. Cancel anytime. No lock-in.' },
  { q: 'Do you offer custom pricing?', a: 'Yes. For larger or more complex projects, we scope and price individually. Book a call to discuss.' },
];

const PricingPage = () => (
  <div className="pt-20">
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple pricing. <span className="gradient-text">No surprises.</span></h1>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.15}>
              <div className={`glass rounded-2xl p-8 h-full flex flex-col ${plan.featured ? 'border-violet-500/50 glow-purple relative' : ''}`}>
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold gradient-text mb-3">{plan.price}</p>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white">
                      <Check className="h-4 w-4 text-violet-400 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/demo"
                  className={`text-center px-6 py-3 rounded-full font-medium text-sm transition-all ${plan.featured ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white hover:from-violet-500 hover:to-purple-400' : 'border border-white/10 text-white hover:bg-white/5'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* AI Agents add-on */}
        <FadeIn>
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-violet-400" />
              <div>
                <h3 className="text-lg font-bold text-white">AI Agents Add-on</h3>
                <p className="text-sm text-muted-foreground">Available with Build or Retainer plans</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Add automated alerts, scheduled reports, natural language queries, and anomaly detection to your data stack.
            </p>
            <Link to="/ai-agents" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
              Learn more about AI Agents →
            </Link>
          </div>
        </FadeIn>

        {/* Pricing FAQ */}
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-center mb-8">Pricing FAQ</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {pricingFaqs.map((f, i) => (
                <AccordionItem key={i} value={`pf-${i}`} className="glass rounded-xl px-5 border-white/5">
                  <AccordionTrigger className="text-left text-sm font-medium py-4 text-white hover:text-violet-400 transition-colors">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  </div>
);

export default PricingPage;
