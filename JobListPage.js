/* global chrome */
import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, Button, Box, List, ListItem, ListItemText } from '@mui/material';

function JobListPage() {
  const [jobs, setJobs] = useState([]);
  
  const loadJobs = () => {
    if (window.chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get('jobs', (result) => {
        if (result && result.jobs) {
          setJobs(result.jobs);
        } else {
          setJobs([]);
        }
      });
    } else {
      const stored = JSON.parse(localStorage.getItem('jobs')) || [];
      setJobs(stored);
    }
  };
  
  const handleScrapeJobs = () => {
    if (window.scrapeJobs) {
      window.scrapeJobs();
      setTimeout(loadJobs, 2000);
    } else {
      alert('Scrape function not available on this page.');
    }
  };
  
  useEffect(() => {
    loadJobs();
  }, []);
  
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Job Listings
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="contained" onClick={handleScrapeJobs}>
            Refresh Job Listings
          </Button>
        </Box>
        {jobs.length === 0 ? (
          <Typography variant="body1">
            No job listings available. Visit a supported job site and try refreshing.
          </Typography>
        ) : (
          <List>
            {jobs.map((job, idx) => (
              <ListItem key={idx} divider>
                <ListItemText
                  primary={`${job.title} at ${job.company}`}
                  secondary={<a href={job.link} target="_blank" rel="noopener noreferrer">View Job</a>}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
}

export default JobListPage;
