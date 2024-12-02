import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useUser } from "../../contexts/UserContext";
import { useTheme } from "@mui/material/styles";
import UsersRents from "../Rents/UsersRents"; 

export default function LetterAvatar({ logout }) {
  const theme = useTheme();
  const { user, setUser } = useUser();
  const [anchorEl, setAnchorEl] = useState(null); // State to manage menu
  const open = Boolean(anchorEl);

  const [openCartDialog, setOpenCartDialog] = useState(false); // Toggles the cart dialog

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null); // Clear the user from context
    localStorage.removeItem("user"); // Clear user from local storage
    handleMenuClose();
  };

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "G";
  };

  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: theme.palette.darkorange.main }}>
            {getInitial(user?.username)}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            setOpenCartDialog(true); // Open the cart dialog
            handleMenuClose();
          }}
        >
          My Cart
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>

      {/* Render the UsersRents dialog */}
      <UsersRents
        open={openCartDialog}
        onClose={() => setOpenCartDialog(false)}
        userId={user?.id || "1"} // Replace "1" with dynamic user ID
      />
    </div>
  );
}
