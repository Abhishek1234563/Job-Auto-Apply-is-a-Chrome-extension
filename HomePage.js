// src/pages/HomePage.js
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProfileIcon from '../components/ProfileIcon';

function HomePage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, mb: 2 }}>
        <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
          Job Auto-Apply
        </Typography>
        <ProfileIcon />
      </Box>
      <Box sx={{ mt: 2, textAlign: 'left' }}>
        <Typography variant="h5" color="textSecondary" sx={{ mb: 1 }}>
          Welcome to Job Auto-Apply!
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '1.1rem' }}>
          Our platform uses cutting-edge AI to match your resume with job listings and auto-fill applications with a single click.
        </Typography>
      </Box>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate('/jobs')}>
          View Job Listings
        </Button>
        <Button variant="outlined" color="primary" size="large" sx={{ ml: 2 }} onClick={() => navigate('/optimize')}>
          Optimize Resume
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
