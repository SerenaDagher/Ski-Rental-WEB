import React from 'react';
import './ItemsDetailsDialog.css'; 

import { Dialog, DialogActions, DialogContent, Typography, Button } from '@mui/material';
import Accordion from './DialogAccordion';
import { DatePicker } from '@mui/x-date-pickers';





const ItemDetailsDialog = ({ open, item, onClose, onRent }) => {
  // Ensure item is defined and has properties to avoid errors
  const accordionItems = item
    ? [
        { title: 'Type', content: item.type || 'N/A' },
        { title: 'Description', content: item.description || 'No description available' }
      ]
    : [];

  return (
    <Dialog open={open} onClose={onClose}>
  <DialogContent className="dialog">
    {item ? (
      <>
        <img
          src={item.image}
          alt="item image"
          style={{ width: '500px', height: '400px', objectFit: 'cover' }}
        />
        <Typography variant="h4" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
          {item.name}
        </Typography>
        <Accordion items={accordionItems} />
      </>
    ) : (
      <Typography variant="h6" style={{ textAlign: 'center' }}>
        No item details available.
      </Typography>
    )}
  </DialogContent>
  <DialogActions className="dialog">
    <Button onClick={onClose} className="secondary-btn">
      Cancel
    </Button>
    {item && (
      <Button onClick={onRent} className="primary-btn">
        Rent
      </Button>
    )}
  </DialogActions>
</Dialog>

  );
};

export default ItemDetailsDialog;

