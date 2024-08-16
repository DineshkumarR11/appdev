import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, TextField, Button, Paper, Box, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ExampleContext } from './context/ExampleContext';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'; // Corrected import

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const LoginButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(null); // For OAuth alerts
  const { IsLoggedIn, setIsLoggedIn } = useContext(ExampleContext);
  const { Userdetails, setUserdetails } = useContext(ExampleContext);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/api/getusers');
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log('Login successful:', user);
        setIsLoggedIn(true);
        setUserdetails(user);

        navigate('/');
      } else {
        console.log('Invalid email or password');
        setAlert(<Alert severity="error">Invalid email or password</Alert>);
        setOpen(true);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setAlert(<Alert severity="error">Error fetching users</Alert>);
      setOpen(true);
    }
  };

  const handleOAuthSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse?.credential);
      console.log('OAuth login successful:', decoded);
      setIsLoggedIn(true);
      setUserdetails(decoded);

      setAlert(<Alert severity="success">OAuth login successful!</Alert>);
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error("OAuth login failed:", error);
      setAlert(<Alert severity="error">OAuth login failed. Please try again.</Alert>);
      setOpen(true);
    }
  };

  const handleOAuthError = () => {
    console.log("OAuth login failed");
    setAlert(<Alert severity="error">OAuth login failed. Please try again.</Alert>);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setAlert(null);
  };

  useEffect(() => {
    console.log(Userdetails);
  }, [Userdetails]);

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper elevation={6}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmail}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassword}
            value={password}
          />
          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Sign In
          </LoginButton>

          <GoogleLogin
            onSuccess={handleOAuthSuccess}
            onError={handleOAuthError}
            style={{ width: '100%', marginTop: '10px' }}
          />

          <Box mt={2}>
            <Typography variant="body2">
              Don't have an account? <Link to="/register">Register</Link>
            </Typography>
          </Box>
        </form>
      </StyledPaper>

      <Snackbar open={open || alert} autoHideDuration={6000} onClose={handleClose}>
        {alert && (
          <Alert onClose={handleClose} severity={alert.props.severity}>
            {alert.props.children}
          </Alert>
        )}
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
