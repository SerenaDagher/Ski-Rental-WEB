import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
} from "@mui/material";
import Accordion from "./DialogAccordion";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import  {useUser} from "../contexts/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

const ItemDetailsDialog = ({ open, item, onClose }) => {
  const { user, setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState(null);

  const handleChangeLocation = (event) => setLocation(event.target.value);
  const handleDateChange = (newDate) => setSelectedDate(newDate);
  const handleTimeChange = (newTime) => setDeliveryTime(newTime);

  const onSubmit = (data) => {
    if (!user || !user._id) {
      toast.error("Please log in before renting");
      return;
    }
    const rentalDetails = {
      userId: user._id, 
      itemName: item.name,
      location: location,
      deliveryDate: selectedDate,
      deliveryTime: deliveryTime,
      paymentMethod: "cash on delivery",
      totalPrice: 100, 
    };
  
    axios
      .post("http://localhost:8082/api/rentals", rentalDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Item added to cart successfully!");
        // onRent(); // Trigger parent component update if needed
        // onClose(); // Close the dialog
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to rent item. Please try again.");
      });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent className="dialog">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {item ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100%", height: "400px", objectFit: "cover" }}
                    />
                    <Typography variant="h5" sx={{ textAlign: "center", mt: 2, mb: 2 }}>
                      {item.name || "Default Name"}
                    </Typography>
                    <Accordion
                      items={[
                        { title: "Type", content: item.type || "N/A" },
                        { title: "Description", content: item.description || "No description available" },
                        { title: "Length in cm", content: item.length || "No length available" },
                      ]}
                    />
                  </>
                ) : (
                  <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                    No item selected
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ textAlign: "center", mt: 4, mb: 4 }} fontWeight="bold">
                  Fill this form to rent
                </Typography>
                <FormControl fullWidth sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <FormControl error={!!errors.location}>
                    <InputLabel>Select Delivery Location</InputLabel>
                    <Select
                      label="Select Delivery Location"
                      {...register("location", { required: "Location is required" })}
                      value={location}
                      onChange={handleChangeLocation}
                      fullWidth
                    >
                      <MenuItem value="Mzaar Kfardebian">Mzaar Kfardebian</MenuItem>
                      <MenuItem value="Warde Kfardebian">Warde Kfardebian</MenuItem>
                      <MenuItem value="Zaarour Club">Zaarour Club</MenuItem>
                    </Select>
                    {errors.location && (
                      <Typography variant="caption" color="error">
                        {errors.location.message}
                      </Typography>
                    )}
                  </FormControl>

                  <DatePicker
                    label="Select Delivery Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    minDate={dayjs()}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...register("date", { required: "Date is required" })}
                        error={!!errors.date}
                        helperText={errors.date?.message}
                        fullWidth
                      />
                    )}
                  />

                  <TimePicker
                  required
                    label="Select Delivery Time"
                    value={deliveryTime}
                    onChange={handleTimeChange}
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...register("time", { required: "Time is required" })}
                        error={!!errors.time}
                        helperText={errors.time?.message}
                        fullWidth
                      />
                    )}
                  />

                  <FormControl>
                    <FormLabel required>Choose payment method</FormLabel>
                    <RadioGroup
                      row
                      // value={paymentMethod}
                      // onChange={handlePaymentMethodChange}
                      {...register("paymentMethod", { required: "Payment method is required" })}
                    >
                      <FormControlLabel value="cash on delivery" control={<Radio />} label="Cash on Delivery" />
                      <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" disabled />
                      <FormControlLabel value="whish" control={<Radio />} label="Whish" disabled />
                    </RadioGroup>
                    {errors.paymentMethod && (
                      <Typography variant="caption" color="error">
                        {errors.paymentMethod.message}
                      </Typography>
                    )}
                  </FormControl>

                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox {...register("terms", { required: "You must accept the terms and conditions" })} />}
                      label="Accept the Terms and Conditions"
                      required
                    />
                    {errors.terms && (
                      <Typography variant="caption" color="error">
                        {errors.terms.message}
                      </Typography>
                    )}
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className="dialog" sx={{ marginRight: 5, marginBottom: 4 }}>
            <Button onClick={onClose} variant="outlined" size="large" sx={{ marginRight: 2 }}>
              Cancel
            </Button>
            {item && (
              <Button type="submit" variant="contained" size="large">
                Done
              </Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </LocalizationProvider>
  );
};

export default ItemDetailsDialog;
