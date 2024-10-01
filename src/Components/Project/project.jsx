import React, { useContext } from 'react';
import arrow from '../../assets/down-arrow.png'; // Ensure correct path to the arrow image
import { LanguageContext } from '../../LanguageContext.jsx';  // Import LanguageContext for translations

const Project = React.forwardRef((props, ref) => {
  const { scrollToPlan } = props; // Destructure the scrollToPlan function passed from props
  const { language, translations } = useContext(LanguageContext);  // Access translations here

  return (
    <div ref={ref} className="bg-[#050505] text-white py-28 px-6 rounded-lg mt-0">
      <h2 className="text-4xl text-[#F37021] font-bold text-center mb-6">
        {translations[language].projectTitle}
      </h2>
      <p className="text-xl text-center text-[#A07C52] mb-12">
        {translations[language].projectDescription}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#F37021] mb-4">{translations[language].totalInvestment}</h3>
          <p className="text-2xl">{translations[language].investmentAmount}</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#F37021] mb-4">{translations[language].landSize}</h3>
          <p className="text-2xl">{translations[language].size}</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#F37021] mb-4">{translations[language].units}</h3>
          <p className="text-2xl">{translations[language].unitDetails}</p>
        </div>
      </div>

      <div className="features-section text-center py-10 px-6">
        <h2 className="text-4xl font-bold mb-8">{translations[language].featuresTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-black mb-10">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 bg-[#A27E55] rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="/src/assets/icon1.png" alt="Location Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold">{translations[language].location}</h3>
            <p className="text-gray-600 mt-2">{translations[language].locationDetail}</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 bg-[#F37021] rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="/src/assets/icon2.png" alt="Facilities Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold">{translations[language].facilities}</h3>
            <p className="text-gray-600 mt-2">{translations[language].facilitiesDetail}</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 bg-[#A27E55] rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="/src/assets/icon3.png" alt="Green Spaces Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold">{translations[language].greenSpaces}</h3>
            <p className="text-gray-600 mt-2">{translations[language].greenSpacesDetail}</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 bg-[#F37021] rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="/src/assets/icon4.png" alt="Returns Icon" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold">{translations[language].returns}</h3>
            <p className="text-gray-600 mt-2">{translations[language].returnsDetail}</p>
          </div>
        </div>
      </div>

      {/* Discover the Full Plan button */}
      <div 
        onClick={scrollToPlan} 
        className="flex items-center justify-center gap-4 w-fit px-8 py-4 rounded-full bg-[#F37021] cursor-pointer hover:bg-[#050505] transition-colors mx-auto"
      >
        <p className="text-black text-lg md:text-xl hover:text-[#A48057] transition-colors">
          {translations[language].discoverPlan}
        </p>
        <img src={arrow} alt="Arrow icon" className="w-6 h-6" />
      </div>
    </div>
  );
});

export default Project;
