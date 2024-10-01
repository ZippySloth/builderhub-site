import React, { useState, createContext } from 'react';
import translations from './translations';  // Assuming translations.js is in the same folder

// Create the context
export const LanguageContext = createContext();

// Create the provider component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Set default language to French

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
