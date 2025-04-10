import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

import Hero from './Components/Hero/Hero';
import ContactPage from './Pages/ContactPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import HomePage from './Pages/HomePage';
import Joinus from './Components/Joinus/Joinus';
import RedditDatabasePage from './Pages/RedditDatabase'; // Ensure this import is present
import ScrollToTop from './ScrollToTop';
import CookiesConsent from "@/Components/CookiesConsent/CookiesConsent";
import { AnalyticsScripts } from "./Components/AnalyticsScripts"


const App = () => {
  return (
    
    <ThemeProvider>
      <CookiesConsent />
      <AnalyticsScripts />
      <Router>
        <Layout>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/classic"
              element={
                <>
                  <Hero />
                  <Joinus />
                </>
              }
            />
            <Route path="/web" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/viral" element={<RedditDatabasePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
