import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Terms from './pages/Terms';
import RGPD from './pages/RGPD';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/politica-de-cookies" element={<CookiePolicy />} />
        <Route path="/termos-e-condicoes" element={<Terms />} />
        <Route path="/politica-rgpd" element={<RGPD />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
