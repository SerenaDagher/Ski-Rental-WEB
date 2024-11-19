import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material"; // Add Box for layout control
import SearchBar from './SearchBar'; // Import your SearchBar component

function TopBar({ onSignupClick , onScrollToSkis}) {
  const [filterSearch, setFilterSearch] = useState('');

  // Function to handle search and update the filter
  const handleSearch = (searchValue) => {
    setFilterSearch(searchValue); // Update the search value
    console.log('Search Value:', searchValue); // You can replace this with a filtering function if needed
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#3339b5" }} style={{ zIndex: 999 }}>
      <Toolbar>
        {/* Logo, Title, and SearchBar */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB47QtTJCBv3qki0edHDfJ5WdhSO4nuLkrIw&s"
            alt="RentTheSlope Logo"
            style={{ width: 40, height: 'auto', marginRight: 10 }}
          />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            RentTheSlope
          </Typography>
          <SearchBar onSearch={handleSearch} /> {/* Pass the handleSearch function to SearchBar */}
        </Box>

        {/* Navigation Buttons, pushed to the right */}
        <Box sx={{ marginLeft: 'auto' }}>
          <Button color="inherit">MyRentals</Button>
          <Button color="inherit">Coaches</Button>
          <Button color="inherit" sx={{ marginRight: 3 }} onClick={onScrollToSkis}>
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