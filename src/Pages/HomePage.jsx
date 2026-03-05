import React from 'react';
import HeroSection from '../Components/sections/HeroSection';
import LogoCloud from '../Components/sections/LogoCloud';
import ServicesOverview from '../Components/sections/ServicesOverview';
import BeforeAfter from '../Components/sections/BeforeAfter';
import HowItWorksSection from '../Components/sections/HowItWorksSection';
import ROICalculator from '../Components/sections/ROICalculator';
import Integrations from '../Components/sections/Integrations';
import Testimonials from '../Components/sections/Testimonials';
import FAQSection from '../Components/sections/FAQSection';
import CTASection from '../Components/sections/CTASection';

const HomePage = () => (
  <>
    <HeroSection />
    <LogoCloud />
    <ServicesOverview />
    <BeforeAfter />
    <HowItWorksSection />
    <ROICalculator />
    <Integrations />
    <Testimonials />
    <FAQSection />
    <CTASection />
  </>
);

export default HomePage;
