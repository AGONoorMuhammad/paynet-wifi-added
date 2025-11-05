import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import HowItWorks from "./sections/HowItWorks"
import Developers from "./sections/Developers"
import Performance from "./sections/Performance"
import Tokenomics from "./sections/Tokenomics"
import Faq from "./sections/Faq"
import Footer from "./components/Footer"
import TermsOfService from "./pages/TermsofService"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import LaunchApp from "./pages/LaunchApp"

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // If we have a scrollTo state from navigation, scroll to that section
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <HowItWorks/>
      <Developers/>
      <Performance/>
      <Tokenomics/>
      <Faq/>
      <Footer/>
    </>
  );
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<LaunchApp />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
      </Routes>
    </Router>
  )
}

export default App
