/* global chrome */
import React, { useState, useEffect } from 'react';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    chrome.storage.local.get("jobs", (result) => {
      if (result.jobs) setJobs(result.jobs);
    });
  }, []);

  return (
    <div className="job-listings">
      <h3>Job Listings</h3>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div key={index} className="job-item">
            <strong>{job.title}</strong> at {job.company}<br />
            <a href={job.link} target="_blank" rel="noreferrer">View Job</a>
          </div>
        ))
      ) : (
        <em>No job listings loaded yet.</em>
      )}
    </div>
  );
}

export default JobList;
