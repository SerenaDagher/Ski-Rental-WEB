import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RentalCard from './RentalCard';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import MyDropdown from './DropDownButton';
import ItemDetailsDialog from './ItemsDetailsDialog';


const EquipmentList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const [filter, setFilter] = useState('all'); 
  const [ride, setRide] = useState('all'); 
  const [filterLabel, setFilterLabel] = useState('All');
  const [rideLabel, setRideLabel] = useState('All');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, [filter, ride]);

  const fetchItems = async () => {
    try {
      let data = [];
  
      if (ride === 'all') {

        const [skisResponse, snowboardsResponse] = await Promise.all([
          axios.get('http://localhost:8082/api/skis'),
          axios.get('http://localhost:8082/api/snowboards'),
        ]);
        data = [...skisResponse.data, ...snowboardsResponse.data];
      } else {

        let url = ride === 'Ski' 
          ? 'http://localhost:8082/api/skis' 
          : 'http://localhost:8082/api/snowboards';
        
        if (filter === 'available') {
          url = `${url}/availability/true`; 
        } else if (filter === 'not available') {
          url = `${url}/availability/false`;
        }
  
        const response = await axios.get(url);
        data = response.data;
      }
  

      if (filter !== 'all' && ride === 'all') {
        data = data.filter(item => {
          return filter === 'available' ? item.available : !item.available;
        });
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

  const handleFilterChange = (selectedFilter, label) => {
    setFilter(selectedFilter);
    setFilterLabel(label);
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
      <h1>Choose your Ride!</h1>
  
      <div className="dropdown-container">
        <MyDropdown
          buttonLabel={`Filter`}
          items={[
            { label: 'All', action: () => handleFilterChange('all', 'All') },
            { label: 'Available', action: () => handleFilterChange('available', 'Available') },
            { label: 'Not Available', action: () => handleFilterChange('not available', 'Not Available') },
          ]}
        />
        <MyDropdown
          buttonLabel={`Choose your ride`}
          items={[
            { label: 'All', action: () => handleRideChange('all', 'All') },
            { label: 'Ski', action: () => handleRideChange('Ski', 'Ski') },
            { label: 'Snowboard', action: () => handleRideChange('Snowboard', 'Snowboard') },
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
  )};
  

export default EquipmentList;