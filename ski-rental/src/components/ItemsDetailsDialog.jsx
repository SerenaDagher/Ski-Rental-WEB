import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

const ItemDetailsDialog = ({ open, item, onClose, onRent }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Equipment Details</DialogTitle>
      <DialogContent>
        {item && (
          <>
            <Typography variant="h6">{item.name}</Typography>
            <Typography>Type: {item.type || 'N/A'}</Typography>
            <Typography>Description: {item.description || 'No description available'}</Typography>
            <Typography>Available: {item.available ? 'Yes' : 'No'}</Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={onRent} color="primary">Rent</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemDetailsDialog;
