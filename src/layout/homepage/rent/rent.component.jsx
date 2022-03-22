import { Container, Typography, Box, Button } from '@mui/material';

import PropertyCard from '../../../components/cards/property-card.component';

const Rent = () => {
  return (
    <Box>
      <Container maxWidth='lg' sx={{ padding: '3rem 5rem' }}>
        <Typography variant='h2' component='h2'>
          Recent Houses for Rent
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
          <PropertyCard />
          <PropertyCard />
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

export default Rent;
