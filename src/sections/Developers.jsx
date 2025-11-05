import React from 'react'

function Developers() {
  return (
    <section id='developers' className='developers-section'>
        <div className='developers-header'>
            <h1 className='developers-title'>Developers</h1>
            <p className='developers-description'>X402-Aurdino: payment verification for ESP32. x4Pay-core: Bluetooth (BLE) server for ESP32. React Native mobile app and React web app connect and send payments.</p>
        </div>

        <div className='code-editor-container'>
            <div className='code-editor-header'>
                <h3 className='code-editor-title'>ESP32 Basic Payment Verification</h3>
                <button className='code-editor-copy-btn'>Copy</button>
            </div>
            <pre className='code-editor-code'>
                <code>{`#include <WiFi.h>
#include "X402Aurdino.h"

const String network = "base-sepolia";
const String payTo = "0xa78eD39F695615315458Bb066ac9a5F28Dfd65FE";
const String maxAmountRequired = "1000000"; // 1 USDC in micro-units

void setup() {
    Serial.begin(115200);
    WiFi.begin("yourWiFi", "password");

    // Build payment requirements
    String requirements = buildDefaultPaymentRementsJson(
        network, payTo, maxAmountRequired,
        "https://logo.url", "Device description"
    );

    Serial.println("Payment Requirements:");
    Serial.println(requirements);
}

void loop() {
    // Handle incoming payment payloads and verify them
    if (Serial.available()) {
        String paymentJson = Serial.readString();

        // Create PaymentPayload object
        PaymentPayload payload(paymentJson);

        // Verify payment using x402 facilitator API
        bool isValid = verifyPayment(payload, requirements);

        if (isValid) {
            Serial.println("Payment verified successfully!");
            // Add your device logic here (e.g., activate relay)
        }
    }
}`}</code>
            </pre>
        </div>
    </section>
  )
}

export default Developers