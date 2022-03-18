import { Typography } from '@material-ui/core';
import React from 'react'
import MegaLogo from '../../images/Rectangle_37.png'
import megaLogo2 from '../../images/Rectangle_40.png'
import LMCarousel from '../SubComponents/Listing_Mega_Carousel';
import './index.css'
import {TextField, Box, MenuItem} from '@mui/material'

const currencies = [
  {
    value: 'islamabad',
    label: 'Islamabad',
  },
  {
    value: 'peshawar',
    label: 'Peshawar',
  },
  {
    value: 'karachi',
    label: 'Karachi',
  },
  {
    value: 'lahore',
    label: 'Lahore',
  },
];

const FreshListings = () => {
  const [location, setLocation] = React.useState('islamabad');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const listingArray = [
    {
      logo: megaLogo2,
      title: "Full House for Rent",
      location: "Islamabad",
      price: '1.2 Cr'
    },
    {
      logo: MegaLogo,
      title: "Full House for Rent",
      location: "Islamabad",
      price: '1.2 Cr'
    },
    {
      logo: MegaLogo,
      title: "Full House for Rent",
      location: "Islamabad",
      price: '1.2 Cr'
    },
    {
      logo: MegaLogo,
      title: "Full House for Rent",
      location: "Islamabad",
      price: '1.2 Cr'
    },
  ]

  return (
    <>
        <div className='heading-ouragencies'>
          <Typography component='h4' variant='h3' >Fresh  <span className='heading-subpart'>Listings</span></Typography>
        </div>
        <div className='description-ouragencies'>
          <Typography>New listings that are recently listed</Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
             <div>
                <TextField
                  id="filled-select-currency"
                  select
                  label="TOPLOCATIONS"
                  value={location}
                  onChange={handleChange}
                  variant="filled"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
          </Box>
        </div>
        <div>
          <LMCarousel
            data = {listingArray}
            component = {'freshListing'}
          />
        </div>
    </>
  )
}

export default FreshListings