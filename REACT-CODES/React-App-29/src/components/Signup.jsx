import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!email || !password) {
      setMessage("Email and password are required");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/signup", { name, email, password });
      setMessage(res.data.message || "Signup successful");
      setTimeout(() => navigate("/login"), 800);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message || `Error ${err.response.status}`);
      } else if (err.request) {
        setMessage("No response from server");
      } else {
        setMessage("Error: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Create Account</h2>
          <p>Signup with email</p>
        </div>
        <form onSubmit={handleSignup} className="login-form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <button type="submit" disabled={loading} className="login-button">
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>
        {message && <div className={`message ${message.toLowerCase().includes("error") || message === "No response from server" ? "error" : "success"}`}>{message}</div>}
        <div className="login-footer">
          <p>Already have an account? <a href="/login" className="signup-link">Login</a></p>
        </div>
      </div>
    </div>
  );
}
