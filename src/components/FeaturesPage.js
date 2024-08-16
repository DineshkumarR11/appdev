import React from 'react';
import { Container, Grid, Paper, Typography, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto';

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
  color: '#333',
}));

const FeatureContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const FeaturePaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
  textDecoration: 'none',
}));

const features = [
  {
    title: 'Mood Tracking',
    description: 'Track your mood daily to identify patterns and triggers.',
    backgroundColor: '#e3f2fd',
  },
  {
    title: 'Professional Support',
    description: 'Connect with mental health professionals for support.',
    backgroundColor: '#ffebee',
  },
  {
    title: 'Progress Reports',
    description: 'Receive detailed reports to track your progress over time.',
    backgroundColor: '#e8f5e9',
  },
  {
    title: 'Meditation Techniques',
    description: 'Learn various meditation techniques to help you relax and reduce stress.',
    backgroundColor: '#fff3e0',
  },
  {
    title: 'Self-Care Tips',
    description: 'Discover tips for effective self-care and mental well-being.',
    backgroundColor: '#e1f5fe',
  },
  {
    title: 'Community Support',
    description: 'Join a community of like-minded individuals for mutual support.',
    backgroundColor: '#fce4ec',
  },
];

const FeaturesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <HeroContent>
          <Container maxWidth="sm">
            <Typography variant="h1" component="h1" gutterBottom>
              Features
            </Typography>
            <Typography variant="h5" component="p">
              Explore the features that help you monitor and improve your mental health.
            </Typography>
          </Container>
        </HeroContent>
        <FeatureContainer>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <FeaturePaper elevation={3} style={{ backgroundColor: feature.backgroundColor }}>
                  <Typography variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">
                    {feature.description}
                  </Typography>
                </FeaturePaper>
              </Grid>
            ))}
          </Grid>
        </FeatureContainer>
      </main>
    </ThemeProvider>
  );
};

export default FeaturesPage;
