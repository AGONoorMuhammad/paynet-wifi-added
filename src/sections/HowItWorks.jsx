import React from 'react'
import Cards from '../components/Cards'
// title, tlcolor, bg, className, borderColor, paragraph, pcolor */

function HowItWorks() {
  return (
    <div id='how-it-works' className='how-it-works'>
        <div className='how-left'>
        <h1>How it works</h1>
        <p>
        Install the PayNet library on your ESP8266. The device hosts a WiFi server and exposes payment endpoints. The mobile app or web app connects over your local WiFi network and sends a payment. The device verifies the payment using the PayNet facilitator API.
        </p>
        </div>

        <div className='how-right'>
            <Cards
            title={"1) Host"}
            tlcolor={"#ffffff"}
            bg={"rgba(255, 255, 255, 0.05)"}
            className={""}
            borderColor={"rgba(255, 255, 255, 0.1)"}
            paragraph={"Your Arduino Uno with ESP8266 WiFi module connects to your local WiFi network and starts hosting an HTTP server on port 80. The device exposes payment endpoints ready to receive transactions from senders."}
            pcolor={"#d0d0d0"}
            />
            <Cards
            title={"2) Connect"}
            tlcolor={"#ffffff"}
            bg={"rgba(255, 255, 255, 0.05)"}
            className={""}
            borderColor={"rgba(255, 255, 255, 0.1)"}
            paragraph={"The mobile or web app automatically discovers your device on the same WiFi network by scanning local IP addresses. Once found, it establishes a secure HTTP connection to the payment endpoint on your ESP8266."}
            pcolor={"#d0d0d0"}
            />
            <Cards
            title={"3) Exchange"}
            tlcolor={"#ffffff"}
            bg={"rgba(255, 255, 255, 0.05)"}
            className={""}
            borderColor={"rgba(255, 255, 255, 0.1)"}
            paragraph={"Your device sends payment requirements (amount, receiver address, network) via HTTP. The sender's app creates a signed blockchain transaction and sends the transaction payload back to your ESP8266 over the WiFi connection."}
            pcolor={"#d0d0d0"}
            />
            <Cards
            title={"4) Verify"}
            tlcolor={"#ffffff"}
            bg={"rgba(255, 255, 255, 0.05)"}
            className={""}
            borderColor={"rgba(255, 255, 255, 0.1)"}
            paragraph={"The ESP8266 forwards the transaction payload to the PayNet facilitator API for verification. Once confirmed, it receives the transaction hash, validates the payment amount and recipient, then completes the money transfer."}
            pcolor={"#d0d0d0"}
            />
        </div>
    </div>
  )
}

export default HowItWorks