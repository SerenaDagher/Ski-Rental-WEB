import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const UsersRents = ({ open, onClose, userId }) => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    if (open) {
      fetchRentals();
    }
  }, [open]);

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
        <Typography variant="h6" gutterBottom>
          My Rentals
        </Typography>
        {rentals.length > 0 ? (
          <List>
            {rentals.map((rental) => (
              <React.Fragment key={rental._id}>
                <ListItem>
                  <div style={{ flex: 1 }}>
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
                  </div>
                  <Button
                    onClick={() => deleteRental(rental._id)}
                    color="error"
                    variant="outlined"
                    sx={{ marginLeft: "16px" }}
                  >
                    Delete
                  </Button>
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
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UsersRents;
