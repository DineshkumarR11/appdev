import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';


const BackgroundContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
}));

const BackgroundSVG = styled('svg')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
}));

const CardPaper = styled(Paper)(({ theme }) => ({
  position: 'relative', // Important for text overlay
  padding: 0, // Remove padding to allow full image display
  overflow: 'hidden', // Ensure the image doesn't overflow
  transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    '& .text-overlay': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay on hover
    },
  },
  borderRadius: '16px',
}));

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block', // Ensure the image takes up full width of the container
});

const TextOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
  color: 'white', // Brighter white color for the text
  padding: '20px',
  textAlign: 'center',
  borderRadius: 'inherit',
  transition: 'background-color 0.3s', // Smooth transition for background color on hover
}));

const MoodTracking = () => {
  return (
    <BackgroundContainer>
      
      <BackgroundSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#b3e5fc', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#grad1)" d="M0,256L60,224C120,192,240,128,360,138.7C480,149,600,235,720,240C840,245,960,171,1080,138.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>

        {/* Pebble-like cloud formations */}
        <circle cx="200" cy="100" r="40" fill="white" opacity="0.7" />
        <circle cx="250" cy="150" r="30" fill="#ccefff" opacity="0.8" />
        <circle cx="320" cy="80" r="50" fill="white" opacity="0.6" />
        <circle cx="400" cy="120" r="35" fill="#b3e5fc" opacity="0.9" />
        <circle cx="500" cy="160" r="25" fill="white" opacity="0.7" />
        <circle cx="600" cy="100" r="45" fill="#ccefff" opacity="0.5" />
        <circle cx="700" cy="180" r="35" fill="white" opacity="0.6" />
        <circle cx="800" cy="140" r="50" fill="#b3e5fc" opacity="0.9" />
        <circle cx="900" cy="120" r="40" fill="white" opacity="0.8" />
        <circle cx="1000" cy="150" r="30" fill="#ccefff" opacity="0.7" />
        <circle cx="1100" cy="100" r="50" fill="white" opacity="0.6" />
        <circle cx="1200" cy="130" r="35" fill="#b3e5fc" opacity="0.9" />
      </BackgroundSVG>
      <Typography variant="h4" align="center" gutterBottom>
        Mood Tracking Sections
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={5}>
          <Link to="/individual" style={{ textDecoration: 'none' }}>
            <CardPaper elevation={3}>
              <Image src="individual.jpg" alt="Individual" />
              <TextOverlay className="text-overlay">
                <Typography variant="h5" component="h2" sx={{color:'white'}}>
                  Individual
                </Typography>
                <Typography variant="body1" sx={{color:'white'}}>
                  Track your individual mood patterns and triggers.
                </Typography>
              </TextOverlay>
            </CardPaper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Link to="/couple" style={{ textDecoration: 'none' }}>
            <CardPaper elevation={3}>
              <Image src="couple.jpg" alt="Couple" />
              <TextOverlay className="text-overlay">
                <Typography variant="h5" component="h2" sx={{color:'white'}}>
                  Couple
                </Typography>
                <Typography variant="body1" sx={{color:'white'}}>
                  Monitor and improve your relationship together.
                </Typography>
              </TextOverlay>
            </CardPaper>
          </Link>
        </Grid>
      </Grid>
     
    </BackgroundContainer>
  );
};

export default MoodTracking;