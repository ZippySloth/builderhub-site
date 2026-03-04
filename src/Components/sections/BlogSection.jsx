import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import { Badge } from '@/Components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const latestPosts = [...blogPosts].reverse().slice(0, 3);

  return (
    <section id="blog" className="py-12 md:py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <Badge variant="outline" className="mb-3">Blog</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Data insights
            </h2>
            <p className="text-muted-foreground mt-1">
              Practical guides for companies making sense of their data.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link to="/blog">All posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader className="flex-1">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {post.tags.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                </div>
                <CardTitle className="text-base leading-snug">{post.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-3 border-t">
                <Button size="sm" variant="ghost" asChild className="gap-1 -ml-2">
                  <Link to={`/blog/${post.slug}`}>Read more <ArrowRight className="h-3 w-3" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
