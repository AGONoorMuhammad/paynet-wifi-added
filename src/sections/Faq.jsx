import React, { useState } from 'react'

function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(2); // "Does it work offline?" is expanded by default

  const faqs = [
    {
      question: 'What is PayNet?',
      answer: 'PayNet is a WiFi-based payment protocol for devices. ESP8266 hosts an HTTP endpoint; mobile and web apps connect over local WiFi to initiate and verify USDC payments via the PayNet facilitator API.'
    },
    {
      question: 'What chains are supported?',
      answer: 'Currently Base Sepolia (testnet) for development. Mainnet support and additional networks are planned.'
    },
    {
      question: 'Does it work offline?',
      answer: 'Local device discovery and configuration can work on a LAN without internet. Payment verification requires internet access to reach the PayNet facilitator API and submit transactions.'
    },
    {
      question: 'What advanced features are supported?',
      answer: 'Configurable payment requests, signed transaction exchange over HTTP, webhook callbacks, and device-friendly payloads. Roadmap includes multi-asset support and vendor analytics.'
    },
    {
      question: 'How secure is the mobile wallet?',
      answer: 'Private keys remain on the user device. Transactions are signed client-side; the ESP8266 never sees user keys. TLS and nonce-based payloads mitigate replay and tampering risks.'
    },
    {
      question: 'Which browsers support the web app?',
      answer: 'Modern Chromium-based browsers (Chrome, Edge, Brave) and recent Safari/Firefox versions. For the best experience, use the Android app or Chrome on desktop/mobile.'
    },
    {
      question: 'How difficult are these DIY projects?',
      answer: 'Beginner to intermediate. If you can flash an ESP8266 and edit WiFi credentials, you can build a working PayNet device in under an hour.'
    },
    {
      question: 'What\'s the typical cost to build a DIY payment device?',
      answer: 'Roughly $10–$25 for an ESP8266 board plus optional peripherals (relay, NFC tag, enclosure).'
    },
    {
      question: 'Are the tutorials and code examples free?',
      answer: 'Yes. All guides and reference code are open source and free to use for personal or commercial projects.'
    }
  ];

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id='faq' className='faq-section'>
      <h1 className='faq-title'>FAQ</h1>
      
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div 
              className='faq-question'
              onClick={() => toggleQuestion(index)}
            >
              <span className='faq-question-text'>{faq.question}</span>
              <span className='faq-icon'>
                {expandedIndex === index ? '×' : '+'}
              </span>
            </div>
            {expandedIndex === index && faq.answer && (
              <div className='faq-answer'>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq