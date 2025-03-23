# Job Auto-Apply Chrome Extension

## Overview

**Job Auto-Apply** is a Chrome extension designed to simplify the job application process for job seekers. The extension automates tedious tasks by:

- Aggregating job listings from multiple platforms (e.g., LinkedIn, Indeed) using content scripts.
- Optimizing resumes and cover letters through AI-powered analysis and matching (via the OpenAI API).
- Enabling one-click applications by auto-filling application forms with stored user data.

## Features

- **Job Listing Aggregation:**  
  - Scrapes job postings in real time from supported job sites using content scripts.
  - Displays and filters listings based on user-defined criteria (e.g., location, role).

- **AI-Powered Resume Matching:**  
  - Analyzes job descriptions to extract keywords and key skills.
  - Automatically updates user resumes and cover letters to match job requirements.

- **One-Click Applications:**  
  - Uses Chrome Extension APIs to auto-fill application forms with user profile data.
  - (Optional) Tracks application progress and interview schedules.

- **User Authentication:**  
  - Secure login and signup using Firebase.
  - Profile management via a dedicated profile page.

## Tech Stack

- **Chrome Extension (Manifest V3)**
- **React** (via Create React App) for the extension’s UI (popup and options)
- **Firebase** for user authentication
- **OpenAI API** for AI-powered resume matching
- **Background and Content Scripts** to perform scraping and auto-filling
- **Chrome Storage** for data persistence

## File Structure

