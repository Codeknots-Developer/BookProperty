import React from 'react'
import FreshListings from '../../Components/freshListing'
import MegaProjects from '../../Components/megaProjects'
import OurAgencies from '../../Components/ourAgencies'
import SearchBox from '../../Components/SearchBox'
import { Box } from '@mui/material'
import './home.css'
import worldMap from './../../images/worldMap.png'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='hero-section'>
        <div className='hero-heading'>
          Hey ! Looking For A Trusted Properties ?
        </div >
        <div className='hero-subheading'>
          Let’s Find Out
        </div>
        <SearchBox/>
        <Box sx={{display: { xs: 'none', md: 'block' } }}>
          <img src={worldMap} alt="map" className='worldMap'/>
        </Box>
      
      </div>
      {/* Our Agencies */}
      <div className='our-agencies'>
        <OurAgencies />
      </div>
      {/* Fresh Listing */}
      <div className='fresh-listing'>
        <FreshListings />
      </div>
      {/* Mega Projects */}
      <div className='mega-projects'>
        <MegaProjects />
      </div>
    </div>
  )
}

export default Home