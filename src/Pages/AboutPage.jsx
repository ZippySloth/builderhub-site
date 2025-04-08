import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Linkedin } from 'lucide-react';

const About = () => {
  const sections = [
    {
      title: 'What We Do',
      content:
        'We offer web services and experiment with tools that make business and creative life smoother — from smart websites to internal systems.',
    },
    {
      title: 'Why We Build',
      content:
        'We love solving real problems with tech. Whether it’s for clients or ourselves, we build with curiosity, care, and simplicity.',
    },
    {
      title: 'How We Help',
      content:
        'We work closely with small businesses and solo founders — not just as devs, but as partners. No jargon, no ego, just real support.',
    },
  ];

  const builders = [
    {
      name: 'Rhita Sbai',
      description: 'Builder & curious mind learning by doing. Always looking for ways to simplify and support with care.',
      linkedin: 'https://www.linkedin.com/in/rhita-sbai/',
    },
    {
      name: 'Faical Al Alawi',
      description: 'Business-driven and tech-hungry. Building quietly, learning loudly, helping with heart.',
      linkedin: 'https://www.linkedin.com/in/faicalalalawi/',
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 section-animation in-view">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-10">

        {/* Intro Section */}
        <div className="space-y-4">
          <div className="inline-block rounded-full bg-primary px-4 py-1 text-sm text-primary-foreground shadow">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Helping people. Building smart things. Growing as we go.
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            BuildrHub is where builders and business-minded creatives explore ideas, ship projects, and help others do the same — with a human touch.
          </p>
        </div>

        {/* Core Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section, index) => (
            <Card key={index} className="bg-muted/30 border border-muted-foreground/10 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Builders Section */}
        <div className="mt-16 space-y-6 py-12 md:py-24 lg:py-32">
          <div className="space-y-3">
            <div className="inline-block rounded-full bg-muted px-4 py-1 text-sm text-muted-foreground">
              Builders
            </div>
            <h2 className="text-3xl font-bold">Who’s behind BuildrHub?</h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-base">
            We started BuildrHub from a shared love of creating and solving meaningful problems. It’s our way of learning, growing, and helping others along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            {builders.map((person, idx) => (
              <Card key={idx} className="bg-muted/20 border border-muted-foreground/10 shadow-sm p-6 text-left">
                <CardHeader className="mb-2 p-0">
                  <CardTitle className="text-xl font-semibold">{person.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground mb-3">{person.description}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 inline-flex items-center text-sm"
                  >
                    <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
