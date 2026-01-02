import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import {
  DataCollectionPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
  SecurityPage,
  PrivacyHubPage,
} from "./pages";
import { ScrollToTop } from "./components/shared/ScrollToTop";
import "./index.css";

/**
 * Application Entry Point
 * Sets up React Router with all available routes
 */
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<App />} />
        
        {/* Privacy Hub */}
        <Route path="/privacy" element={<PrivacyHubPage />} />
        
        {/* Privacy & Legal Pages */}
        <Route path="/privacy/data-collection" element={<DataCollectionPage />} />
        <Route path="/privacy/policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy/terms" element={<TermsOfServicePage />} />
        <Route path="/privacy/security" element={<SecurityPage />} />
        
        {/* Fallback to home for unmatched routes */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
