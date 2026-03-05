import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const tools = [
  'Stripe', 'HubSpot', 'Salesforce', 'QuickBooks',
  'Google Analytics', 'Shopify', 'Intercom', 'Zendesk',
  'Airtable', 'Google Sheets', 'Slack', 'Xero',
  'Notion', 'PostgreSQL', 'MySQL', 'Snowflake',
];

const Integrations = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect the tools <span className="gradient-text">you already use</span>
          </h2>
          <p className="text-muted-foreground text-lg">No rip-and-replace. We plug into your existing stack.</p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {tools.map((tool, i) => (
          <FadeIn key={tool} delay={i * 0.05}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4 text-center text-sm text-white font-medium hover:border-violet-500/30 transition-colors cursor-default"
            >
              {tool}
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Integrations;
