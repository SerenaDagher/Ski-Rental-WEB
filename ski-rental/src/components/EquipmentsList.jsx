import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RentalCard from './RentalCard';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import MyDropdown from './DropDownButton';

const EquipmentList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const [filter, setFilter] = useState('all'); 
  const [filterLabel, setFilterLabel] = useState('All');
  const [rideLabel, setRideLabel] = useState('All');

  useEffect(() => {
    fetchItems();
  }, [filter, rideLabel]); // Re-fetch when either filter or rideLabel changes

  const fetchItems = async () => {
    try {
      let url = 'http://localhost:8082/api/skis'; // Default to skis
      if (rideLabel === 'Snowboard') {
        url = 'http://localhost:8082/api/snowboards';
      }

      if (filter === 'available') {
        url = `${url}/availability/true`;
      } else if (filter === 'not available') {
        url = `${url}/availability/false`;
      }

      const response = await axios.get(url);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = items.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleFilterChange = (selectedFilter, label) => {
    setFilter(selectedFilter);
    setFilterLabel(label);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleRideChange = (selectedRide, label) => {
    setRideLabel(label);
    setCurrentPage(1); // Reset to first page on ride change
  };

  return (
    <div className="main">
      <h1>Equipments</h1>

      <div className="dropdown-container">
        <MyDropdown
          buttonLabel={`Filter: ${filterLabel}`}
          items={[
            { label: 'All', action: () => handleFilterChange('all', 'All') },
            { label: 'Available', action: () => handleFilterChange('available', 'Available') },
            { label: 'Not Available', action: () => handleFilterChange('not available', 'Not Available') },
          ]}
        />
        <MyDropdown
          buttonLabel={`Choose your ride: ${rideLabel}`}
          items={[
            { label: 'All', action: () => handleRideChange('all', 'All') },
            { label: 'Ski', action: () => handleRideChange('Ski', 'Ski') },
            { label: 'Snowboard', action: () => handleRideChange('Snowboard', 'Snowboard') },
            { label: 'Ski Boots', action: () => handleRideChange('Ski Boots', 'Ski Boots') },
          ]}
        />
      </div>

      <div className="cards">
        {currentCards.map((item) => (
          <RentalCard
            key={item._id}
            image={item.image}
            title={item.name}
            available={item.available}
          />
        ))}
      </div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          margin: '20px auto 0',
        }}
      >
        <Pagination
          count={Math.ceil(items.length / cardsPerPage)}
          page={currentPage}
          variant="outlined"
          color="primary"
          onChange={handlePageChange}
          sx={{
            '& .MuiPagination-ul': {
              justifyContent: 'space-around',
            },
          }}
        />
      </Box>
    </div>
  );
};

export default EquipmentList;


