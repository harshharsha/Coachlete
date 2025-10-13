import {
  Shield,
  FileText,
  AlertCircle,
  CheckCircle,
  Scale,
  Lock,
} from "lucide-react";
import styles from "./page.module.css";

function TermsConditions() {
  return (
    <div className={styles.termsContainer}>
      <header className={styles.termsHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerIcon}>
            <Scale size={48} />
          </div>
          <h1 className={styles.pageTitle}>Terms and Conditions</h1>
          <p className={styles.headerSubtitle}>
            Please read these terms carefully before using our platform
          </p>
          <div className={styles.lastUpdated}>
            <AlertCircle size={16} />
            <span>Last updated: September 23, 2025</span>
          </div>
        </div>
      </header>

      <main className={styles.termsMain}>
        <div className={styles.contentWrapper}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Quick Navigation</h3>
              <nav className={styles.tocNav}>
                <a href="#acceptance" className={styles.tocLink}>
                  1. Acceptance of Terms
                </a>
                <a href="#eligibility" className={styles.tocLink}>
                  2. Eligibility & Use
                </a>
                <a href="#services" className={styles.tocLink}>
                  3. Our Services
                </a>
                <a href="#property" className={styles.tocLink}>
                  4. Intellectual Property
                </a>
                <a href="#usercontent" className={styles.tocLink}>
                  5. User Content & Conduct
                </a>
                <a href="#coaches" className={styles.tocLink}>
                  6. Coaches Responsibilities
                </a>
                <a href="#safety" className={styles.tocLink}>
                  7. Safety Disclaimer
                </a>
                <a href="#payments" className={styles.tocLink}>
                  8. Payments & Subscriptions
                </a>
                <a href="#privacy" className={styles.tocLink}>
                  9. Privacy
                </a>
                <a href="#termination" className={styles.tocLink}>
                  10. Termination
                </a>
                <a href="#liability" className={styles.tocLink}>
                  11. Limitation of Liability
                </a>
                <a href="#dispute" className={styles.tocLink}>
                  12. Dispute Resolution & Governing Law
                </a>
                <a href="#changes" className={styles.tocLink}>
                  13. Updates to Terms
                </a>
                <a href="#contact" className={styles.tocLink}>
                  14. Contact Us
                </a>
              </nav>
            </div>

            {/* <div className={styles.helpCard}>
              <div className={styles.helpIcon}>
                <FileText size={32} />
              </div>
              <h4>Need Help?</h4>
              <p>
                If you have questions about these terms, our legal team is here
                to help.
              </p>
              <a href="/contact" className={styles.helpButton}>
                Contact Legal Team
              </a>
            </div> */}
          </aside>

          {/* Main Terms Content */}
          <article className={styles.termsContent}>
            {/* Intro */}
            <div className={styles.introBox}>
              <div className={styles.introIcon}>
                <Shield size={32} />
              </div>
              <div className={styles.introText}>
                <h2>Welcome to Coachlete</h2>
                <p>
                  Welcome to <strong>Coachlete</strong>, operated by{" "}
                  <strong>
                    Lunovia Innovation and Technology Private Limited
                  </strong>
                  . These Terms and Conditions (“Terms”) govern your access to
                  and use of the Coachlete mobile application (“App”). By
                  downloading, accessing, or using the App, you agree to these
                  Terms.
                </p>
              </div>
            </div>

            {/* Sections */}
            <section id="acceptance" className={styles.section}>
              <div className={styles.sectionNumber}>01</div>
              <h2>Acceptance of Terms</h2>
              <p>
                By using the Coachlete platform, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and our
                Privacy Policy. If you do not agree, you must not use the App.
              </p>
              <div className={styles.highlightBox}>
                <CheckCircle size={20} />
                <p>
                  These Terms constitute a legally binding agreement between you
                  and Lunovia Innovation and Technology Private Limited.
                </p>
              </div>
            </section>

            <section id="eligibility" className={styles.section}>
              <div className={styles.sectionNumber}>02</div>
              <h2>Eligibility and Use</h2>
              <p>
                You must be at least 13 years old to use the App. Users below 13
                may use it only with parental or guardian supervision and
                consent.
              </p>
              <p>
                You agree to use the App lawfully and responsibly. You are
                responsible for maintaining the confidentiality of your account
                information and for all activity that occurs under your account.
              </p>
            </section>

            <section id="services" className={styles.section}>
              <div className={styles.sectionNumber}>03</div>
              <h2>Our Services</h2>
              <p>
                Coachlete is a platform that connects players with coaches,
                helping users book verified coaching sessions, trials, and
                tournaments nearby. We act only as a facilitator and do not
                directly employ or control the coaches listed on the platform.
              </p>
              <ul className={styles.listStyled}>
                <li>Coaches are independent service providers.</li>
                <li>
                  Ratings and reviews are for guidance only, not professional
                  guarantees.
                </li>
                <li>
                  Coachlete does not offer direct coaching or health advice.
                </li>
              </ul>
            </section>

            <section id="property" className={styles.section}>
              <div className={styles.sectionNumber}>04</div>
              <h2>Intellectual Property</h2>
              <p>
                All content, design, features, and software in the App are owned
                by{" "}
                <strong>
                  Lunovia Innovation and Technology Private Limited
                </strong>
                and protected by intellectual property laws. You may not copy,
                modify, or distribute any part of the App without prior consent.
              </p>
            </section>

            <section id="usercontent" className={styles.section}>
              <div className={styles.sectionNumber}>05</div>
              <h2>User Content and Conduct</h2>
              <p>
                Users may post or share limited content (such as images or
                feedback). You retain ownership but grant Coachlete a license to
                use your content for platform operation and improvement.
              </p>
              <ul className={styles.listStyled}>
                <li>Do not post illegal or harmful content.</li>
                <li>Do not impersonate others or misrepresent information.</li>
                <li>
                  Be respectful toward other users and coaches during
                  interactions.
                </li>
                <li>
                  Use Coachlete only for lawful sporting and training purposes.
                </li>
              </ul>
            </section>

            <section id="coaches" className={styles.section}>
              <div className={styles.sectionNumber}>06</div>
              <h2>Coaches Responsibilities</h2>
              <ul className={styles.listStyled}>
                <li>
                  Provide accurate details about qualifications and experience.
                </li>
                <li>
                  Ensure the safety and professionalism of all coaching
                  sessions.
                </li>
                <li>
                  Treat athletes fairly and avoid any misconduct during
                  sessions.
                </li>
              </ul>
            </section>

            <section id="safety" className={styles.section}>
              <div className={styles.sectionNumber}>07</div>
              <h2>Safety Disclaimer</h2>
              <p>
                Sports and physical activities involve risks. Users participate
                at their own discretion. We recommend consulting a qualified
                coach or medical professional before starting any physical
                training.
              </p>
              <div className={styles.warningBox}>
                <AlertCircle size={20} />
                <p>
                  Coachlete is a booking platform only and is not responsible
                  for injuries, accidents, or losses during physical activities
                  or sessions.
                </p>
              </div>
            </section>

            <section id="payments" className={styles.section}>
              <div className={styles.sectionNumber}>08</div>
              <h2>Payments and Subscriptions</h2>
              <p>
                Some features or coaching sessions may require payment or
                subscription. Payments for offline sessions are processed
                securely through <strong>Razorpay</strong>. For any digital
                purchases, we comply with Google Play’s Billing Policy.
              </p>
              <p>
                Prices and terms may change with notice. Refunds are handled
                case-by-case in accordance with our Refund Policy.
              </p>
            </section>

            <section id="privacy" className={styles.section}>
              <div className={styles.sectionNumber}>09</div>
              <h2>Privacy</h2>
              <div className={styles.privacyBox}>
                <Lock size={24} />
                <div>
                  <p>
                    Your data is handled in accordance with our Privacy Policy,
                    which explains how we collect and protect your information.
                  </p>
                  <a href="PrivacyPolicy" className={styles.privacyLink}>
                    View Privacy Policy →
                  </a>
                </div>
              </div>
            </section>

            <section id="termination" className={styles.section}>
              <div className={styles.sectionNumber}>10</div>
              <h2>Termination</h2>
              <p>
                We may suspend or terminate your access if you violate these
                Terms or misuse the platform. You may also delete your account
                at any time from your profile settings.
              </p>
            </section>

            <section id="liability" className={styles.section}>
              <div className={styles.sectionNumber}>11</div>
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by Indian law, Coachlete and
                Lunovia Innovation and Technology Private Limited are not liable
                for any indirect, incidental, or consequential damages resulting
                from the use of the App, including injuries during sessions or
                tournaments.
              </p>
            </section>

            <section id="dispute" className={styles.section}>
              <div className={styles.sectionNumber}>12</div>
              <h2>Dispute Resolution and Governing Law</h2>
              <p>
                Users and coaches should first attempt to resolve disputes
                directly. Coachlete may assist but is not obligated to
                intervene.
              </p>
              <p>
                These Terms are governed by the laws of India, and disputes will
                be resolved exclusively in the courts of Bengaluru, Karnataka.
              </p>
            </section>

            <section id="changes" className={styles.section}>
              <div className={styles.sectionNumber}>13</div>
              <h2>Updates to Terms</h2>
              <p>
                We may modify these Terms from time to time to reflect legal or
                operational updates. Users will be notified in advance of any
                material changes via the App or email.
              </p>
            </section>

            <section id="contact" className={styles.section}>
              <div className={styles.sectionNumber}>14</div>
              <h2>Contact Us</h2>
              <p>
                For questions or concerns about these Terms, please contact:
              </p>
              <div className={styles.contactBox}>
                <div className={styles.contactItem}>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@coachlete.co.in">
                    support@coachlete.co.in
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <strong>Address:</strong>
                  <span>
                    No 116, 4th cross, Prakruthinagar, Bharathnagar - 560091
                    <br />
                    Bengaluru, Karnataka, India
                  </span>
                </div>
              </div>
            </section>

            <div className={styles.acknowledgment}>
              <div className={styles.acknowledgmentIcon}>
                <CheckCircle size={32} />
              </div>
              <div className={styles.acknowledgmentText}>
                <h3>Acknowledgment</h3>
                <p>
                  By using Coachlete, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* <footer className={styles.termsFooter}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 Coachlete. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default TermsConditions;
