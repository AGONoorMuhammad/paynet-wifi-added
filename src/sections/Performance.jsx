import React from 'react'

function Performance() {
  return (
    <section id='performance' className='performance-section'>
      <h1 className='performance-title'>Performance Metrics</h1>
      
      <div className='performance-container'>
        <div className='performance-grid'>
          <div className='performance-subsection'>
            <h2 className='performance-subtitle'>Connection Times</h2>
            <div className='performance-data performance-data-cyan'>
              <p>BLE Discovery: 1-3 seconds</p>
              <p>GATT Connection: 0.5-2 seconds</p>
              <p>Service Discovery: 0.5-1 seconds</p>
              <p>Total Connect Time: 2-6 seconds</p>
            </div>
          </div>

          <div className='performance-subsection'>
            <h2 className='performance-subtitle'>Payment Processing</h2>
            <div className='performance-data performance-data-green'>
              <p>Data Transfer: 100-500ms</p>
              <p>API Verification: 2-10 seconds</p>
              <p>Blockchain Confirm: 5-60 seconds</p>
              <p>Total Payment: 10-70 seconds</p>
            </div>
          </div>

          <div className='performance-subsection'>
            <h2 className='performance-subtitle'>Throughput Limits</h2>
            <div className='performance-data performance-data-purple'>
              <p>Concurrent Connections: 1 per ESP32 (BLE limitation)</p>
              <p>Payments per Hour: ~60 (limited by API rate limits)</p>
              <p>Data Rate: ~10KB/s over Bluetooth (BLE)</p>
              <p>Range: 10 meters line-of-sight</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Performance