import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      setMessage(res.data.message);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setTimeout(() => navigate("/Home2"), 500);
    } catch (err) {
      if (err.response) setMessage(err.response.data.message);
      else setMessage("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="login-input" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className="login-input" />
          </div>
          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? <div className="loading-spinner"><div className="spinner"></div>Signing in...</div> : "Sign In"}
          </button>
        </form>
        {message && <div className={`message ${message.includes("error") || message === "Server error" ? "error" : "success"}`}>{message}</div>}
        <div className="login-footer">
          <p>Don't have an account? <a href="/Signup" className="signup-link">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
