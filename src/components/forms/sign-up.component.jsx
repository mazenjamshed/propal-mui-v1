import { Button, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupAction } from '../../store/slices/authSlice';

const SignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    console.log(
      'registation submitted',
      `name:${username}`,
      `email:${email}`,
      `password:${password}`,
      `confirmPassword:${confirmPassword}`
    );

    dispatch(signupAction({ username, email, password, confirmPassword }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('submit by form');
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{
            color: '#1d3557',
            fontWeight: 500,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Create Account
        </Typography>
        <TextField
          variant='standard'
          label='Name'
          type='text'
          onChange={handleNameChange}
          value={username}
          sx={{
            marginBottom: '2rem',
          }}
        />
        <TextField
          variant='standard'
          label='Email'
          type='email'
          onChange={handleEmailChange}
          value={email}
          sx={{
            marginBottom: '2rem',
          }}
        />
        <TextField
          variant='standard'
          label='Password'
          type='password'
          onChange={handlePasswordChange}
          value={password}
          sx={{
            marginBottom: '2rem',
          }}
        />
        <TextField
          variant='standard'
          label='Confirm Password'
          type='password'
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
          sx={{
            marginBottom: '2rem',
          }}
        />
        <Button
          variant='contained'
          sx={{ bgcolor: '#1d3557' }}
          onClick={handleRegistration}
          type='submit'
        >
          Create Account
        </Button>
      </Box>
    </form>
  );
};

export default SignUp;
