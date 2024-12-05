import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const reviews = [
  {
    name: 'Sarah Williams',
    review: "Rent the Slope made my trip to the mountains stress-free! The process of renting high-quality gear was super easy, and the delivery was right on time. I didn’t have to worry about transporting heavy ski equipment—everything was handled for me. Definitely recommend it to anyone looking to enjoy a smooth and convenient ski trip!",
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Mark Thompson',
    review: "I’ve rented ski gear many times, but Rent the Slope is by far the best experience I’ve had. The website was easy to use, and the equipment was in great condition. I loved the convenience of choosing my delivery time, and the gear fit perfectly. Will definitely use them again for my next trip!",
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Emily Johnson',
    review: "Rent the Slope takes the hassle out of skiing. I was able to easily select the gear I needed and have it delivered directly to my hotel. The skis and snowboard were top quality, and I saved so much time not having to deal with the long lines at the rental shop. Highly recommend this service!",
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Daniel Roberts',
    review: "I was skeptical at first about renting online, but Rent the Slope exceeded my expectations. The platform was straightforward, and I was able to find the perfect skis and boots for my level. The delivery was on time, and everything was in excellent condition. I’ll definitely be a repeat customer.",
    rating: '⭐⭐⭐⭐',
  },
  {
    name: 'Jessica Lee',
    review: "A fantastic service for anyone who loves skiing! I rented a snowboard through Rent the Slope and it was perfect for my trip. Highly recommend this platform for anyone looking to rent gear for their next adventure.",
    rating: '⭐⭐⭐⭐⭐',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); 

    
    return () => clearInterval(intervalId);
  }, []);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

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
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
        Reviews
      </Typography>

      {/* Review Card */}
      <Card
        sx={{
            width: 800, 
            height: 233, 
            textAlign: 'center',
            padding: 3,
            boxShadow: 3,
            marginTop: 3,
            backgroundColor: (theme) => theme.palette.primary.main, 
            borderRadius: "50px", 
            overflow: 'hidden', 
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
            {reviews[currentIndex].name}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: 'white' }}>
            "{reviews[currentIndex].review}"
          </Typography>
          <Typography variant="subtitle2" color="white">
            {reviews[currentIndex].rating}
          </Typography>
        </CardContent>
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
