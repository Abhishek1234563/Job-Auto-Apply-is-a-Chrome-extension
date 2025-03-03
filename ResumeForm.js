// src/components/ResumeForm.js
/* global chrome */
import React, { useState } from 'react';

function ResumeForm() {
  const [resumeText, setResumeText] = useState('');
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setResumeText(event.target.result);
      setStatus('File loaded successfully.');
    };
    reader.onerror = () => setStatus('Error reading file.');
    reader.readAsText(file);
  };

  const saveResume = () => {
    chrome.storage.local.set({ userResume: resumeText }, () => {
      setStatus('Resume saved successfully.');
    });
  };

  return (
    <div className="resume-form">
      <h3>Upload Your Resume</h3>
      <input type="file" accept=".txt,.pdf,.doc,.docx" onChange={handleFileChange} />
      <p>Or paste your resume text below:</p>
      <textarea
        rows="8"
        cols="50"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your resume text here..."
      ></textarea>
      <br />
      <button onClick={saveResume}>Save Resume</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default ResumeForm;
//unchanged