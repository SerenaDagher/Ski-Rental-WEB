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
  };

  return (
    <div className="App" style={{ zIndex: 1 }}>
      <ToastContainer position="top-center" style={{ zIndex: 10001 }} hideProgressBar />
      <TopBar onSignupClick={openModal} onScrollToSkis={scrollToSkisList} />

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
      <div ref={skisListRef}>
        <SkisList />
      </div>
    </div>
  );
}

export default App;
