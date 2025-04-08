import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Database, ExternalLink, Zap } from 'lucide-react';

// NO "use client"; // not needed in Vite + React

const ScrapedDatabase = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const techContent = [
    { id: 1, category: 'ai', subreddit: 'r/artificial', timestamp: '12 hours ago', title: 'New breakthrough in generative AI models shows promising results for creative applications', description: 'Researchers have developed a new approach to generative AI that significantly improves creative outputs while reducing computational requirements. The model demonstrates...', upvotes: '2.4k', isViral: true },
    { id: 2, category: 'automation', subreddit: 'r/automation', timestamp: '8 hours ago', title: 'How I automated my entire content creation workflow and saved 20 hours per week', description: 'I built a custom automation system that handles everything from research to publishing...', upvotes: '1.8k', isViral: true },
    // ... rest of the items
  ];

  const categories = ['ai', 'automation', 'business', 'ecommerce', 'seo', 'marketing'];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 section-animation in-view">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse-slow">
              Daily Updates
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Viral Tech Content Database</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Access the most viral posts from Reddit on AI, automation, business, e-commerce, SEO, and marketing.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl py-12 px-4">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="w-full overflow-x-auto flex-nowrap flex gap-2 md:grid md:grid-cols-6">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="transition-all hover:bg-primary/10"
                  onClick={() => setActiveTab(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {techContent
                    .filter(item => item.category === cat)
                    .map(item => (
                      <Card key={item.id} className="overflow-hidden card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{item.subreddit}</Badge>
                            <div className="text-xs text-muted-foreground">{item.timestamp}</div>
                          </div>
                          <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="line-clamp-3 text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Zap className="h-4 w-4 text-yellow-500" /> {item.upvotes} upvotes
                          </div>
                          <Button variant="ghost" size="sm" className="gap-1 group">
                            Read more <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="gap-1 hover:scale-105 transition-transform">
                Access Full Database <Database className="h-4 w-4" />
              </Button>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ScrapedDatabase;
