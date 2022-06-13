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
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const UpdateProperty = () => {
  const { id } = useParams();
  console.log('idddd workin', id);

  // const [property, setProperty] = useState(null);

  // useEffect(() => {
  //   const dummy = async () => {
  //     try {
  //       // if (!id) return;
  //       const propertyData = await axios.get(
  //         `http://localhost:6969/property/${id}`
  //       );

  //       // if (!property) return;
  //       console.log('update effect');
  //       setProperty(propertyData?.data?.data?.property);
  //     } catch (error) {
  //       console.log('Error getting property details! 😒');
  //     }
  //   };

  //   setTitle(property?.title);
  //   console.log('changed by effect✅');
  //   setPrice(property?.price);

  //   dummy();
  // }, []);

  // console.log('property working', property);
  //!---------------
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log('changed by handler ❌');
  };

  const [price, setPrice] = useState('');
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const [propertyFor, setPropertyFor] = useState('buy');
  const handlePropertyFor = (e) => {
    setPropertyFor(e.target.value);
  };

  const [propertyType, setPropertyType] = useState('residential');

  const handlePropertyType = (e) => {
    setPropertyType(e.target.value);
  };

  const [city, setCity] = useState('LHR');
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
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const [area, setArea] = useState('');
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const [detailedAddress, setDetailedAddress] = useState('');
  const handleDetailedAddress = (e) => {
    setDetailedAddress(e.target.value);
  };

  const [phoneNumber, setPhoneValue] = useState('');
  const handlePhoneChange = (e) => {
    setPhoneValue(e);
  };

  const [description, setDescription] = useState('');
  const handleDescriptionChange = (e) => {
    setDescription(e);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSubmission = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: 'patch',
      url: 'http://localhost:6969/property/' + id,
      data: {
        title,
        price,
        propertyFor,
        propertyType,
        city,
        area,
        detailedAddress,
        phoneNumber,
        description,
      },
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${user.token}`,
      },
    });

    console.log(res);
    if (res.statusText === 'Created') alert('Property Updated successfully');
  };
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
          Update property
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
        <Typography mt={2}>Give your property a name:</Typography>

        <TextField
          id='outlined-basic'
          label='Title'
          variant='outlined'
          sx={{ display: 'block' }}
          value={title}
          onChange={handleTitleChange}
        />
        <Typography mt={2}>Give your property a value:</Typography>

        <TextField
          id='outlined-basic'
          label='Price(pkr)'
          variant='outlined'
          sx={{ display: 'block' }}
          value={price}
          onChange={handlePriceChange}
        />
        <FormControl sx={{ marginTop: '1rem' }}>
          <FormLabel id='demo-row-radio-buttons-group-label'>
            Property:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            onChange={handlePropertyFor}
            value={propertyFor}
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
            onChange={handlePropertyType}
            value={propertyType}
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
            onChange={handleCityChange}
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
            value={area}
            onChange={handleAreaChange}
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
              value={detailedAddress}
              onChange={handleDetailedAddress}
            />
          </Box>
          <PhoneInput
            country={'pk'}
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder='+92 333 1234567'
          />

          {/* <input
            type='file'
            name='myImage'
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          /> */}

          <Box>
            <ReactQuill
              theme='snow'
              value={description}
              onChange={handleDescriptionChange}
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
          onClick={handleSubmission}
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default UpdateProperty;
