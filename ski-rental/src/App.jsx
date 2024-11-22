import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useRef } from "react";
import Signup from "./components/SignUp";
import Login from "./components/LogIn";
import TopBar from "./components/TopBar";
import MyCarousel from "./components/MyCarousel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkisList from './components/EquipmentsList';
import AccessoriesList from './components/AccessoriesList';
import { Box } from '@mui/material';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const equipListRef = useRef(null);
  const topBarRef = useRef(null);
  const accessoriesRef = useRef(null);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleSignupLogin = () => setIsSignup((prev) => !prev);

  const scrollToEquipList = () => {
    equipListRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  const scrollToAccessories = () => {
    accessoriesRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  const scrollToTop = () => {
    topBarRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  const handleLogin = (userName) => {
    setIsLoggedIn(true);
    setUserName(userName);
    toast.success(`Welcome, ${userName}!`);
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    toast.info("You have been logged out.");
  };
  return (
    <div className="App" style = {{zIndex: 1}} ref={topBarRef}>
      <TopBar
       onSignupClick={openModal}
       isLoggedIn={isLoggedIn}
       userName={userName}
       onLogoutClick={handleLogout}
       onScrollToEquip={scrollToEquipList}
       onScrollToAccessories={scrollToAccessories}
       onLogoCLick={scrollToTop}/>

      {isModalOpen && (
        <div className="modal-overlay">
          {isSignup ? (
            <Signup onClose={closeModal} onSwitchToLogin={toggleSignupLogin} onSignupSuccess={handleLogin}/>
          ) : (
            <Login onClose={closeModal} onSwitchToSignup={toggleSignupLogin} onLoginSuccess={handleLogin}/>
          )}
        </div>
      )}
      <img 
        src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2000,w_3000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/19-A-005_copy_cjdefy.jpg" 
        style={{ width: '100vw', height: 'auto' }} 
        alt="Snowboarding in powder" 
      />

      <div ref={equipListRef}>
        <SkisList />
      </div>
      <div ref={accessoriesRef}>
        <AccessoriesList/>
      </div>
      <ToastContainer position="top-center" style={{ zIndex: 10001 }} hideProgressBar />
    </div>
  );
}

export default App;
