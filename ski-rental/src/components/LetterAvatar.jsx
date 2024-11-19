import React from 'react';
import Avatar from '@mui/material/Avatar';

export default function LetterAvatar({ name }) {
  // Extract the first initial
  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : '?');

  return (
    <Avatar sx={{ bgcolor: '#4caf50' }}>
      {getInitial(name)}
    </Avatar>
  );
}
