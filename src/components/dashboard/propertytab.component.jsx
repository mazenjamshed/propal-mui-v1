import { Box, Typography } from '@mui/material';

const PropertyTab = ({ title, description, price }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid blue',
        borderRadius: 2,
        width: '60rem',
        // gap: '3rem',
        justifyContent: 'space-around',
        padding: '.5rem 0.8rem',
        // minHeight: '6rem',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          flexBasis: '30%',
          borderRight: '2px solid blue',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h3' textAlign='center'>
          Title
        </Typography>
        <Typography component='h3'>{title}</Typography>
      </Box>

      <Box
        sx={{
          flexBasis: '20%',
          borderRight: '2px solid blue',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h3' textAlign='center'>
          Price
        </Typography>
        <Typography component='h3'>{price}</Typography>
      </Box>
      <Box
        sx={{
          flexBasis: '20%',
          borderRight: '2px solid blue',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h3' textAlign='center'>
          Another thing here
        </Typography>
      </Box>
      <Box
        sx={{
          flexBasis: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h3' textAlign='center'>
          down arrow
        </Typography>
      </Box>
    </Box>
  );
};

export default PropertyTab;
