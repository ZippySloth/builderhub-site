import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import logoWhite from '../../assets/logo_white.png';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logoWhite} alt="BuilderHub" className="h-7 w-auto mb-3" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Managed data intelligence for growth companies. You own your raw data. I run the intelligence on top of it.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Navigation</p>
            <nav className="flex flex-col gap-2">
              <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:fazio@buildrhub.io"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Fazio at BuilderHub"
              >
                <Mail className="h-4 w-4 shrink-0" />
                fazio@buildrhub.io
              </a>
              <a
                href="https://www.linkedin.com/in/faicalalalawi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Connect with Faiçal on LinkedIn"
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                LinkedIn
              </a>
              <a
                href="https://calendly.com/fazio/audit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-blue-400 transition-colors"
                aria-label="Book a data audit call"
              >
                Book an Audit →
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 BuilderHub · Built in Montreal 🇨🇦
          </p>
          <Link to="/privacypolicy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
