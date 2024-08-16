// src/components/MindfulnessMeditation.js
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
  backgroundColor: '#e3f2fd',
}));

const MindfulnessMeditation = () => {
  return (
    <DetailContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Mindfulness Meditation
      </Typography>
      <DetailPaper elevation={3}>
        <Typography variant="h6" component="h2" gutterBottom>
          What is Mindfulness Meditation?
        </Typography>
        <Typography variant="body1" paragraph>
          Mindfulness meditation is a practice where you focus on being intensely aware of what you're sensing and feeling in the moment, without interpretation or judgment. It involves paying close attention to your thoughts, feelings, and bodily sensations.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Benefits
        </Typography>
        <Typography variant="body1" paragraph>
          - Reduces stress and anxiety
          - Improves emotional regulation
          - Enhances self-awareness
          - Increases concentration and attention
          - Promotes overall well-being
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          How to Practice
        </Typography>
        <Typography variant="body1" paragraph>
          1. Find a quiet and comfortable place to sit.
          2. Close your eyes and take a few deep breaths.
          3. Focus on your breath, observing each inhale and exhale.
          4. Notice any thoughts or sensations that arise, and gently bring your focus back to your breath.
          5. Continue for 5-10 minutes or longer if you prefer.
        </Typography>
      </DetailPaper>
    </DetailContainer>
  );
};

export default MindfulnessMeditation;
