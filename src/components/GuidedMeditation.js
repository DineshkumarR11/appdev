// src/components/GuidedMeditation.js
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
  backgroundColor: '#ffebee',
}));

const GuidedMeditation = () => {
  return (
    <DetailContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Guided Meditation
      </Typography>
      <DetailPaper elevation={3}>
        <Typography variant="h6" component="h2" gutterBottom>
          What is Guided Meditation?
        </Typography>
        <Typography variant="body1" paragraph>
          Guided meditation involves following along with a guide or teacher who provides verbal instructions to help you relax and focus. It often includes visualization techniques and specific guidance on how to meditate.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Benefits
        </Typography>
        <Typography variant="body1" paragraph>
          - Provides structured guidance for beginners
          - Helps in achieving deeper relaxation
          - Enhances focus and mindfulness
          - Can be tailored to specific goals (e.g., stress reduction, sleep improvement)
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          How to Practice
        </Typography>
        <Typography variant="body1" paragraph>
          1. Choose a guided meditation recording or app.
          2. Find a comfortable position and settle in.
          3. Listen to the guide and follow their instructions.
          4. Allow yourself to fully immerse in the experience.
          5. Reflect on the practice and its effects afterward.
        </Typography>
      </DetailPaper>
    </DetailContainer>
  );
};

export default GuidedMeditation;
