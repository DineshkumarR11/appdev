import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Radio, RadioGroup, FormControlLabel, Paper } from '@mui/material';
import { Line } from 'react-chartjs-2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PeopleIcon from '@mui/icons-material/People';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WorkIcon from '@mui/icons-material/Work';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import IndividualMoodTracking from './IndividualSection';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const MoodEntryPage = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [weather, setWeather] = useState('');
  const [companion, setCompanion] = useState('');
  const [activity, setActivity] = useState('');
  const [energy, setEnergy] = useState('');  // Added state variable for energy levels
  const [stressors, setStressors] = useState(''); 
  const [moodScore, setMoodScore] = useState(null);
  const [data, setData] = useState({
    labels: ['Entry 1', 'Entry 2'], 
    datasets: [
      {
        label: 'Mood Trend',
        data: [null, null], 
        fill: false,
        backgroundColor: '#90caf9',
        borderColor: '#42a5f5',
      },
    ],
  });

  const navigate = useNavigate();  // Initialize navigate

  const handleMoodSubmit = () => {
    const score = journalEntry.length + weather.length + companion.length + activity.length;
    setMoodScore(score);

    setData(prevData => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: prevData.datasets[0].data.map((entry, index) => 
            entry === null ? score : index === 1 ? score : entry
          ),
        },
      ],
    }));
  };

  const SurveyCard = styled(Paper)(({ theme }) => ({
    padding: '10px',
    marginTop: '40px',
    marginBottom: '20px',
    width:'300px',
    borderRadius: '12px',
    backgroundColor: '#e3f2fd',
    textAlign: 'center',
    maxWidth: '400px',
  }));

  const SurveyImage = styled('img')({
    width: '80%',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '10px',
  });

  return (
    <Container>
      <IndividualMoodTracking/>
     
      <Typography variant="h5" align="center" gutterBottom>
        Journal Entry and Mood Questions
      </Typography>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          How is the weather?
        </Typography>
        <RadioGroup
          row
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        >
          <FormControlLabel 
            value="Sunny" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <WbSunnyIcon style={{ marginRight: 8 }} />
                Sunny
              </Box>
            }
          />
          <FormControlLabel 
            value="Cloudy" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <CloudIcon style={{ marginRight: 8 }} />
                Cloudy
              </Box>
            }
          />
          <FormControlLabel 
            value="Rainy" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <BeachAccessIcon style={{ marginRight: 8 }} />
                Rainy
              </Box>
            }
          />
          <FormControlLabel 
            value="Snowy" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <CloudIcon style={{ marginRight: 8 }} />
                Snowy
              </Box>
            }
          />
        </RadioGroup>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Who did you spend time with?
        </Typography>
        <RadioGroup
          row
          value={companion}
          onChange={(e) => setCompanion(e.target.value)}
        >
          <FormControlLabel 
            value="Alone" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <PeopleIcon style={{ marginRight: 8 }} />
                Alone
              </Box>
            }
          />
          <FormControlLabel 
            value="Family" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <FamilyRestroomIcon style={{ marginRight: 8 }} />
                Family
              </Box>
            }
          />
          <FormControlLabel 
            value="Friends" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <EmojiPeopleIcon style={{ marginRight: 8 }} />
                Friends
              </Box>
            }
          />
          <FormControlLabel 
            value="Coworkers" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <WorkIcon style={{ marginRight: 8 }} />
                Coworkers
              </Box>
            }
          />
        </RadioGroup>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          What did you do today?
        </Typography>
        <RadioGroup
          row
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <FormControlLabel 
            value="Work" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <WorkIcon style={{ marginRight: 8 }} />
                Work
              </Box>
            }
          />
          <FormControlLabel 
            value="Exercise" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <FitnessCenterIcon style={{ marginRight: 8 }} />
                Exercise
              </Box>
            }
          />
          <FormControlLabel 
            value="Relax" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <SpaIcon style={{ marginRight: 8 }} />
                Relax
              </Box>
            }
          />
          <FormControlLabel 
            value="Socialize" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <EmojiEmotionsIcon style={{ marginRight: 8 }} />
                Socialize
              </Box>
            }
          />
        </RadioGroup>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          How would you rate your energy levels today?
        </Typography>
        <RadioGroup
          row
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        >
          <FormControlLabel 
            value="High" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <FitnessCenterIcon style={{ marginRight: 8 }} />
                High
              </Box>
            }
          />
          <FormControlLabel 
            value="Medium" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <FitnessCenterIcon style={{ marginRight: 8 }} />
                Medium
              </Box>
            }
          />
          <FormControlLabel 
            value="Low" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <LocalHospitalIcon style={{ marginRight: 8 }} />
                Low
              </Box>
            }
          />
        </RadioGroup>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Did you face any significant stressors today?
        </Typography>
        <RadioGroup
          row
          value={stressors}
          onChange={(e) => setStressors(e.target.value)}
        >
          <FormControlLabel 
            value="Yes" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <WorkIcon style={{ marginRight: 8 }} />
                Yes
              </Box>
            }
          />
          <FormControlLabel 
            value="No" 
            control={<Radio color="primary" />} 
            label={
              <Box display="flex" alignItems="center">
                <SpaIcon style={{ marginRight: 8 }} />
                No
              </Box>
            }
          />
        </RadioGroup>
      </Box>

      <Box mt={4}>
        <TextField
          label="Journal Entry"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
        />
      </Box>

      <Box textAlign="center" mt={2}>
        <Button variant="contained" color="primary" onClick={handleMoodSubmit}>
          Submit
        </Button>
      </Box>

      {moodScore !== null && (
        <Box mt={4} textAlign="center">
          <Typography variant="h6">Mood Score: {moodScore}</Typography>
          <Box mt={2}>
            <Line data={data} />
          </Box>
        </Box>
      )}

      <SurveyCard 
        elevation={3}
        sx={{
          flex: 2,
          padding: '10px',
          marginTop: '29px',
          marginBottom: '20px',
          borderRadius: '12px',
          backgroundColor: '#e3f2fd',
          height: '50%',
          textAlign: 'center',
          maxWidth: '100%',
          margin: '0 auto',
        }}
      >
        <SurveyImage src="survey.jpg" alt="Mental Health Survey" />
        <Typography variant="body2" gutterBottom>
          Take the Mental Health Survey
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/questions')} 
          style={{ marginTop: '10px' }}
        >
          Start Survey
        </Button>
      </SurveyCard>
    </Container>
  );
};

export default MoodEntryPage;
