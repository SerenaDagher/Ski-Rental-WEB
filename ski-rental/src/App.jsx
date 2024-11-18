import './App.css'
import React, { useState ,useRef } from "react";
import Signup from "./components/SignUp";
import Login from "./components/LogIn";
import TopBar from "./components/TopBar"; 
import MyCarousel from "./components/MyCarousel";
import Pagination  from './components/Pagination';
import { Paper } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Track whether Signup or Login is shown

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleSignupLogin = () => setIsSignup((prev) => !prev);


  return (
    <div className="App" style = {{zIndex: 1}}>
      <ToastContainer position="top-center" style={{ zIndex: 10001 }} hideProgressBar />
      <TopBar onSignupClick={openModal}/>

      {isModalOpen && (
        <div className="modal-overlay">
          {isSignup ? (
            <Signup onClose={closeModal} onSwitchToLogin={toggleSignupLogin} />
          ) : (
            <Login onClose={closeModal} onSwitchToSignup={toggleSignupLogin} />
          )}
        </div>
      )}
      <MyCarousel />
      <Paper elevation={6}>
        <Pagination/>
      </Paper>
      
    </div>

  )
}

export default App
