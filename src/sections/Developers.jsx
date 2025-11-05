import React, { useState } from 'react'

function Developers() {
  const [copied, setCopied] = useState(false);

  const codeContent = `#include <SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <ArduinoJson.h>

// WiFi credentials
const char* ssid = "YourWiFiNetwork";
const char* password = "YourPassword";

// Payment configuration
const String receiverAddress = "0xa78eD39F695615315458Bb066ac9a5F28Dfd65FE";
const String network = "base-sepolia";
const float paymentAmount = 1.0; // USDC amount

// Create web server on port 80
ESP8266WebServer server(80);

// Payment verification endpoint
void handlePaymentRequest() {
    if (server.method() == HTTP_POST) {
        String payload = server.arg("plain");
        
        // Parse JSON payload from sender
        DynamicJsonDocument doc(1024);
        deserializeJson(doc, payload);
        
        String senderAddress = doc["from"];
        String txHash = doc["txHash"];
        float amount = doc["amount"];
        
        // Verify payment via PayNet facilitator API
        String apiUrl = "https://facilitator.paynet.cloud/verify";
        HTTPClient http;
        http.begin(apiUrl);
        http.addHeader("Content-Type", "application/json");
        
        String verifyPayload = "{\"txHash\":\"" + txHash + 
                              "\",\"network\":\"" + network + "\"}";
        
        int httpCode = http.POST(verifyPayload);
        
        if (httpCode == 200) {
            String response = http.getString();
            DynamicJsonDocument verifyDoc(512);
            deserializeJson(verifyDoc, response);
            
            if (verifyDoc["verified"] == true && 
                verifyDoc["to"] == receiverAddress &&
                verifyDoc["amount"] >= paymentAmount) {
                
                // Payment verified - transfer complete
                server.send(200, "application/json", 
                    "{\"status\":\"success\",\"message\":\"Payment received\"}");
                
                Serial.println("Payment verified: $" + String(amount) + 
                              " from " + senderAddress);
                
                // Activate your device (e.g., unlock door, dispense item)
                digitalWrite(LED_BUILTIN, HIGH);
                delay(1000);
                digitalWrite(LED_BUILTIN, LOW);
            }
        }
        http.end();
    }
}

void setup() {
    Serial.begin(115200);
    pinMode(LED_BUILTIN, OUTPUT);
    
    // Connect to WiFi
    WiFi.begin(ssid, password);
    Serial.print("Connecting to WiFi");
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println();
    Serial.print("WiFi connected! IP: ");
    Serial.println(WiFi.localIP());
    
    // Setup payment endpoint
    server.on("/payment", handlePaymentRequest);
    server.begin();
    Serial.println("Payment server started on /payment");
}

void loop() {
    server.handleClient();
    delay(10);
}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = codeContent;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (fallbackErr) {
        console.error('Failed to copy code:', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section id='developers' className='developers-section'>
        <div className='developers-header'>
            <h1 className='developers-title'>Developers</h1>
            <p className='developers-description'>PayNet-Arduino: payment verification for ESP8266. PayNet-core: WiFi HTTP server for ESP8266. React Native mobile app and React web app connect over WiFi to send payments.</p>
        </div>

        <div className='code-editor-container'>
            <div className='code-editor-header'>
                <h3 className='code-editor-title'>ESP8266 Basic Payment Verification</h3>
                <button className='code-editor-copy-btn' onClick={handleCopy}>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <pre className='code-editor-code'>
                <code>{codeContent}</code>
            </pre>
        </div>
    </section>
  )
}

export default Developers