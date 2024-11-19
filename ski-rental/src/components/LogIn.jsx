import React, { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ onClose, onSwitchToSignup, onLoginSuccess }) {    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:8082/api/users/login", {email, password })
        .then((result) => {
            toast.success(result.data.message);
            onLoginSuccess(result.data.username)
            console.log(result.data.username)
        })
        .catch((err) => {
            const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
            toast.error(errorMessage);
        });
    
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
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0" >
                    Login
                </button>
                </form>
                <p>Don't have an account?</p>
                <button onClick={onSwitchToSignup} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Signup here
                </button>
        </div>
    </div>
  );
}

export default Login;