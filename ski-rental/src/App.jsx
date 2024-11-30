import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useRef } from "react";
import Signup from "./components/Authentication/SignUp";
import Login from "./components/Authentication/LogIn";
import TopBar from "./components/TopBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkisList from './components/EquipmentsList';
import AccessoriesList from './components/AccessoriesList';
import Footer from "./components/Footer"; 
import SkiRecommendationForm from './components/SKiRecommendationForm';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Used to toggle between Login and Signup modals
  const equipListRef = useRef(null);
  const topBarRef = useRef(null);
  const accessoriesRef = useRef(null);
  const theme = useTheme();

  // Open the modal
  const openModal = (isSignup) => {
    setIsModalOpen(true);
    setIsSignup(isSignup); // Set whether it's login or signup
  };

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  // Switch between Signup and Login
  const toggleSignupLogin = () => setIsSignup((prev) => !prev);

  const scrollToEquipList = () => {
    equipListRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const scrollToAccessories = () => {
    accessoriesRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const scrollToTop = () => {
    topBarRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleLogin = (userName) => {
    setIsLoggedIn(true);
    setUserName(userName);
    toast.success(`Welcome, ${userName}!`);
    closeModal();
  };

  const handleLogout = () => {
    toast.info("You have been logged out.");
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <div className="App" style={{ zIndex: 1 }} ref={topBarRef}>
      <TopBar
        onSignupClick={() => openModal(true)} // Opens Signup modal
        onLoginClick={() => openModal(false)} // Opens Login modal
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogoutClick={handleLogout}
        onScrollToEquip={scrollToEquipList}
        onScrollToAccessories={scrollToAccessories}
        onLogoCLick={scrollToTop}
      />

      {isModalOpen && (
        <div className="modal-overlay">
          {isSignup ? (
            <Signup onClose={closeModal} onSwitchToLogin={toggleSignupLogin} onSignupSuccess={handleLogin} />
          ) : (
            <Login onClose={closeModal} onSwitchToSignup={toggleSignupLogin} onLoginSuccess={handleLogin} />
          )}
        </div>
      )}

      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <img
          src="https://us.images.westend61.de/0001349832pw/a-man-with-ski-gear-and-mountains-and-water-behind-CAVF77790.jpg"
          alt="Snowboarding in powder"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
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
            left: "5%",
            transform: "translateY(-50%)",
            color: "white",
            textAlign: "left",
            fontSize: "2rem",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            zIndex: 2,
          }}
        >
          <h1>Skip the queue!</h1>
          <p>Be the first on the slopes and fully equipped</p>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: theme.palette.common.white,
              borderColor: theme.palette.common.white,
              '&:hover': {
                backgroundColor: theme.palette.common.white,
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            Rent Now
          </Button>
        </div>
      </div>
      <SkiRecommendationForm/>
      <div ref={equipListRef} style={{marginTop:'70px'}}>
        <SkisList />
      </div>
      <div ref={accessoriesRef} style={{marginTop:'200px'}}>
        <AccessoriesList />
      </div>

      <Footer
        onSignupClick={() => openModal(true)} // Opens Signup modal
        onLoginClick={() => openModal(false)} // Opens Login modal
      />

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;
