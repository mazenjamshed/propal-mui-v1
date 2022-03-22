import { Button, TextField, Box, Typography } from '@mui/material';

const SignIn = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('submit by form');
      }}
    >
      <Box
        sx={{
          '& > *': {
            marginBottom: '2rem',
          },
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
          }}
        >
          Sign In
        </Typography>
        <TextField variant='standard' label='Email' type='email' />
        <TextField variant='standard' label='Password' type='password' />
        <Button
          variant='contained'
          sx={{ bgcolor: '#1d3557' }}
          onClick={() => console.log('submit by button')}
          type='submit'
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default SignIn;
