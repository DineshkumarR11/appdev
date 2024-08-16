import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, TextField, Slider } from '@mui/material';
import { styled } from '@mui/system';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MoodEntryPaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  marginTop: '20px',
  borderRadius: '16px',
  backgroundColor: '#f5f5f5',
}));

const ReminderPaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  marginTop: '20px',
  borderRadius: '16px',
  backgroundColor: '#e8f5e9',
}));

const DailyHabitsPaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  marginTop: '20px',
  borderRadius: '16px',
  backgroundColor: '#fffde7',
}));

const coupleQuestions = [
  { id: 1, question: "How are you feeling about your relationship today?", options: ["Very Bad", "Bad", "Neutral", "Good", "Very Good"], maxScore: 4 },
  { id: 2, question: "Did you communicate effectively with your partner?", options: ["No", "Yes"], maxScore: 1 },
  { id: 3, question: "Did you spend quality time together?", options: ["No", "Yes"], maxScore: 1 },
  { id: 4, question: "Did you resolve conflicts amicably?", options: ["No", "Yes"], maxScore: 1 },
  // Add more questions as needed
];

const reminders = [
  "Take a short walk together.",
  "Practice deep breathing for 5 minutes.",
  "Spend some time doing something you both enjoy.",
  "Reach out to a friend or family member.",
  "Take a break and stretch your bodies.",
  "Stay hydrated by drinking enough water.",
];

const CoupleMoodTracking = () => {
  const [responses, setResponses] = useState({});
  const [moodScore, setMoodScore] = useState(null);
  const [journalEntry, setJournalEntry] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);
  const [dailyReminder, setDailyReminder] = useState('');
  const [dailyHabits, setDailyHabits] = useState({
    waterIntake: 0,
    stepsWalkedTogether: 0,
    qualityTime: 0,
  });
  const [habitScore, setHabitScore] = useState(null);

  useEffect(() => {
    const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
    setDailyReminder(randomReminder);
  }, []);

  const handleResponseChange = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const handleHabitChange = (habit, value) => {
    setDailyHabits({ ...dailyHabits, [habit]: value });
  };

  const calculateMoodScore = () => {
    const maxTotalScore = coupleQuestions.reduce((sum, question) => sum + question.maxScore, 0);
    let totalScore = 0;

    coupleQuestions.forEach(question => {
      const responseValue = responses[question.id];
      if (responseValue !== undefined) {
        totalScore += parseInt(responseValue, 10);
      }
    });

    const normalizedScore = (totalScore / maxTotalScore) * 100;
    setMoodScore(normalizedScore);
    setMoodHistory([...moodHistory, normalizedScore]);
  };

  const calculateHabitScore = () => {
    const totalHabitScore = (dailyHabits.waterIntake / 10) * 20 + (dailyHabits.stepsWalkedTogether / 20) * 50 + (dailyHabits.qualityTime / 2) * 30;
    setHabitScore(totalHabitScore);
  };

  const handleSubmit = () => {
    calculateMoodScore();
    calculateHabitScore();
    // Additional logic for handling the responses (e.g., saving to database)
  };

  const moodData = {
    labels: moodHistory.map((_, index) => `Entry ${index + 1}`),
    datasets: [
      {
        label: 'Mood Score',
        data: moodHistory,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Couple Mood Tracking
      </Typography>
      <MoodEntryPaper elevation={3}>
        {coupleQuestions.map(question => (
          <FormControl component="fieldset" key={question.id} margin="normal" fullWidth>
            <FormLabel component="legend">{question.question}</FormLabel>
            <RadioGroup
              row
              name={`question-${question.id}`}
              value={responses[question.id] || ""}
              onChange={(e) => handleResponseChange(question.id, e.target.value)}
            >
              {question.options.map((option, index) => (
                <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
        ))}
        <TextField
          label="Journal Entry"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Submit
        </Button>
        {moodScore !== null && (
          <Typography variant="h6" component="h2" gutterBottom>
            Your Mood Score: {moodScore.toFixed(2)}
          </Typography>
        )}
      </MoodEntryPaper>
      {moodHistory.length > 0 && (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', borderRadius: '16px', backgroundColor: '#e3f2fd' }}>
          <Typography variant="h6" gutterBottom>
            Mood Trend
          </Typography>
          <Line data={moodData} />
        </Paper>
      )}
      <DailyHabitsPaper elevation={3}>
        <Typography variant="h6" gutterBottom>
          Track Your Daily Habits
        </Typography>
        <FormControl fullWidth margin="normal">
          <FormLabel>Water Intake (glasses)</FormLabel>
          <Slider
            value={dailyHabits.waterIntake}
            onChange={(e, value) => handleHabitChange('waterIntake', value)}
            step={1}
            marks
            min={0}
            max={10}
            valueLabelDisplay="auto"
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <FormLabel>Steps Walked Together (thousands)</FormLabel>
          <Slider
            value={dailyHabits.stepsWalkedTogether}
            onChange={(e, value) => handleHabitChange('stepsWalkedTogether', value)}
            step={1}
            marks
            min={0}
            max={20}
            valueLabelDisplay="auto"
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <FormLabel>Quality Time Spent Together (hours)</FormLabel>
          <Slider
            value={dailyHabits.qualityTime}
            onChange={(e, value) => handleHabitChange('qualityTime', value)}
            step={0.5}
            marks
            min={0}
            max={8}
            valueLabelDisplay="auto"
          />
        </FormControl>
        {habitScore !== null && (
          <Typography variant="h6" component="h2" gutterBottom>
            Your Habit Score: {habitScore.toFixed(2)}
          </Typography>
        )}
      </DailyHabitsPaper>
      <ReminderPaper elevation={3}>
        <Typography variant="h6" gutterBottom>
          Daily Reminder for Mental Wellness
        </Typography>
        <Typography variant="body1">{dailyReminder}</Typography>
      </ReminderPaper>
    </Container>
  );
};

export default CoupleMoodTracking;
