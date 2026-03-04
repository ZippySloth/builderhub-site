import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useReveal } from '../hooks/useReveal';

const ContactPage = () => {
  const [ref, visible] = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tools: '',
    challenge: '',
    source: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: supaError } = await supabase
        .from('audit_requests')
        .insert([formData]);

      if (supaError) throw supaError;
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', tools: '', challenge: '', source: '' });
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 min-h-screen">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get a Free Data Diagnosis
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your situation. We'll review and reach out within 24 hours to schedule a call — no pitch, just a diagnostic.
            </p>
          </div>

          {success ? (
            <div className="bg-card border border-accent/30 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-xl font-bold text-foreground mb-2">Request received</h2>
              <p className="text-muted-foreground">
                Got it. We'll review your situation and reach out within 24 hours to schedule a call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              {/* Tools */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What tools do you use?
                </label>
                <textarea
                  name="tools"
                  rows={3}
                  value={formData.tools}
                  onChange={handleChange}
                  placeholder="e.g. Stripe, HubSpot, QuickBooks, Postgres..."
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              {/* Challenge */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What's your biggest data challenge?
                </label>
                <textarea
                  name="challenge"
                  rows={3}
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              {/* Source */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How did you hear about BuilderHub?{' '}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Request a Diagnosis'}
              </button>
            </form>
          )}

          <p className="text-center text-sm text-muted-foreground mt-8">
            Prefer email?{' '}
            <a
              href="mailto:contact@buildrhub.io"
              className="text-primary hover:text-blue-400 transition-colors"
            >
              contact@buildrhub.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
