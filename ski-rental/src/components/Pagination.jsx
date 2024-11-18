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
        justifyContent: 'center', // Center the pagination horizontally
        alignItems: 'center', // Center content vertically if needed
        width: '100%', // Ensure it doesn't stretch beyond its container
        maxWidth: '400px', // Restrict the max width of the pagination container
        margin: '0 auto', // Center the container itself within its parent
      }}
    >
      <Pagination
        count={5}
        page={1}
        variant="outlined"
        color="primary"
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
