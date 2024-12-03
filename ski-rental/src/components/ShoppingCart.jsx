
import React from 'react';
import { Dialog , DialogActions, DialogTitle, Typography, DialogContent, Button } from '@mui/material';


function ShoppingCart({isDialogOpen, closeCartDialog}) {
  return (
    <Dialog open={isDialogOpen} onClose={closeCartDialog} fullWidth maxWidth="sm">
    <DialogTitle>
      <Typography variant="h4" fontWeight={"bold"}>Your Cart</Typography>
    </DialogTitle>
    <DialogContent>
      <Typography variant="body1">
        Your cart is empty. Start shopping to add items!
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={closeCartDialog} color="primary" variant="outlined">
        Close
      </Button>
    </DialogActions>
</Dialog>
  );
}

export default ShoppingCart;
