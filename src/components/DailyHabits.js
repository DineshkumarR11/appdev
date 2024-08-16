import React, { useState } from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for a modern look with bluish-white colors
const HabitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#333', // Darker text for better contrast
  marginBottom: theme.spacing(2),
  borderRadius: '12px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  background: `linear-gradient(135deg, #e0f7fa, #ffffff)`, // Light bluish-white gradient
  border: '2px solid #000', // Black border around each card
}));

const DoneButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#b3e5fc', // Light blue button color
  color: '#01579b', // Darker blue text
  '&:hover': {
    backgroundColor: '#81d4fa', // Slightly darker blue on hover
  },
}));

const DailyHabits = () => {
  const [habits, setHabits] = useState({
    waterIntake: false,
    exercise: false,
    reading: false,
    meditation: false,
    sleep: false,
    healthyEating: false,
  });

  const handleHabitChange = (habit) => {
    setHabits((prev) => ({
      ...prev,
      [habit]: true,
    }));
  };

  const calculateScore = () => {
    return Object.values(habits).filter(Boolean).length * 10; // 10 points for each completed habit
  };

  const score = calculateScore();

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Daily Habits Tracker
      </Typography>
      <Grid container spacing={3}>
        {Object.keys(habits).map((habit) => (
          <Grid item xs={12} sm={6} md={4} key={habit}>
            <HabitCard>
              <Typography variant="h6" gutterBottom>
                {habit.charAt(0).toUpperCase() + habit.slice(1).replace(/([A-Z])/g, ' $1')}
              </Typography>
              <DoneButton
                variant="contained"
                onClick={() => handleHabitChange(habit)}
                disabled={habits[habit]}
              >
                {habits[habit] ? 'Done' : 'Mark as Done'}
              </DoneButton>
            </HabitCard>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={4}>
        <Typography variant="h6">Total Score: {score}</Typography>
      </Box>
    </Container>
  );
};

export default DailyHabits;
