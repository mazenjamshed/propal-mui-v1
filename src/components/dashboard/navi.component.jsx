import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const DashMenu = styled('li')(() => ({
  borderBottom: '2px solid #1d3557',
  color: '#1d3557',
  fontWeight: 500,
  listStyle: 'none',
}));

const DashNav = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      {/* <DashMenu>Dashboard</DashMenu> */}
      <DashMenu>Listings</DashMenu>
      <DashMenu>Account Settings</DashMenu>
    </Box>
  );
};

export default DashNav;
