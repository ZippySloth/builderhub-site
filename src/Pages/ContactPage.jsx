import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';
import { Mail } from 'lucide-react';
import { supabase } from '@/supabaseClient'; // Import your Supabase client

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const { data, error } = await supabase
        .from('contact_form')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Have a question, proposal, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <Card className="shadow-lg border border-border">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            {submitSuccess ? (
              <div className="text-center p-6">
                <div className="text-green-600 font-medium mb-4">
                  Thank you for your message! We'll get back to you soon.
                </div>
                <Button 
                  onClick={() => setSubmitSuccess(false)}
                  className="w-full"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    rows="5" 
                    placeholder="What can we help you with?" 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                {submitError && (
                  <div className="text-red-600 text-sm">{submitError}</div>
                )}
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
        <div className="flex items-center justify-center gap-2 text-primary pt-12">
          <Mail className="h-5 w-5" />
          <a href="mailto:contact@buildrhub.io" className="hover:underline">
            contact@buildrhub.io
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;