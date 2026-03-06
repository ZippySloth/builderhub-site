import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, ArrowRight, Search, Wrench, Settings } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/Components/ui/accordion';
import FadeIn from '../Components/FadeIn';

const journeySteps = [
  {
    num: '01',
    icon: Search,
    name: 'The Audit',
    price: '$750 - $1,500',
    timeline: '3-5 days',
    desc: 'We diagnose your data stack. You get a full gap analysis and a prioritized roadmap — whether you move forward or not.',
    items: ['Data source inventory', 'Metric consistency check', 'Gap analysis + maturity score', 'Written report with findings', '30-min walkthrough call'],
    note: 'Credited toward the Build if you proceed.',
  },
  {
    num: '02',
    icon: Wrench,
    name: 'The Build',
    price: '$5,000 - $15,000',
    timeline: '3-6 weeks',
    tag: 'One-time',
    desc: 'We connect your tools, build the transformation layer, and deliver live dashboards your team uses every day.',
    items: ['2-5 data source connections', 'Full pipeline + dbt models', '4-6 live dashboards', 'Documentation + training', '30-day post-delivery support'],
    note: 'Scoped per engagement. Simple stacks start at $5k.',
  },
  {
    num: '03',
    icon: Settings,
    name: 'Monthly Operations',
    price: '$1,500 - $3,500/mo',
    timeline: 'Ongoing',
    tag: 'Recurring',
    desc: 'We keep everything running, evolving, and accurate. Your data infrastructure as a managed service.',
    items: [],
    tiers: true,
  },
];

const operationsTiers = [
  {
    name: 'Core',
    price: '$1,500',
    items: ['Model hosting + maintenance', 'Pipeline monitoring + fixes', '1 new report per month', 'Email support (<24h)'],
  },
  {
    name: 'Growth',
    price: '$2,500',
    featured: true,
    items: ['Everything in Core', '2 new reports per month', 'Monthly analytics call', 'Dashboard iterations'],
  },
  {
    name: 'Command',
    price: '$3,500',
    items: ['Everything in Growth', 'Ad hoc data pulls', 'Priority Slack access', 'Quarterly strategy review'],
  },
];

const pricingFaqs = [
  { q: 'Do I need to do the Audit first?', a: 'Not always. If you already know what you need, we can scope a Build directly. But most clients start with the Audit — it surfaces things you didn\'t know were broken, and the fee gets credited toward the Build.' },
  { q: 'What determines the Build price?', a: 'Number of data sources, complexity of the metrics, and how many dashboards you need. A simple stack (1-2 sources, basic dashboards) starts at $5k. Complex multi-source builds with custom logic run $10-15k.' },
  { q: 'Why is there a monthly fee after the Build?', a: 'Data infrastructure needs ongoing care. APIs change, schemas update, sources break, and your business evolves. Without someone maintaining it, dashboards go dark within weeks. The monthly fee keeps everything running — and growing with you.' },
  { q: 'Is there a contract for the monthly plan?', a: 'Month-to-month. Cancel with 30 days notice. No lock-in. Most clients stay because the math is obvious — maintaining it yourself costs $120-180k/year in hiring.' },
  { q: 'What happens if I cancel?', a: 'You keep your raw data — it\'s in your warehouse. The transformation models and dashboards stop running. You\'d need to rebuild that layer yourself or hire someone.' },
  { q: 'Do you offer custom pricing?', a: 'Yes. For larger or more complex projects, we scope and price individually. Book a call to discuss.' },
];

const PricingPage = () => (
  <div className="pt-20">
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">One path. <span className="gradient-text">Clear pricing.</span></h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Every engagement follows the same proven process. You always know what comes next and what it costs.
            </p>
          </div>
        </FadeIn>

        {/* Total investment callout */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-12 sm:mb-20">
            <p className="text-sm text-muted-foreground">
              Typical first-year investment: <span className="text-white font-semibold">$20-45k</span> — your entire data team for less than one month of a full-time hire's annual salary.
            </p>
          </div>
        </FadeIn>

        {/* Journey timeline */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-24">
          {journeySteps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.15}>
              <div className="relative">
                {/* Connecting line */}
                {i < journeySteps.length - 1 && (
                  <div className="absolute left-6 sm:left-8 top-full w-px h-6 sm:h-8 border-l-2 border-dashed border-violet-500/30" />
                )}

                <div className="glass rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
                  {/* Step header */}
                  <div className="flex flex-col gap-4 mb-5 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shrink-0">
                        <step.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1 flex-wrap">
                          <span className="text-xs text-violet-400 font-mono">STEP {step.num}</span>
                          {step.tag && (
                            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-violet-500/30 text-violet-300">
                              {step.tag}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{step.name}</h3>
                      </div>
                    </div>
                    <div className="pl-0 sm:pl-[76px]">
                      <p className="text-xl sm:text-2xl font-bold gradient-text">{step.price}</p>
                      <p className="text-xs text-muted-foreground">{step.timeline}</p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">{step.desc}</p>

                  {/* Checklist items (for Audit and Build) */}
                  {step.items.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-white">
                          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-violet-400 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Note */}
                  {step.note && (
                    <p className="text-sm text-violet-400 mt-4">{step.note}</p>
                  )}

                  {/* Operations tiers (Step 3 only) */}
                  {step.tiers && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-2">
                      {operationsTiers.map((tier) => (
                        <div
                          key={tier.name}
                          className={`rounded-xl p-4 sm:p-5 ${tier.featured ? 'bg-violet-600/10 border border-violet-500/30' : 'bg-white/[0.02] border border-white/5'}`}
                        >
                          <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <h4 className="text-sm font-bold text-white">{tier.name}</h4>
                            {tier.featured && (
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-violet-600/30 text-violet-300">Popular</span>
                            )}
                          </div>
                          <p className="text-lg sm:text-xl font-bold gradient-text mb-3 sm:mb-4">{tier.price}<span className="text-xs sm:text-sm text-muted-foreground">/mo</span></p>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {tier.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <Check className="h-3 w-3 text-violet-400 shrink-0 mt-0.5" /> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Arrow between steps */}
                {i < journeySteps.length - 1 && (
                  <div className="flex justify-center -mt-4 mb-4">
                    <ArrowRight className="h-5 w-5 text-violet-500/40 rotate-90" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center mb-16 sm:mb-24">
            <p className="text-base sm:text-lg text-muted-foreground mb-6">Most clients start with the Audit. It takes 3-5 days and the fee is credited if you continue.</p>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25"
            >
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        {/* AI Agents add-on */}
        <FadeIn>
          <div className="glass rounded-2xl p-5 sm:p-8 max-w-3xl mx-auto mb-16 sm:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-violet-400" />
              <div>
                <h3 className="text-lg font-bold text-white">AI Agents Add-on</h3>
                <p className="text-sm text-muted-foreground">Available with Build or Monthly Operations plans</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Add automated alerts, scheduled reports, natural language queries, and anomaly detection to your data stack.
            </p>
            <Link to="/ai-agents" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
              Learn more about AI Agents <ArrowRight className="inline h-3 w-3 ml-1" />
            </Link>
          </div>
        </FadeIn>

        {/* Pricing FAQ */}
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-center mb-8">Common questions</h2>
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
