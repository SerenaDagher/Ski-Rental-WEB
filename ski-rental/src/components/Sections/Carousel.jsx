import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid, Divider, Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const reviews = [
  {
    name: 'Yara Cham',
    review: "Rent the Slope made my trip to the mountains stress-free! The process of renting high-quality gear was super easy, and the delivery was right on time. I didn’t have to worry about transporting heavy ski equipment—everything was handled for me. Definitely recommend it to anyone looking to enjoy a smooth and convenient ski trip!",
    rating: '⭐⭐⭐⭐⭐',
    image: '/ANFD1026.JPG',
  },
  {
    name: 'Perla Mikhael',
    review: "I’ve rented ski gear many times, but Rent the Slope is by far the best experience I’ve had. The website was easy to use, and the equipment was in great condition. I loved the convenience of choosing my delivery time, and the gear fit perfectly. Will definitely use them again for my next trip!",
    rating: '⭐⭐⭐⭐⭐',
    image: '/IMG_8306.jpg',
  },
  {
    name: 'Serena Dagher',
    review: "Rent the Slope takes the hassle out of skiing. I was able to easily select the gear I needed and have it delivered directly to my hotel. The skis and snowboard were top quality, and I saved so much time not having to deal with the long lines at the rental shop. Highly recommend this service!",
    rating: '⭐⭐⭐⭐⭐',
    image: '/IMG_8127.jpg',
  },
  {
    name: 'Abdo Azzi',
    review: "I was skeptical at first about renting online, but Rent the Slope exceeded my expectations. The platform was straightforward, and I was able to find the perfect skis and boots for my level. The delivery was on time, and everything was in excellent condition. I’ll definitely be a repeat customer.",
    rating: '⭐⭐⭐⭐⭐',
    image: '/abdo.jpg',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        paddingTop: '100px',
        textAlign: 'center',
      }}
    >

      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'black' }}
      >
        Some reviews for you :)
      </Typography>

      <Card
        sx={{
          width: { xs: '90%', sm: '80%', md: '800px' },
          textAlign: 'center',
          padding: { xs: 2, sm: 3 }, 
          boxShadow: 3,
          marginTop: 3,
          backgroundColor: (theme) => theme.palette.tertary.main,
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Avatar
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              sx={{
                width: { xs: 120, sm: 150, md: 200 }, 
                height: { xs: 120, sm: 150, md: 200 }, 
                margin: '0 auto',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                marginTop: 2,
                fontSize: { xs: '1rem', sm: '1.2rem' }, 
              }}
            >
              {reviews[currentIndex].name}
            </Typography>
          </Grid>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: 'white',
              marginX: { xs: 1, sm: 2 },
              display: { xs: 'none', sm: 'block' }, 
            }}
          />

          <Grid item xs={12} sm={7}>
            <CardContent>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  color: 'white',
                  fontSize: { xs: '0.9rem', sm: '1rem' }, 
                }}
              >
                "{reviews[currentIndex].review}"
              </Typography>
              <Typography variant="subtitle2" color="white">
                {reviews[currentIndex].rating}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
          width: { xs: '90%', sm: '80%', md: '800px' }, 
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            color: 'black',
            fontSize: { xs: 'small', sm: 'medium' }, 
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            color: 'black',
            fontSize: { xs: 'small', sm: 'medium' },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
