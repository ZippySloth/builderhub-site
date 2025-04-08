import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

import Background from './Components/Background/Background';
import Hero from './Components/Hero/Hero';
import Contact from './Components/Contact/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import HomePage from './Pages/HomePage';
import Joinus from './Components/Joinus/Joinus';
import RedditDatabase from './Pages/RedditDatabase'; // Ensure this import is present

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/classic"
              element={
                <>
                  <Background />
                  <Hero />
                  <Joinus />
                  <Contact />
                </>
              }
            />
            <Route path="/web" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/viral" element={<RedditDatabase />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
