import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../LanguageContext.jsx';  
import menuIcon from '/src/assets/menu.png';
import closeIcon from '/src/assets/close-white.png';

export const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false); // State to handle navbar visibility on small screens
  const { language, switchLanguage, translations } = useContext(LanguageContext);  // Access the current language and translations

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the navbar open/close
  };

  return (
    <div>
      {/* Menu Icon for smaller screens (hamburger icon or close icon) */}
      <div className="md:hidden absolute top-4 right-4 z-50"> {/* Move to the right */}
        <img
          src={isOpen ? closeIcon : menuIcon}
          alt="Menu Icon"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleNavbar}
        />
      </div>

      {/* Full Navbar for large screens and sliding in for small screens */}
      <div
        className={`absolute top-0 left-0 h-full bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F] via-70% to-transparent p-5 text-[#A07C52] flex flex-col justify-start z-50 w-[300px] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="navlogo mb-8">
          <img src="/src/assets/Logo.png" alt="Logo" className="max-w-full" />
        </div>

        {/* Nav Menu */}
        <ul className="space-y-4 text-lg font-light">
          <li
            onClick={() => { scrollToSection(refs.aboutRef); toggleNavbar(); }}  // Close after click
            className="hover:text-[#F37021] cursor-pointer"
          >
            {translations[language].about}  {/* Translated "About" */}
          </li>
          <li
            onClick={() => { scrollToSection(refs.projectRef); toggleNavbar(); }}  // Close after click
            className="hover:text-[#F37021] cursor-pointer"
          >
            {translations[language].project}  {/* Translated "Project" */}
          </li>
          <li
            onClick={() => { scrollToSection(refs.planRef); toggleNavbar(); }}  // Close after click
            className="hover:text-[#F37021] cursor-pointer"
          >
            {translations[language].plan}  {/* Translated "Plan" */}
          </li>
          <li
            onClick={() => { scrollToSection(refs.galleryRef); toggleNavbar(); }}  // Close after click
            className="hover:text-[#F37021] cursor-pointer"
          >
            {translations[language].gallery}  {/* Translated "Gallery" */}
          </li>
          <li
            onClick={() => { scrollToSection(refs.neighborhoodRef); toggleNavbar(); }}  // Close after click
            className="hover:text-[#F37021] cursor-pointer"
          >
            {translations[language].neighborhood}  {/* Translated "Neighborhood" */}
          </li>
          <li
            onClick={() => { scrollToSection(refs.investRef); toggleNavbar(); }}  // Close after click
            className="hover:text-[#F37021] cursor-pointer"
          >
            {translations[language].invest}  {/* Translated "Invest" */}
          </li>
          <li
            onClick={() => { scrollToSection(refs.contactRef); toggleNavbar(); }}  // Close after click
            className="hover:text-[#F37021] cursor-pointer navcontact"
          >
            {translations[language].contact}  {/* Translated "Contact" */}
          </li>
        </ul>

        {/* Language Switcher */}
        <div className="mt-10 flex flex-col gap-3">
          <a
            href="#"
            onClick={() => switchLanguage('fr')}
            className="text-[#A07C52] hover:text-[#F37021] font-bold text-lg"
          >
            FR
          </a>
          <a
            href="#"
            onClick={() => switchLanguage('en')}
            className="text-[#A07C52] hover:text-[#F37021] font-bold text-lg"
          >
            EN
          </a>
        </div>
      </div>

      {/* Call Button */}
      <div className="fixed top-4 left-6 lg:top-6 lg:right-6 lg:left-auto z-10 w-max">
        <a href="tel:+4389799268" className="flex items-center space-x-2 bg-[#F37021] text-white py-3 px-5 rounded-full shadow-md hover:bg-[#E65B1E] transition-all">
          <img src="/src/assets/phone-white.png" alt="Phone Icon" className="w-6 h-6" />
          <span className="text-lg font-semibold">+212 535 62 53 34</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
