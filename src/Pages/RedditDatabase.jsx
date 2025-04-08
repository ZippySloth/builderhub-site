import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Database, ExternalLink, Zap } from 'lucide-react';
import { supabase } from '../supabaseClient'; // ✅ Supabase client import

const RedditDatabasePage = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [techContent, setTechContent] = useState([]);

  const categories = ["ai", "automation", "business", "ecommerce", "seo", "marketing"];

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('reddit_posts') // ✅ Use your Supabase table name here
        .select('*');

      if (error) {
        console.error('Supabase fetch error:', error);
      } else {
        setTechContent(data);
      }
    };

    fetchContent();
  }, []);

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
          <Tabs defaultValue={activeTab} className="w-full">
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
                    .filter((item) => item.category === cat)
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden card-hover">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{item.subreddit}</Badge>
                            <div className="text-xs text-muted-foreground">{item.timestamp}</div>
                          </div>
                          <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="line-clamp-3 text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Zap className="h-4 w-4 text-yellow-500" /> {item.upvotes} upvotes
                          </div>
                          <Button variant="ghost" size="sm" className="gap-1 group">
                            Read more
                            <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default RedditDatabasePage;
