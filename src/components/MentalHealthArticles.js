// MentalHealthArticles.js
import React from 'react';
import { Container, Typography, Grid, Paper, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Import Link for routing
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

const ArticleContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const ArticlePaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
  textDecoration: 'none',
  backgroundColor: '#e3f2fd',
}));

const articles = [
  {
    title: 'Understanding Mental Health',
    summary: 'An overview of mental health and its importance.',
    
    link: '/understanding-mental-health',
  },
  {
    title: 'Managing Stress',
    summary: 'Tips and techniques for managing stress effectively.',
   
    link: '/managing-stress',
  },
  {
    title: 'Meditation for Beginners',
    summary: 'A guide to start your meditation practice effectively.',
    
    link: '/meditation-for-beginners', // Updated link
  },
  
];

const MentalHealthArticles = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ArticleContainer>
        <Typography variant="h1" component="h1" align="center" gutterBottom>
          Mental Health Articles
        </Typography>
        <Typography variant="h5" component="p" align="center" gutterBottom>
          Explore our collection of articles on mental health.
        </Typography>
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Link to={article.link} style={{ textDecoration: 'none' }}>
                <ArticlePaper elevation={3}>
                  
                  <Typography variant="h5" component="h2">
                    {article.title}
                  </Typography>
                  <Typography variant="body1">
                    {article.summary}
                  </Typography>
                </ArticlePaper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </ArticleContainer>
    </ThemeProvider>
  );
};

export default MentalHealthArticles;
