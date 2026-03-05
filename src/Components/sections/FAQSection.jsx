import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/Components/ui/accordion';
import FadeIn from '../FadeIn';

const faqs = [
  { q: 'How fast do we see results?', a: 'First dashboard live in 7-10 days. Automated reports start the following week.' },
  { q: 'Do you replace our tools?', a: 'No. We connect to what you have — Stripe, HubSpot, QuickBooks, GA4, etc. Nothing gets ripped out.' },
  { q: 'What do you need from us?', a: 'Read-only API access to your tools, a 15-min kickoff call, and someone to answer occasional questions.' },
  { q: 'What tools do you support?', a: 'Stripe, HubSpot, Salesforce, QuickBooks, GA4, Shopify, Intercom, Zendesk, Airtable, Google Sheets, and 200+ more.' },
  { q: 'How is this different from hiring?', a: 'A data hire costs $120-180k/year and takes 6 months to ramp. We deliver in 3 weeks and cost a fraction.' },
  { q: 'What if we cancel?', a: 'You keep your raw data. Models and dashboards stop running — they live on our infrastructure. No lock-in contract.' },
  { q: 'What if our data is a mess?', a: "That is where most clients start. The audit maps the chaos and tells you what is fixable." },
  { q: 'Do you work outside Canada?', a: 'Yes. Most clients are US-based. We work with any English-speaking company.' },
];

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6 max-w-2xl">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Questions</h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="glass rounded-xl px-5 border-white/5">
              <AccordionTrigger className="text-left text-sm font-medium py-4 text-white hover:text-violet-400 transition-colors">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  </section>
);

export default FAQSection;
