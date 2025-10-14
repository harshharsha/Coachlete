import {
  Shield,
  FileText,
  AlertCircle,
  CheckCircle,
  Scale,
  Lock,
  User,
} from "lucide-react";
import styles from "./page.module.css";

function PrivacyPolicy() {
  return (
    <div className={styles.termsContainer}>
      <header className={styles.termsHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerIcon}>
            <Lock size={48} />
          </div>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p className={styles.headerSubtitle}>
            Learn how Coachlete collects, uses, and protects your data
          </p>
          <div className={styles.lastUpdated}>
            <AlertCircle size={16} />
            <span>Last updated: October 8, 2025</span>
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
                <a href="#introduction" className={styles.tocLink}>
                  1. Introduction
                </a>
                <a href="#information" className={styles.tocLink}>
                  2. Information We Collect
                </a>
                <a href="#usage" className={styles.tocLink}>
                  3. How We Use Your Information
                </a>
                <a href="#sharing" className={styles.tocLink}>
                  4. Data Sharing & Disclosure
                </a>
                <a href="#security" className={styles.tocLink}>
                  5. Data Security
                </a>
                <a href="#retention" className={styles.tocLink}>
                  6. Data Retention
                </a>
                <a href="#rights" className={styles.tocLink}>
                  7. Your Rights
                </a>
                <a href="#cookies" className={styles.tocLink}>
                  8. Cookies & Tracking
                </a>
                <a href="#children" className={styles.tocLink}>
                  9. Children’s Privacy
                </a>
                <a href="#updates" className={styles.tocLink}>
                  10. Updates to Policy
                </a>
                <a href="#contact" className={styles.tocLink}>
                  11. Contact Us
                </a>
              </nav>
            </div>

            {/* <div className={styles.helpCard}>
              <div className={styles.helpIcon}>
                <FileText size={32} />
              </div>
              <h4>Need Help?</h4>
              <p>
                If you have questions about this Privacy Policy, we’re happy to
                help.
              </p>
              <a href="/contact" className={styles.helpButton}>
                Contact Privacy Team
              </a>
            </div> */}
          </aside>

          {/* Main Privacy Content */}
          <article className={styles.termsContent}>
            {/* Intro */}
            <div className={styles.introBox}>
              <div className={styles.introIcon}>
                <Shield size={32} />
              </div>
              <div className={styles.introText}>
                <h2>Welcome to Coachlete’s Privacy Policy</h2>
                <p>
                  This Privacy Policy describes how{" "}
                  <strong>
                    Lunovia Innovation and Technology Private Limited
                  </strong>{" "}
                  (“Coachlete”, “we”, “our”, or “us”) collects, uses, and
                  protects your personal data when you use our mobile
                  application and related services that connect users with
                  sports coaches for in-person training sessions.
                </p>
              </div>
            </div>

            {/* Sections */}
            <section id="introduction" className={styles.section}>
              <div className={styles.sectionNumber}>01</div>
              <h2>Introduction</h2>
              <p>
                We are committed to protecting your personal information and
                your right to privacy. This policy explains what data we
                collect, why we collect it, and how you can control it.
              </p>
              <div className={styles.highlightBox}>
                <CheckCircle size={20} />
                <p>
                  By using our platform, you consent to the collection and use
                  of information in accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            <section id="information" className={styles.section}>
              <div className={styles.sectionNumber}>02</div>
              <h2>Information We Collect</h2>
              <p>We collect information in the following ways:</p>
              <ul className={styles.listStyled}>
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, gender, and date of birth provided during
                  registration.
                </li>
                <li>
                  <strong>Location Data:</strong> To suggest nearby coaches and
                  training sessions.
                </li>
                <li>
                  <strong>Usage Information:</strong> Pages visited, session
                  times, app interactions, and device identifiers.
                </li>
                <li>
                  <strong>Payment Information:</strong> Processed securely
                  through trusted third-party gateways like Razorpay or Google
                  Play Billing.
                </li>
                <li>
                  <strong>Coach Profile Data:</strong> Qualifications,
                  certifications, sport expertise, and session availability (for
                  coach users).
                </li>
              </ul>
            </section>

            <section id="usage" className={styles.section}>
              <div className={styles.sectionNumber}>03</div>
              <h2>How We Use Your Information</h2>
              <p>We use the data we collect for purposes such as:</p>
              <ul className={styles.listStyled}>
                <li>To match athletes with nearby coaches</li>
                <li>To manage user accounts and authentication</li>
                <li>To facilitate secure payments and bookings</li>
                <li>To improve app functionality and user experience</li>
                <li>To send updates, offers, and important notifications</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section id="sharing" className={styles.section}>
              <div className={styles.sectionNumber}>04</div>
              <h2>Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share limited
                data only in the following cases:
              </p>
              <ul className={styles.listStyled}>
                <li>
                  <strong>With Coaches or Athletes:</strong> To enable session
                  bookings and communication.
                </li>
                <li>
                  <strong>With Service Providers:</strong> For payment
                  processing, analytics, and app hosting.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> When required to comply
                  with law or protect our rights and users.
                </li>
              </ul>
            </section>

            <section id="security" className={styles.section}>
              <div className={styles.sectionNumber}>05</div>
              <h2>Data Security</h2>
              <p>
                We use strong technical and organizational measures to protect
                your data, including SSL encryption, secure payment gateways,
                and limited employee access. However, no online platform can
                guarantee absolute security.
              </p>
            </section>

            <section id="retention" className={styles.section}>
              <div className={styles.sectionNumber}>06</div>
              <h2>Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the
                purposes outlined in this policy or as required by law. You may
                request data deletion by emailing{" "}
                <a href="mailto:support@coachlete.co.in">
                  support@coachlete.co.in
                </a>
                .
              </p>
            </section>

            <section id="rights" className={styles.section}>
              <div className={styles.sectionNumber}>07</div>
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul className={styles.listStyled}>
                <li>Access and review your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your account and data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section id="cookies" className={styles.section}>
              <div className={styles.sectionNumber}>08</div>
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies, analytics tools, and similar technologies to
                improve user experience and understand app usage patterns. You
                can disable cookies in your browser settings if you prefer.
              </p>
            </section>

            <section id="children" className={styles.section}>
              <div className={styles.sectionNumber}>09</div>
              <h2>Children’s Privacy</h2>
              <p>
                Our platform is not directed toward children under 13. If we
                learn that we have collected data from a child under 13 without
                parental consent, we will promptly delete that information.
              </p>
            </section>

            <section id="updates" className={styles.section}>
              <div className={styles.sectionNumber}>10</div>
              <h2>Updates to This Policy</h2>
              <p>
                We may revise this Privacy Policy from time to time. Any
                material changes will be communicated through in-app
                notifications or email.
              </p>
              <div className={styles.infoBox}>
                <CheckCircle size={20} />
                <p>
                  Your continued use of the App means you accept those changes.
                </p>
              </div>
            </section>

            <section id="contact" className={styles.section}>
              <div className={styles.sectionNumber}>11</div>
              <h2>Contact Us</h2>
              <p>
                If you have any questions, complaints, or requests related to
                this Privacy Policy, you may contact us:
              </p>
              <div className={styles.contactBox}>
                <div className={styles.contactItem}>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@coachlete.co.in">
                    support@coachlete.co.in
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <strong>Phone:</strong>
                  <span>+91 8105397773</span>
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
                <User size={32} />
              </div>
              <div className={styles.acknowledgmentText}>
                <h3>Your Privacy Matters</h3>
                <p>
                  We value your trust and are committed to protecting your data.
                  Please review this policy regularly to stay informed about how
                  Coachlete safeguards your privacy.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
