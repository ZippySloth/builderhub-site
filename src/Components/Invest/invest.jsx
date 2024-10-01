import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';  // Import the LanguageContext

const Invest = () => {
  const { language, translations } = useContext(LanguageContext);  // Access translations

  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${translations[language].thankYouMessage}, ${formData.name}! ${translations[language].contactSoon}`);
  };

  return (
    <div className="invest-section bg-black text-black py-10 px-5 rounded-lg">
      <h1 className="text-4xl font-bold text-center text-white mb-6">{translations[language].investTitle}</h1>
      
      {/* Form Container */}
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-black">{translations[language].nameLabel}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F37021]"
            placeholder={translations[language].namePlaceholder}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-black">{translations[language].emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F37021]"
            placeholder={translations[language].emailPlaceholder}
          />
        </div>

        {/* Investment Amount Input */}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-lg font-medium text-black">{translations[language].investmentAmountLabel}</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F37021]"
            placeholder={translations[language].investmentAmountPlaceholder}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#F37021] text-white py-2 px-4 rounded-md hover:bg-[#e3631c] transition-colors"
        >
          {translations[language].submitButton}
        </button>
      </form>
    </div>
  );
};

export default Invest;
