import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button asChild variant="outline">
          <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Simple markdown-like renderer: ## = h2, **text** = bold, - item = list, \n\n = paragraph
  const renderContent = (content) => {
    return content.trim().split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold mt-8 mb-3">{block.slice(3)}</h2>;
      }
      if (block.startsWith('**') && block.endsWith('**')) {
        return <p key={i} className="font-semibold my-3">{block.slice(2, -2)}</p>;
      }
      // Lines that start with - become a list
      const lines = block.split('\n');
      if (lines.every(l => l.startsWith('- '))) {
        return (
          <ul key={i} className="list-disc list-inside space-y-1 my-4 text-muted-foreground">
            {lines.map((l, j) => <li key={j}>{l.slice(2)}</li>)}
          </ul>
        );
      }
      // Bold inline: **text**
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-muted-foreground leading-relaxed my-4">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      );
    });
  };

  return (
    <article className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> All posts</Link>
          </Button>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
          </div>
        </div>

        <div className="prose-custom">
          {renderContent(post.content)}
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="bg-muted/50 rounded-xl p-6 text-center">
            <h3 className="font-bold text-lg mb-2">Ready to get your data working for you?</h3>
            <p className="text-muted-foreground text-sm mb-4">Book a free 15-min audit. We'll map what's broken and tell you exactly how to fix it.</p>
            <Button asChild>
              <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                Book a Free Audit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
