import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 animate-pulse-slow" viewBox="0 0 24 24" fill="none">
            <path d="M..." stroke="currentColor" strokeWidth="2" />
          </svg>
          <p className="text-sm font-medium">© 2025 Buildrhub. All rights reserved.</p>
        </div>

        {/* Center: Home */}
        <nav className="flex gap-4 sm:gap-6">
        <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="text-xs transition-colors hover:text-primary"
>
  Home
</Link>

        </nav>

        {/* Right: Privacy */}
        <div className="flex items-center gap-2">
          <Link
            to="/privacypolicy"
            className="text-xs transition-colors hover:text-primary"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
