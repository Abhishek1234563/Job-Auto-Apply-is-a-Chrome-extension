/* global chrome */
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box } from '@mui/material';

function OptimizeResume() {
  const [resumeText, setResumeText] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [optimizedResume, setOptimizedResume] = useState('');
  const [status, setStatus] = useState('');
  
  const handleOptimize = () => {
    setStatus('Optimizing...');
    chrome.runtime.sendMessage(
      { type: 'optimizeResume', resumeText, jobDesc },
      (response) => {
        if (response && response.optimizedResume) {
          setOptimizedResume(response.optimizedResume);
          setStatus('Optimization complete.');
        } else {
          setStatus('Failed to optimize resume.');
        }
      }
    );
  };
  
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={6} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Optimize Your Resume
        </Typography>
        <TextField
          label="Your Resume"
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Job Description"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleOptimize}>
          Optimize Resume
        </Button>
        {status && (
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            {status}
          </Typography>
        )}
        {optimizedResume && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Optimized Resume:
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {optimizedResume}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default OptimizeResume;