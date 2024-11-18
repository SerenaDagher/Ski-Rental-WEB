import { styled } from '@mui/material/styles';

// Use styled instead of makeStyles
const useStyles = styled('div')(({ theme }) => ({
  ul: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export default useStyles;
