import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '1rem 4rem',
        backgroundColor: '#1d3557',
        color: '#fff',
      }}
    >
      <Typography sx={{ textAlign: 'center' }}>
        Copyright © 2022 Propal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
