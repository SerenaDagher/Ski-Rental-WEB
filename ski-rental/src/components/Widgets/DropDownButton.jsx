import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MyDropdown = ({ buttonLabel, items }) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const selectedItem = items.find((item) => item.label === event.target.value);
    if (selectedItem && selectedItem.action) {
      selectedItem.action();
    }
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 200,
        '& .MuiInputBase-root': {
          '&.Mui-focused': {
            '& fieldset': {
              borderColor: theme.palette.darkorange.main,
            },
          },
          '&:hover fieldset': {
            borderColor: theme.palette.darkorange.main,
          },
          borderColor: theme.palette.darkorange.main,
          color: theme.palette.darkorange.main,
          fontWeight: 'bold',
        },
        '& .MuiSvgIcon-root': {
          color: theme.palette.darkorange.main,
        },
      }}
    >
      <Select
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        renderValue={(value) => (value ? value : buttonLabel)}
        variant="outlined"
        sx={{
          borderColor: theme.palette.darkorange.main,
          color: theme.palette.darkorange.main,
          fontWeight: 'bold',
          borderRadius: 4,
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MyDropdown;

