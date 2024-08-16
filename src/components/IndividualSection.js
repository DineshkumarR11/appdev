import React from 'react';
import { Container, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Icon1 from '@mui/icons-material/Face';
import Icon2 from '@mui/icons-material/FitnessCenter';
import Icon3 from '@mui/icons-material/SelfImprovement';

const CurvedComponent = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginTop: '20px', // Increased space between the navbar and the component
  padding: '20px',
  background: 'linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%)',
  borderRadius: '0 0 50px 50px',
  boxShadow: theme.shadows[3],
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100px', // Reduced height for a smaller component
}));

const SubComponent = styled(Paper)(({ theme }) => ({
  padding: '10px', // Reduced padding for a smaller size
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  boxShadow: theme.shadows[2],
  textAlign: 'center',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const IndividualMoodTracking = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <CurvedComponent>
        <SubComponent onClick={() => handleNavigate('/mood-entry')}>
  <Icon1 />
</SubComponent>
        <SubComponent onClick={() => handleNavigate('/daily-habits')}>
          <Icon2 />
        </SubComponent>
        <SubComponent onClick={() => handleNavigate('/professional-support')}>
          <Icon3 />
        </SubComponent>
      </CurvedComponent>

      {/* Rest of the components like MoodEntryPaper, etc. */}
    </Container>
  );
};

export default IndividualMoodTracking;
