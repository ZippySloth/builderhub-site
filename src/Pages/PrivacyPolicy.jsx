import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl py-12 mx-auto">
      <div className="space-y-8 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: April 8, 2025</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
            <p>
              BuildrHub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              your personal information is collected, used, and disclosed by BuildrHub.
            </p>
            <p>
              This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service")
              alongside our application, BuildrHub. By accessing or using our Service, you signify that you have read,
              understood, and agree to our collection, storage, use, and disclosure of your personal information as
              described in this Privacy Policy and our Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Definitions and Key Terms</h2>
            <p>
              To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are
              referenced, are strictly defined as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookie:</strong> Small amount of data saved by your browser to remember you.</li>
              <li><strong>Company:</strong> Refers to BuildrHub, the party responsible for your information.</li>
              <li><strong>Country:</strong> Canada.</li>
              <li><strong>Customer:</strong> The person or organization using our Service.</li>
              <li><strong>Device:</strong> Any internet-connected device (phone, tablet, computer).</li>
              <li><strong>Service:</strong> Refers to the BuildrHub services described on this site.</li>
              <li><strong>Third-party service:</strong> Advertisers or partners that support our content or services.</li>
              <li><strong>Website:</strong> BuildrHub's website at buildrhub.com.</li>
              <li><strong>You:</strong> A user or customer of BuildrHub.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Information We Collect</h2>
            <p>We collect information when you register, place an order, subscribe, or fill out a form:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name / Username</li>
              <li>Email Addresses</li>
              <li>Password</li>
              <li>Billing Addresses</li>
              <li>Payment Information</li>
              <li>Usage Data</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate and maintain our website</li>
              <li>Improve and personalize your experience</li>
              <li>Understand how users interact with the site</li>
              <li>Develop new features and services</li>
              <li>Communicate updates, support, or promotional content</li>
              <li>Send emails</li>
              <li>Prevent fraud</li>
              <li>Process payments and refunds</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Log Files</h2>
            <p>
              We log visits to our site for analytics and security. Logged info includes IPs, browser type, ISP,
              timestamps, and referral pages — none of which are linked to personal identities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Cookies and Web Beacons</h2>
            <p>
              We use cookies to improve your experience and remember your preferences. This helps us tailor content to
              you based on your browser type or prior visits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Third-Party Privacy Policies</h2>
            <p>
              Our Privacy Policy does not apply to third-party sites or advertisers. Check their policies for more
              details on their practices and how to opt-out.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">GDPR Data Protection Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request copies of your personal data.</li>
              <li><strong>Rectification:</strong> Request corrections or completions.</li>
              <li><strong>Erasure:</strong> Request deletion of your data.</li>
              <li><strong>Restrict Processing:</strong> Request limited use of your data.</li>
              <li><strong>Object to Processing:</strong> Oppose how we use your data.</li>
              <li><strong>Data Portability:</strong> Transfer your data to another provider.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy at any time. All updates will be posted here and take effect
              immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
            <p>For questions or suggestions, contact us at:</p>
            <div className="pt-2">
              <p>
                Email:{" "}
                <a href="mailto:contact@buildrhub.io" className="text-primary hover:underline">
                  contact@buildrhub.io
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="border-t pt-6">
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
