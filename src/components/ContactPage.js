import React from 'react';
import { Typography, TextField, Button, Card, CardContent, CardActions } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CustomCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: '#fff',
  margin: theme.spacing(2),
  width: '100%',
  maxWidth: '600px',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}));

const ContactPage = () => {
  return (
    <Container>
      <Title variant="h1">Contact Us</Title>
      <Subtitle variant="h6">
        We would love to hear from you. Please reach out to us using the information below.
      </Subtitle>
      <CustomCard>
        <CardContent>
          <Typography variant="h5" component="div">
            PeacePath Support Team
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Email: support@peacepath.com
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Phone: (123) 456-7890
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Address: 123 PeacePath Lane, Wellness City, WP 45678
          </Typography>
        </CardContent>
      </CustomCard>

      <CustomCard>
        <CardContent>
          <Typography variant="h5" component="div">
            Send Us a Message
          </Typography>
          <ContactForm noValidate autoComplete="off">
            <TextField
              label="Your Name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Your Email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Subject"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Message"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              rows={4}
            />
            <CustomButton variant="contained" color="primary">
              Send Message
            </CustomButton>
          </ContactForm>
        </CardContent>
      </CustomCard>

      <CustomCard>
        <CardContent>
          <Typography variant="h5" component="div">
            Follow Us
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Stay connected through our social media channels:
          </Typography>
          <CardActions>
            <CustomButton variant="contained" color="primary" href="https://facebook.com" target="_blank">
              Facebook
            </CustomButton>
            <CustomButton variant="contained" color="primary" href="https://twitter.com" target="_blank">
              Twitter
            </CustomButton>
            <CustomButton variant="contained" color="primary" href="https://instagram.com" target="_blank">
              Instagram
            </CustomButton>
          </CardActions>
        </CardContent>
      </CustomCard>
    </Container>
  );
};

export default ContactPage;
