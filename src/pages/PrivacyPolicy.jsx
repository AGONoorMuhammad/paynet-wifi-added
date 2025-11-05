import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <NavBar />
      <div className='terms-page'>
        <div className='terms-container'>
          <h1 className='terms-title'>Privacy Policy</h1>
          <p className='terms-last-updated'>Last updated: November 4, 2025</p>

          <div className='terms-content'>
            <section className='terms-section'>
              <h2 className='terms-main-heading'>1. Introduction</h2>
              <p className='terms-body'>
                This Privacy Policy ("Policy") explains how PayNet ("we," "us," or "our") collects, uses, and protects information when you access or use the PayNet platform, website, applications, and related services (collectively, the "Service").
              </p>
              <p className='terms-body'>
                By using the Service, you consent to the collection and use of your information in accordance with this Policy.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>2. Information We Collect</h2>
              
              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>2.1 Non-Personal Information</h3>
                <p className='terms-body'>
                  We may collect non-personal information automatically when you use the Service, including:
                </p>
                <ul className='terms-body' style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>Device type and operating system</li>
                  <li>IP address and general location</li>
                  <li>Wi-Fi connection identifiers used for payment relay</li>
                  <li>Browser type and usage statistics</li>
                </ul>
                <p className='terms-body' style={{ marginTop: '0.5rem' }}>
                  This data helps us maintain network integrity, prevent abuse, and improve performance.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>2.2 Blockchain Data</h3>
                <p className='terms-body'>
                  Transactions made through the PayNet token or Solana blockchain are public by design. Wallet addresses, transaction IDs, and on-chain data are visible on the blockchain and not controlled by PayNet.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>2.3 Voluntary Information</h3>
                <p className='terms-body'>
                  If you choose to contact us or register devices, we may collect information such as:
                </p>
                <ul className='terms-body' style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>Contact details (email or username)</li>
                  <li>Device identifiers for Wi-Fi payment nodes</li>
                  <li>Technical logs required for troubleshooting or verification</li>
                </ul>
                <p className='terms-body' style={{ marginTop: '0.5rem' }}>
                  We do not collect or store private keys or wallet seed phrases.
                </p>
              </div>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>3. How We Use Information</h2>
              <p className='terms-body'>
                We use collected information to:
              </p>
              <ul className='terms-body' style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Enable Wi-Fi-based payment transmission</li>
                <li>Authenticate and register devices within the PayNet network</li>
                <li>Improve Service reliability, scalability, and performance</li>
                <li>Detect and mitigate network abuse or fraudulent activity</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
              <p className='terms-body' style={{ marginTop: '0.5rem' }}>
                We do not sell, trade, or rent personal data to third parties.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>4. Data Security</h2>
              <p className='terms-body'>
                We implement reasonable technical and organizational measures to protect data from unauthorized access, alteration, or destruction. However, no online or wireless system is completely secure. Users are responsible for safeguarding their own wallets, private keys, and device access.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>5. Blockchain Transparency</h2>
              <p className='terms-body'>
                Because transactions occur on the Solana blockchain, certain information—such as your wallet address, transaction history, and token balances—is inherently public. PayNet cannot modify or delete blockchain data.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>6. Third-Party Services</h2>
              <p className='terms-body'>
                The Service may integrate third-party APIs or infrastructure (e.g., Solana RPC providers, explorers, or analytics tools). These third parties operate under their own privacy policies, and PayNet is not responsible for their data practices.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>7. Data Retention</h2>
              <p className='terms-body'>
                We retain collected information only as long as necessary to provide and improve the Service, resolve disputes, or comply with legal requirements. Blockchain data is permanent and cannot be erased.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>8. User Rights</h2>
              <p className='terms-body'>
                Depending on your jurisdiction, you may have rights to:
              </p>
              <ul className='terms-body' style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Access or request deletion of personal data (excluding on-chain data)</li>
                <li>Restrict or object to certain types of processing</li>
                <li>Withdraw consent to optional data collection features</li>
              </ul>
              <p className='terms-body' style={{ marginTop: '0.5rem' }}>
                Requests can be made via our official contact channels listed on the PayNet website.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>9. International Data Transfers</h2>
              <p className='terms-body'>
                Your information may be processed on servers located in different jurisdictions. By using the Service, you consent to such transfers, even if your local laws provide different protections.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>10. Updates to This Policy</h2>
              <p className='terms-body'>
                We may update this Policy from time to time. The latest version will always be available on our website, with the effective date shown at the top. Continued use of the Service after changes constitutes your acceptance of the updated Policy.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>11. Contact Information</h2>
              <p className='terms-body'>
                For questions or requests regarding this Privacy Policy, please contact us through the official channels listed on our website.
              </p>
            </section>

            <div className='terms-acknowledgment-box'>
              <h3 className='terms-acknowledgment-title'>Acknowledgment</h3>
              <p className='terms-body'>
                By using the PayNet Service, you acknowledge that you have read, understood, and agree to this Privacy Policy. You also understand that blockchain transactions conducted through the PayNet token on Solana are public and immutable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy

