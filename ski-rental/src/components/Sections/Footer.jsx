import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = ({ onLoginClick, onSignupClick, onScrollToAccessories , onScrollToEquipments, onScrollToAboutUs, openRentals }) => {  
  const theme = useTheme();

  return (
    <footer style={{ backgroundColor: theme.palette.primary.main, color: '#fff', padding: '20px 0 30px', textAlign: 'center', marginTop: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '150px', paddingTop: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              className="filter-white"
              src="/logo.svg"
              alt="RentTheSlope Logo"
              style={{ width: 50, height: 'auto', marginRight: 10 }}
            />
            <Typography variant="h4" component="div" sx={{ fontSize: '2.2rem' }}>
              RentTheSlope
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontSize: '1rem', marginTop: '10px' }}>
            Rent, ski, repeat - the ultimate destination for your winter gear!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginRight: '170px', marginTop: '100px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              My Account
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', marginTop: '5px', cursor: 'pointer'}}
                onClick={onLoginClick}  
              >
                Log in
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', marginTop: '5px', cursor: 'pointer',fontSize: '1rem'}}
                onClick={onSignupClick}  
              >
                Sign up
              </Typography>
              <Typography variant="body3" sx={{ fontSize: '1rem', marginTop: '5px' }}>I need help</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '100px' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>About</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>
            <Typography 
                variant="body4" 
                sx={{ fontSize: '1rem', marginTop: '5px', cursor: 'pointer' }} 
                onClick={onScrollToAboutUs}  
              >
                About us
              </Typography>
              
              <Typography 
                variant="body4" 
                sx={{ fontSize: '1rem', marginTop: '5px', cursor: 'pointer' }} 
                onClick={openRentals}  
              >
                MyRental
              </Typography>
              
              <Typography 
                variant="body4" 
                sx={{ fontSize: '1rem', marginTop: '5px', cursor: 'pointer' }} 
                onClick={onScrollToAccessories}  
              >
                Accessories
              </Typography>
              <Typography 
                variant="body4" 
                sx={{ fontSize: '1rem', marginTop: '5px', cursor: 'pointer' }} 
                onClick={onScrollToEquipments} 
              >
                Equipments
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '100px' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Terms & Conditions</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px' }}>
              <Typography variant="body1" sx={{ fontSize: '1rem' , marginTop: '5px'}}>Privacy policy</Typography>
              <Typography variant="body3" sx={{ fontSize: '1rem', marginTop: '5px' }}>Cancellation policy</Typography>
              <Typography variant="body2" sx={{ fontSize: '1rem', marginTop: '5px' }}>Terms & Conditions</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '35px', paddingRight: '1150px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
          <IconButton color="inherit" sx={{ margin: '0 10px' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ margin: '0 10px' }}>
            <FacebookIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" component="div" sx={{ fontSize: '0.9rem', marginTop: '5px' }}>
          © 2024-2025
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;