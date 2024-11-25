import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useUser } from "../../contexts/UserContext";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function Signup({ onClose, onSwitchToLogin, onSignupSuccess }) {
  const theme = useTheme();
  const { setUser } = useUser();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({ name: "", email: "" });
  const hasUpperCase = /[A-Z]/.test(password);
  const isMinLength = password.length >= 8;

  const validatePassword = () => isMinLength && hasUpperCase;
  const validateName = (username) => /^[A-Za-z\s]+$/.test(username); 
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateName(username) ? "" : "Name must contain only letters.",
      email: validateEmail(email) ? "" : "Email must be a valid Gmail address.",
      password: validatePassword(password)
        ? ""
        : "Password must be at least 8 characters and contain an uppercase letter.",
    };
  
    setErrors(newErrors);

    if (!username || !email || !password) {
      toast.error("All fields are required.");
      return;
    }

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8082/api/users/signup", {
        username,
        email,
        password,
      });
  
      onSignupSuccess(username); 
      setUser(response.data.user); 
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
    }
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
              label="Name*"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name} // Show error outline if error exists
              helperText={errors.name} // Display error message
              style={{ marginBottom: "16px" }}
            />
          </div>

          {/* Email field */}
          <div className="mb-3" >
            <TextField
              label="Email*"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email} // Show error outline if error exists
              helperText={errors.email} // Display error message
              style={{ marginBottom: "16px" }}// Show helper text if invalid
            />
          </div>

          {/* Password field */}
          <div className="mb-3" >
            <TextField
              label="Password*"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password} 
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    size="small"
                    style={{ textTransform: "none"}}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                ),
              }}
            />
            <ul style={{ listStyleType: "none", padding: 0, margin: "0px 0 0 0" }}>
              <li style={{ color: isMinLength ? "green" : "gray" , fontSize: "12px"}}>
                - At least 8 characters long
              </li>
              <li style={{ color: hasUpperCase ? "green" : "gray", fontSize: "12px" }}>
                - At least one uppercase letter
              </li>
              </ul>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{
              marginTop: "10px",
              backgroundColor: theme.palette.primary.main, 
              "&:hover": {
                backgroundColor: theme.palette.primary.dark, 
              },
            }}
          >
            Sign Up
          </Button>
        </form>

        {/* Login switch */}
        <Typography variant="body1" component="div" sx={{marginTop :"16px"}}>
          Already have an account?{" "}
          <Button
            onClick={onSwitchToLogin}
            variant="text"
            style={{
              textTransform: "none",
              color: theme.palette.primary.main,
              padding: 0, 
              minWidth: "auto", 
            }}
          >
            Login here
          </Button>
        </Typography>
      </div>
    </div>
  );
}

export default Signup;
