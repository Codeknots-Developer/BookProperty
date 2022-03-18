import React from 'react';
import { Button } from '@material-ui/core';
import './styles.css'

const Header = () => {
  return (
    <div className='appHeader'>
      <div className='buttons'>
        <Button color="inherit">Blog</Button>
        <Button color="inherit">Rental Agency</Button>
        <Button color="inherit">Login</Button>
      </div>
    </div>
  );
}

export default Header
