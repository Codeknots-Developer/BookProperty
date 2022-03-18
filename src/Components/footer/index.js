import React from 'react'
import Logo from '../../images/footerlgo.png'
import './styles.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import popularSearch from '../../images/PopularSearches.png'
import house from '../../images/footerhouse.png'

const Footer = () => {
  const footerBottomDiv1 = [
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Houses For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Houses For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Houses For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Houses For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Houses For Sale In Lahore</p>
    </div>]
  const footerBottomDiv2 = [
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Appartments For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Appartments For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Appartments For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Appartments For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Appartments For Sale In Lahore</p>
    </div>]
  const footerBottomDiv3 = [
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Plots For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Plots For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Plots For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Plots For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Plots For Sale In Lahore</p>
    </div>]
  const footerBottomDiv4 = [
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Farmhouses For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Farmhouses For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Farmhouses For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Farmhouses For Sale In Lahore</p>
    </div>,
    <div className='d-flex'>
      <LocationOnIcon />
      <p className='pl-1'>Farmhouses For Sale In Lahore</p>
    </div>]
  return (
    <div className='footer'>
      <div className='row p-5'>
        <div className='col-lg-4'>
          <img src={Logo} alt="logo-error" width={"50%"} />
          <p className='description mt-3'>
            Bookproperty.pk is an online real estate property website where you
            can post property search property search agency profile of trusted agents.
          </p>
        </div>
        <div className='col-lg-4'>
          <p className='heading'>Quick Links</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
        <div className='col-lg-4'>
          <div className='upper-contact-us'>
            <p className='heading'>Contact Us</p>
            <p className='address d-flex'>
              <LocationOnIcon />
              <p className='pl-2'>Suit # 07 1st Floor, MR Plaza, Block A Markaz Faisal Town
                Islamabad Pakistan.</p>
            </p>
            <p className='d-flex'>
              <MailIcon />
              <p className='pl-2'>Info@bookproperty.pk</p>
            </p>
          </div>
          <div className='lower-contact-us'>
            <p className='heading'>Follow Us</p>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter pl-3"></i>
            <i class="fa fa-instagram pl-3"></i>
            <i class="fa fa-youtube pl-3"></i>
            <i class="fa fa-play pl-3"></i>
            {/* images twitter, facebook, etc*/}
          </div>
        </div>
      </div>

      <div className='lower-section pl-4 p-5'>
        <div>
          <img src={popularSearch} alt="logo-error" width={"13%"} />
        </div>
        <div className='p-3 d-flex'>
          <HomeIcon sx={{ backgroundColor: "green", borderRadius: "3px" }} />
          <div className='pl-3'><img src={house} alt="logo-error" /></div>
        </div>
      </div>
      <div className='footerbg'>
        <div className='houses-for-sale pl-5 pr-5'>
          <div className='section-1'>
            {
              footerBottomDiv1.map(footerdiv => footerdiv)
            }
          </div>
          <div className='section-2'>
            {
              footerBottomDiv2.map(footerdiv => footerdiv)
            }
          </div>
          <div className='section-3'>
            {
              footerBottomDiv3.map(footerdiv => footerdiv)
            }
          </div>
          <div className='section-4'>
            {
              footerBottomDiv4.map(footerdiv => footerdiv)
            }
          </div>
        </div>
        <div className='row pl-5'>
          <div className='col-lg-8'>
            <p> © 2021 BookProperty.pk. All rights reserved. </p>
          </div>
          <div className='col-lg-2'>
            <p>Terms &  Conditions </p>
          </div>
          <div className='col-lg-2  '>
            <p>Privacy policy </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;