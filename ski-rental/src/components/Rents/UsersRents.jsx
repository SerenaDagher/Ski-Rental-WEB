import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteIcon from '@mui/icons-material/Delete';



const UsersRents = ({ open, onClose, userId }) => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    if (open && userId) {
      fetchRentals();
    }
  }, [open, userId]);

  const fetchRentals = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/api/rentals/${userId}`);
      setRentals(response.data);
    } catch (error) {
      console.error("Failed to fetch rentals:", error);
      toast.error("Failed to load rentals.");
    }
  };

  const deleteRental = async (rentalId) => {
    try {
      await axios.delete(`http://localhost:8082/api/rentals/${rentalId}`);
      toast.success("Rental deleted successfully!");

      // Remove the deleted rental from the list
      setRentals((prevRentals) => prevRentals.filter((rental) => rental._id !== rentalId));
    } catch (error) {
      console.error("Failed to delete rental:", error);
      toast.error("Failed to delete rental.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>
        <Typography variant="h4" align="center" fontWeight={"bold"} marginBottom={"20px"}>
          My Rentals
        </Typography>
        {rentals.length > 0 ? (
          rentals.map((rental) => (
            <Card
              key={rental._id}
              sx={{ display: "flex", alignItems: "center", marginBottom: "20px"}}
            >
              <CardMedia
                component="img"
                image={rental.itemPic || "/placeholder.jpg"} 
                alt={rental.itemName || "Item"}
                sx={{ width: 120, height: 120 }}
              />
              <Divider orientation="vertical" flexItem sx={{ margin: "0 16px" }} />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="body1">
                  <strong>Item:</strong> {rental.itemName || "N/A"}
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
              </CardContent>
              <Box sx={{ padding: "16px" }}>
                <Button
                  onClick={() => deleteRental(rental._id)}
                  color="error"
                  variant="outlined"
                  size="small"
                >
                  <IconButton><DeleteIcon color="error"/></IconButton>
                </Button>
              </Box>
            </Card>
          ))
        ) : (
          <Typography>No rentals found.</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" sx={{margin:3}}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UsersRents;
