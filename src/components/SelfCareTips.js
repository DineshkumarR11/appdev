import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const TipsContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const TipsPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
}));

const SelfCareTips = () => {
  return (
    <TipsContainer>
      <TipsPaper>
        <Typography variant="h4" gutterBottom>
          Self-Care Tips
        </Typography>
        <Typography variant="body1" paragraph>
          Discover tips for effective self-care and mental well-being.
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="1. Prioritize Sleep: Ensure you get at least 7-8 hours of quality sleep each night." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Eat Balanced Meals: Maintain a balanced diet rich in fruits, vegetables, and proteins." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Exercise Regularly: Engage in physical activities like walking, jogging, or yoga." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Stay Hydrated: Drink plenty of water throughout the day." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. Practice Mindfulness: Incorporate mindfulness techniques such as meditation or deep breathing." />
          </ListItem>
          <ListItem>
            <ListItemText primary="6. Connect with Loved Ones: Spend time with family and friends to build strong social connections." />
          </ListItem>
          <ListItem>
            <ListItemText primary="7. Take Breaks: Allow yourself to take breaks and relax during your busy schedule." />
          </ListItem>
          <ListItem>
            <ListItemText primary="8. Pursue Hobbies: Engage in activities that you enjoy and that bring you happiness." />
          </ListItem>
          <ListItem>
            <ListItemText primary="9. Limit Screen Time: Reduce your exposure to screens, especially before bedtime." />
          </ListItem>
          <ListItem>
            <ListItemText primary="10. Seek Professional Help: Don't hesitate to reach out to mental health professionals if you need support." />
          </ListItem>
        </List>
      </TipsPaper>
    </TipsContainer>
  );
};

export default SelfCareTips;
