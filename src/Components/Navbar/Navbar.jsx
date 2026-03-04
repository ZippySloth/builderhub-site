import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import ModeToggle from "@/Components/mode-toggle";
import { Button } from "@/Components/ui/button";
import logoBlack from "../../assets/logo_black.png";
import logoWhite from "../../assets/logo_white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <img src={logoBlack} alt="BuilderHub" className="h-8 md:h-10 block dark:hidden" />
          <img src={logoWhite} alt="BuilderHub" className="h-8 md:h-10 hidden dark:block" />
        </Link>

        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          <a href="/#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
          <a href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="/#proof" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Results</a>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Blog</Link>
          <a href="/#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            size="sm"
            asChild
            className={`hidden md:inline-flex transition-all duration-300 ${scrolled ? 'opacity-100 scale-100' : 'opacity-70 scale-95'}`}
          >
            <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
              {scrolled ? 'Book a Free Audit →' : 'Book an Audit'}
            </a>
          </Button>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button onClick={() => setIsOpen(!isOpen)} className="p-1">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="p-6">
                <nav className="flex flex-col gap-6 mt-12 text-base font-medium">
                  <a href="/#services" onClick={handleClose}>Services</a>
                  <a href="/#how-it-works" onClick={handleClose}>How It Works</a>
                  <a href="/#proof" onClick={handleClose}>Results</a>
                  <Link to="/blog" onClick={handleClose}>Blog</Link>
                  <a href="/#faq" onClick={handleClose}>FAQ</a>
                  <Link to="/contact" onClick={handleClose}>Contact</Link>
                </nav>
                <div className="mt-8">
                  <Button className="w-full" asChild>
                    <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                      Book a Free Audit
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
