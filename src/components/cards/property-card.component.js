import { Box, Button, Paper, Typography } from '@mui/material';

const PropertyCard = () => {
  return (
    <Paper
      elevation={24}
      sx={{
        display: 'flex',
        width: '55rem',
        marginBottom: 5, // test
        overflow: 'hidden',
        outline: '3px solid #1d3557',
        transform: 'skew(-8deg)',
        minHeight: '15rem',
        transition: '.2s all ease-in-out',

        '&:hover': {
          transform: 'scale(1.025) skew(-8deg)',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '17rem',
          padding: 0,
          maHeight: '12rem',
          borderRadius: '2rem',
        }}
      >
        <img
          src={require('./../../assets/img/hero-1.jpg')}
          style={{
            width: '100%',
            height: '100%',
            // borderRadius: ' 2rem 0 0 2rem',
            outline: '3px solid #1d3557',
            borderRight: '5px solid #1d3557',
          }}
        />
      </Box>

      <Box
        sx={{
          color: 'white',
          backgroundColor: '#e63936',
          padding: '2rem',
          '&>*': {
            transform: 'skew(8deg)',
          },
        }}
      >
        <Box>
          <Typography
            variant='body1'
            component='h2'
            sx={{
              color: '#fff',
              fontWeight: '700',
              fontSize: '1.4rem',
              letterSpacing: 1.5,
              textTransform: 'uppercase',
            }}
          >
            Main Title
          </Typography>
          <Typography
            variant='body1'
            component='h2'
            sx={{
              color: '#fff',
              fontWeight: '400',
              fontSize: '1rem',
              letterSpacing: 1.5,
              marginTop: '-.4rem',
            }}
          >
            Main Title
          </Typography>
          <Typography variant='body1' component='h2' sx={{ marginY: '1.6rem' }}>
            lormeimsaimsa akslmsa nmskanask lormeimsaimsa akslmsa
            nmskanasklormeimsaimsa akslmsa nmskanask
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            sx={{ backgroundColor: '#1d3557' }}
          >
            See More
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PropertyCard;