import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext.jsx';  // Import LanguageContext for translations

const Neighborhood = () => {
  const { language, translations } = useContext(LanguageContext);  // Access translations

  return (
    <div className="neighborhood-section bg-[#A58158] text-black py-10 px-5 rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        {translations[language].neighborhoodTitle} {/* Use translation for the neighborhood title */}
      </h1>
      
      {/* Translation of the relevant information */}
      <p className="text-lg mb-6 px-32 text-center">
        {translations[language].neighborhoodDescription} {/* Use translation for the neighborhood description */}
      </p>

      {/* Google Maps Embed */}
      <div className="google-maps-embed mb-6">
        <iframe
          src="https://storage.googleapis.com/maps-solutions-7mpcdqiba5/neighborhood-discovery/lpnk/neighborhood-discovery.html"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[500px] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Neighborhood;
