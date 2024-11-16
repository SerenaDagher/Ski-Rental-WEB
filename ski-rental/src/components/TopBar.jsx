// src/components/TopBar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TopBar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#3339b5" }}>
      <Toolbar>
        {/* Title */}
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          RentTheSlope
        </Typography>

        <Button color='inherit'>
          MyRentals
        </Button>
        <Button color='inherit'>
          Coaches
        </Button>
        <Button color="inherit" sx={{ marginRight: 3 }}>
          Equipments
        </Button>
        <Button color="inherit" href="/signin">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
