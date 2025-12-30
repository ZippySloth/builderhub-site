import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Database, ExternalLink, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const CATEGORIES = [
  {
    id: "ai",
    name: "AI",
    subreddits: ["artificial", "chatgpt", "openai", "gpt3", "machinelearning", "langchain", "autogpt"]
  },
  {
    id: "automation",
    name: "Automation",
    subreddits: ["python", "algotrading", "3dprinting", "automation", "rpa", "plc"]
  },
  {
    id: "business",
    name: "Business",
    subreddits: ["entrepreneur", "smallbusiness", "startups", "business", "ecommerce", "digitalmarketing"]
  },
  {
    id: "marketing",
    name: "Marketing",
    subreddits: ["marketing", "content_marketing", "ppc", "socialmedia", "advertising", "seo"]
  },
  {
    id: "markets",
    name: "Markets",
    subreddits: ["stocks", "stockmarket", "investing", "wallstreetbets", "pennystocks", "valueinvesting", "educatedinvesting", "dividends", "baystreetbets"]
  },
  {
    id: "personal-dev",
    name: "Personal Dev",
    subreddits: ["showerthoughts", "getdisciplined", "productivity", "selfimprovement", "getmotivated", "decidingtobebetter"]
  }
];

const ScrapedDatabase = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [techContent, setTechContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      // We use 'published_at' as the sorting column because 'created_at' 
      // does not exist in your table schema.
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("published_at", { ascending: false });

      console.log("📦 Data received:", data);

      if (error) {
        console.error("❌ Supabase fetch error:", error.message);
      } else {
        setTechContent(data || []);
      }
      setLoading(false);
    };
    fetchContent();
  }, []);

  const getPostsForCategory = (categoryId) => {
    const category = CATEGORIES.find(c => c.id === categoryId);
    if (!category || !techContent) return [];

    return techContent
      .filter(item => 
        item.subreddit && 
        category.subreddits.includes(item.subreddit.toLowerCase())
      )
      .slice(0, 3);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 section-animation in-view">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Daily Updates
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              BuildrHub Trendbase
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Access Reddit’s most viral tech, business, and growth content — updated daily.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl py-12 px-4">
          <Tabs defaultValue={activeTab} className="w-full">
            <TabsList className="w-full overflow-x-auto flex-nowrap flex gap-2 md:grid md:grid-cols-6">
              {CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="transition-all"
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {loading ? (
              <div className="py-20 text-center text-muted-foreground">Loading trends...</div>
            ) : (
              CATEGORIES.map((category) => {
                const posts = getPostsForCategory(category.id);
                return (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    {posts.length === 0 ? (
                      <p className="py-12 text-center text-muted-foreground">
                        No recent posts found for {category.name}.
                      </p>
                    ) : (
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((item) => (
                          <Card key={item.reddit_post_id} className="overflow-hidden card-hover">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{item.subreddit}</Badge>
                                <div className="text-xs text-muted-foreground">
                                  {/* Using published_at to match your database schema */}
                                  {dayjs(item.published_at).fromNow()}
                                </div>
                              </div>
                              <CardTitle className="line-clamp-2 text-lg">
                                {item.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <p className="line-clamp-3 text-sm text-muted-foreground">
                                {item.description || "View full post on Reddit."}
                              </p>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Zap className="h-4 w-4 text-yellow-500" />
                                {item.rank_hint || 0} trending rank
                              </div>
                              <a
                                href={item.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                              >
                                Read more
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    )}
                  </TabsContent>
                );
              })
            )}

            <div className="mt-8 flex justify-center">
              <Link to="/viral">
                <Button size="lg" className="gap-1">
                  Access Full Database <Database className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ScrapedDatabase;