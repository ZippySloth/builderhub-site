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

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  // Handle scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
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

    // Get all sections with the section-animation class
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
                  <Button size="lg" className="gap-1 hover:scale-105 transition-transform">
                    Book Free Consultation{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-1 hover:scale-105 transition-transform">
                    See Examples
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

        {/* Pain Points Section */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="relative w-full py-24 lg:py-32 section-animation overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.1))",
          }}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary text-primary-foreground">Common Frustrations</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tired of Website Headaches?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a small business owner, you shouldn't have to deal with these common website problems.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <X className="h-6 w-6 mb-2 text-red-500" />,
                  title: "DIY Website Frustration",
                  description:
                    "Wasting hours trying to figure out confusing website builders and still not getting the results you want",
                },
                {
                  icon: <X className="h-6 w-6 mb-2 text-red-500" />,
                  title: "Outdated & Unprofessional",
                  description:
                    "An old or amateur-looking website that turns away potential customers and hurts your credibility",
                },
                {
                  icon: <X className="h-6 w-6 mb-2 text-red-500" />,
                  title: "Hidden Costs",
                  description: "Surprise fees for plugins, themes, hosting, and maintenance that keep adding up",
                },
                {
                  icon: <X className="h-6 w-6 mb-2 text-red-500" />,
                  title: "Technical Nightmares",
                  description: "Dealing with updates, security issues, and technical problems you don't understand",
                },
                {
                  icon: <X className="h-6 w-6 mb-2 text-red-500" />,
                  title: "Poor Mobile Experience",
                  description:
                    "Websites that look broken on phones and tablets, where most of your customers are browsing",
                },
                {
                  icon: <X className="h-6 w-6 mb-2 text-red-500" />,
                  title: "Invisible to Customers",
                  description:
                    "Not showing up in Google searches because your website isn't optimized for search engines",
                },
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden hover-card border-red-500/10">
                  <CardHeader className="pb-2">
                    {item.icon}
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="relative w-full py-24 lg:py-32 section-animation overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.15))",
          }}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary text-primary-foreground">Our Solution</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  A Website That Works For Your Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We handle everything so you can focus on what you do best - running your business.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Store className="h-6 w-6 mb-2 text-primary" />,
                  title: "Professional Image",
                  description: "A custom website that reflects your brand and impresses your customers",
                },
                {
                  icon: <Smartphone className="h-6 w-6 mb-2 text-primary" />,
                  title: "Works on All Devices",
                  description: "Perfect on phones, tablets, and computers - where your customers are looking",
                },
                {
                  icon: <Users className="h-6 w-6 mb-2 text-primary" />,
                  title: "Brings in Customers",
                  description: "Designed to convert visitors into paying customers for your business",
                },
                {
                  icon: <Rocket className="h-6 w-6 mb-2 text-primary" />,
                  title: "Found on Google",
                  description: "Built with SEO best practices so customers can find you online",
                },
                {
                  icon: <HeartHandshake className="h-6 w-6 mb-2 text-primary" />,
                  title: "Ongoing Support",
                  description: "Regular updates and a team that's always there when you need help",
                },
                {
                  icon: <CreditCard className="h-6 w-6 mb-2 text-primary" />,
                  title: "Simple Monthly Fee",
                  description: "One predictable payment with no surprise costs or hidden fees",
                },
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden hover-card border-primary/10">
                  <CardHeader className="pb-2">
                    {item.icon}
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="relative w-full py-24 lg:py-32 section-animation overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.2))",
          }}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary text-primary-foreground">The Difference</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Our Approach Works Better</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how our service compares to DIY website builders and template-based solutions.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                  <TabsTrigger value="experience" className="transition-all hover:bg-primary/10">
                    Experience
                  </TabsTrigger>
                  <TabsTrigger value="support" className="transition-all hover:bg-primary/10">
                    Support
                  </TabsTrigger>
                  <TabsTrigger value="results" className="transition-all hover:bg-primary/10">
                    Results
                  </TabsTrigger>
                  <TabsTrigger value="cost" className="transition-all hover:bg-primary/10">
                    Cost
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="experience" className="mt-6 space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="overflow-hidden border-green-500/20">
                      <CardHeader className="pb-2 bg-green-500/5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                            Our Service
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">We Handle Everything</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>No technical skills needed - we do it all</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Simple consultation process to understand your needs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>We handle design, content, and technical details</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Ongoing maintenance with no work from you</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-red-500/20">
                      <CardHeader className="pb-2 bg-red-500/5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                            DIY Website Builders
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">You Do All The Work</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Steep learning curve even with "easy" builders</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Hours spent figuring out how to make changes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>You're responsible for design decisions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>You handle all updates and maintenance</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="support" className="mt-6 space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="overflow-hidden border-green-500/20">
                      <CardHeader className="pb-2 bg-green-500/5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                            Our Service
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Real Human Support</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Direct contact with your dedicated support person</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Quick response times (usually same day)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>We make content updates for you (5 per month)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Proactive monitoring and maintenance</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-red-500/20">
                      <CardHeader className="pb-2 bg-red-500/5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                            DIY Website Builders
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Limited or Expensive Support</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Generic help articles or chatbots</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Long wait times for customer service</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>You make all updates yourself</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Premium support costs extra</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="results" className="mt-6 space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="overflow-hidden border-green-500/20">
                      <CardHeader className="pb-2 bg-green-500/5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                            Our Service
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Business Results</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Professional design that builds customer trust</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Optimized to convert visitors into customers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Built for local SEO to attract nearby customers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Fast loading speeds that keep visitors engaged</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-red-500/20">
                      <CardHeader className="pb-2 bg-red-500/5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                            DIY Website Builders
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Amateur Results</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Cookie-cutter design that looks like everyone else</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Not optimized for customer conversion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Basic SEO that doesn't target local customers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Slow loading with bloated code and plugins</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="cost" className="mt-6 space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="overflow-hidden border-green-500/20">
                      <CardHeader className="pb-2 bg-green-500/5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                            Our Service
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Transparent Pricing</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>One simple monthly fee ($200/month)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Includes design, hosting, and maintenance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>No hidden fees or surprise costs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>Predictable budget for your business</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-red-500/20">
                      <CardHeader className="pb-2 bg-red-500/5">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                            DIY Website Builders
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">Hidden Costs Add Up</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Base price plus add-ons for essential features</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Extra costs for premium themes and plugins</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Separate fees for domain, email, and SSL</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 mt-0.5" />
                            <span>Expensive developer help when you get stuck</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="relative w-full py-24 lg:py-32 section-animation overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.15))",
          }}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground">All-Inclusive Package</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">One Simple Price</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Everything your small business needs for a professional online presence.
                  </p>
                </div>
              </div>

              <Card className="overflow-hidden border-primary hover-card">
                <CardHeader className="bg-primary text-primary-foreground text-center py-8">
                  <CardTitle className="text-3xl">Small Business Website Package</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-lg">
                    Professional website with ongoing support
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-center items-center mb-6">
                    <span className="text-4xl font-bold">$200</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>

                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Professional custom website design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Mobile-friendly on all devices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Local SEO optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Secure hosting included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Regular backups and security updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Content updates (up to 5 per month)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Dedicated support person</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Monthly performance report</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center text-sm text-muted-foreground">12-month minimum commitment</div>
                </CardContent>
                <CardFooter className="flex justify-center p-6 pt-0">
                  <Button size="lg" className="w-full hover:scale-105 transition-transform">
                    Book Free Consultation
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={(el) => (sectionsRef.current[5] = el)}
          className="relative w-full py-24 lg:py-32 section-animation overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.05))",
          }}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary text-primary-foreground">FAQ</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Common Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about our small business website service.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Do I need any technical skills to use this service?",
                    answer:
                      "Not at all! That's the whole point of our service. We handle all the technical aspects of your website so you don't have to. You just tell us what you want, and we take care of the rest. No coding, no website builders, no technical headaches.",
                  },
                  {
                    question: "What's included in the $200/month subscription?",
                    answer:
                      "Your subscription includes the initial custom website design and development, secure hosting, regular maintenance, security updates, performance optimization, and up to 5 content updates per month. You also get a dedicated support person for any questions or issues. It's a complete solution with no hidden costs.",
                  },
                  {
                    question: "How long does it take to get my website up and running?",
                    answer:
                      "Most small business websites are completed within 2-3 weeks from our initial consultation. We'll work with you to gather your content, understand your business, and create a website that represents your brand. Once you approve the design, we can typically launch within a few days.",
                  },
                  {
                    question: "What if I need to make changes to my website?",
                    answer:
                      "Your subscription includes up to 5 content updates per month. Simply email or call your dedicated support person with the changes you need, and we'll implement them for you, usually within 1-2 business days. For larger changes or new features beyond the included updates, we'll provide a quote for the additional work.",
                  },
                  {
                    question: "Why is there a 12-month minimum commitment?",
                    answer:
                      "Creating a professional website requires significant upfront work to design and build. The 12-month commitment allows us to spread this cost over time, making it more affordable for small businesses. This model ensures we can deliver a high-quality custom website at a reasonable monthly price instead of charging a large upfront fee.",
                  },
                  {
                    question: "Will my website work on phones and tablets?",
                    answer:
                      "All our websites are fully responsive, meaning they automatically adjust to look great on any device - smartphones, tablets, laptops, and desktop computers. With more than half of all web traffic coming from mobile devices, we prioritize mobile-friendly design for all our sites.",
                  },
                  {
                    question: "Will my website help customers find my business online?",
                    answer:
                      "Yes, all our websites are built with local SEO (Search Engine Optimization) best practices. We optimize your site to help nearby customers find your business when they search on Google. We include proper meta tags, schema markup for local businesses, optimized page speed, and other technical SEO elements that help improve your visibility in search results.",
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i + 1}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative w-full py-24 lg:py-32 section-animation overflow-hidden px-5 lg:px-8 xl:px-[8%] "
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0))",
          }}
        >
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground">Get Started</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Ready for a website that works for your business?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Book a free consultation to discuss your small business needs. No obligation, no pressure - just a
                    friendly chat about how we can help.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 hover:scale-105 transition-transform">
                    Book Free Consultation <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-1 hover:scale-105 transition-transform">
                    See Examples
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No obligation • 30-minute call • Learn how we can help</span>
                </div>
              </div>
              <div className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border bg-muted/50 p-6 flex items-center justify-center animate-float">
                <div className="text-center space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Store className="h-6 w-6 text-primary" />
                  </div>
                  <blockquote className="text-xl font-semibold">
                    "I used to struggle with my website for years. Now I have a professional site that brings in
                    customers, and I never have to touch it!"
                  </blockquote>
                  <div className="text-sm text-muted-foreground">— Maria Rodriguez, Local Bakery Owner</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;