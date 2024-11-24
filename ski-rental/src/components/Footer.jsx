import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer style={{ backgroundColor: theme.palette.primary.main, color: '#fff', padding: '20px 0 30px', textAlign: 'center', marginTop: '80px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Logo, title, and tagline section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '150px', paddingTop: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB47QtTJCBv3qki0edHDfJ5WdhSO4nuLkrIw&s"
              alt="RentTheSlope Logo"
              style={{ width: 70, height: 'auto', marginRight: 10 }}
            />
            <Typography variant="h4" component="div" sx={{ fontSize: '2.2rem' }}>
              RentTheSlope
            </Typography>
          </Box>
          {/* Tagline */}
          <Typography variant="body1" sx={{ fontSize: '1rem', marginTop: '10px' }}>
            Rent, ski, repeat - the ultimate destination for your winter gear!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginRight: '170px', marginTop: '100px' }}>
          {/* My Account section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              My Account
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>
              <Typography variant="body1" sx={{ fontSize: '1rem' }}>Login</Typography>
              <Typography variant="body2" sx={{ fontSize: '1rem', marginTop: '5px' }}>Sign up</Typography>
              <Typography variant="body3" sx={{ fontSize: '1rem', marginTop: '5px' }}>I need help</Typography>
            </Box>
          </Box>

          {/* About section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '100px' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>About</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>
              <Typography variant="body1" sx={{ fontSize: '1rem' }}>Coaches</Typography>
              <Typography variant="body2" sx={{ fontSize: '1rem', marginTop: '5px' }}>MyRental</Typography>
              <Typography variant="body4" sx={{ fontSize: '1rem', marginTop: '5px' }}>Accessories</Typography>
              <Typography variant="body3" sx={{ fontSize: '1rem', marginTop: '5px' }}>Equipments</Typography>
            </Box>
          </Box>

          {/* Terms & Conditions section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '100px' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Terms & Conditions</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>
              <Typography variant="body1" sx={{ fontSize: '1rem' }}>Privacy policy</Typography>
              <Typography variant="body3" sx={{ fontSize: '1rem', marginTop: '5px' }}>Cancellation policy</Typography>
              <Typography variant="body2" sx={{ fontSize: '1rem', marginTop: '5px' }}>Terms & Conditions</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer text */}
      <Box sx={{ paddingTop: '50px', paddingRight: '1150px' }}>
        <Typography variant="body2" component="div" sx={{ fontSize: '0.9rem' }}>
          © 2024-2025 
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
