import React from 'react'

function Tokenomics() {
  const completedFeatures = [
    { title: 'Android App', description: 'Mobile application for x4Pay payments' },
    { title: 'x402 Arduino C++ Library', description: 'Microcontroller integration library' },
    { title: 'x4Pay-core C++ Library', description: 'Core microcontroller payment library' },
    { title: 'Web App', description: 'Browser-based payment interface' }
  ];

  const upcomingFeatures = [
    'Documentation',
    'Token Launch',
    'Live stream making of a world\'s first vending machine powered by x4Pay on pumpfun + youtube',
    'x4Pay Agent Layer SDK',
    'x402 Cat (secret project)',
    'Incentivize installing of x4Pay Cores in different public places to vendors',
    'Livestreams to be continued',
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
            <p className='tokenomics-block-text'>All tokens are available in the liquidity pool with transparent vesting and locking mechanisms</p>
          </div>
          
          <div className='tokenomics-block'>
            <h2 className='tokenomics-block-title'>Liquid Supply</h2>
            <div className='tokenomics-percentage'>80%</div>
            <div className='tokenomics-amount'>800M</div>
            <p className='tokenomics-block-text'>Available for public trading, machine registration, and x4 level achievement</p>
          </div>
          
          <div className='tokenomics-block'>
            <h2 className='tokenomics-block-title'>Growth & Development</h2>
            <div className='tokenomics-percentage'>20%</div>
            <div className='tokenomics-amount'>200M</div>
            <p className='tokenomics-block-text'>Reserved for ecosystem development, partnerships, and network growth</p>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className='roadmap-content'>
        <h1 className='roadmap-title'>Roadmap</h1>
        <p className='roadmap-intro'>Development milestones and upcoming features. We will continue doing pumpfun+ youtube livestream.</p>
        
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