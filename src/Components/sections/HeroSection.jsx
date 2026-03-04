import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent } from '@/Components/ui/card';
import SynthwaveBackground from '../SynthwaveBackground';
import { useTheme } from '../../context/ThemeContext';

const terminalLines = [
  { text: '$ connecting sources...', delay: 300 },
  { text: '✓ stripe', delay: 800 },
  { text: '✓ hubspot', delay: 1100 },
  { text: '✓ quickbooks', delay: 1400 },
  { text: '$ building models...', delay: 1900 },
  { text: '✓ revenue_by_month', delay: 2400 },
  { text: '✓ churn_cohorts', delay: 2700 },
  { text: '✓ marketing_attribution', delay: 3000 },
  { text: '', delay: 3400 },
  { text: '✓ dashboard live', delay: 3800 },
];

const TerminalMock = () => {
  const [lines, setLines] = useState(0);
  useEffect(() => {
    const t = terminalLines.map((l, i) => setTimeout(() => setLines(i + 1), l.delay));
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full rounded-xl border bg-muted/50 p-2">
      <div className="rounded-lg bg-background p-4 min-h-[240px]">
        <div className="flex items-center gap-2 border-b pb-2 mb-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-muted-foreground">terminal</span>
        </div>
        <div className="font-mono text-sm space-y-1">
          {terminalLines.slice(0, lines).map((l, i) => (
            <div key={i} className={l.text.startsWith('✓') ? 'text-green-500' : l.text.startsWith('$') ? 'text-primary font-medium' : 'text-muted-foreground'}>
              {l.text || '\u00A0'}
            </div>
          ))}
          {lines < terminalLines.length && <span className="inline-block w-2 h-4 bg-primary animate-blink" />}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="relative w-full overflow-hidden min-h-[580px] flex items-center py-14 md:py-24 lg:py-32">
      <SynthwaveBackground isDarkMode={isDarkMode} />

      <div className="relative z-10 w-full container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] items-center">

          <div className="space-y-6">
            <Badge variant="outline" className="text-xs">Montreal, CA</Badge>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
              You have the data.<br />
              <span className="gradient-text">You just can't use it.</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              We build dashboards, automate reports, and run your entire data stack — so you stop pulling numbers manually and start making decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                  Book a free call <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">See pricing <ChevronDown className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              15 minutes. No prep. We'll tell you exactly what's broken.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 max-w-xs pt-2">
              {[
                { n: '7–10', u: 'days', l: 'to first dashboard' },
                { n: '10–20', u: 'hrs', l: 'saved per week' },
                { n: '$150k+', u: '', l: 'vs. in-house hire' },
              ].map((s, i) => (
                <div key={i} className="text-center p-2 rounded-md bg-background/70 border">
                  <div className="font-bold text-sm">{s.n}<span className="text-xs font-normal text-muted-foreground">{s.u && ` ${s.u}`}</span></div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{s.l}</div>
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
