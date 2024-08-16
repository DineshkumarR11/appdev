import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const TechniqueContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const TechniquePaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  textAlign: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: '12px',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const MeditationTechniques = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Meditation Techniques
      </Typography>
      <TechniqueContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <TechniquePaper elevation={3} style={{ backgroundColor: '#e3f2fd' }}>
              <Typography variant="h5" component="h2">
                Mindfulness Meditation
              </Typography>
              <Typography variant="body1" paragraph>
                Focus on the present moment and feelings without judgment.
              </Typography>
              <Link to="/meditation-techniques/mindfulness" style={{ textDecoration: 'none', color: '#ff5722' }}>
                Learn More
              </Link>
            </TechniquePaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TechniquePaper elevation={3} style={{ backgroundColor: '#ffebee' }}>
              <Typography variant="h5" component="h2">
                Guided Meditation
              </Typography>
              <Typography variant="body1" paragraph>
                Follow a guided meditation session to help you relax and focus your mind.
              </Typography>
              <Link to="/meditation-techniques/guided" style={{ textDecoration: 'none', color: '#ff5722' }}>
                Learn More
              </Link>
            </TechniquePaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TechniquePaper elevation={3} style={{ backgroundColor: '#e8f5e9' }}>
              <Typography variant="h5" component="h2">
                Loving-Kindness Meditation
              </Typography>
              <Typography variant="body1" paragraph>
                Cultivate feelings of love and compassion towards yourself and others.
              </Typography>
              <Link to="/meditation-techniques/loving-kindness" style={{ textDecoration: 'none', color: '#ff5722' }}>
                Learn More
              </Link>
            </TechniquePaper>
          </Grid>
        </Grid>
      </TechniqueContainer>
    </Container>
  );
};

export default MeditationTechniques;
