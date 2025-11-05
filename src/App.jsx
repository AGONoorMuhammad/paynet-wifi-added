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
      // First scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
      // Wait for DOM to update, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          // Account for navbar height
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
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
