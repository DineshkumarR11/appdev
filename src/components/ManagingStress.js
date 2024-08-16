// ManagingStress.js
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

const ManagingStress = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ padding: '20px' }}>
        <Typography variant="h1" gutterBottom>
          Managing Stress
        </Typography>
        <Typography variant="body1" paragraph>
          Stress is a common experience for everyone, but managing it effectively can improve your quality of life. Here are some tips and techniques to help you manage stress effectively:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>1. Identify Stressors:</strong> Start by recognizing what causes you stress. Once you know what triggers your stress, you can take steps to address it.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>2. Practice Mindfulness and Relaxation Techniques:</strong> Techniques such as deep breathing, meditation, and progressive muscle relaxation can help calm your mind and reduce stress.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>3. Exercise Regularly:</strong> Physical activity can help reduce stress hormones and trigger the release of endorphins, which are natural mood lifters.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4. Maintain a Healthy Diet:</strong> Eating a balanced diet can positively impact your mood and energy levels. Avoid excessive caffeine and sugar.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>5. Get Adequate Sleep:</strong> Poor sleep can exacerbate stress. Aim for 7-9 hours of quality sleep each night.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>6. Connect with Others:</strong> Share your feelings with friends, family, or a support group. Talking about your stress can provide relief and offer different perspectives.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>7. Manage Your Time Effectively:</strong> Prioritize tasks and break them into smaller, manageable steps. Create a to-do list and set realistic goals.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>8. Take Breaks:</strong> Regular breaks during work or stressful activities can help you recharge and prevent burnout.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>9. Seek Professional Help:</strong> If stress becomes overwhelming, consider speaking with a mental health professional for guidance and support.
        </Typography>
        <Typography variant="body1" paragraph>
          Implementing these strategies can help you manage stress more effectively and enhance your overall well-being.
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default ManagingStress;
