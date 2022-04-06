import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Container,
  Divider,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const AddProperty = () => {
  const [city, setCity] = useState('');
  // const handleChange = (event) => {
  //   setCity(event.target.value);
  // };

  const [phoneValue, setPhoneValue] = useState('');

  const onPhoneChange = (e) => {
    console.log(e);
  };
  const [quillValue, setQuillValue] = useState('');
  console.log(quillValue);

  const cities = [
    {
      value: 'LHR',
      label: 'Lahore',
    },
    {
      value: 'KHI',
      label: 'Karachi',
    },
  ];
  return (
    <Box>
      <Box
        p={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#a8dadc',
        }}
      >
        <Typography variant='h2' component='h1'>
          Add a property
        </Typography>
        <Typography variant='body1' component='h2'>
          Sell or rent out your property. Enter your property details below to
          get it listed on our portal and receive leads on your property
        </Typography>
      </Box>

      <Container
        fixed
        sx={{
          '& > *': {
            marginBottom: '1rem ',
          },
        }}
      >
        <FormControl sx={{ marginTop: '1rem' }}>
          <FormLabel id='demo-row-radio-buttons-group-label'>
            Property:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel value='buy' control={<Radio />} label='Buy' />
            <FormControlLabel value='rent' control={<Radio />} label='Rent' />
          </RadioGroup>
        </FormControl>
        <Divider />

        <FormControl>
          <FormLabel id='property-type'>Type of Property:</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='residential'
              control={<Radio />}
              label='Residential'
            />
            <FormControlLabel
              value='commercial'
              control={<Radio />}
              label='Commerecial'
            />
            <FormControlLabel value='plot' control={<Radio />} label='Plot' />
          </RadioGroup>
        </FormControl>
        <Divider />
        <Box
          sx={{
            margin: '1rem 0',
            '& > *': {
              marginTop: '1rem',
            },
          }}
        >
          <Typography marginBottom={2}>Property Location:</Typography>

          <TextField
            id='city-selection'
            select
            label='City'
            value={city}
            // onChange={handleChange}
            helperText='Please select your currency'
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            sx={{ marginLeft: '1.3rem' }}
            id='area-selection'
            label='Area'
            // defaultValue='e.g. Bahria Town'
            placeholder='e.g. Bahria Town'
          />
          <Box sx={{ width: '26rem' }}>
            <TextField
              id='adress-multiline'
              label='Detailed Address'
              placeholder='Address here'
              multiline
              rows={4}
              sx={{ width: '100%' }}
            />
          </Box>
          <PhoneInput
            country={'pk'}
            value={phoneValue}
            onChange={onPhoneChange}
            placeholder='+92 333 1234567'
          />

          <Box>
            <ReactQuill
              theme='snow'
              value={quillValue}
              onChange={setQuillValue}
            />
          </Box>
        </Box>
        <Button
          variant='filled'
          size='large'
          sx={{
            bgcolor: '#457b9d',
            color: '#fff',
            padding: '1rem 3.2rem',
            width: '16rem',
            margin: '2rem 0',
          }}
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default AddProperty;
