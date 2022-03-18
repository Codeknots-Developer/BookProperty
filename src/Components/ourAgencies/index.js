import React from 'react'
import AgencyCarousel from '../SubComponents/AgencyCarousel'
import AgencyLogo from '../../images/agency_logo.png'
import { Typography } from '@material-ui/core'
import './index.css'

const OurAgencies = () => {
  const data = [
    {logo: AgencyLogo},
    {logo: AgencyLogo},
    {logo: AgencyLogo},
    {logo: AgencyLogo},
    {logo: AgencyLogo},
    {logo: AgencyLogo},
  ]
  return (
    <>
        <div className='heading-ouragencies'>
          <Typography component='h4' variant='h3' >Our <span className='heading-subpart'>Agencies</span></Typography>
        </div>
        <div className='description-ouragencies'>
          <Typography>Looking for professional agencies who have professional agents. Don’t worry we have professional ones</Typography>
        </div>
        <div>
          <AgencyCarousel
            data = {data}
          />
        </div>
    </>
  )
}

export default OurAgencies