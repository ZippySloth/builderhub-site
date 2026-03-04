import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Badge } from '@/Components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const BlogListPage = () => {
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <Badge variant="outline" className="mb-4">Blog</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-3">
            Data insights for growing companies
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
            Practical guides on dashboards, KPIs, automation, and building data infrastructure that actually gets used.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...blogPosts].reverse().map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                </div>
                <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between mt-auto pt-3 border-t">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                </div>
                <Button size="sm" variant="ghost" asChild className="gap-1 shrink-0">
                  <Link to={`/blog/${post.slug}`}>Read <ArrowRight className="h-3 w-3" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
