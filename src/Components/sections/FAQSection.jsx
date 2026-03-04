import React from 'react';
import { Badge } from '@/Components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/Components/ui/accordion';

const faqs = [
  { q: "How is this different from hiring a data analyst?", a: "Most analysts can build dashboards but don't understand the business context. Most business people know what metrics matter but can't build the systems. We do both — and maintain everything ongoing as a managed service, not a one-time project." },
  { q: "What if our data is a complete mess?", a: "That's normal. Most clients start there — scattered tools, manual processes, numbers nobody trusts. That's exactly what the audit surfaces and what the build fixes." },
  { q: "What if we don't have a data warehouse?", a: "No problem. We provision the full infrastructure. Your tools connect directly — no existing database or warehouse required." },
  { q: "Why do you host the models instead of handing them over?", a: "The models need ongoing maintenance as your tools and data change. Hosting is how we ensure quality and continuity. You get the outputs — dashboards, reports, clean metrics. We handle the plumbing. Same reason Shopify doesn't give you their source code." },
  { q: "What happens if we cancel the retainer?", a: "You keep your raw data — it's always yours. But the transformation layer stops running. Dashboards go dark. Rebuilding from scratch typically means a $120–180k engineering hire and 3–6 months of ramp time. Most clients stay because the math is obvious." },
  { q: "How long until we see results?", a: "The audit delivers a full roadmap in 3–5 days. The foundation build delivers working, auto-updating dashboards in 3–6 weeks." },
  { q: "Do you work with companies outside Canada?", a: "Yes. We primarily serve US and Canadian companies but work with any English-speaking business regardless of location." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">FAQ</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Common questions</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
