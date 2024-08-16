// src/components/LovingKindnessMeditation.js
import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const DetailContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const DetailPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2, 0),
  borderRadius: '12px',
  backgroundColor: '#e8f5e9',
}));

const LovingKindnessMeditation = () => {
  return (
    <DetailContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Loving-Kindness Meditation
      </Typography>
      <DetailPaper elevation={3}>
        <Typography variant="h6" component="h2" gutterBottom>
          What is Loving-Kindness Meditation?
        </Typography>
        <Typography variant="body1" paragraph>
          Loving-kindness meditation (Metta) is a practice where you focus on developing feelings of compassion and love towards yourself and others. It involves repeating phrases that express good wishes and intentions.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Benefits
        </Typography>
        <Typography variant="body1" paragraph>
          - Increases empathy and compassion
          - Reduces negative emotions
          - Enhances positive relationships
          - Promotes a sense of connection with others
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          How to Practice
        </Typography>
        <Typography variant="body1" paragraph>
          1. Sit comfortably and close your eyes.
          2. Begin by focusing on yourself and silently repeating phrases like “May I be happy, may I be healthy, may I be safe, may I live with ease.”
          3. Gradually extend these wishes to loved ones, acquaintances, and even those you have conflicts with.
          4. Allow the feelings of love and compassion to grow within you.
          5. Continue for 5-15 minutes or longer if desired.
        </Typography>
      </DetailPaper>
    </DetailContainer>
  );
};

export default LovingKindnessMeditation;
