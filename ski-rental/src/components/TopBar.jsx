import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material"; 
import SearchBar from './SearchBar'; 
import LetterAvatar from './Authentication/LetterAvatar';
import { useTheme } from "@mui/material/styles";

function TopBar({ onSignupClick, isLoggedIn, username, onLogoutClick, onScrollToEquip, onScrollToAccessories, onLogoCLick }) {
  // console.log("Username passed to TopBar:", username);
  const [filterSearch, setFilterSearch] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearch = (searchValue) => {
    setFilterSearch(searchValue);
    // console.log('Search Value:', searchValue); 
  };

  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "theme.palette.primary.main" : "transparent", 
        boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none", 
        transition: "background-color 0.3s ease", 
      }}
      style={{ zIndex: 999 }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 , color: "#ffffff"}} onClick={onLogoCLick}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB47QtTJCBv3qki0edHDfJ5WdhSO4nuLkrIw&s"
            alt="RentTheSlope Logo"
            style={{ width: 40, height: 'auto', marginRight: 10 }}
          />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "#ffffff" }}>
            RentTheSlope
          </Typography>
          <SearchBar onSearch={handleSearch} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' ,  color: "#ffffff"}}>
          <Button color="inherit">MyRentals</Button>
          <Button color="inherit">Coaches</Button>
          <Button color="inherit" sx={{ marginRight: 3 }} onClick={onScrollToEquip}>
            Equipments
          </Button>
          <Button color="inherit" sx={{ marginRight: 3 }} onClick={onScrollToAccessories}>
            Accessories
          </Button>

          {isLoggedIn ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LetterAvatar logout={onLogoutClick} />
            </Box>
          ) : (
            <Button color="inherit" onClick={onSignupClick}>
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
