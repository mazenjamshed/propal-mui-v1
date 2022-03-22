import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Container,
  Modal,
} from '@mui/material';
import React from 'react';
import { PrimaryButton } from '../../components/buttons/primary-button.component';
import SignIn from '../../components/forms/sign-in.component';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
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
                Propal.com
              </Typography>
              <PrimaryButton onClick={handleOpen}>Sign In</PrimaryButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* // ! Remove later */}
      <Modal //Todo For testing of Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <SignIn />
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
