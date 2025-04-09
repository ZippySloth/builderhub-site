import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { supabase } from "@/supabaseClient"; // Import your Supabase client

const Joinus = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error: supabaseError } = await supabase
        .from("subscribers")
        .insert([
          { 
            email: email,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (supabaseError) throw supabaseError;

      setSubmitSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Subscription error:", err);
      setError(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 dark:bg-muted/60 section-animation in-view">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Left side: Join Us text and form */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground animate-pulse-slow">
                Join Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Stay at the cutting edge
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Get daily updates on the latest tech trends, tools, and viral content directly in your inbox.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* Email input and button */}
              <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col items-stretch space-y-2">
                {submitSuccess ? (
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <p className="text-green-600 dark:text-green-400">
                      Thank you for subscribing! You'll receive our updates soon.
                    </p>
                    <Button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-2 w-full py-3 bg-white text-black hover:bg-gray-200 transition-transform"
                    >
                      Subscribe Another Email
                    </Button>
                  </div>
                ) : (
                  <>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:ring-2 focus:ring-ring transition-all"
                      required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button 
                      type="submit" 
                      className="w-full py-3 bg-white text-black hover:bg-gray-200 transition-transform"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      By subscribing, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>

          {/* Right side: Contact Information */}
          <div className="w-full max-w-[600px] overflow-hidden rounded-xl border bg-muted/50 dark:bg-muted/60 p-6 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Contact Buildrhub</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Reach out to us directly for collaborations or support.
            </p>
            <p className="text-sm font-medium text-primary">contact@buildrhub.io</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Joinus;