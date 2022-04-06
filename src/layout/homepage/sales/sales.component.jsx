import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../../../components/cards/property-card.component';

const Sales = () => {
  const navigate = useNavigate();

  const linkHandler = (e) => {
    e.preventDefault();

    navigate('/property');
  };
  return (
    <Box sx={{ bgcolor: '#a8dadc' }}>
      <Container maxWidth='lg' sx={{ padding: '3rem 5rem' }}>
        <Typography variant='h2' component='h2'>
          Recent Houses for Sales
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '3rem',
          }}
        >
          <PropertyCard linkHandler={linkHandler} />
          <PropertyCard linkHandler={linkHandler} />
          <Button
            variant='contained'
            color='secondary'
            sx={{ backgroundColor: '#1d3557' }}
          >
            See More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Sales;
