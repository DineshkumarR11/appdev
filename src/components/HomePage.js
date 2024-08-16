import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper, Link as MuiLink, CssBaseline, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn, AccountCircle } from '@mui/icons-material';
import { ExampleContext } from './context/ExampleContext';
import FooterWeb from './Footer';
import Header from './Header';

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
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#444',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#333',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#555',
    },
  },
  palette: {
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const HeroContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
  backgroundImage: 'url("https://img.freepik.com/free-photo/medium-shot-friends-posing-together_23-2150947668.jpg?t=st=1722530752~exp=1722534352~hmac=00e65380d24b656443d17e49d036277f5e310352b5ddbd6519745136fe1fe350&w=1380")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.3)',
}));

const FeaturePaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: '10px', // Reduced padding
  overflow: 'hidden',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius:'25px',
  
  '& img': {
    width: '100%',
    height: '300px', // Adjust the height of the image
    objectFit: 'cover',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
    
  },
  '& .overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    textAlign: 'center',
    padding: '10px', // Reduced padding
    fontSize: '1rem', // Reduced font size
    textShadow: 'none',
    zIndex: 1,
  },
  '&:hover img': {
    transform: 'scale(1.1)',
    opacity: 0.9,
  },
  '& .overlay h2, & .overlay p': {
    color: '#ffffff',
    margin: 0,
  },
}));

const FeatureContainer = styled(Container)({
  padding: '32px 0', // Reduced padding to make the sections more compact
});


const Footer = styled('footer')(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: '#f5f5f5',
}));

const SocialMediaIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  '& > *': {
    margin: theme.spacing(1),
  },
}));

const FooterContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const TestimonialContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f5f5f5',
  borderTop: '1px solid #ddd',
}));

const ResourceContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const HomePage = () => {
  const { Userdetails } = useContext(ExampleContext);
  const { IsLoggedIn } = useContext(ExampleContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <HeroContent>
          <Container maxWidth="sm">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              showThumbs={false}
            >
              <div>
                <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
                  Welcome to PeacePath
                </Typography>
                <Typography variant="h5" align="center" color="inherit" paragraph>
                  Track and improve your mental well-being with our comprehensive monitoring tools.
                </Typography>
              </div>
              <div>
                <img src="new1.jpg" alt="Feature 1" />
                <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
                  Feature 1
                </Typography>
                <Typography variant="h5" align="center" color="inherit" paragraph>
                  Discover how this feature can benefit you and enhance your mental health journey.
                </Typography>
              </div>
              <div>
                <img src="b.jpg" alt="Feature 2" />
                <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
                  Feature 2
                </Typography>
                <Typography variant="h5" align="center" color="inherit" paragraph>
                  Learn about the advantages and unique aspects of this feature.
                </Typography>
              </div>
            </Carousel>
          </Container>
        </HeroContent>
        <FeatureContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Link to="/mood-tracking" style={{ textDecoration: 'none' }}>
                <FeaturePaper elevation={5} style={{ backgroundColor: '#e3f2fd' }}>
                  <img src="Mood.jpeg" alt="Mood Tracking" />
                  <div className="overlay">
                    <Typography variant="h5" component="h2">
                      Mood Tracking
                    </Typography>
                    <Typography variant="body1">
                      Track your mood daily to identify patterns and triggers.
                    </Typography>
                  </div>
                </FeaturePaper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Link to="/professional-support" style={{ textDecoration: 'none' }}>
                <FeaturePaper elevation={3} style={{ backgroundColor: '#ffebee' }}>
                  <img src="thir.jpeg" alt="Professional Support" />
                  <div className="overlay">
                    <Typography variant="h5" component="h2">
                      Professional Support
                    </Typography>
                    <Typography variant="body1">
                      Connect with mental health professionals for guidance and support.
                    </Typography>
                  </div>
                </FeaturePaper>
              </Link>
            </Grid>
          </Grid>
        </FeatureContainer>
        <TestimonialContainer>
          <Typography variant="h2" align="center" gutterBottom>
            Why PeacePath
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Hear from the experts on why PeacePath is the go-to solution for mental health tracking.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6" component="h3">
                  "PeacePath offers an unparalleled suite of tools for mental health monitoring."
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Dr. John Doe, Clinical Psychologist
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6" component="h3">
                  "A must-have app for anyone serious about their mental well-being."
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Dr. Jane Smith, Mental Health Expert
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </TestimonialContainer>
        <ResourceContainer>
          <Typography variant="h4" align="center" gutterBottom>
            Resources
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/mental-health-articles" style={{ textDecoration: 'none' }}>
                <FeaturePaper elevation={3} style={{ backgroundColor: '#fff3e0' }}>
                  <Typography variant="h6" component="h3">
                    Mental Health Articles
                  </Typography>
                  <Typography variant="body1">
                    Stay informed with the latest articles on mental health.
                  </Typography>
                </FeaturePaper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/meditation-techniques" style={{ textDecoration: 'none' }}>
                <FeaturePaper elevation={3} style={{ backgroundColor: '#e3f2fd' }}>
                  <Typography variant="h6" component="h3">
                    Meditation Techniques
                  </Typography>
                  <Typography variant="body1">
                    Learn various meditation techniques to help you relax and reduce stress.
                  </Typography>
                </FeaturePaper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/self-care-tips" style={{ textDecoration: 'none' }}>
                <FeaturePaper elevation={3} style={{ backgroundColor: '#e8f5e9' }}>
                  <Typography variant="h6" component="h3">
                    Self-Care Tips
                  </Typography>
                  <Typography variant="body1">
                    Discover tips for effective self-care and mental well-being.
                  </Typography>
                </FeaturePaper>
              </Link>
            </Grid>
          </Grid>
        </ResourceContainer>
      </main>
     
    </ThemeProvider>
  );
};

export default HomePage;
