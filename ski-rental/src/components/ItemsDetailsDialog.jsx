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
  Checkbox
} from '@mui/material';
import Accordion from './DialogAccordion';
import { DatePicker , TimePicker,renderTimeViewClock} from '@mui/x-date-pickers';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const ItemDetailsDialog = ({ open, item, onClose, onRent }) => {
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const theme = useTheme();
  const accordionItems = item
    ? [
        { title: 'Type', content: item.type || 'N/A' },
        { title: 'Description', content: item.description || 'No description available' },
        { title: 'Length in cm', content: item.length || 'No height available' },
        { title: 'Width Waist in cm', content: item.widthWaist || 'No width available' },
      ]
    : [];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogContent className="dialog">
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              {item ? (
                <>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                  <Typography variant="h5" sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
                    {item.name || 'Default Name'}
                  </Typography>
                  <Accordion
                    items={accordionItems}
                    sx={{
                      '&.MuiAccordion-root:active': {
                        backgroundColor: theme.palette.darkorange.main,
                      },
                    }}
                  />
                </>
              ) : (
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
                  No item selected
                </Typography>
              )}
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ textAlign: 'center', mt: 4, mb: 4 }} fontWeight={'bold'}>
                    Fill this form to rent
                  </Typography>
              <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <InputLabel>Select Delivery Location</InputLabel>
                <Select
                  labelId="delivery-location-select-label"
                  id="delivery-location-select"
                  label="Delivery Location"
                  value={location}
                  onChange={handleChange}
                >
                  <MenuItem value="Mzaar Kfardebian">Mzaar Kfardebian</MenuItem>
                  <MenuItem value="Warde Kfardebian">Warde Kfardebian</MenuItem>
                  <MenuItem value="Zaarour Club">Zaarour Club</MenuItem>
                </Select>
                <DatePicker
                label="Select Delivery Date"
                value={selectedDate}
                onChange={handleDateChange}
                minDate={dayjs()}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              <TimePicker
                label="Select Delivery Time"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Choose payment method</FormLabel>
                <RadioGroup row>
                  <FormControlLabel value="cash on delivery" control={<Radio />} label="Cash on Delivery" />
                  <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" disabled/>
                  <FormControlLabel value="whish" control={<Radio />} label="Whish" disabled />
                </RadioGroup>
              </FormControl>
              <FormGroup>
                <FormControlLabel required control={<Checkbox />} label="Accept the Terms and Conditions" />
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
            <Button variant="contained" size="large">
              Add to Cart
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default ItemDetailsDialog;
