// src/Pages/ServicesPage.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Search,
  X,
  Smartphone,
  Rocket,
  Clock,
  Store,
  Users,
  CreditCard,
  HeartHandshake,
} from "lucide-react";

import { Button } from "../Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ui/tabs";
import { Badge } from "../Components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../Components/ui/accordion";
import ConsultationForm from "../Components/ConsultationForm/ConsultationForm";

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  // Handle scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = window.scrollY + viewportHeight / 2;

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Setup intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll(".section-animation");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Handle scroll to section
  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      window.scrollTo({
        top: sectionsRef.current[index].offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="services-page">
      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setShowConsultationForm(false)}
          />
          <div className="relative z-50 w-full max-w-md">
            <ConsultationForm onClose={() => setShowConsultationForm(false)} />
          </div>
        </div>
      )}

      {/* Navigation indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index ? "bg-primary scale-150" : "bg-muted hover:bg-primary/50"
            }`}
            onClick={() => scrollToSection(index)}
            aria-label={`Scroll to section ${index + 1}`}
          />
        ))}
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="relative w-full min-h-[90vh] py-12 md:py-24 lg:py-32 xl:py-48 section-animation overflow-hidden flex items-center justify-center"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.05))",
          }}
        >
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 animate-fadeIn">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground">Small Business Websites</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    A Professional Website <br className="hidden sm:inline" />
                    <span className="text-primary">Without the Headaches</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    No technical skills needed. We handle everything from design to maintenance so you can focus on
                    running your business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    onClick={() => setShowConsultationForm(true)}
                    className="gap-1 hover:scale-105 transition-transform group"
                  >
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>All-inclusive • $200/month • No technical skills needed</span>
                </div>
              </div>
              <div className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border bg-muted/50 p-2 animate-float">
                <div className="flex h-full w-full flex-col rounded-lg bg-background p-4">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <div className="ml-2 text-xs font-medium">yourbusiness.com</div>
                  </div>
                  <div className="flex-1 p-2 overflow-hidden">
                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-2">
                        <div className="h-8 bg-muted/50 rounded-md w-3/4"></div>
                        <div className="h-4 bg-muted/30 rounded-md w-1/2"></div>
                        <div className="h-4 bg-muted/30 rounded-md w-5/6"></div>
                        <div className="h-10 bg-primary/80 rounded-md w-1/3 mt-4"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="aspect-video bg-muted/40 rounded-md"></div>
                        <div className="aspect-video bg-muted/40 rounded-md"></div>
                        <div className="aspect-video bg-muted/40 rounded-md"></div>
                      </div>
                      <div className="space-y-2 mt-4">
                        <div className="h-4 bg-muted/30 rounded-md w-full"></div>
                        <div className="h-4 bg-muted/30 rounded-md w-5/6"></div>
                        <div className="h-4 bg-muted/30 rounded-md w-4/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <ArrowRight className="h-6 w-6 rotate-90" />
          </div>
        </section>

        {/* Rest of your existing sections (Pain Points, Benefits, Comparison, Pricing, FAQ, CTA) */}
        {/* ... */}

      </main>
    </div>
  );
};

export default ServicesPage;