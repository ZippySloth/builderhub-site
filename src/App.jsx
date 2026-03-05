import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import './index.css';
import HomePage from './Pages/HomePage';
import DashboardsPage from './Pages/DashboardsPage';
import DataPipelinesPage from './Pages/DataPipelinesPage';
import AIAgentsPage from './Pages/AIAgentsPage';
import PricingPage from './Pages/PricingPage';
import DemoPage from './Pages/DemoPage';
import IndustriesPage from './Pages/IndustriesPage';
import IndustryPage from './Pages/IndustryPage';
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
          <Route path="/dashboards" element={<DashboardsPage />} />
          <Route path="/data-pipelines" element={<DataPipelinesPage />} />
          <Route path="/ai-agents" element={<AIAgentsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
