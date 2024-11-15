// src/components/RentalCard.js
import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

function RentalCard({ image, title, description, price }) {
  return (
    <Card sx={{ width: 345, margin: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ marginTop: "10px" }}>
          ${price}/day
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Rent Now
        </Button>
      </CardActions>
    </Card>
  );
}

export default RentalCard;
