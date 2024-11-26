import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';


const Paginate = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '400px', 
        margin: '0 auto', 
      }}
    >
      <Pagination
        count={5}
        page={1}
        // variant="outlined"
        color= "primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            to={`/posts?page=1`}
          />
        )}
        sx={{
          '& .MuiPagination-ul': {
            justifyContent: 'space-around',
          },
        }}
      />
    </Box>
  );
};

export default Paginate;
