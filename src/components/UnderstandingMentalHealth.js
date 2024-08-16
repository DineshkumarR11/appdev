// UnderstandingMentalHealth.js
import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
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

const UnderstandingMentalHealth = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ padding: '20px' }}>
        <Typography variant="h1" gutterBottom>
          Understanding Mental Health
        </Typography>
        <Typography variant="body1" paragraph>
          Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
        </Typography>
        <Typography variant="body1" paragraph>
          Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>Biological factors, such as genes or brain chemistry</li>
          <li>Life experiences, such as trauma or abuse</li>
          <li>Family history of mental health problems</li>
        </Typography>
        <Typography variant="body1" paragraph>
          Mental health problems are common but help is available. People with mental health problems can get better and many recover completely.
        </Typography>
        <Typography variant="body1" paragraph>
          Early Warning Signs: Not sure if you or someone you know is living with mental health problems? Experiencing one or more of the following feelings or behaviors can be an early warning sign of a problem:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>Eating or sleeping too much or too little</li>
          <li>Pulling away from people and usual activities</li>
          <li>Having low or no energy</li>
          <li>Feeling numb or like nothing matters</li>
          <li>Having unexplained aches and pains</li>
          <li>Feeling helpless or hopeless</li>
          <li>Smoking, drinking, or using drugs more than usual</li>
          <li>Feeling unusually confused, forgetful, on edge, angry, upset, worried, or scared</li>
          <li>Yelling or fighting with family and friends</li>
          <li>Experiencing severe mood swings that cause problems in relationships</li>
          <li>Having persistent thoughts and memories you can’t get out of your head</li>
          <li>Hearing voices or believing things that are not true</li>
          <li>Thinking of harming yourself or others</li>
          <li>Inability to perform daily tasks like taking care of your kids or getting to work or school</li>
        </Typography>
        <Typography variant="body1" paragraph>
          Mental health is important because it can help you to:
        </Typography>
        <Typography variant="body1" component="ul" paragraph>
          <li>Cope with the stresses of life</li>
          <li>Be physically healthy</li>
          <li>Have good relationships</li>
          <li>Make meaningful contributions to your community</li>
          <li>Work productively</li>
          <li>Realize your full potential</li>
        </Typography>
        <Typography variant="body1" paragraph>
          It’s important to remember that a person’s mental health can change over time, depending on many factors. When the demands placed on a person exceed their resources and coping abilities, their mental health could be impacted. For example, if someone is working long hours, caring for a relative, or experiencing economic hardship they may experience poor mental health.
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default UnderstandingMentalHealth;
