import React, { useRef, useContext } from 'react';
import Background from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Project from './Components/Project/project.jsx';
import Plan from './Components/Plan/plan.jsx';
import Gallery from './Components/Gallery/gallery.jsx'; 
import Neighborhood from './Components/Neighborhood/neighborhood.jsx';
import About from './Components/About/about.jsx'; 
import Invest from './Components/Invest/invest.jsx';
import Contact from './Components/Contact/contact.jsx';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';  
import Footer from './Components/Footer/footer.jsx';
import { LanguageContext } from './LanguageContext.jsx';  // Import LanguageContext

const App = () => {
  const { language, translations } = useContext(LanguageContext);  // Access translations

  // Create references for different sections
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const planRef = useRef(null);
  const galleryRef = useRef(null); 
  const neighborhoodRef = useRef(null);
  const investRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Background />
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ aboutRef, projectRef, planRef, galleryRef, neighborhoodRef, investRef, contactRef }}
      />
      <Hero scrollToProject={() => scrollToSection(projectRef)} /> 
      <Project ref={projectRef} scrollToPlan={() => scrollToSection(planRef)} /> 
      <div ref={planRef}><Plan /></div>
      <div ref={galleryRef} className="section"><Gallery /></div> 
      <div ref={neighborhoodRef} className="section"><Neighborhood /></div>
      <div ref={aboutRef} className="section"><About /></div>

      {/* Invest section with translations */}
      <div ref={investRef} className="section">
        <Invest 
          title={translations[language].investTitle} 
          description={translations[language].investDescription}
          nameLabel={translations[language].nameLabel}
          namePlaceholder={translations[language].namePlaceholder}
          emailLabel={translations[language].emailLabel}
          emailPlaceholder={translations[language].emailPlaceholder}
          investmentAmountLabel={translations[language].investmentAmountLabel}
          investmentAmountPlaceholder={translations[language].investmentAmountPlaceholder}
          submitButton={translations[language].submitButton}
          thankYouMessage={translations[language].thankYouMessage}
          contactSoon={translations[language].contactSoon}
        />
      </div>

      <div ref={contactRef} className="section"><Contact /></div>

      {/* Add the scroll to top button */}
      <ScrollToTopButton />

      {/* Add the Footer */}
      <Footer />
    </div>
  );
};

export default App;
