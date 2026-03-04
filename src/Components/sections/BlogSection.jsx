import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import { Badge } from '@/Components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [...blogPosts].reverse().slice(0, 3);

  return (
    <section id="blog" className="py-14 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <Badge variant="outline" className="mb-3">Blog</Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Insights</h2>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/blog">All posts <ArrowRight className="ml-1 h-3 w-3" /></Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`}>
              <Card className="h-full hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex gap-1.5 mb-2">
                    {p.tags.slice(0, 2).map(t => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}
                  </div>
                  <CardTitle className="text-sm leading-snug">{p.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{p.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
