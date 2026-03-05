import React from 'react';

const tools = [
  'dbt', 'BigQuery', 'Looker', 'Airbyte', 'Stripe', 'HubSpot', 'Google Analytics',
  'Snowflake', 'PostgreSQL', 'Tableau', 'QuickBooks', 'Databricks', 'Cursor', 'Claude AI',
  'Hex', 'Zoho', 'Rillet', 'Metabase', 'Mode Analytics', 'Sigma Computing', 'Power BI',
  'Salesforce', 'NetSuite', 'Xero', 'Sage', 'SAP', 'Notion', 'Linear', 'Asana',
  'Monday.com', 'Slack', 'Fivetran', 'Stitch Data', 'Segment', 'Amplitude', 'Mixpanel',
  'Heap Analytics', 'PostHog', 'Redshift', 'Apache Superset', 'Retool', 'Glean',
  'Intercom', 'Zendesk', 'Pipedrive', 'Copper CRM', 'Brex', 'Ramp', 'Bill.com',
  'Carta', 'Rippling', 'Gusto', 'Workday', 'BambooHR', 'Deel', 'Greenhouse', 'Lever',
  'Datadog', 'PagerDuty', 'Sentry', 'Vercel', 'AWS', 'GCP', 'Azure', 'Cloudflare',
  'n8n', 'Zapier', 'Make', 'Airtable', 'Coda', 'ClickUp', 'Basecamp', 'Calendly',
  'Typeform', 'Webflow', 'Shopify', 'WooCommerce', 'Klaviyo', 'Attio'
];

const LogoCloud = () => (
  <section className="py-12 border-y border-white/5 overflow-hidden">
    <p className="text-center text-lg font-semibold text-white/70 uppercase tracking-widest mb-8">Built with tools trusted by the best</p>
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap" style={{ willChange: 'transform' }}>
        {[...tools, ...tools, ...tools].map((tool, i) => (
          <span key={i} className="mx-4 px-5 py-2.5 text-base font-medium text-muted-foreground border border-white/10 rounded-full shrink-0">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default LogoCloud;
