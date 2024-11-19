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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const skisListRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleSignupLogin = () => setIsSignup((prev) => !prev);

  const scrollToSkisList = () => {
    skisListRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  const handleLogin = (userName) => {
    setIsLoggedIn(true);
    setUserName(userName);
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    toast.info("You have been logged out.");
  };
  return (
    <div className="App" style = {{zIndex: 1}}>
      <TopBar
       onSignupClick={openModal}
       isLoggedIn={isLoggedIn}
       userName={userName}
       onLogoutClick={handleLogout}
       onScrollToSkis={scrollToSkisList}/>

      {isModalOpen && (
        <div className="modal-overlay">
          {isSignup ? (
            <Signup onClose={closeModal} onSwitchToLogin={toggleSignupLogin} onSignupSuccess={handleLogin}/>
          ) : (
            <Login onClose={closeModal} onSwitchToSignup={toggleSignupLogin} onLoginSuccess={handleLogin}/>
          )}
        </div>
      )}
      <MyCarousel />
      <div ref={skisListRef}>
        <SkisList />
      </div>
      <ToastContainer position="top-center" style={{ zIndex: 10001 }} hideProgressBar />
    </div>
  );
}

export default App;
