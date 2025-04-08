import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';

const ContactPage = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container max-w-2xl px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse-slow">
            Let's Talk
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-md max-w-xl mx-auto">
            Have a question, proposal, or just want to say hi? We’d love to hear from you.
          </p>
        </div>

        <Card className="shadow-lg border border-border">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                <Textarea id="message" rows="5" placeholder="What can we help you with?" required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactPage;
