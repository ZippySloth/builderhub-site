import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, BarChart3, GitBranch, Zap } from "lucide-react";
import logoWhite from "../../assets/logo_white.png";

const serviceLinks = [
  { to: '/dashboards', icon: BarChart3, label: 'Dashboards', desc: 'Live, auto-updating dashboards' },
  { to: '/data-pipelines', icon: GitBranch, label: 'Data Pipelines', desc: 'Connect and sync all your tools' },
  { to: '/ai-agents', icon: Zap, label: 'AI Agents', desc: 'Alerts, reports, and queries' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const close = () => { setMobileOpen(false); setDropdownOpen(false); };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${mobileOpen ? 'bg-background border-b border-white/5' : scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center" onClick={close}>
          <img src={logoWhite} alt="BuilderHub" className="h-8 md:h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass rounded-xl p-2">
                {serviceLinks.map(({ to, icon: Icon, label, desc }) => (
                  <Link key={to} to={to} onClick={close} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors">
                    <Icon className="h-5 w-5 text-violet-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Pricing</Link>
          <Link to="/industries" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Industries</Link>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/demo"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 transition-all"
          >
            Book a Demo →
          </Link>
          <button className="md:hidden p-1 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background backdrop-blur-xl z-40">
          <nav className="flex flex-col gap-6 p-8 text-lg font-medium">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Services</p>
            {serviceLinks.map(({ to, icon: Icon, label }) => (
              <Link key={to} to={to} onClick={close} className="flex items-center gap-3 text-white hover:text-violet-400 transition-colors pl-2">
                <Icon className="h-5 w-5 text-violet-400" /> {label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4" />
            <Link to="/pricing" onClick={close} className="text-white hover:text-violet-400 transition-colors">Pricing</Link>
            <Link to="/industries" onClick={close} className="text-white hover:text-violet-400 transition-colors">Industries</Link>
            <Link to="/blog" onClick={close} className="text-white hover:text-violet-400 transition-colors">Blog</Link>
            <Link to="/contact" onClick={close} className="text-white hover:text-violet-400 transition-colors">Contact</Link>
            <Link
              to="/demo"
              onClick={close}
              className="mt-4 text-center px-6 py-3 text-white rounded-full bg-gradient-to-r from-violet-600 to-purple-500"
            >
              Book a Demo →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
