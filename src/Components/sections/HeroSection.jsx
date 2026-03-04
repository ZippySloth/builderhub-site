import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import SynthwaveBackground from '../SynthwaveBackground';
import { useTheme } from '../../context/ThemeContext';

const terminalLines = [
  { text: '$ connecting data sources...', delay: 300 },
  { text: '✓ stripe connected', delay: 900 },
  { text: '✓ hubspot connected', delay: 1300 },
  { text: '✓ quickbooks connected', delay: 1700 },
  { text: '$ running transformation models...', delay: 2200 },
  { text: '✓ revenue_by_customer', delay: 2700 },
  { text: '✓ mrr_waterfall', delay: 3000 },
  { text: '✓ churn_by_cohort', delay: 3300 },
  { text: '', delay: 3600 },
  { text: '✓ dashboards live — updated 8s ago', delay: 4000 },
];

const TerminalMock = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border bg-muted/50 p-2">
      <div className="flex h-full w-full flex-col rounded-lg bg-background p-4">
        <div className="flex items-center gap-2 border-b pb-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <div className="ml-2 text-xs font-medium text-muted-foreground">builderhub.terminal</div>
        </div>
        <div className="terminal flex-1 p-2 text-sm overflow-hidden">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={
              line.text.startsWith('✓') ? 'text-green-500 dark:text-green-400' :
              line.text.startsWith('$') ? 'text-primary' :
              'text-muted-foreground'
            }>
              {line.text}
            </div>
          ))}
          {visibleLines < terminalLines.length && (
            <span className="inline-block w-2 h-4 bg-primary animate-blink" />
          )}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="relative w-full py-16 md:py-28 lg:py-36 px-5 lg:px-8">
      <div className="absolute inset-0 z-0">
        <SynthwaveBackground isDarkMode={isDarkMode} />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            <Badge variant="outline" className="w-fit">Managed Data Intelligence</Badge>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your data is everywhere.
                <br />
                <span className="gradient-text">Your answers are nowhere.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                BuilderHub connects your data sources, builds the transformation layer, and delivers live dashboards — then maintains everything ongoing. You own your raw data. We run the intelligence on top of it.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                  Get a Free Data Diagnosis <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#services">
                  See how it works <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">No obligation · 20 minutes · We'll tell you exactly what's broken</p>
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-md">
              {[
                { v: '3–6 weeks', l: 'to live dashboards' },
                { v: '10–20 hrs', l: 'saved per week' },
                { v: '$150k+', l: 'vs. hiring in-house' },
              ].map((s, i) => (
                <div key={i} className="text-center p-3 rounded-lg bg-background/80 border">
                  <div className="font-bold text-sm">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Terminal — hidden on small screens */}
          <div className="hidden md:block">
            <TerminalMock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
