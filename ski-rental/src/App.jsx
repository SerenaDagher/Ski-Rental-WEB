import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useRef } from "react";
import Signup from "./components/Authentication/SignUp";
import Login from "./components/Authentication/LogIn";
import TopBar from "./components/Sections/TopBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkisList from './components/EquipmentsViews/EquipmentsList';
import AccessoriesList from './components/EquipmentsViews/AccessoriesList';
import Footer from "./components/Sections/Footer";
import { useTheme } from '@mui/material/styles';
import HeroSection from './components/Sections/HeroSection';
import AboutUs from './components/Sections/AboutUs';

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
    <div className="App app-container" style={{ overflowX: 'hidden', width: '100%' }} ref={topBarRef}>
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
      <HeroSection scrollToSection={scrollToSection} equipListRef={equipListRef} />

      <AboutUs ref={aboutUsRef} />

      <div ref={equipListRef} style={{ marginTop: '10px' }}>
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

export default App;