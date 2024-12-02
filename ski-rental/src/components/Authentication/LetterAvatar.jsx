import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { useUser } from "../../contexts/UserContext";
import { useTheme } from "@mui/material/styles";
import axios from 'axios'; // Add axios for API calls

export default function LetterAvatar({ logout }) {
    const theme = useTheme();
    const { user, setUser } = useUser();
    const [anchorEl, setAnchorEl] = useState(null); // State to manage menu
    const open = Boolean(anchorEl);

    // Additional states for managing rentals and dialog
    const [rentals, setRentals] = useState([]); // Stores fetched rentals
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
        return name ? name.charAt(0).toUpperCase() : 'G';
    };

    // Fetch rentals for the current user
    const fetchRentals = async () => {
        try {
            const response = await axios.get(`http://localhost:8082/api/rentals/1`);
            setRentals(response.data); // Store rentals in state
            setOpenCartDialog(true); // Open the cart dialog
        } catch (error) {
            console.error("Failed to fetch rentals:", error);
        }
    };

    const handleCartClose = () => {
        setOpenCartDialog(false); // Close the cart dialog
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
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem
                    onClick={() => {
                        fetchRentals(); // Fetch rentals when "My Cart" is clicked
                        handleMenuClose();
                    }}
                >
                    My Cart
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>

            {/* Cart Dialog */}
            <Dialog open={openCartDialog} onClose={handleCartClose} fullWidth maxWidth="sm">
                <DialogContent>
                    <Typography variant="h6" gutterBottom>
                        My Rentals
                    </Typography>
                    {rentals.length > 0 ? (
                        <List>
                            {rentals.map((rental) => (
                                <React.Fragment key={rental._id}>
                                    <ListItem>
                                        <div>
                                            <Typography variant="body1">
                                                <strong>Item:</strong> {rental.itemId?.name || "N/A"}
                                            </Typography>
                                            <Typography variant="body2">
                                                <strong>Location:</strong> {rental.location}
                                            </Typography>
                                            <Typography variant="body2">
                                                <strong>Delivery Date:</strong> {new Date(rental.deliveryDate).toDateString()}
                                            </Typography>
                                            <Typography variant="body2">
                                                <strong>Total Price:</strong> ${rental.totalPrice}
                                            </Typography>
                                        </div>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    ) : (
                        <Typography>No rentals found.</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCartClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
