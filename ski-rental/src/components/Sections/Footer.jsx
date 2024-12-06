import React, { useState } from 'react';
import { Grid, Typography, IconButton, Box, Container } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import UsersRents from '../Rents/UsersRents';
import { useUser } from '../../contexts/UserContext';

const Footer = ({
  onLoginClick,
  onSignupClick,
  onScrollToAccessories,
  onScrollToEquipments,
  onScrollToAboutUs,
  openRentals,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { user } = useUser();
  const [openRentalsDialog, setOpenRentalsDialog] = useState(false);

  return (
    <footer
      style={{
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        padding: '20px 0 30px',
        marginTop: '100px',
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems={isSmallScreen ? 'flex-start' : 'center'}
        >
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign={isSmallScreen ? 'center' : 'left'}>
              <Box display="flex" alignItems="center" mb={1}>
                <img
                  className='filter-white'
                  src="/logo.svg"
                  alt="RentTheSlope Logo"
                  style={{ width: 50, height: 'auto', marginRight: 10 }}
                />
                <Typography variant="h4" sx={{ fontSize: isSmallScreen ? '1.5rem' : '2.2rem' }}>
                  RentTheSlope
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                Rent, ski, repeat - the ultimate destination for your winter gear!
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Box textAlign={isSmallScreen ? 'center' : 'left'}>
              <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                My Account
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', cursor: 'pointer', mt: 1 }}
                onClick={onLoginClick}
              >
                Log in
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', cursor: 'pointer', mt: 1 }}
                onClick={onSignupClick}
              >
                Sign up
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1rem', mt: 1 }}>
                I need help
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Box textAlign={isSmallScreen ? 'center' : 'left'}>
              <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                About
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', cursor: 'pointer', mt: 1 }}
                onClick={onScrollToAboutUs}
              >
                About us
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', cursor: 'pointer', mt: 1 }}
                onClick={() => setOpenRentalsDialog(true)}
              >
                MyRental
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', cursor: 'pointer', mt: 1 }}
                onClick={onScrollToAccessories}
              >
                Accessories
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '1rem', cursor: 'pointer', mt: 1 }}
                onClick={onScrollToEquipments}
              >
                Equipments
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Box textAlign={isSmallScreen ? 'center' : 'left'}>
              <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Terms & Conditions
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1rem', mt: 1 }}>
                Privacy policy
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1rem', mt: 1 }}>
                Cancellation policy
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1rem', mt: 1 }}>
                Terms & Conditions
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Box display="flex" justifyContent="center" mb={1}>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
          </Box>
          <Typography variant="body2">© 2024-2025</Typography>
        </Box>
      </Container>
      <UsersRents
        open={openRentalsDialog}
        onClose={() => setOpenRentalsDialog(false)}
        userId={user ? user._id : null}
      />
    </footer>
  );
};

export default Footer;
