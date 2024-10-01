import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext.jsx';  // Import LanguageContext for translations

const Contact = () => {
  const { language, translations } = useContext(LanguageContext);  // Access translations

  return (
    <div className="contact-section bg-[#A58158] text-black py-10 px-5 rounded-lg flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        {translations[language].contactTitle}  {/* Translated title */}
      </h1>
      
      <div className="contact-info flex flex-col items-right space-y-6 text-lg">
        <div className="flex items-center space-x-4">
          <img src="/src/assets/icon1.png" alt="Address Icon" className="w-6 h-6" /> 
          <p><strong>{translations[language].addressLabel}</strong>: 5, Avenue Larbi Kaghate, Fes, Morocco</p>
        </div>

        <div className="flex items-center space-x-4">
          <img src="/src/assets/phone.png" alt="Phone Icon" className="w-6 h-6" /> 
          <p><strong>{translations[language].phoneLabel}</strong>: +212 535 62 53 34</p>
        </div>

        <div className="flex items-center space-x-4">
          <img src="/src/assets/message.png" alt="Fax Icon" className="w-6 h-6" /> 
          <p><strong>{translations[language].emailLabel}</strong>: taoufik@tghatinvest.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
