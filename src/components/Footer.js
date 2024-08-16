import React from 'react';
import { Grid, Typography, Box, Link as MuiLink, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/system';

// Styled components for Footer and SocialMediaIcons
const FooterContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const SocialMediaIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  '& > *': {
    margin: theme.spacing(1),
  },
}));

const FooterWeb = () => {
  return (
    <div>
      <FooterContainer maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About PeacePath
            </Typography>
            <Typography variant="body2" color="textSecondary">
              PeacePath is dedicated to helping you improve your mental well-being with comprehensive tools and professional support.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Navigation
            </Typography>
            <MuiLink href="/" color="inherit" variant="body2">
              Home
            </MuiLink>
            <br />
            <MuiLink href="/features" color="inherit" variant="body2">
              Features
            </MuiLink>
            <br />
            <MuiLink href="/contact" color="inherit" variant="body2">
              Contact Us
            </MuiLink>
            <br />
            <MuiLink href="/login" color="inherit" variant="body2">
              Login
            </MuiLink>
            <br />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <SocialMediaIcons>
              <IconButton href="https://www.facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://www.twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
            </SocialMediaIcons>
          </Grid>
        </Grid>
        <Box mt={5} textAlign="center">
          <MuiLink href="#" color="inherit">
            Privacy Policy
          </MuiLink>
          {' | '}
          <MuiLink href="#" color="inherit">
            Terms of Service
          </MuiLink>
        </Box>
      </FooterContainer>
    </div>
  );
};

export default FooterWeb;
