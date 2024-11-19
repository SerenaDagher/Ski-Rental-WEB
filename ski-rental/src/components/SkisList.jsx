import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RentalCard from './RentalCard';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import MyDropdown from './DropDownButton';

const SkisList = () => {
  const [skis, setSkis] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);

  useEffect(() => {
    const fetchSkis = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/skis');
        setSkis(response.data);
      } catch (error) {
        console.error('Error fetching skis:', error);
      }
    };

    fetchSkis();
  }, []);

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = skis.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="main">
      <h1>Equipments</h1>
      <MyDropdown  
      buttonLabel='type of equipment' 
      items={[    
        { label: 'Ski', link: '#/action-1' },
        { label: 'Snowboard', link: '#/action-2' },
        { label: 'Ski Boots', link: '#/action-3' }
      ] }
        />
      {/* Render the current cards based on the page */}
      <div className="cards">
        {currentCards.map(ski => (
          <RentalCard
            key={ski._id}
            image={ski.image}
            description={ski.description}
            title={ski.name}
            brand={ski.brand}
            type={ski.type}
            length={ski.length}
            widthWaist={ski.widthWaist}
          />
        ))}
      </div>

      {/* Pagination */}
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
          count={Math.ceil(skis.length / cardsPerPage)} // Dynamically set the page count based on the total number of skis
          page={currentPage}
          variant="outlined"
          color="primary"
          onChange={handlePageChange} // Handle page change
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

export default SkisList;
