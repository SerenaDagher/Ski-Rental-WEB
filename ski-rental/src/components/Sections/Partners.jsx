import React from 'react';
import { Box } from '@mui/material';

const Partners = () => {
  const logos = [
    'https://mikesport.com/cdn/shop/files/OFFICIAL_LOGO.png?v=1613784709', 
    'https://sports-4ever.com/wp-content/uploads/2023/03/sports-4ever-Logo-e1715165225973.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8g2GBdgHvWDrzj5QB62tc--AUvR6XM120Iw&s'
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f9f9f9', 
        borderRadius: '16px',
        boxShadow: 2,
        marginTop:20
      }}
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Partner Logo ${index + 1}`}
          style={{ maxWidth: '150px', height: 'auto' }}
        />
      ))}
    </Box>
  );
};

export default Partners;
