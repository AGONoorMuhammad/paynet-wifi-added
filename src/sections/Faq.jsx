import React, { useState } from 'react'

function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(2); // "Does it work offline?" is expanded by default

  const faqs = [
    {
      question: 'What is x402?',
      answer: 'TEst'
    },
    {
      question: 'What chains are supported?',
      answer: ''
    },
    {
      question: 'Does it work offline?',
      answer: 'Yes—device discovery, configuration, and payment signing are offline via BLE. The mobile app sends transactions offline Devices verify & settle payments via x4pay.org facilitator API.'
    },
    {
      question: 'What advanced features are supported?',
      answer: ''
    },
    {
      question: 'How secure is the mobile wallet?',
      answer: ''
    },
    {
      question: 'Which browsers support Web Bluetooth?',
      answer: ''
    },
    {
      question: 'How difficult are these DIY projects?',
      answer: ''
    },
    {
      question: 'What\'s the typical cost to build a DIY payment device?',
      answer: ''
    },
    {
      question: 'Are the tutorials and code examples free?',
      answer: ''
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