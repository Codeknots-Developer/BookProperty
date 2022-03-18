import React from 'react'
import './styles.css'
import Logo from "../../images/logo.png"
import {
      MenuItem, Button,Container,
      Menu,Typography,IconButton,Toolbar,
      AppBar,Box, Divider, Tabs, Tab } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@material-ui/icons/Add';

const NavBar = () => {
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const pages = [
    { name: 'Home', value: 'Home' },
    { name: 'Buy', value: 'Buy' },
    { name: 'Rent', value: 'Rent' },
    { name: 'Agents', value: 'Agents' },
    { name: 'Agencies', value: 'Agencies' },
    { name: 'Projects', value: 'Projects' }
  ];
  return (
    <>
      <div className='navbarbottom'>
        <AppBar position="static" style={{ backgroundColor: "white" ,height:"65px"}}>
          <Container maxWidth="xl">
            <Toolbar>
              <Typography

                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <img src={Logo} alt="logo"></img>
              </Typography>


              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}

                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page,i) => (
                    <MenuItem key={i} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography

                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                <img src={Logo} alt="logo"></img>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "center" } }}>
                <Box className='button-group-nav'>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="default"
                    aria-label="secondary tabs example"
                  >
                    <Tab value="Home" label={<span className='tab-span'>Home</span>} />
                    <Tab value="Buy" label={<span className='tab-span'>Buy</span>} />
                    <Tab value="Rent" label={<span className='tab-span'>Rent</span>} />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Tab value="Agents" label={<span className='tab-span'>Agents</span>} />
                    <Tab value="Agencies" label={<span className='tab-span'>Agencies</span>} />
                    <Tab value="Projects" label={<span className='tab-span'>Projects</span>} />
                  </Tabs>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <div className='add-property'>
                  <Button variant="contained" className="add-property-button">
                    <AddIcon />
                    Add Property
                  </Button>
                </div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  )
}

export default NavBar



