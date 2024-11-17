import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material"; // Add Box for layout control

function TopBar({ onSignupClick }) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#3339b5" }}>
      <Toolbar>
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB47QtTJCBv3qki0edHDfJ5WdhSO4nuLkrIw&s" // Replace with your logo URL
            alt="RentTheSlope Logo"
            style={{ width: 40, height: 'auto', marginRight: 10 }} // Adjust the size of the logo
          />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            RentTheSlope
          </Typography>
        </Box>

        {/* Navigation Buttons, pushed to the right */}
        <Box sx={{ marginLeft: 'auto' }}>
          <Button color="inherit">MyRentals</Button>
          <Button color="inherit">Coaches</Button>
          <Button color="inherit" sx={{ marginRight: 3 }}>
            Equipments
          </Button>
          <Button color="inherit" onClick={onSignupClick}>
          
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
