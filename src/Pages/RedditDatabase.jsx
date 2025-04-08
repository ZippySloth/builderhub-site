import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { ExternalLink, Zap, Flame } from 'lucide-react';
import { supabase } from '../supabaseClient';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const CATEGORIES = [
  {
    id: "ai",
    name: "AI",
    subreddits: ["artificial", "ChatGPT", "OpenAI", "GPT3", "MachineLearning", "LangChain", "AutoGPT"]
  },
  {
    id: "automation",
    name: "Automation",
    subreddits: ["Python", "algotrading", "3Dprinting", "automation", "RPA", "PLC"]
  },
  {
    id: "business",
    name: "Business",
    subreddits: ["Entrepreneur", "smallbusiness", "startups", "business"]
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    subreddits: ["ecommerce", "digitalmarketing", "SEO"]
  },
  {
    id: "marketing",
    name: "Marketing",
    subreddits: ["marketing", "content_marketing", "PPC", "socialmedia", "advertising"]
  },
  {
    id: "personal-dev",
    name: "Personal Dev",
    subreddits: ["Showerthoughts", "GetDisciplined", "productivity", "selfimprovement", "GetMotivated", "DecidingToBeBetter"]
  }
];

const RedditDatabasePage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [techContent, setTechContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByPopular, setSortByPopular] = useState(false);
  const [uniquePosts, setUniquePosts] = useState(new Set());

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase fetch error:', error);
      } else {
        // Remove duplicates by link
        const uniqueData = [];
        const seenLinks = new Set();
        
        data.forEach(post => {
          if (!seenLinks.has(post.link)) {
            seenLinks.add(post.link);
            uniqueData.push(post);
          }
        });

        setTechContent(uniqueData);
        setUniquePosts(seenLinks);
      }
      setIsLoading(false);
    };

    fetchContent();
  }, []);

  const filteredContent = () => {
    let results = [...techContent];
    
    // Apply search filter
    if (searchQuery) {
      results = results.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.subreddit.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter if not "all"
    if (activeTab !== "all") {
      const category = CATEGORIES.find(c => c.id === activeTab);
      if (category) {
        results = results.filter(item => 
          category.subreddits.includes(item.subreddit)
        );
      }
    }
    
    // Apply popularity sort
    if (sortByPopular) {
      results.sort((a, b) => b.upvotes - a.upvotes);
    } else {
      results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    
    return results;
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse-slow">
              Daily Updates
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tech Content Database</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Curated posts from Reddit on tech topics
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl py-12 px-4">
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <Tabs defaultValue={activeTab} className="w-full md:w-auto">
                <TabsList className="flex-wrap">
                  <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                    All Posts
                  </TabsTrigger>
                  {CATEGORIES.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      onClick={() => setActiveTab(category.id)}
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              
              <Button 
                variant={sortByPopular ? "default" : "outline"} 
                onClick={() => setSortByPopular(!sortByPopular)}
                className="gap-2"
              >
                <Flame className="h-4 w-4" />
                {sortByPopular ? "Showing Popular" : "Sort by Popularity"}
              </Button>
            </div>
            
            <Input
              placeholder="Search all posts..."
              className="w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden animate-pulse">
                  <CardHeader className="pb-2">
                    <div className="h-6 w-1/3 rounded bg-muted" />
                    <div className="h-6 w-full rounded bg-muted mt-2" />
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="h-16 w-full rounded bg-muted" />
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="h-4 w-1/4 rounded bg-muted" />
                    <div className="h-8 w-20 rounded bg-muted" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <>
              {filteredContent().length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  {searchQuery ? "No matching posts found" : "No posts available"}
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredContent().map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{item.subreddit}</Badge>
                          <div className="text-xs text-muted-foreground">
                            {dayjs(item.created_at).fromNow()}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="line-clamp-3 text-sm text-muted-foreground">
                          {item.description || "No description available."}
                        </p>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="h-4 w-4 text-yellow-500" /> {item.upvotes} upvotes
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1 group" asChild>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            Read more
                            <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
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
    </section>
  );
};

export default RedditDatabasePage;