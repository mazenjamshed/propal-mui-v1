import {
  Button,
  ButtonGroup,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { PrimaryOverlay } from '../../../components/overlays/primary-overlay.component';
import { PrimaryButton } from './../../../components/buttons/primary-button.component';
import HeroBg from './../../../assets/img/hero-1.jpg';
import HeroBar from './../../../components/search-bars/hero-bar.component';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [propertyFor, setPropertyFor] = useState('buy');

  const handleBuy = () => {
    setPropertyFor('buy');
  };
  const handleRent = () => {
    setPropertyFor('rent');
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) search = 'all';
    navigate(`/property/search/${search}?propertyFor=${propertyFor}`);
  };

  const buttons = [
    <PrimaryButton key='buy' onClick={handleBuy}>
      Buy
    </PrimaryButton>,
    <PrimaryButton key='rent' onClick={handleRent}>
      Rent
    </PrimaryButton>,
  ];
  return (
    <Paper
      sx={{
        backgroundImage: `url(${HeroBg})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        display: 'block',
      }}
    >
      <PrimaryOverlay>
        <Container
          maxWidth='lg'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography
            variant='h2'
            component='h1'
            textAlign='center'
            color='white'
            marginTop='8rem'
            // marginBottom='6rem'
          >
            Pakistan's No.1 Real Estate Portal
          </Typography>

          <ButtonGroup sx={{ margin: '2.5rem 0 1.2rem 0' }}>
            {buttons}
          </ButtonGroup>

          {/* <HeroBar /> */}
          <TextField
            id='prop-search'
            label='Search Properties'
            value={search}
            onChange={handleSearch}
            sx={{ background: 'white' }}
          />
          <Button variant='contained' onClick={handleSubmit}>
            Search
          </Button>
        </Container>
      </PrimaryOverlay>
    </Paper>
  );
};

export default Hero;
