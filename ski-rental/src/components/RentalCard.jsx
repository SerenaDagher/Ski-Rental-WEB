import React from "react";
import "./RentalCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function RentalCard({ image, title, available, onRentClick }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        elevation: 6,
        borderRadius: 4,
        boxShadow: 2
      }}
      
    >
      <CardContent>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
        />
        <Typography sx={{ color: 'text.secondary', mb: 1.5, mt: 2 }}>{title}</Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Button
          size="small"
          variant="contained"
          onClick={onRentClick}
          sx={{ marginBottom: 2, borderRadius: 2 }} 
        >
          Rent Now
        </Button>
      </CardActions>
    </Card>
  );
}

export default RentalCard;


