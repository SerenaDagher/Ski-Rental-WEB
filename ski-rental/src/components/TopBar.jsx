// src/components/TopBar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TopBar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#238287" }}>
      <Toolbar>
        {/* Title */}
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          RentTheSlope
        </Typography>

        {/* Sign In Button */}
        <Button color="inherit" href="/signin">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
