import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import ModeToggle from "@/components/mode-toggle";

import logoBlack from "../../assets/logo_black.png";
import logoWhite from "../../assets/logo_white.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const navLinkClass = (path) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      currentPath === path ? "text-primary font-semibold" : "text-muted-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoBlack} alt="Buildrhub Logo" className="h-8 md:h-10 block dark:hidden" />
          <img src={logoWhite} alt="Buildrhub Logo" className="h-8 md:h-10 hidden dark:block" />
        </Link>

        {/* Center Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
          <Link to="/web" className={navLinkClass("/web")}>
            Web Services
          </Link>
          <Link to="/viral" className={navLinkClass("/viral")}>
            Reddit Database
          </Link>
          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ModeToggle className="w-9 h-9 border rounded-md flex items-center justify-center hover:scale-105 transition-all" />
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger onClick={handleToggle}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="p-6">
                <nav className="flex flex-col gap-6 mt-12 text-base font-medium">
                  <Link to="/web" onClick={handleClose}>
                    Web Services
                  </Link>
                  <Link to="/viral" onClick={handleClose}>
                    Reddit Database
                  </Link>
                  <Link to="/about" onClick={handleClose}>
                    About
                  </Link>
                  <Link to="/contact" onClick={handleClose}>
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
