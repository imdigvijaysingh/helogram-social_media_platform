import "../styles/Authentication.css";
import { useState } from "react";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          {/* Left Panel - Login Form */}
          <div
            className={`auth-panel login-panel ${isLogin ? "active" : "inactive"}`}
          >
            <h1 className="logo">OnBoard</h1>

            <div className="form-content">
              <h2>Log in to Your Account</h2>
              <p className="subtitle">
                Log in to your account so you can continue building and editing
                your onboarding flows.
              </p>

              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="form-input"
                  />
                </div>
               
                <button type="submit" className="submit-btn">
                  LOG IN
                </button>
              </form>
            </div>
          </div>

          {/* Right Panel - Sign Up Form */}
          <div
            className={`auth-panel signup-panel ${!isLogin ? "active" : "inactive"}`}
          >
            <h1 className="logo">OnBoard</h1>

            <div className="form-content">
              <h2>Sign Up for an Account</h2>
              <p className="subtitle">
                Let's get you all set up so you can start creating your first
                onboarding experience.
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="name-fields">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name(Optional)</label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter a strong password"
                    className="form-input"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>

          {/* Toggle Panel */}
          <div
            className={`toggle-panel ${isLogin ? "login-active" : "signup-active"}`}
          >
            <div className="toggle-content">
              {isLogin ? (
                <>
                  <h2>Don't Have an Account Yet?</h2>
                  <p>
                    Let's get you all set up so you can start creating your
                    first onboarding experience.
                  </p>
                  <button onClick={toggleForm} className="toggle-btn">
                    SIGN UP
                  </button>
                </>
              ) : (
                <>
                  <h2>Already Signed up?</h2>
                  <p>
                    Log in to your account so you can continue building and
                    editing your onboarding flows.
                  </p>
                  <button onClick={toggleForm} className="toggle-btn">
                    LOG IN
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
