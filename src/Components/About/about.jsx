import React, { useContext } from 'react';
import taoufikSbaiImage from '../../assets/taoufik.png';
import { LanguageContext } from '../../LanguageContext.jsx';  // Import LanguageContext for translations

const About = () => {
  const { language, translations } = useContext(LanguageContext);  // Access translations

  return (
    <div className="about-section bg-[#A58158] text-black py-10 px-5 rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        {translations[language].aboutTitle}  {/* Use translation for title */}
      </h1>
      
      {/* Developer Information Section */}
      <div className="flex flex-col items-center justify-center">
        {/* Developer Image in a circular frame */}
        <div className="w-40 h-40 mb-6 ">
          <img 
            src={taoufikSbaiImage} 
            alt="Taoufik Sbai" 
            className="w-full h-full object-cover rounded-full shadow-lg bg-white"
          />
        </div>

        {/* Developer Description */}
        <div className="text-center w-full md:w-1/3">
          <p className="text-lg mb-6">
            {translations[language].aboutDescription}  {/* Use translation for description */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
