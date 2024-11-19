import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup({ onClose, onSwitchToLogin }) {    

    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8082/api/users/signup", { username, email, password })
        .then((result) => {
            toast.success("Signup successful! Welcome to the platform.");
            onClose(); 
          })
          .catch((err) => {
            toast.error("Signup failed. Please try again.");
          });
    }

  return (
    <div className="signup-overlay" >

        <div className="bg-white p-3 rounded w-25 position-relative">
        <button
         className="x-button position-absolute top-0 end-0 " 
        onClick={onClose}>
            &times;
        </button>

        <h2><center>Sign Up</center></h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Name' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                <button type="submit" className="btn btn-success w-100 rounded-0" onClick={handleSubmit}>
                    Sign Up
                </button>
                </form>

                <p>
                Already have an account?{" "}
                <button onClick={onSwitchToLogin} className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login here
                </button>
                </p>
        </div>
        <ToastContainer position="top-center" style={{ zIndex: 10000 }} hideProgressBar/>
    </div>
  );
}

export default Signup;