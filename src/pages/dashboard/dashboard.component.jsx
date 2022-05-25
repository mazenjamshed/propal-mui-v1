import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import List from '../../components/dashboard/list.component';
import DashNav from '../../components/dashboard/navi.component';
import { styled } from '@mui/material/styles';
import PropertyTab from '../../components/dashboard/propertytab.component';
import { useState } from 'react';

const ListItem = styled('li')(() => ({
  border: '1px solid #000',
  color: '#1d3557',
  width: '14rem',
  display: 'block',
  padding: '.6rem 1.8rem',
  marginBottom: '.5rem',
  '&:hover': {
    backgroundColor: '#1d3557',
    color: 'white',
    cursor: 'pointer',
  },
}));

const Dashboard = () => {
  const userData = useSelector(({ auth }) => auth.user);
  console.log('datakjkajksa', userData);

  const notApprovedProperties = userData.properties.filter(
    (prop) => prop.isApproved === false
  );
  const approvedProperties = userData.properties.filter(
    (prop) => prop.isApproved === true
  );

  console.log('not approved', notApprovedProperties);
  const [property, setProperty] = useState(false);
  const [active, setActive] = useState(false);
  const [discard, setDiscarded] = useState(false);
  const [setting, setSetting] = useState(false);

  const handleProperty = () => {
    setProperty((state) => !state);
    setActive(false);
    setDiscarded(false);
    setSetting(false);
  };
  const handleActive = () => {
    setActive((state) => !state);
    setProperty(false);
    setDiscarded(false);
    setSetting(false);
  };
  const handleDiscarded = () => {
    setDiscarded((state) => !state);
    setProperty(false);
    setActive(false);
    setSetting(false);
  };
  const handleSetting = () => {
    setSetting((state) => !state);
    setDiscarded(false);
    setProperty(false);
    setActive(false);
  };

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
        Hello,{userData?.username}
      </Typography>

      {/* <DashNav />  //!Remove its file too later */}
      <Box marginY={7} sx={{ display: 'flex', gap: '5rem' }}>
        <ul className='container'>
          <ListItem onClick={handleProperty}>Properties</ListItem>
          <ListItem onClick={handleActive}>Approved Properties</ListItem>
          <ListItem onClick={handleDiscarded}>Not Approved</ListItem>
          <ListItem onClick={handleSetting}>Account Settings</ListItem>
        </ul>
        {/* //Property */}
        {property ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {userData?.properties.map((prop, i) => (
              <PropertyTab
                title={prop.title}
                price={prop.price}
                description={prop.description}
                key={i}
              />
            ))}
          </Box>
        ) : (
          ''
        )}
        {active ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {approvedProperties.length > 0
              ? approvedProperties?.map((prop, i) => (
                  <PropertyTab
                    title={prop.title}
                    price={prop.price}
                    description={prop.description}
                    key={i}
                  />
                ))
              : 'There are no approved properties'}
          </Box>
        ) : (
          ''
        )}
        {discard ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {notApprovedProperties?.map((prop, i) => (
              <PropertyTab
                title={prop.title}
                price={prop.price}
                description={prop.description}
                key={i}
              />
            ))}
          </Box>
        ) : (
          ''
        )}
        {setting ? <h2>Account Settings</h2> : ''}
      </Box>
    </Box>
  );
};

export default Dashboard;
