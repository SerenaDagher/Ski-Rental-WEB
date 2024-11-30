
import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ShoppingCart(onClick) {
  return (
    <IconButton color="inherit" aria-label="shopping-cart" onClick={onClick}>
      <ShoppingCartIcon style={{ color: 'white',fontSize: '2rem' }} />
    </IconButton>
  );
}

export default ShoppingCart;
