import React from 'react'

function Tokenomics() {
  const completedFeatures = [
    { title: 'Android App', description: 'Mobile application for PayNet payments' },
    { title: 'PayNet Arduino C++ Library', description: 'ESP8266 microcontroller integration library' },
    { title: 'PayNet-core C++ Library', description: 'Core WiFi payment library for devices' },
    { title: 'Web App', description: 'Browser-based payment interface for PayNet' }
  ];

  const upcomingFeatures = [
    'Documentation',
    'Token launch',
    "Livestream: building the first PayNet-powered vending machine (pump.fun + YouTube)",
    'PayNet Agent Layer SDK',
    'PayNet Cat (secret project)',
    'Incentivize installing PayNet cores in public venues for vendors',
    'Ongoing livestreams',
    'TBD'
  ];

  return (
    <section id='tokenomics' className='tokenomics-section'>
      {/* Tokenomics Section */}
      <div className='tokenomics-content'>
        <h1 className='tokenomics-title'>Tokenomics</h1>
        
        <div className='tokenomics-grid'>
          <div className='tokenomics-block tokenomics-block-full'>
            <h2 className='tokenomics-block-title'>100% Liquidity</h2>
            <p className='tokenomics-block-text'>All tokens are placed in liquidity with clear vesting and locking policies.</p>
          </div>
          
          <div className='tokenomics-block'>
            <h2 className='tokenomics-block-title'>Liquid Supply</h2>
            <div className='tokenomics-percentage'>80%</div>
            <div className='tokenomics-amount'>800M</div>
            <p className='tokenomics-block-text'>Allocated for public trading, device registration, and network participation.</p>
          </div>
          
          <div className='tokenomics-block'>
            <h2 className='tokenomics-block-title'>Growth & Development</h2>
            <div className='tokenomics-percentage'>20%</div>
            <div className='tokenomics-amount'>200M</div>
            <p className='tokenomics-block-text'>Reserved for ecosystem development, partnerships, and long-term growth.</p>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className='roadmap-content'>
        <h1 className='roadmap-title'>Roadmap</h1>
        <p className='roadmap-intro'>Development milestones and what\'s next. We\'ll continue pump.fun + YouTube livestreams.</p>
        
        <div className='roadmap-completed'>
          <h2 className='roadmap-section-title'>Completed Features</h2>
          <div className='roadmap-completed-grid'>
            {completedFeatures.map((feature, index) => (
              <div key={index} className='roadmap-card roadmap-card-completed'>
                <div className='roadmap-checkmark'>✓</div>
                <div>
                  <h3 className='roadmap-card-title'>{feature.title}</h3>
                  <p className='roadmap-card-description'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className='roadmap-upcoming'>
          <h2 className='roadmap-section-title'>Upcoming</h2>
          <div className='roadmap-upcoming-list'>
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className='roadmap-card roadmap-card-upcoming'>
                <div className='roadmap-circle'>○</div>
                <p className='roadmap-upcoming-text'>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics