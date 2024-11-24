import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup({ onClose, onSwitchToLogin, onSignupSuccess }) {
  // State hooks
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Password validation
  const hasUpperCase = /[A-Z]/.test(password);
  const isMinLength = password.length >= 8;

  const validatePassword = () => {
    const isMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
  
    return isMinLength && hasUpperCase ;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
        toast.error("All fields are required.");
        return false;
      }

    if (!validatePassword()) {
        toast.error("Password does not meet the required criteria.");
        return;
      }

    axios
      .post("http://localhost:8082/api/users/signup", { username, email, password })
      .then((result) => {
        toast.success(result.data.message);
        onSignupSuccess(username);
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
        toast.error(errorMessage);
      });
  };

  return (
    <div className="signup-overlay">
      <div className="bg-white p-3 rounded w-25 position-relative">
        <button className="x-button position-absolute top-0 end-0" onClick={onClose}>
          &times;
        </button>

        <h2>
          <center>Sign Up</center>
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username field */}
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="username"
              className="form-control rounded-0"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email field */}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <ul className="form-text mt-2">
                <li style={{ color: hasUpperCase ? "green" : "red" }}>At least one uppercase letter.</li>
                <li style = {{ color: isMinLength ? "green" : "red" }}>Minimum 8 characters.</li>
             </ul>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign Up
          </button>
        </form>

        {/* Login switch */}
        <p>
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
