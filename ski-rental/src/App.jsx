import './App.css'
import React, { useState } from "react";
import Signup from "./components/SignUp";
import TopBar from "./components/TopBar"; 
import MyCarousel from "./components/MyCarousel";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="App" style = {{zIndex: 1}}>
      {/* Top Navigation Bar */}
      <TopBar onSignupClick={() => setShowSignup(true)}/>
      {showSignup && (
        <>
          <div className="overlay" onClick={() => setShowSignup(false)}></div>

          <Signup onClose={() => setShowSignup(false)} />
        </>
      )}
      <MyCarousel />

    </div>
  )
}

export default App
