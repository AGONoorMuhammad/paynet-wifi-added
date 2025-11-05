import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();

  const handleLegalLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-columns'>
          {/* Column 1: x4 Pay */}
          <div className='footer-column'>
            <h3 className='footer-column-title'>x4 Pay</h3>
            <p className='footer-description'>Open source Bluetooth crypto payments for ESP32 devices</p>
            <div className='footer-social'>
              <a href='#' className='footer-social-icon' aria-label='X (Twitter)'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div className='footer-column'>
            <h3 className='footer-column-title'>Resources</h3>
            <ul className='footer-list'>
              <li><span className='footer-muted-text'>Documentation <span className='coming-soon'>(Coming Soon)</span></span></li>
              <li><span className='footer-muted-text'>DIY Tutorials <span className='coming-soon'>(Coming Soon)</span></span></li>
              <li><span className='footer-muted-text'>Technical Specs <span className='coming-soon'>(Coming Soon)</span></span></li>
              <li><span className='footer-muted-text'>Source Code <span className='coming-soon'>(Coming Soon)</span></span></li>
            </ul>
          </div>

          {/* Column 3: Downloads */}
          <div className='footer-column'>
            <h3 className='footer-column-title'>Downloads</h3>
            <ul className='footer-list'>
              <li>
                <a href='#'>
                  <svg className='footer-download-icon' width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Android APK
                </a>
              </li>
              <li>
                <span className='footer-muted-text'>iOS App <span className='coming-soon'>(Coming Soon)</span></span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className='footer-column'>
            <h3 className='footer-column-title'>Legal</h3>
            <ul className='footer-list'>
              <li><Link to="/privacy-policy" onClick={() => handleLegalLinkClick('/privacy-policy')}>Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" onClick={() => handleLegalLinkClick('/terms-of-service')}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='footer-divider'></div>

        {/* Bottom Section */}
        <div className='footer-bottom'>
          <p className='footer-copyright'>
            © 2025 x4 Pay. All rights reserved. Built with <span className='footer-heart'>❤️</span> for the crypto community.
          </p>
          <p className='footer-tech'>
            ESP32 • Bluetooth • x402 • Base Network
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer