import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent } from '@/Components/ui/card';
import SynthwaveBackground from '../SynthwaveBackground';
import { useTheme } from '../../context/ThemeContext';

const terminalLines = [
  { text: '$ audit: scanning your data sources...', delay: 300 },
  { text: '✓ stripe — revenue & subscriptions', delay: 900 },
  { text: '✓ hubspot — pipeline & attribution', delay: 1300 },
  { text: '✓ google analytics — traffic & conversions', delay: 1700 },
  { text: '$ building transformation models...', delay: 2200 },
  { text: '✓ weekly_revenue_summary', delay: 2700 },
  { text: '✓ churn_by_cohort', delay: 3000 },
  { text: '✓ marketing_attribution', delay: 3300 },
  { text: '', delay: 3700 },
  { text: '✓ dashboards live — auto-updated every hour', delay: 4200 },
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
    <div className="w-full overflow-hidden rounded-xl border bg-muted/50 p-2">
      <div className="flex flex-col rounded-lg bg-background p-4" style={{ minHeight: '260px' }}>
        <div className="flex items-center gap-2 border-b pb-2 mb-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <div className="ml-2 text-xs font-medium text-muted-foreground">builderhub.terminal</div>
        </div>
        <div className="terminal flex-1 text-sm space-y-1">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={
              line.text.startsWith('✓') ? 'text-green-500 dark:text-green-400' :
              line.text.startsWith('$') ? 'text-primary font-medium' :
              'text-muted-foreground'
            }>
              {line.text || '\u00A0'}
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

const MobileMetrics = () => (
  <Card className="w-full">
    <CardContent className="pt-4 pb-4">
      <div className="grid grid-cols-3 divide-x text-center">
        {[
          { v: '7–10 days', l: 'first dashboard' },
          { v: '10–20 hrs', l: 'saved per week' },
          { v: '$150k+', l: 'vs. in-house hire' },
        ].map((s, i) => (
          <div key={i} className="px-2 py-1">
            <div className="font-bold text-xs sm:text-sm leading-tight">{s.v}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.l}</div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const bullets = [
  'One dashboard. Every data source. Always up to date.',
  'Automated weekly reports that show up before you ask for them.',
  'Revenue attribution that finally matches what actually happened.',
];

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] flex items-center py-16 md:py-28 lg:py-36">
      <SynthwaveBackground isDarkMode={isDarkMode} />

      <div className="relative z-10 w-full container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_480px] lg:gap-12 xl:grid-cols-[1fr_560px] items-center">

          <div className="flex flex-col justify-center space-y-5">
            <Badge variant="outline" className="w-fit text-xs">Managed Data Intelligence · Montreal, CA</Badge>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-[3.5rem]/none">
                Stop running your business on{' '}
                <span className="gradient-text">spreadsheets you don't trust.</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                BuilderHub builds the data layer your company should have had a year ago — and runs it for you so it never breaks, goes stale, or lives in one person's laptop.
              </p>
              <ul className="space-y-2 pt-1">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                  Book a Free 15-min Call <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#services">
                  See what we build <ChevronDown className="h-4 w-4 shrink-0" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              No prep needed · Bring your current tools · Leave with a priority roadmap
            </p>

            <div className="md:hidden">
              <MobileMetrics />
            </div>

            <div className="hidden md:grid grid-cols-3 gap-3 max-w-sm">
              {[
                { v: '7–10 days', l: 'first dashboard live' },
                { v: '10–20 hrs', l: 'saved per week' },
                { v: '$150k+', l: 'vs. in-house hire' },
              ].map((s, i) => (
                <div key={i} className="text-center p-2 rounded-lg bg-background/80 border">
                  <div className="font-bold text-sm leading-tight">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <TerminalMock />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
