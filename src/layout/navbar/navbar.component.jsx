import { AppBar, Typography, Toolbar, Box, Container } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/buttons/primary-button.component';
import { modalActions } from '../../store/slices/modal';

const Navbar = () => {
  const dispatch = useDispatch();
  const handlebuttonClick = () => {
    dispatch(modalActions.showModal());
  };
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#1d3557',
          padding: '.7rem 0',
          borderBottom: '2px solid #fff',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 1.8rem',
              }}
            >
              <Typography variant='h4' component='h1'>
                <Link
                  to='/'
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Propal.com
                </Link>
              </Typography>
              <Box>
                <PrimaryButton
                  onClick={() => navigate('/add')}
                  sx={{ marginRight: '2rem' }}
                >
                  Add a Property
                </PrimaryButton>
                <PrimaryButton onClick={handlebuttonClick}>
                  Sign In
                </PrimaryButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
