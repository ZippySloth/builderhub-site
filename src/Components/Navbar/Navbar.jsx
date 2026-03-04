import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import ModeToggle from "@/Components/mode-toggle";
import { Button } from "@/Components/ui/button";
import logoBlack from "../../assets/logo_black.png";
import logoWhite from "../../assets/logo_white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClose = () => setIsOpen(false);

  const navLinkClass = (hash) =>
    `text-sm font-medium transition-colors hover:text-primary text-muted-foreground`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <img src={logoBlack} alt="BuilderHub" className="h-8 md:h-10 block dark:hidden" />
          <img src={logoWhite} alt="BuilderHub" className="h-8 md:h-10 hidden dark:block" />
        </Link>

        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          <a href="/#services" className={navLinkClass()}>Services</a>
          <a href="/#how-it-works" className={navLinkClass()}>How It Works</a>
          <a href="/#who" className={navLinkClass()}>Who We Serve</a>
          <a href="/#faq" className={navLinkClass()}>FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button size="sm" asChild className="hidden md:inline-flex">
            <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
              Book an Audit
            </a>
          </Button>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger onClick={() => setIsOpen(!isOpen)}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="p-6">
                <nav className="flex flex-col gap-6 mt-12 text-base font-medium">
                  <a href="/#services" onClick={handleClose}>Services</a>
                  <a href="/#how-it-works" onClick={handleClose}>How It Works</a>
                  <a href="/#who" onClick={handleClose}>Who We Serve</a>
                  <a href="/#faq" onClick={handleClose}>FAQ</a>
                  <Link to="/contact" onClick={handleClose}>Contact</Link>
                </nav>
                <div className="mt-8">
                  <Button className="w-full" asChild>
                    <a href="https://calendly.com/fazio/audit" target="_blank" rel="noopener noreferrer">
                      Book an Audit
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
