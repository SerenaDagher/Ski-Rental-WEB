import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useUser } from "../../contexts/UserContext";

function Signup({ onClose, onSwitchToLogin, onSignupSuccess }) {
  const { setUser } = useUser();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const hasUpperCase = /[A-Z]/.test(password);
  const isMinLength = password.length >= 8;

  const validatePassword = () => isMinLength && hasUpperCase;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("All fields are required.");
      return;
    }

    if (!validatePassword()) {
      toast.error("Password does not meet the required criteria.");
      return;
    }

    axios
      .post("http://localhost:8082/api/users/signup", { username, email, password })
      .then((result) => {
        onSignupSuccess(username);
        setUser(result.data.user);
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
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email field */}
          <div className="mb-3">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className="mb-3">
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    size="small"
                    style={{ textTransform: "none" }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                ),
              }}
            />
            <ul className="form-text mt-2">
              <li style={{ color: isMinLength ? "green" : "red" }}>
                At least 8 characters long
              </li>
              <li style={{ color: hasUpperCase ? "green" : "red" }}>
                At least one uppercase letter
              </li>
            </ul>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            style={{ marginTop: "10px" }}
          >
            Sign Up
          </Button>
        </form>

        {/* Login switch */}
        <p>
          Already have an account?{" "}
          <Button
            onClick={onSwitchToLogin}
            variant="text"
            fullWidth
            style={{ textTransform: "none", marginTop: "10px" }}
          >
            Login here
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
