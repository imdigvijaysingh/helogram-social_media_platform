import "../styles/Authentication.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Authentication = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    if (!isLogin) {
      // Sign Up Logic
      axios
        .post("http://localhost:3000/auth/signup", {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          password: formData.get("password"),
        })
        .then((res) => {
          setIsLogin(true);
          navigate("/profile");
        })
        .catch((err) => {
          const message = err.response?.data?.message;

          if (message === "A user with this email already exists.") {
            setEmailError(message);
          }

          setIsLoading(false);
        });
    } else {
      // Log In Logic
      axios
        .post("http://localhost:3000/auth/login", {
          email: formData.get("email"),
          password: formData.get("password"),
        })
        .then((res) => {
          navigate("/feed");
        })
        .catch((err) => {
          const message = err.response?.data?.message;

          if (message === "User not found. Please sign up first.") {
            setEmailError(message);
          }

          if (message === "Wrong password. Please try again.") {
            setPasswordError(message);
          }

          setIsLoading(false);
          
        });
    }
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);

    setEmailError("");
    setPasswordError("");
  };

  const [isLogin, setIsLogin] = useState(true);

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

              <form onSubmit={handleAuthSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="form-input"
                  />
                  
                  {emailError && <p className="error-text">{emailError}</p>}
                
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-input"
                  />
                  {passwordError && <p className="error-text">{passwordError}</p>}
                </div>

                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading && isLogin ? <span className="spinner"></span> : "LOG IN"}
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

              <form onSubmit={handleAuthSubmit}>
                <div className="name-fields">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Your first name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name(Optional)</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your last name"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="form-input"
                    required
                  />
                  {emailError && <p className="error-text">{emailError}</p>}
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter a strong password"
                    className="form-input"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading && !isLogin ? <span className="spinner"></span> : "SIGN UP"}
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
