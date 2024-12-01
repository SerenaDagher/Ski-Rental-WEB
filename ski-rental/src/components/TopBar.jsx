import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import LetterAvatar from './Authentication/LetterAvatar';
import { useTheme } from "@mui/material/styles";
import ShoppingCart from "./ShoppingCart";
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";

function TopBar({ onSignupClick, isLoggedIn, username, onLogoutClick, onScrollToEquip, onScrollToAccessories, onLogoCLick, onCartClick }) {
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: "#ffffff",
          }}
          onClick={onLogoCLick}
        >
          <img
            className="filter-white"
            src="/logo.svg"
            alt="RentTheSlope Logo"
            style={{
              width: 50,
              height: 'auto',
              marginRight: 10,
            }}
          />
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 0,
              color: "#ffffff",
              fontSize: '2.8rem',
            }}
          >
            RentTheSlope
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: 'auto', flexGrow: 1 }}>

        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center", 
            justifyContent: "center",
            marginLeft: "auto",
            gap: 2, 
            color: "#ffffff",
          }}>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            value={filterSearch}
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: "#ffffff" }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: false, 
            }}
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                display: "flex", 
                alignItems: "center", 
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Label color
                transition: "opacity 0.3s ease, transform 0.3s ease", 
              },
              "& .MuiInputLabel-root.Mui-focused": {
                opacity:0
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "#ffffff", 
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: theme.palette.darkorange.main, 
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: theme.palette.darkorange.main, 
              },
              paddingBottom: "20px",
            }}
          />
          <Button
            color="inherit"
            sx={{
              // padding: '0 8px',
              minWidth: 'auto',
              fontSize: '1.1rem',
              transition: 'padding 0.3s ease, font-size 0.3s ease',
            }}
          >
            Coaches
          </Button>
          <Button
            color="inherit"
            sx={{
              height: "36px",
              // padding: '0 8px',
              minWidth: 'auto',
              fontSize: '1.1rem',
            }}
            onClick={onScrollToEquip}
          >
            Equipments
          </Button>
          <Button
            color="inherit"
            sx={{
              // padding: '0 8px',
              minWidth: 'auto',
              fontSize: '1.1rem',
            }}
            onClick={onScrollToAccessories}
          >
            Accessories
          </Button>

          <ShoppingCart onClick={onCartClick} />

          {isLoggedIn ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LetterAvatar logout={onLogoutClick} />
            </Box>
          ) : (
            <Button
              color="inherit"
              sx={{
                // padding: '0 8px',
                minWidth: 'auto',
                fontSize: '1.1rem',
              }}
              onClick={onSignupClick}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
