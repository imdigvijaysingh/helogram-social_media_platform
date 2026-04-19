import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/LandingPage.css";
import heroImage from "../assets/hero-preview.png"; // Import the image

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* <header className="landing-header">
          <h1 className="logo">OnBoard</h1>
          <div className="header-btns">
            <button
              className="submit-btn mini-btn"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </button>
          </div>
        </header> */}

        <main className="auth-card landing-card">
          <div className="hero-section">
            <div className="hero-text">
              <h2>
                Connect, Share, and <br />
                <span>Build Your Network</span>
              </h2>
              <p className="subtitle">
                Experience a clean, distraction-free social environment. From
                seamless onboarding to meaningful conversations, OnBoard is
                where your social journey begins.
              </p>
              <div className="hero-actions">
                <button
                  className="submit-btn"
                  onClick={() => navigate("/auth")}
                >
                  Get Started for Free
                </button>
              </div>
            </div>

            <div className="hero-preview">
              {/* This represents the UI seen in your screenshot */}
              <img
                src={heroImage}
                alt="App Preview"
                className="responsive-img"
              />
              {/* <div className="mockup-container">
                <div className="mockup-sidebar"></div>
                <div className="mockup-feed">
                  <div className="mockup-post"></div>
                  <div className="mockup-post"></div>
                </div>
                <div className="mockup-suggestions"></div>
              </div> */}
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-links">
            {/* <Link to="/about">About</Link>
            <Link to="/features">Features</Link> */}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <p>© 2026 OnBoard Social. Built for creators.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
