import { ButtonGroup, Container, Paper, Typography } from '@mui/material';
import { PrimaryOverlay } from '../../../components/overlays/primary-overlay.component';
import { PrimaryButton } from './../../../components/buttons/primary-button.component';
import HeroBg from './../../../assets/img/hero-1.jpg';
import HeroBar from './../../../components/search-bars/hero-bar.component';

const Hero = () => {
  const buttons = [
    <PrimaryButton key='rent'>Rent</PrimaryButton>,
    <PrimaryButton key='buy'>Buy</PrimaryButton>,
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

          <HeroBar />
        </Container>
      </PrimaryOverlay>
    </Paper>
  );
};

export default Hero;
