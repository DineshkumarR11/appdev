import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for enhanced visuals
const DoctorCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  borderRadius: '16px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
}));

const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const BookingStatusCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  borderRadius: '16px',
  backgroundColor: '#e8f5e9',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
}));

const availableTimes = {
  1: ['09:00 AM', '10:00 AM', '02:00 PM', '03:00 PM'],
  2: ['11:00 AM', '01:00 PM', '03:00 PM', '04:00 PM'],
  3: ['08:00 AM', '10:00 AM', '01:00 PM', '05:00 PM'],
  4: ['09:30 AM', '11:30 AM', '02:30 PM', '04:30 PM'],
  5: ['10:30 AM', '12:30 PM', '03:30 PM', '05:30 PM'],
  6: ['08:30 AM', '10:30 AM', '01:30 PM', '04:00 PM'],
};

const ProfessionalSupportPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const doctors = [
    { id: 1, name: 'Dr. Jane Smith', specialty: 'Psychiatrist' },
    { id: 2, name: 'Dr. John Doe', specialty: 'Therapist' },
    { id: 3, name: 'Dr. Gamer Davis', specialty: 'Counselor' },
    { id: 4, name: 'Dr. Michael Brown', specialty: 'Psychologist' },
    { id: 5, name: 'Dr. Angelina Jolie', specialty: 'Clinical Social Worker' },
    { id: 6, name: 'Dr. Robert Wilson', specialty: 'Addiction Specialist' },
    // Add more doctors as needed
  ];

  const handleClickDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedDoctor(null);
    setSelectedTime('');
    setAppointmentDate('');
  };

  const handleBookAppointment = () => {
    const appointmentData = {
      dName: selectedDoctor.name,
      dDate: appointmentDate,
      dTime: selectedTime,
      dType: selectedDoctor.specialty, // Assuming dType corresponds to the doctor's specialty
    };

    axios.post('http://localhost:8080/api/postdoctors', appointmentData)
      .then(response => {
        setBookingStatus(`Your appointment with ${selectedDoctor.name} on ${appointmentDate} at ${selectedTime} is pending approval.`);
        handleCloseDialog();
        
      })
      .catch(error => {
        console.error('Error booking appointment:', error);
        setBookingStatus('There was an error booking your appointment.');
      });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Professional Support
      </Typography>
      <Grid container spacing={4}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor.id}>
            <DoctorCard elevation={3} style={{ backgroundColor: '#e3f2fd' }} onClick={() => handleClickDoctor(doctor)}>
              <CardContent>
                <Typography variant="h6" color="primary">{doctor.name}</Typography>
                <Typography variant="body1" color="textSecondary">{doctor.specialty}</Typography>
              </CardContent>
            </DoctorCard>
          </Grid>
        ))}
      </Grid>
      {bookingStatus && (
        <BookingStatusCard>
          <Typography variant="h6" gutterBottom align="center" color="secondary">
            {bookingStatus}
          </Typography>
        </BookingStatusCard>
      )}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle style={{ backgroundColor: '#ffffff', color: '#1976d2' }}>Book an Appointment</DialogTitle>
        <DialogContentStyled>
          <Typography variant="h6" color="textPrimary">{selectedDoctor?.name}</Typography>
          <Typography variant="body1" color="textSecondary">{selectedDoctor?.specialty}</Typography>
          <TextField
            label="Select Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setAppointmentDate(e.target.value)}
            style={{ marginTop: '20px' }}
          />
          <Typography variant="subtitle1" style={{ marginTop: '20px', marginBottom: '10px' }}>Available Times:</Typography>
          {availableTimes[selectedDoctor?.id]?.map((time) => (
            <Button
              key={time}
              variant="outlined"
              fullWidth
              style={{
                marginBottom: '10px',
                borderColor: selectedTime === time ? '#1976d2' : '#ccc',
                color: selectedTime === time ? '#1976d2' : '#000',
              }}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          ))}
        </DialogContentStyled>
        <DialogActionsStyled>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleBookAppointment} color="primary">
            Book Appointment
          </Button>
        </DialogActionsStyled>
      </Dialog>
    </Container>
  );
};

export default ProfessionalSupportPage;
