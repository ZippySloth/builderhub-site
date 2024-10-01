import React, { useState, useEffect, useContext } from 'react';
import arrow from '../../assets/down-arrow.png';
import Clinic from '../../assets/Clinic.webp';
import ClinicOffice from '../../assets/ClinicOffice.webp';
import Reception from '../../assets/Reception.webp';
import Pool1 from '../../assets/Pool2.webp';
import { LanguageContext } from '../../LanguageContext'; // Import LanguageContext

export const Hero = ({ scrollToProject }) => {
    const images = [ClinicOffice, Clinic, Reception, Pool1]; // Array of images
    const [heroCount, setHeroCount] = useState(0);
    const [direction, setDirection] = useState("forward"); // Track sliding direction
    const { language, translations } = useContext(LanguageContext);  // Access language and translations

    // Automatically move to the next image and text every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setHeroCount((prevHeroCount) => (prevHeroCount + 1) % images.length);
            setDirection("forward"); // Set direction to forward on auto-slide
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [images.length]);

    // Handle when a dot is clicked
    const handleDotClick = (index) => {
        // If user clicks on a dot, determine if it's forward or backward
        setDirection(index > heroCount ? "forward" : "backward");
        setHeroCount(index);
    };

    return (
        <div className='relative overflow-hidden'>
            <div className='flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${heroCount * 100}%)` }}>
                {/* Images sliding horizontally */}
                {images.map((image, index) => (
                    <div key={index} className='min-w-full h-screen flex-shrink-0 relative'>
                        <img
                            src={image}
                            className="w-full h-full object-cover filter brightness-50" // Apply dark filter here
                            alt={`Slide ${index}`}
                        />
                    </div>
                ))}
            </div>

            {/* Text section with slide animation, now using <h1> */}
            <div className='absolute top-1/2 transform -translate-y-1/2 left-16 md:left-[200px] lg:left-[350px] text-white text-left'>
                <div key={heroCount} className='text-left'>
                    <h1 className='text-5xl md:text-6xl lg:text-[110px] font-medium leading-tight'>
                        {translations[language].hero[heroCount].text1}  {/* Translated first line */}
                    </h1>
                    <h1 className='text-5xl md:text-6xl lg:text-[110px] font-medium leading-tight'>
                        {translations[language].hero[heroCount].text2}  {/* Translated second line */}
                    </h1>
                </div>
            </div>

            {/* View Project Section */}
            <div 
              onClick={scrollToProject} 
              className="absolute z-50 bottom-16 md:bottom-32 left-1/2 transform -translate-x-1/2 flex items-center gap-10 px-8 py-3 pl-12 mb-8 md:mb-0 rounded-full bg-[#050505] cursor-pointer hover:bg-[#050505] whitespace-nowrap"
            >
              <p className="text-[#A07C52] text-lg md:text-xl hover:text-[#F37021] transition-colors">
                {translations[language].viewProject}  {/* Translated "View Project" */}
              </p>
              <img src={arrow} alt="Arrow icon" className="w-6 h-6" />
            </div>

            {/* Dots for navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-between mt-28">
                <ul className="flex items-center gap-6">
                    {images.map((_, index) => (
                        <li
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-4 h-4 rounded-full cursor-pointer ${heroCount === index ? "bg-[#F37021]" : "bg-white"}`}
                        ></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Hero;
