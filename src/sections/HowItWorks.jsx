import React from 'react'
import Cards from '../components/Cards'
// title, tlcolor, bg, className, borderColor, paragraph, pcolor */

function HowItWorks() {
  return (
    <div id='how-it-works' className='how-it-works'>
        <div className='how-left'>
        <h1>How it works</h1>
        <p>
        Install the X402 Arduino library on your ESP32. The device advertises payment info over Bluetooth (BLE). The mobile app or web app connects and sends a payment. The device verifies the payment using the x402 facilitator API.
        </p>
        </div>

        <div className='how-right'>
            <Cards
            title={"1) Broadcast"}
            tlcolor={"#ffffff"}
            bg={"rgba(128, 128, 128, 0.15)"}
            className={""}
            borderColor={"rgba(180, 180, 180, 0.2)"}
            paragraph={"ESP32 advertises over Bluetooth (BLE) using Nordic UART service UUID 6e400002-b5a3-f393-e0a9-e50e24dcca9e."}
            pcolor={"#b4b4b4"}
            />
            <Cards
            title={"2) Connect"}
            tlcolor={"#ffffff"}
            bg={"rgba(128, 128, 128, 0.15)"}
            className={""}
            borderColor={"rgba(180, 180, 180, 0.2)"}
            paragraph={"App scans for devices, connects via GATT, subscribes to TX characteristic for data transfer."}
            pcolor={"#b4b4b4"}
            />
            <Cards
            title={"3) Exchange"}
            tlcolor={"#ffffff"}
            bg={"rgba(128, 128, 128, 0.15)"}
            className={""}
            borderColor={"rgba(180, 180, 180, 0.2)"}
            paragraph={"Device sends payment requirements JSON, app responds with signed transaction payload."}
            pcolor={"#b4b4b4"}
            />
            <Cards
            title={"4) Verify"}
            tlcolor={"#ffffff"}
            bg={"rgba(128, 128, 128, 0.15)"}
            className={""}
            borderColor={"rgba(180, 180, 180, 0.2)"}
            paragraph={"ESP32 sends payload to Coinbase facilitator API over WiFi, receives transaction hash confirmation."}
            pcolor={"#b4b4b4"}
            />
        </div>
    </div>
  )
}

export default HowItWorks