import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';  // Import LanguageContext

const Footer = () => {
  const { language, translations } = useContext(LanguageContext);  // Access translations

  return (
    <footer className="bg-[#050505] text-[#A07C52] py-16 ">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 TGHAT INVEST. {translations[language].allRightsReserved}</p>
        <p className="mb-4">
          {translations[language].websiteMadeBy}{' '}
          <a
            href="https://buildrhub.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F37021] hover:underline"
          >
            BuildRhub
          </a>
        </p>
        
        <ul className="flex justify-center space-x-6 text-sm">
          <li><a href="/privacy-policy" className="hover:text-[#F37021]">{translations[language].privacyPolicy}</a></li>
          <li><a href="/terms-of-service" className="hover:text-[#F37021]">{translations[language].termsOfService}</a></li>
          <li><a href="/contact" className="hover:text-[#F37021]">{translations[language].contact}</a></li>
        </ul>
        
      </div>
    </footer>
  );
};

export default Footer;
