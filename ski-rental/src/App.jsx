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
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
<div style={{ position: "relative", width: "100vw", height: "100vh" }}>
  {/* Image */}
  <img
    src="https://us.images.westend61.de/0001349832pw/a-man-with-ski-gear-and-mountains-and-water-behind-CAVF77790.jpg"
    alt="Snowboarding in powder"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  {/* Dark Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", 
      zIndex: 1, 
    }}
  ></div>
  <div
    style={{
      position: "absolute",
      top: "40%", 
      right: "5%", 
      transform: "translateY(-50%)",
      color: "white",
      textAlign: "right",
      fontSize: "2rem",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
      zIndex: 2, 
    }}
  ><h1>Skip the queue!</h1>
    <p>Be the first on the slopes and fully equipped!</p>
    <button type="button" class="btn btn-outline-light btn-lg">Rent Now</button>
      </div>
    </div>
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
