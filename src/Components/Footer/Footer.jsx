import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/logo_white.png';

const Footer = () => (
  <footer className="border-t border-white/5 bg-[#06060f] py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12">
        <div className="col-span-2 md:col-span-1">
          <img src={logoWhite} alt="BuilderHub" className="h-7 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Managed data intelligence for growth companies.
          </p>
        </div>

        <div>
          <p className="font-semibold text-sm text-white mb-4">Services</p>
          <div className="flex flex-col gap-3">
            <Link to="/dashboards" className="text-sm text-muted-foreground hover:text-white transition-colors">Dashboards</Link>
            <Link to="/data-pipelines" className="text-sm text-muted-foreground hover:text-white transition-colors">Data Pipelines</Link>
            <Link to="/ai-agents" className="text-sm text-muted-foreground hover:text-white transition-colors">AI Agents</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-sm text-white mb-4">Company</p>
          <div className="flex flex-col gap-3">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-white transition-colors">Pricing</Link>
            <Link to="/industries" className="text-sm text-muted-foreground hover:text-white transition-colors">Industries</Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-white transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-sm text-white mb-4">Legal</p>
          <div className="flex flex-col gap-3">
            <Link to="/privacypolicy" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link>
            <a href="mailto:contact@buildrhub.io" className="text-sm text-muted-foreground hover:text-white transition-colors">contact@buildrhub.io</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center">
        <p className="text-xs text-muted-foreground">&copy; 2026 BuilderHub &middot; Montreal, Canada</p>
      </div>
    </div>
  </footer>
);

export default Footer;
