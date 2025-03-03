// src/pages/ProfilePage.js
import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box } from '@mui/material';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setProfile({ email: user.email, uid: user.uid });
    }
  }, []);
  
  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };
  
  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, mt: 8, borderRadius: 2, backgroundColor: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
          Your Profile
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            <strong>Email:</strong> {profile.email}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            <strong>User ID:</strong> {profile.uid}
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" color="secondary" onClick={handleLogout} size="large">
            Logout
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ProfilePage;
