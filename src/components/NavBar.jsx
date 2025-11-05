import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first with state
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    closeMenu();
  };

  return (
    <>
      <nav className='px-4 py-4 navbar-mobile-wrapper'>
        <div className='max-w-7xl mx-auto flex justify-between'>
          
          <div className='flex-start'>
              <img src='/images/nav-logo.png'/>
              <h1>ayNet</h1>
          </div>

          <div className='flex-center navbar-desktop-menu'>
              <a href='#home' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
              <a href='#how-it-works' onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How it Works</a>
              <a href='#developers' onClick={(e) => { e.preventDefault(); scrollToSection('developers'); }}>Developers</a>
              <a href='#performance' onClick={(e) => { e.preventDefault(); scrollToSection('performance'); }}>Performance</a>
              <a href='#tokenomics' onClick={(e) => { e.preventDefault(); scrollToSection('tokenomics'); }}>Tokenomics</a>
              <a href='#faq' onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
          </div>

          <div className='flex-end navbar-end navbar-desktop-menu'>
              <a href='/app' className='launch-btn'>Launch App</a>
              <a href='#' className='x-logo'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>
              </a>
          </div>

          <button className='burger-menu-btn' onClick={toggleMenu} aria-label='Toggle menu'>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

        </div>
      </nav>

      {/* Dark overlay */}
      {isMenuOpen && <div className='menu-overlay' onClick={closeMenu}></div>}

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-content'>
          <a href='#home' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href='#how-it-works' onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How it Works</a>
          <a href='#developers' onClick={(e) => { e.preventDefault(); scrollToSection('developers'); }}>Developers</a>
          <a href='#performance' onClick={(e) => { e.preventDefault(); scrollToSection('performance'); }}>Performance</a>
          <a href='#tokenomics' onClick={(e) => { e.preventDefault(); scrollToSection('tokenomics'); }}>Tokenomics</a>
          <a href='#faq' onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
          <a href='/app' className='mobile-launch-btn' onClick={closeMenu}>Launch App</a>
          <a href='#' className='mobile-x-logo' onClick={closeMenu}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default NavBar