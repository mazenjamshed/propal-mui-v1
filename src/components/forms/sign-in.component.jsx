import { Button, TextField, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/slices/authSlice';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log('login ', `email:${email}`, `password:${password}`);

    dispatch(loginAction({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) navigate('./dashboard');
  }, [isAuthenticated]);

  console.log(email); // current email
  console.log(password); // current password
  return (
    <form onSubmit={handleLogin}>
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
          Sign In
        </Typography>
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
        <Button
          variant='contained'
          sx={{ bgcolor: '#1d3557' }}
          type='submit'
          // disabled={true}
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default SignIn;
