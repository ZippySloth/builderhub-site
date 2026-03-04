import React from 'react';

const stats = [
  { value: '10–20 hrs', label: 'saved per week' },
  { value: '$150k+', label: 'vs. hiring in-house' },
  { value: '3–6 weeks', label: 'to live dashboards' },
  { value: '95%+', label: 'gross margin on retainers' },
];

const SocialProofBar = () => (
  <div className="border-y border-border bg-card/30 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-primary">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SocialProofBar;
