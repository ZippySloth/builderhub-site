import React from 'react';
import HeroSection from '../Components/sections/HeroSection';
import ProblemSection from '../Components/sections/ProblemSection';
import HowItWorksSection from '../Components/sections/HowItWorksSection';
import ArchitectureSection from '../Components/sections/ArchitectureSection';
import AgentsSection from '../Components/sections/AgentsSection';
import WhoItsForSection from '../Components/sections/WhoItsForSection';
import AboutSection from '../Components/sections/AboutSection';
import FAQSection from '../Components/sections/FAQSection';
import CTASection from '../Components/sections/CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ArchitectureSection />
      <AgentsSection />
      <WhoItsForSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default HomePage;
