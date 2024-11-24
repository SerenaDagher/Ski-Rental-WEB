import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useUser } from "../../contexts/UserContext";

export default function LetterAvatar({logout}) {
    const { user, setUser } = useUser();
    const [anchorEl, setAnchorEl] = useState(null); // State to manage menu
    const open = Boolean(anchorEl);

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
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    return (
        <div>
            <Tooltip title="Account settings">
                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: '#4caf50' }}>
                        {getInitial(user?.username)}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
