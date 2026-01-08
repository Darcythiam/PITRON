import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import IndustriesPage from "./pages/IndustriesPage.jsx";
import ProcessPage from "./pages/ProcessPage.jsx";
import StartProjectPage from "./pages/StartProjectPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/how-we-work" element={<ProcessPage />} />
            <Route path="/start-a-project" element={<StartProjectPage />} />

            {/* fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
