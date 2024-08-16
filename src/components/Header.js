import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { ExampleContext } from './context/ExampleContext';

const Header = () => {
  const { Userdetails, IsLoggedIn } = useContext(ExampleContext);
const navigate=useNavigate();
const handleOnClick=()=>{
    navigate('/');
}

  return (
    <AppBar position="sticky" style={{ background: 'black' }}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        <Button onClick={handleOnClick}>
        PeacePath
        </Button>

      </Typography>
      <Button color="inherit" component={Link} to="/why-peacepath">Why PeacePath?</Button>
      <Button color="inherit" component={Link} to="/features">Features</Button>
      <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
      {!IsLoggedIn ? (
        <>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
        </>
      ) : (
        <Box display="flex" alignItems="center">
          <AccountCircle sx={{ marginRight: '8px' }} />
          <Typography variant="h6" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
            {Userdetails?.userName}
          </Typography>
        </Box>
      )}
    </Toolbar>
  </AppBar>
  );
};

export default Header;
