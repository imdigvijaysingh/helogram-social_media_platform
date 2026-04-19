import "../styles/PrivacyPolicy.css";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This includes:`,
    bullets: [
      "Name, email address, and password when you register",
      "Profile information such as a bio, profile photo, and social links",
      "Content you post, including text, images, and interactions",
      "Communications you send us via support or feedback channels",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: `We use the information we collect to operate, maintain, and improve OnBoard. Specifically, we use it to:`,
    bullets: [
      "Provide, personalize, and improve our platform and services",
      "Send transactional emails such as account verification and notifications",
      "Monitor and analyze usage patterns to improve user experience",
      "Detect, investigate, and prevent fraudulent or unauthorized activity",
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing of Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:`,
    bullets: [
      "With your consent or at your direction",
      "With service providers who assist us in operating our platform",
      "To comply with legal obligations or respond to lawful requests",
      "In connection with a merger, acquisition, or sale of assets",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    content: `OnBoard uses cookies and similar tracking technologies to enhance your experience. These include:`,
    bullets: [
      "Session cookies to keep you logged in securely",
      "Preference cookies to remember your settings",
      "Analytics cookies to understand how users interact with our platform",
      "You may disable cookies through your browser settings, though some features may be affected",
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: `We take the security of your personal information seriously. We implement industry-standard measures including:`,
    bullets: [
      "Encrypted data transmission via HTTPS/TLS",
      "Hashed and salted password storage — we never store plaintext passwords",
      "Regular security audits and vulnerability assessments",
      "Strict internal access controls on user data",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal data, including:`,
    bullets: [
      "The right to access and receive a copy of your data",
      "The right to correct inaccurate or incomplete information",
      "The right to request deletion of your account and associated data",
      "The right to opt out of certain types of data processing",
    ],
  },
  {
    id: "changes",
    title: "7. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make material changes, we will notify you by email or via a prominent notice on our platform. We encourage you to review this page periodically.`,
    bullets: [],
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out to us at:`,
    bullets: [
      "Email: privacy@onboard.app",
      "Website: https://onboard.app/contact",
    ],
  },
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="pp-page">
      <div className="pp-container">
        {/* Header */}
        <header className="pp-header">
          <h1 className="pp-logo" onClick={() => navigate("/")}>OnBoard</h1>
          <span className="pp-badge">Privacy Policy</span>
        </header>

        {/* Hero */}
        <div className="pp-hero">
          <div className="pp-hero-icon">
            <svg viewBox="0 0 24 24" fill="none" className="pp-shield-icon">
              <path
                d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V6L12 2Z"
                stroke="#5046E4"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="#5046E4"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="pp-title">Your Privacy Matters</h2>
          <p className="pp-subtitle">
            At OnBoard, we are committed to protecting your personal information
            and being transparent about how we use it. This policy was last
            updated on <strong>April 19, 2026</strong>.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="pp-toc">
          <p className="pp-toc-label">Jump to section</p>
          <div className="pp-toc-links">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="pp-toc-link">
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Sections */}
        <div className="pp-sections">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="pp-section">
              <h3 className="pp-section-title">{s.title}</h3>
              <p className="pp-section-text">{s.content}</p>
              {s.bullets.length > 0 && (
                <ul className="pp-list">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="pp-list-item">
                      <span className="pp-bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="pp-footer">
          <p>© {new Date().getFullYear()} OnBoard. All rights reserved.</p>
          <button className="pp-back-btn" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
