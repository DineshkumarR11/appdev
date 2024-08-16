import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, TextField, Paper, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto'; // Importing Roboto font

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#3f51b5',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#3f51b5',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#666',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#333',
    },
  },
  palette: {
    primary: {
      main: '#ff5722', // Updated primary color
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const RegisterContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const RegisterPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '500px',
  boxShadow: theme.shadows[3],
}));

const InfoBox = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#e3f2fd',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  marginBottom: theme.spacing(4),
}));

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/postusers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
      } else {
        console.error('Registration failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <RegisterContainer>
          <div>
            <Typography variant="h1" component="h1" align="center" gutterBottom>
              Register
            </Typography>
            <InfoBox>
              <Typography variant="h6" component="h2">
                Create a new account to access all features
              </Typography>
              <Typography variant="body1">
                Join our community to track your mental health and access valuable resources.
              </Typography>
            </InfoBox>
            <RegisterPaper elevation={3}>
              <Typography variant="h5" component="h2" gutterBottom>
                Register
              </Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  required
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '16px' }}
                >
                  Register
                </Button>
              </form>
            </RegisterPaper>
          </div>
        </RegisterContainer>
      </main>
    </ThemeProvider>
  );
};

export default RegisterPage;
