// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import LanguageProvider from './LanguageContext.jsx'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>  {/* Wrap the App component with LanguageProvider */}
      <App />
    </LanguageProvider>
  </StrictMode>
);
