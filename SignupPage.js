import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, Link } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const navigate              = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container 
      maxWidth="xs" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#f0f2f5',
        padding: 2
      }}
    >
      <Paper 
        elevation={6} 
        sx={{ 
          p: 4, 
          borderRadius: 2, 
          width: '100%', 
          backgroundColor: '#ffffff'
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ color: '#333', fontWeight: 'bold' }}
        >
          Sign Up
        </Typography>
        {error && (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSignup} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              style: { color: '#333' }
            }}
            InputProps={{
              style: { color: '#333' }
            }}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              style: { color: '#333' }
            }}
            InputProps={{
              style: { color: '#333' }
            }}
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2, py: 1.5 }}
          >
            Sign Up
          </Button>
        </Box>
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ mt: 2, color: '#333' }}
        >
          Already have an account?{' '}
          <Link 
            href="/login" 
            underline="hover" 
            sx={{ color: '#007bff' }}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default SignupPage;
