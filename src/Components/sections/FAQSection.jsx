import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/Components/ui/accordion';
import { useReveal } from '../../hooks/useReveal';

const faqs = [
  {
    q: 'How is this different from hiring a data analyst?',
    a: "Most analysts can build dashboards but don't understand the business context behind the numbers. Most business people know what metrics matter but can't build the systems. We do both — and we maintain everything ongoing as a managed service, not a one-time project.",
  },
  {
    q: 'What if our data is a complete mess?',
    a: "That's normal. Most of our clients start there. Scattered tools, manual processes, numbers nobody trusts. That's exactly what the audit surfaces — and what the build fixes.",
  },
  {
    q: 'What tools do you work with?',
    a: "We use best-in-class, enterprise-grade tools. We'll walk you through the stack on a call.",
  },
  {
    q: "What if we don't have a data warehouse?",
    a: "No problem. We set one up for you. Your SaaS tools connect directly — no existing infrastructure required. Most non-technical clients never see a database.",
  },
  {
    q: 'Why do you host the transformation models instead of handing them over?',
    a: "The models need ongoing maintenance — schema changes, API updates, new requirements. If you're not running a data engineering team, they'll break within months. Hosting is how we ensure quality. You get the outputs: dashboards, reports, clean metrics. We handle the plumbing.",
  },
  {
    q: 'What happens if we cancel the retainer?',
    a: "You keep your raw data — it's always yours. But the transformation models stop running. Dashboards go dark. Rebuilding that layer from scratch typically takes a $120-180k engineering hire and 3-6 months. Most clients stay because the math is obvious.",
  },
  {
    q: 'How long until we see results?',
    a: 'The audit delivers a full roadmap in 3-5 days. The foundation build delivers working, auto-updating dashboards in 3-6 weeks.',
  },
];

const FAQSection = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Common questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:glow-blue transition-all duration-300"
              >
                <AccordionTrigger className="text-foreground text-base font-medium py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
