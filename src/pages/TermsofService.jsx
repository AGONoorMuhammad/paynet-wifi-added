import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function TermsOfService() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <NavBar />
      <div className='terms-page'>
        <div className='terms-container'>
          <h1 className='terms-title'>Terms and Conditions</h1>
          <p className='terms-last-updated'>Last updated: November 4, 2025</p>

          <div className='terms-content'>
            <section className='terms-section'>
              <h2 className='terms-main-heading'>1. Introduction</h2>
              <p className='terms-body'>
                These Terms and Conditions ("Terms") govern your use of the PayNet platform, website, applications, and services (collectively, the "Service") operated by PayNet ("we," "us," or "our"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>2. Utility Token – Not an Investment</h2>
              
              <div className='terms-important-box'>
                <p className='terms-important-text'>
                  <strong>IMPORTANT:</strong> PayNet tokens are utility tokens, not investments or securities.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>2.1 Utility Purpose</h3>
                <p className='terms-body'>
                  PayNet tokens are designed exclusively for use within the PayNet ecosystem for device registration, transaction verification, and network-level authentication over Wi-Fi connectivity.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>2.2 Not Securities</h3>
                <p className='terms-body'>
                  PayNet tokens are not securities, investment contracts, or financial instruments under any jurisdiction's laws.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>2.3 No Investment Returns</h3>
                <p className='terms-body'>
                  Tokens do not represent equity, debt, or ownership rights. There are no promises or expectations of profits or returns.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>2.4 No Investment Advice</h3>
                <p className='terms-body'>
                  Nothing on our platform constitutes investment, financial, legal, or tax advice.
                </p>
              </div>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>3. Risk Warnings</h2>
              
              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>3.1 High Risk</h3>
                <p className='terms-body'>
                  Cryptocurrency and blockchain technologies involve substantial risk, including potential total loss of value.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>3.2 Volatility</h3>
                <p className='terms-body'>
                  Token values can be extremely volatile and unpredictable.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>3.3 Technology Risks</h3>
                <p className='terms-body'>
                  Blockchain and wireless technologies (including Wi-Fi transmission) are experimental and may contain bugs, vulnerabilities, or fail entirely.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>3.4 Regulatory Risks</h3>
                <p className='terms-body'>
                  Cryptocurrency regulations are evolving and may impact token functionality or legality.
                </p>
              </div>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>4. User Responsibilities</h2>
              
              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>4.1 Legal Compliance</h3>
                <p className='terms-body'>
                  You are responsible for complying with <strong>all applicable laws and regulations</strong> in your jurisdiction.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>4.2 Prohibited Jurisdictions</h3>
                <p className='terms-body'>
                  You may not use our Service if prohibited by local laws or regulations.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>4.3 Age Requirements</h3>
                <p className='terms-body'>
                  You must be at least 18 years old to use our Service.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>4.4 Account Security</h3>
                <p className='terms-body'>
                  You are responsible for maintaining the security of your wallets, private keys, and any devices connected to PayNet.
                </p>
              </div>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>5. Service Availability</h2>
              
              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>5.1 No Guarantees</h3>
                <p className='terms-body'>
                  We make no guarantees about Service availability, functionality, or performance, including wireless connectivity.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>5.2 Maintenance</h3>
                <p className='terms-body'>
                  We may suspend or modify the Service for maintenance, updates, or other reasons.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>5.3 Discontinuation</h3>
                <p className='terms-body'>
                  We reserve the right to discontinue the Service at any time without notice.
                </p>
              </div>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>6. Intellectual Property</h2>
              
              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>6.1 Our Rights</h3>
                <p className='terms-body'>
                  We retain all rights to our trademarks, copyrights, and proprietary technology.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>6.2 License</h3>
                <p className='terms-body'>
                  We grant you a <strong>limited, non-exclusive</strong> license to use our Service for its intended purpose.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>6.3 Restrictions</h3>
                <p className='terms-body'>
                  You may not <strong>copy, modify, distribute, or reverse-engineer</strong> our Service or technology.
                </p>
              </div>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>7. Limitation of Liability</h2>
              
              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>7.1 No Warranties</h3>
                <p className='terms-body'>
                  The Service is provided <strong>"as is"</strong> without warranties of any kind.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>7.2 Liability Limits</h3>
                <p className='terms-body'>
                  Our liability is <strong>limited</strong> to the maximum extent permitted by law.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>7.3 Consequential Damages</h3>
                <p className='terms-body'>
                  We are <strong>not liable</strong> for indirect, incidental, or consequential damages.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>7.4 Total Liability</h3>
                <p className='terms-body'>
                  Our <strong>total liability</strong> shall not exceed the amount you paid for the Service in the past 12 months.
                </p>
              </div>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>8. Indemnification</h2>
              <p className='terms-body'>
                You agree to indemnify and hold harmless PayNet, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>9. Governing Law and Disputes</h2>
              
              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>9.1 Governing Law</h3>
                <p className='terms-body'>
                  These Terms are governed by the laws of [Your Jurisdiction].
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>9.2 Arbitration</h3>
                <p className='terms-body'>
                  Disputes shall be resolved through binding arbitration rather than court proceedings.
                </p>
              </div>

              <div className='terms-subsection'>
                <h3 className='terms-sub-heading'>9.3 Class Action Waiver</h3>
                <p className='terms-body'>
                  You waive any right to participate in class action lawsuits.
                </p>
              </div>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>10. Changes to Terms</h2>
              <p className='terms-body'>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of the Service constitutes acceptance of modified Terms.
              </p>
            </section>

            <section className='terms-section'>
              <h2 className='terms-main-heading'>11. Contact Information</h2>
              <p className='terms-body'>
                If you have questions about these Terms, please contact us through the official channels listed on our website.
              </p>
            </section>

            <div className='terms-acknowledgment-box'>
              <h3 className='terms-acknowledgment-title'>Acknowledgment</h3>
              <p className='terms-body'>
                By using the PayNet Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. You also acknowledge that PayNet tokens are utility tokens and not investments or securities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TermsOfService

