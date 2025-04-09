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

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) {
        console.error("❌ Supabase fetch error:", error);
      } else {
        setTechContent(data);
      }
    };
    fetchContent();
  }, []);

  const getPostsForCategory = (categoryId) => {
    const category = CATEGORIES.find(c => c.id === categoryId);
    if (!category) return [];
    
    return techContent
      .filter(item => category.subreddits.includes(item.subreddit?.toLowerCase()))
      .slice(0, 3); // Limit to 3 posts per category
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 section-animation in-view">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse-slow">
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
                  className="transition-all hover:bg-primary/10"
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {CATEGORIES.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {getPostsForCategory(category.id).map((item) => (
                    <Card key={item.id} className="overflow-hidden card-hover">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{item.subreddit}</Badge>
                          <div className="text-xs text-muted-foreground">
                            {dayjs(item.created_at).fromNow()}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2 text-lg">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="line-clamp-3 text-sm text-muted-foreground">
                          {item.description || "No description available."}
                        </p>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          {item.upvotes} upvotes
                        </div>
                        <a
                          href={item.link}
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
              </TabsContent>
            ))}

            <div className="mt-8 flex justify-center">
              <Link to="/viral">
                <Button size="lg" className="gap-1 hover:scale-105 transition-transform">
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