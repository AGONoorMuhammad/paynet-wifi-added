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
              <p>WiFi Association & DHCP: 1-3 seconds</p>
              <p>HTTP Request/Response Setup: &lt;200 ms</p>
              <p>Endpoint Availability Check: &lt;200 ms</p>
              <p>Total Connect Time: 1-4 seconds</p>
            </div>
          </div>

          <div className='performance-subsection'>
            <h2 className='performance-subtitle'>Payment Processing</h2>
            <div className='performance-data performance-data-green'>
              <p>Data Transfer: 50-200 ms (WiFi)</p>
              <p>API Verification: 2-10 seconds</p>
              <p>Blockchain Confirm: 5-60 seconds</p>
              <p>Total Payment: 7-70 seconds</p>
            </div>
          </div>

          <div className='performance-subsection'>
            <h2 className='performance-subtitle'>Throughput Limits</h2>
            <div className='performance-data performance-data-purple'>
              <p>Concurrent Connections: 2-3 per ESP8266 (memory-limited)</p>
              <p>Payments per Hour: ~120 (network + API limits)</p>
              <p>Data Rate: ~500KB/s–1MB/s over WiFi</p>
              <p>Range: ~30 m indoors, ~50+ m line-of-sight</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Performance