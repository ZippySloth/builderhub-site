import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { ExternalLink, Zap, Flame, Clock, ChevronDown, ArrowUp } from 'lucide-react';
import { supabase } from '../supabaseClient';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
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

const RedditDatabasePage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [techContent, setTechContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        // FIXED: Changed 'created_at' to 'published_at'
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('published_at', { ascending: false });

        if (error) throw error;

        // FIXED: Using 'permalink' instead of 'link' to match scraper schema
        const uniquePosts = (data || []).reduce((acc, post) => {
          if (!acc.some(p => p.permalink === post.permalink)) {
            acc.push(post);
          }
          return acc;
        }, []);

        setTechContent(uniquePosts);
      } catch (error) {
        console.error('❌ Error fetching posts:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredContent = () => {
    let results = [...techContent];
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(item => 
        item.title?.toLowerCase().includes(query) || 
        item.subreddit?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query)
      );
    }
    
    if (activeTab !== "all") {
      const category = CATEGORIES.find(c => c.id === activeTab);
      if (category) {
        results = results.filter(item => 
          item.subreddit && 
          category.subreddits.includes(item.subreddit.toLowerCase())
        );
      }
    }
    
    switch(sortBy) {
      case "popular":
        // FIXED: Using 'rank_hint' as the popularity metric
        return [...results].sort((a, b) => (b.rank_hint || 0) - (a.rank_hint || 0));
      case "newest":
      default:
        // FIXED: Sorting logic uses 'published_at'
        return [...results].sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    }
  };

  const getPostCountForCategory = (categoryId) => {
    if (categoryId === "all") return techContent.length;
    const category = CATEGORIES.find(c => c.id === categoryId);
    return techContent.filter(post => 
      post.subreddit && category.subreddits.includes(post.subreddit.toLowerCase())
    ).length;
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Trendbase Explorer
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Full Viral Feed</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Deep dive into historical trends across {techContent.length} analyzed posts.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl py-12 px-4">
          <div className="mb-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
            <Tabs defaultValue={activeTab} className="w-full lg:w-auto">
              <TabsList className="flex-wrap h-auto bg-muted/50">
                <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                  All ({techContent.length})
                </TabsTrigger>
                {CATEGORIES.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id} onClick={() => setActiveTab(cat.id)}>
                    {cat.name} ({getPostCountForCategory(cat.id)})
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            <div className="flex gap-3 w-full lg:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 shrink-0">
                    {sortBy === "newest" ? <Clock className="h-4 w-4" /> : <Flame className="h-4 w-4" />}
                    {sortBy === "newest" ? "Newest" : "Popular"}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy("newest")}>Newest</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("popular")}>Popular</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Input
                placeholder="Search keywords..."
                className="max-w-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          ) : (
            <>
              {filteredContent().length === 0 ? (
                <div className="text-center py-20 text-muted-foreground bg-muted/20 rounded-xl">
                  {searchQuery ? `No results found for "${searchQuery}"` : "Database is currently empty."}
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredContent().map((item) => (
                    <Card key={item.reddit_post_id} className="overflow-hidden hover:shadow-lg transition-all border-muted/50">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="font-mono text-[10px]">
                            r/{item.subreddit}
                          </Badge>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {dayjs(item.published_at).fromNow()}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2 text-lg leading-tight mt-2">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="line-clamp-3 text-sm text-muted-foreground">
                          {item.description || "View full discussion on Reddit."}
                        </p>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between pt-0 border-t border-muted/30 mt-auto">
                        <div className="flex items-center gap-2 text-sm font-medium text-yellow-600 dark:text-yellow-500">
                          <Zap className="h-4 w-4" /> 
                          {item.rank_hint || 0}
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1" asChild>
                          <a href={item.permalink} target="_blank" rel="noopener noreferrer">
                            Visit Post <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-4"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </section>
  );
};

export default RedditDatabasePage;