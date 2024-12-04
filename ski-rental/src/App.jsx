import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useRef } from "react";
import Signup from "./components/Authentication/SignUp";
import Login from "./components/Authentication/LogIn";
import TopBar from "./components/TopBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkisList from './components/EquipmentsViews/EquipmentsList';
import AccessoriesList from './components/EquipmentsViews/AccessoriesList';
import Footer from "./components/Footer"; 
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

function App() {
  const [isItemDialogOpen, setIsItemDialogOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true); 

  const equipListRef = useRef(null);
  const accessoriesRef = useRef(null);
  const aboutUsRef = useRef(null); 
  const topBarRef = useRef(null);
  const theme = useTheme();

  const openCartDialog = () => setIsItemDialogOpen(true); 
  const closeCartDialog = () => setIsItemDialogOpen(false); 

  const openModal = (isSignup) => {
    setIsModalOpen(true);
    setIsSignup(isSignup); 
  };

  const closeModal = () => setIsModalOpen(false);

  const toggleSignupLogin = () => setIsSignup((prev) => !prev);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
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
        onSignupClick={() => openModal(true)} 
        onLoginClick={() => openModal(false)} 
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogoutClick={handleLogout}
        onScrollToAboutUs={() => scrollToSection(aboutUsRef)}
        onScrollToEquip={() => scrollToSection(equipListRef)}
        onScrollToAccessories={() => scrollToSection(accessoriesRef)}
        onLogoCLick={() => scrollToSection(topBarRef)}
        onCartClick={openCartDialog}
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

      <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('https://us.images.westend61.de/0001349832pw/a-man-with-ski-gear-and-mountains-and-water-behind-CAVF77790.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
      }}
      >
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
          fontSize: "3rem",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
          zIndex: 2,
        }}
      >
        <h1>Skip the queue!</h1>
        <p>Be the first on the slopes and fully equipped</p>
        <Button
        onClick={() => scrollToSection(equipListRef)}
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
      <img
      
    src="/mountain.svg" 
    alt="Mountain"
    style={{
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "60%",
      marginBottom: "-190px",
      zIndex: 2,
    }}
  />
    </div>

      <div
        ref={aboutUsRef}
        style={{
          paddingTop : "350px",
          padding: "80px 20px",
          backgroundColor: theme.palette.background.default,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"} sx={{ marginBottom: "20px" }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px", maxWidth: "800px", margin: "0 auto" }}>
          At RentTheSlope, we make your ski and snowboard adventures hassle-free. 
          Our mission is to provide top-quality rental equipment delivered directly 
          to the slopes, so you can focus on what matters most—enjoying the powder. 
          Whether you're a beginner or a pro, we've got the perfect gear for you.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "800px", margin: "0 auto" }}>
          Experience the convenience of skipping the rental lines and stepping onto 
          the slopes with everything you need. Join thousands of happy skiers who 
          trust RentTheSlope to make their mountain trips unforgettable.
        </Typography>
      </div>

      <div ref={equipListRef} style={{ marginTop: '70px' }}>
        <SkisList />
      </div>

      <div ref={accessoriesRef} style={{ marginTop: '100px' }}>
        <AccessoriesList />
      </div>

      <Footer
        onSignupClick={() => openModal(true)} 
        onLoginClick={() => openModal(false)}
        onScrollToAccessories={() => scrollToSection(accessoriesRef)}
        onScrollToEquipments={() => scrollToSection(equipListRef)}
        onScrollToAboutUs={() => scrollToSection(aboutUsRef)} 
      />

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;