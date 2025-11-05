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
                <h1>Tap to pay with x402</h1>
                <p>x402 is a payment protocol for HTTPS payments. This project enables x402 over Bluetooth (BLE) with tap to pay. The Arduino libraries let you accept USDC payments from mobile and web apps using Bluetooth (BLE). All code is open source.</p>

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