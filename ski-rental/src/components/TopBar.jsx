import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import SearchBar from './SearchBar'; 
import LetterAvatar from './Authentication/LetterAvatar';
import { useTheme } from "@mui/material/styles";
import ShoppingCart from "./ShoppingCart"; 

function TopBar({ onSignupClick, isLoggedIn, username, onLogoutClick, onScrollToEquip, onScrollToAccessories, onLogoCLick }) {
  const [filterSearch, setFilterSearch] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearch = (searchValue) => {
    setFilterSearch(searchValue);
  };

  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
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
        backgroundColor: isScrolled ? theme.palette.primary.main : "transparent", 
        boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none", 
        transition: "background-color 0.3s ease", 
      }}
      style={{ zIndex: 999 }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', color: "#ffffff"}} onClick={onLogoCLick}>
          <img className="filter-white"
            src="/logo.svg"
            alt="RentTheSlope Logo"
            style={{ width: 40, height: 'auto', marginRight: 10 }}
          />
          <Typography variant="h4" component="div" sx={{ flexGrow: 0, color: "#ffffff" }}>
            RentTheSlope
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: 'auto', flexGrow: 1 }}>
          <SearchBar onSearch={handleSearch} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', color: "#ffffff" }}>
          <Button color="inherit" sx={{ padding: '0 8px', minWidth: 'auto' }}>MyRentals</Button>
          <Button color="inherit" sx={{ padding: '0 8px', minWidth: 'auto' }}>Coaches</Button>
          <Button color="inherit" sx={{ padding: '0 8px', minWidth: 'auto' }} onClick={onScrollToEquip}>
            Equipments
          </Button>
          <Button color="inherit" sx={{ padding: '0 8px', minWidth: 'auto' }} onClick={onScrollToAccessories}>
            Accessories
          </Button>
          
          <ShoppingCart /> 

          {isLoggedIn ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LetterAvatar logout={onLogoutClick} />
            </Box>
          ) : (
            <Button color="inherit" sx={{ padding: '0 8px', minWidth: 'auto' }} onClick={onSignupClick}>
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
