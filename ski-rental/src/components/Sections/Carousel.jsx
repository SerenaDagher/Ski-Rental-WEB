import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid, Divider, Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const reviews = [
  {
    name: 'Sarah Williams',
    review: "Rent the Slope made my trip to the mountains stress-free! The process of renting high-quality gear was super easy, and the delivery was right on time. I didn’t have to worry about transporting heavy ski equipment—everything was handled for me. Definitely recommend it to anyone looking to enjoy a smooth and convenient ski trip!",
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://media.istockphoto.com/id/902843142/photo/woman-skier-skiing-at-sunny-ski-resort-amateur-winter-sports-on-the-top.jpg?s=612x612&w=0&k=20&c=XShoCi24eBfvLHZ7r44SDbRWLKuR9NA1TCs9tfvzDtM=', // Placeholder image URL
  },
  {
    name: 'Mark Thompson',
    review: "I’ve rented ski gear many times, but Rent the Slope is by far the best experience I’ve had. The website was easy to use, and the equipment was in great condition. I loved the convenience of choosing my delivery time, and the gear fit perfectly. Will definitely use them again for my next trip!",
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://media.istockphoto.com/id/641226350/photo/skier-man-portrait-in-safe-ski-equipment.jpg?s=612x612&w=0&k=20&c=iAPDbWG8EHo3OhpcdlaSgT2q_pDZLwmNSD3JDTV4F7w=',
  },
  {
    name: 'Emily Johnson',
    review: "Rent the Slope takes the hassle out of skiing. I was able to easily select the gear I needed and have it delivered directly to my hotel. The skis and snowboard were top quality, and I saved so much time not having to deal with the long lines at the rental shop. Highly recommend this service!",
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://media.istockphoto.com/id/887298054/photo/happy-skier-girl-ready-to-ski-in-a-slope.jpg?s=612x612&w=0&k=20&c=UEVASKr5kD3fZqDFFEGzSApWa0F4oVS9wFFimyOT4y0=',
  },
  {
    name: 'Daniel Roberts',
    review: "I was skeptical at first about renting online, but Rent the Slope exceeded my expectations. The platform was straightforward, and I was able to find the perfect skis and boots for my level. The delivery was on time, and everything was in excellent condition. I’ll definitely be a repeat customer.",
    rating: '⭐⭐⭐⭐',
    image: 'https://cdn.pixabay.com/photo/2022/01/07/18/32/man-6922354_1280.jpg',
  },
  {
    name: 'Jessica Lee',
    review: "A fantastic service for anyone who loves skiing! I rented a snowboard through Rent the Slope and it was perfect for my trip. Highly recommend this platform for anyone looking to rent gear for their next adventure.",
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://media.istockphoto.com/id/183545707/photo/young-woman-carrying-her-skis.jpg?s=612x612&w=0&k=20&c=TMph1z03uGTkiRVC7-GFd5RSE-5a1sKZLO44AR1yWro=',
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
      {/* Title */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'black' }}
      >
        Some reviews for you :)
      </Typography>

      {/* Review Card */}
      <Card
        sx={{
          width: 800,
          textAlign: 'center',
          padding: 3,
          boxShadow: 3,
          marginTop: 3,
          backgroundColor: (theme) => theme.palette.tertary.main,
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <Grid container alignItems="center">
          {/* Left Section with Image and Name */}
          <Grid item xs={4} sx={{ textAlign: 'center' }}>
            <Avatar
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              sx={{
                width: 200,
                height: 200,
                margin: '0 auto',
              }}
            />
            <Typography
              variant="h6"
              sx={{ color: 'white', marginTop: 2 }}
            >
              {reviews[currentIndex].name}
            </Typography>
          </Grid>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: 'white', marginX: 2 }}
          />

          {/* Right Section with Review and Rating */}
          <Grid item xs={7}>
            <CardContent>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: 'white' }}
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

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <IconButton onClick={handlePrev} sx={{ color: 'black' }}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ color: 'black' }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
