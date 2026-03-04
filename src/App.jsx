import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import './index.css';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import BlogListPage from './Pages/BlogListPage';
import BlogPostPage from './Pages/BlogPostPage';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Legacy redirects */}
          <Route path="/web" element={<Navigate to="/" replace />} />
          <Route path="/viral" element={<Navigate to="/" replace />} />
          <Route path="/classic" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
