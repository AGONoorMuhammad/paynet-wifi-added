import React from 'react'

function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id='home' className='hero-section'>
        <div className='hero-container'>
            <div className='hero-left'>
                <h3>Payments for machines</h3>
                <h1>Tap to pay with PayNet</h1>
                <p>PayNet is a payment protocol for HTTPS payments. This project enables PayNet over WiFi with tap to pay. Accept USDC payments from mobile and web apps using your existing WiFi network, no Bluetooth pairing required.</p>

                <div className='hero-buttons'>
                <a href='/app' className='hero-btn hero-btn-white'>Launch App</a>
                <a href='#' onClick={(e) => { e.preventDefault(); scrollToSection('tokenomics'); }} className='hero-btn hero-btn-dark'>Token & Roadmap</a>
                <a href='#' className='hero-btn hero-btn-dark'>Download Android APK</a>
                </div>
            </div>

            <div className='hero-right'>
                <img src='/images/hero-img.png'/>
            </div>
        </div>

    </section>
  )
}

export default HeroSection