import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import FadeIn from '../Components/FadeIn';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', tools: '', challenge: '', source: '',
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
      const { error: supaError } = await supabase.from('audit_requests').insert([formData]);
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

  const inputClass = 'w-full glass rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all';

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get a Free <span className="gradient-text">Data Diagnosis</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Tell us about your situation. We will review and reach out within 24 hours.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {success ? (
              <div className="glass rounded-2xl p-8 text-center glow-purple">
                <div className="text-4xl mb-4 text-violet-400">&#10003;</div>
                <h2 className="text-xl font-bold text-white mb-2">Request received</h2>
                <p className="text-muted-foreground">We will review your situation and reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Company *</label>
                  <input type="text" name="company" required value={formData.company} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">What tools do you use?</label>
                  <textarea name="tools" rows={3} value={formData.tools} onChange={handleChange} placeholder="e.g. Stripe, HubSpot, QuickBooks..." className={`${inputClass} resize-none`} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Biggest data challenge?</label>
                  <textarea name="challenge" rows={3} value={formData.challenge} onChange={handleChange} className={`${inputClass} resize-none`} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    How did you hear about us? <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input type="text" name="source" value={formData.source} onChange={handleChange} className={inputClass} />
                </div>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full font-medium text-white bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Request a Diagnosis'}
                </button>
              </form>
            )}

            <p className="text-center text-sm text-muted-foreground mt-8">
              Prefer email? <a href="mailto:contact@buildrhub.io" className="text-violet-400 hover:text-violet-300 transition-colors">contact@buildrhub.io</a>
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
