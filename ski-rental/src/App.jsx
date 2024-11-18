import './App.css'
import React, { useState ,useRef } from "react";
import Signup from "./components/SignUp";
import TopBar from "./components/TopBar"; 
import MyCarousel from "./components/MyCarousel";
import Pagination  from './components/Pagination';
import { Paper } from '@mui/material';


function App() {
  console.log("App is rendering!");

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
      <Paper elevation={6}>
        <Pagination/>
      </Paper>
    </div>

  )
}

export default App
