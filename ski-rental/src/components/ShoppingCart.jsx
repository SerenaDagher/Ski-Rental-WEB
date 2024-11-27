
import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ShoppingCart() {
  return (
    <IconButton color="inherit" aria-label="shopping-cart">
      <ShoppingCartIcon style={{ color: 'white' }} />
    </IconButton>
  );
}

export default ShoppingCart;
