import React from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/logo_black.png';
import logoWhite from '../../assets/logo_white.png';

const Footer = () => (
  <footer className="border-t bg-muted/30 py-10 md:py-12">
    <div className="container mx-auto px-4 md:px-6">

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">

        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <img src={logoBlack} alt="BuilderHub" className="h-7 block dark:hidden mb-3" />
          <img src={logoWhite} alt="BuilderHub" className="h-7 hidden dark:block mb-3" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Managed data intelligence for growth companies. Montreal 🇨🇦
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="font-semibold text-sm mb-3">Services</p>
          <div className="flex flex-col gap-2">
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Data Audit</a>
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Foundation Build</a>
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Managed Retainer</a>
            <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Agents</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="font-semibold text-sm mb-3">Company</p>
          <div className="flex flex-col gap-2">
            <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <p className="font-semibold text-sm mb-3">Resources</p>
          <div className="flex flex-col gap-2">
            <a href="/llms.txt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">llms.txt</a>
            <a href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sitemap</a>
            <Link to="/privacypolicy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <a href="mailto:contact@buildrhub.io" className="text-sm text-muted-foreground hover:text-foreground transition-colors">contact@buildrhub.io</a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p className="text-xs text-muted-foreground">© 2026 BuilderHub</p>
        <p className="text-xs text-muted-foreground">Managed Data Intelligence for Growth Companies</p>
      </div>

    </div>
  </footer>
);

export default Footer;
