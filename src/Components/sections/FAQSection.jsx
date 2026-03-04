import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/Components/ui/accordion';

const faqs = [
  {
    q: "How fast do we see value?",
    a: "Your first dashboard is live in 7–10 days. You'll see your numbers in one place — automatically updated — within the first two weeks. Automated weekly reports start the following Monday."
  },
  {
    q: "Do you replace our existing tools?",
    a: "No. We connect to what you already use — Stripe, HubSpot, QuickBooks, GA4, spreadsheets, and dozens of other SaaS tools. Nothing gets ripped out. We build the layer that makes them talk to each other."
  },
  {
    q: "What do you actually need from us to get started?",
    a: "Read-only API access to your data tools (we walk you through it), a 15-min kickoff call, and someone to answer the occasional question. That's it. No internal data team required."
  },
  {
    q: "What tools do you support?",
    a: "Stripe, HubSpot, Salesforce, QuickBooks, Xero, Google Analytics 4, Shopify, Intercom, Zendesk, Mixpanel, Airtable, Google Sheets, and 200+ more. If you have data somewhere, we can likely connect it."
  },
  {
    q: "How is this different from hiring a data analyst?",
    a: "A data analyst takes 3–6 months to ramp, costs $80–150k/year, and often builds things only they can maintain. We deliver the same output in 1–3 weeks, maintain everything ourselves, and cost a fraction of the price. Plus, we've done this for dozens of companies — we know what dashboards actually get used."
  },
  {
    q: "What happens if we cancel the retainer?",
    a: "You keep your raw data — it's always yours. The transformation models and dashboards we built stop running because we host and maintain them. Most clients stay because it's cheaper than rebuilding. But there's no lock-in contract."
  },
  {
    q: "What if our data is a complete mess?",
    a: "That's almost always where we start. The audit call is specifically designed to map the chaos and tell you what's fixable, what's priority, and what can wait. You don't need to clean anything before we talk."
  },
  {
    q: "Do you work with companies outside Canada?",
    a: "Yes. Most of our clients are US-based. We work with any English-speaking company regardless of location."
  },
];

const FAQSection = () => (
  <section id="faq" className="py-12 md:py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <div className="text-center mb-8 md:mb-12">
        <Badge variant="outline" className="mb-4">FAQ</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-3">Common questions</h2>
        <p className="text-muted-foreground">Everything you'd want to know before booking a call.</p>
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium py-4">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
