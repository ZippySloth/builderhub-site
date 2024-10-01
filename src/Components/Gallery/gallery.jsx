import React, { useContext, useRef } from 'react';
import { LanguageContext } from '../../LanguageContext.jsx';  // Import LanguageContext for translations
import leftArrow from '../../assets/left-arrow.png';  // Correct the path for the left arrow image
import rightArrow from '../../assets/right-arrow.png';  // Correct the path for the right arrow image
import image1 from '../../assets/image1.jpg';  // Replace with your images
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';  // Add path for the 5th image
import image6 from '../../assets/image6.jpg';  // Add path for the 6th image

const Gallery = () => {
  const { language, translations } = useContext(LanguageContext);  // Access translations
  const scrollContainer = useRef(null);
  const containerWidth = useRef(null);

  // Ensure that only one full image shows per slide
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -containerWidth.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: containerWidth.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-[#050505] text-white py-10 px-6 rounded-lg">
      <h2 className="text-4xl font-bold text-center text-[#F37021] mb-6">
        {translations[language].galleryTitle} {/* Pull the gallery title from translations */}
      </h2>
      
      {/* Scrollable Gallery Container */}
      <div className="relative w-auto overflow-hidden flex justify-center">
        <div
          ref={scrollContainer}
          className="flex overflow-hidden scroll-smooth"
          style={{ width: '100%' }}
        >
          {/* Gallery Images */}
          <div ref={containerWidth} className="flex-shrink-0 flex items-center justify-center w-full h-[300px] md:h-[500px]">
            <img src={image1} alt="Gallery Image 1" className="max-w-full max-h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 flex items-center justify-center w-full h-[300px] md:h-[500px]">
            <img src={image2} alt="Gallery Image 2" className="max-w-full max-h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 flex items-center justify-center w-full h-[300px] md:h-[500px]">
            <img src={image3} alt="Gallery Image 3" className="max-w-full max-h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 flex items-center justify-center w-full h-[300px] md:h-[500px]">
            <img src={image4} alt="Gallery Image 4" className="max-w-full max-h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 flex items-center justify-center w-full h-[300px] md:h-[500px]">
            <img src={image5} alt="Gallery Image 5" className="max-w-full max-h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 flex items-center justify-center w-full h-[300px] md:h-[500px]">
            <img src={image6} alt="Gallery Image 6" className="max-w-full max-h-full object-contain mx-auto" />
          </div>
        </div>

        {/* Left Arrow */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-700"
          onClick={scrollLeft}
        >
          <img src={leftArrow} alt="Scroll Left" className="w-6 h-6" />
        </div>

        {/* Right Arrow */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-700"
          onClick={scrollRight}
        >
          <img src={rightArrow} alt="Scroll Right" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
