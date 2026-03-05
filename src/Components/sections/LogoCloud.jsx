import React from 'react';

const tools = ['dbt', 'BigQuery', 'Looker', 'Airbyte', 'Stripe', 'HubSpot', 'Google Analytics', 'Snowflake', 'PostgreSQL', 'Tableau'];

const LogoCloud = () => (
  <section className="py-12 border-y border-white/5 overflow-hidden">
    <p className="text-center text-sm text-muted-foreground mb-6">Built with tools trusted by the best</p>
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tools, ...tools].map((tool, i) => (
          <span key={i} className="mx-4 px-4 py-2 text-sm text-muted-foreground border border-white/10 rounded-full shrink-0">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default LogoCloud;
