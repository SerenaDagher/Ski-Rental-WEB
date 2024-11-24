import React, { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useUser } from "../../contexts/UserContext";

function Login({ onClose, onSwitchToSignup, onLoginSuccess }) {   
    const { setUser } = useUser(); 
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("All fields are required.");
            return;
          }
        try {
            const result = await axios.post("http://localhost:8082/api/users/login", { email, password });
            setUser(result.data.user);
            onLoginSuccess(result.data.user.username);
        } catch (err) {
            console.log("Error response:", err);
            const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
            toast.error(errorMessage);
        }
    };

  return (
    <div className="signup-overlay">
        <div className="bg-white p-3 rounded w-25 position-relative">
        <button
         className="x-button position-absolute top-0 end-0 " 
         onClick={() => {
            onClose();
            onSwitchToSignup();
          }}
        >
            &times;
        </button>
            <h2><center>Login</center></h2>
            <form onSubmit={handleSubmit}>
                
            <div className="mb-3">
                <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
             </div>
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
                </div>
                <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                style={{ marginTop: "10px" }}
                >
                Log In
                </Button>
                </form>
                <p style={{margin: "0px"}}>Don't have an account?</p>
                <Button
                    onClick={onSwitchToSignup}
                    variant="text"
                    fullWidth
                    style={{ textTransform: "none", marginTop: "0px" }}
                     >
                    Login here
                </Button>
        </div>
    </div>
  );
}

export default Login;