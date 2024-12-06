import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <Box
        sx={{
          position: 'relative',
          top: 0,
          width: '100%',
          backgroundColor: '#1976d2', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          zIndex: 1300, 
          boxShadow: 1,
        }}
      >
        <Typography variant="body1">
          🚀 Enjoy 50% off on your first rent!
        </Typography>
        <IconButton onClick={handleClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
    )
  );
};

export default NotificationBanner;
