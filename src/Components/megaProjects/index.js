import { Typography } from '@material-ui/core';
import React from 'react'
import MegaLogo from '../../images/Rectangle_37.png'
import LMCarousel from '../SubComponents/Listing_Mega_Carousel';
import './index.css'

const MegaProjects = () => {
  const megaArray = [
                  {
                    logo: MegaLogo,
                    title: "Mehrban Town Colony",
                    location: "Islamabad",
                    price: '1.2 Cr'
                  },
                  {
                    logo: MegaLogo,
                    title: "Mehrban Town Colony",
                    location: "Islamabad",
                    price: '1.2 Cr'
                  },
                  {
                    logo: MegaLogo,
                    title: "Mehrban Town Colony",
                    location: "Islamabad",
                    price: '1.2 Cr'
                  },
                  {
                    logo: MegaLogo,
                    title: "Mehrban Town Colony",
                    location: "Islamabad",
                    price: '1.2 Cr'
                  },
                ]
  return (
    <>
        <div className='heading-ouragencies'>
          <Typography component='h4' variant='h3' >Mega <span className='heading-subpart'>Projects</span></Typography>
        </div>
        <div className='description-ouragencies'>
          <Typography>All mega projects which is most popular in pakistan</Typography>
        </div>
        <div>
          <LMCarousel
            data = {megaArray}
            component = {'megaProjects'}
          />
        </div>
    </>
  )
}

export default MegaProjects;