import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RentalCard from '../RentalCard';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import MyDropdown from '../DropDownButton';
import ItemDetailsDialog from './ItemsDetailsDialog';

const RIDES = {
  ALL: 'all',
  SKI_BOOTS: 'skiboots',
  SNOWBOARD_BOOTS: 'snowboardboots',
};

const AccessoriesList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [size, setSize] = useState(null);
  const [ride, setRide] = useState(RIDES.ALL);
  const [sizeLabel, setSizeLabel] = useState('All');
  const [rideLabel, setRideLabel] = useState('All');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width <= 1000) setCardsPerPage(2);
      else if (width <= 2000) setCardsPerPage(4);
      else setCardsPerPage(6);
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);

    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [size, ride]);

  const fetchItems = async () => {
    try {
      let data = [];
      if (ride === RIDES.ALL) {
        const [skiBootsResponse, snowboardBootsResponse] = await Promise.all([
          size
            ? axios.get(`http://localhost:8082/api/skiBoots/size/${size}`)
            : axios.get('http://localhost:8082/api/skiBoots'),
          size
            ? axios.get(`http://localhost:8082/api/snowboardBoots/size/${size}`)
            : axios.get('http://localhost:8082/api/snowboardBoots'),
        ]);
        data = [...skiBootsResponse.data, ...snowboardBootsResponse.data];
      } else {
        const baseUrl =
          ride === RIDES.SKI_BOOTS
            ? 'http://localhost:8082/api/skiBoots'
            : 'http://localhost:8082/api/snowboardBoots';
        const url = size ? `${baseUrl}/size/${size}` : baseUrl;

        const response = await axios.get(url);
        data = response.data;
      }

      setItems(data);
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

  const handleSizeChange = (selectedSize, label) => {
    setSize(selectedSize);
    setSizeLabel(label);
    setCurrentPage(1);
  };

  const handleRideChange = (selectedRide, label) => {
    setRide(selectedRide);
    setRideLabel(label);
    setCurrentPage(1);
  };

  const openDialog = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };

  const handleRent = () => {
    alert(`You have rented: ${selectedItem.name}`);
    closeDialog();
  };

  return (
    <div className="main">
      <h1>What else do you need?</h1>

      <div className="dropdown-container">
        <MyDropdown
          buttonLabel={`Size: ${sizeLabel}`}
          items={[
            { label: 'All', action: () => handleSizeChange(null, 'All') },
            { label: 'Size 38', action: () => handleSizeChange(38, 'Size 38') },
            { label: 'Size 40', action: () => handleSizeChange(40, 'Size 40') },
            { label: 'Size 42', action: () => handleSizeChange(42, 'Size 42') },
          ]}
        />
        <MyDropdown
          buttonLabel={`Accessories: ${rideLabel}`}
          items={[
            { label: 'All', action: () => handleRideChange(RIDES.ALL, 'All') },
            { label: 'Ski Boot', action: () => handleRideChange(RIDES.SKI_BOOTS, 'Ski Boot') },
            { label: 'Snowboard Boot', action: () => handleRideChange(RIDES.SNOWBOARD_BOOTS, 'Snowboard Boot') },
          ]}
        />
      </div>

      {items.length === 0 ? (
        <div className="no-matches">
          <h2>No matches found!</h2>
        </div>
      ) : (
        <div className="cards">
          {currentCards.map((item) => (
            <RentalCard
              key={item._id}
              image={item.image}
              title={item.name}
              available={item.available}
              onRentClick={() => openDialog(item)}
            />
          ))}
        </div>
      )}

      {items.length > 0 && (
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
      )}

      <ItemDetailsDialog open={dialogOpen} onClose={closeDialog} item={selectedItem} />
    </div>
  );
};

export default AccessoriesList;
