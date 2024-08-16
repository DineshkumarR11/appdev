// MeditationForBeginners.js
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

const MeditationForBeginners = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ padding: '20px' }}>
        <Typography variant="h1" gutterBottom>
          Meditation for Beginners
        </Typography>
        <Typography variant="body1" paragraph>
          Meditation is a powerful tool for reducing stress and improving mental well-being. If you’re new to meditation, here’s a detailed guide to help you start your practice effectively:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>1. Find a Quiet Space:</strong> Choose a quiet, comfortable place where you won’t be disturbed. This could be a dedicated meditation space or simply a quiet corner of your home.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>2. Set a Time Limit:</strong> Start with short sessions, such as 5-10 minutes, and gradually increase the duration as you become more comfortable with the practice.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>3. Choose a Comfortable Position:</strong> Sit in a comfortable position with your back straight. You can sit on a chair, cushion, or the floor, as long as you’re comfortable and can maintain a relaxed posture.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4. Focus on Your Breath:</strong> Close your eyes and bring your attention to your breath. Notice the sensation of the breath entering and leaving your body. If your mind wanders, gently bring your focus back to your breath.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>5. Use a Guided Meditation:</strong> If you’re new to meditation, using a guided meditation app or recording can be helpful. Many apps offer free guided sessions that can guide you through the practice.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>6. Be Kind to Yourself:</strong> It’s normal for your mind to wander during meditation. Don’t be hard on yourself. Gently redirect your focus back to your breath or the meditation guide.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>7. Develop a Routine:</strong> Consistency is key to developing a meditation practice. Try to meditate at the same time each day to build a habit.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>8. Explore Different Techniques:</strong> Experiment with different meditation techniques, such as mindfulness, loving-kindness, or body scan meditation, to find what works best for you.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>9. Reflect on Your Practice:</strong> After each session, take a moment to reflect on how you feel. Notice any changes in your mood or stress levels.
        </Typography>
        <Typography variant="body1" paragraph>
          Starting a meditation practice can be a transformative experience. With patience and consistency, you can enjoy the many benefits that meditation has to offer.
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default MeditationForBeginners;
