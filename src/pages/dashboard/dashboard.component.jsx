import { Box, Typography } from '@mui/material';
import List from '../../components/dashboard/list.component';
import DashNav from '../../components/dashboard/navi.component';

const Dashboard = () => {
  return (
    <Box>
      <Typography
        variant='h2'
        componen='h1'
        marginLeft={15}
        marginTop={4}
        marginBottom={1}
        fontWeight='700'
      >
        Dashboard
      </Typography>
      <DashNav />
      <Box marginY={7}>
        <List />
      </Box>
    </Box>
  );
};

export default Dashboard;
