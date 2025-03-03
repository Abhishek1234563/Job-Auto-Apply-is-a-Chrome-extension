Job Auto-Apply Chrome Extension


Job Auto-Apply is a Chrome extension designed to simplify the job application process for job seekers. The extension automates tedious tasks by:

Aggregating Job Listings:
Scraping job postings from multiple platforms (e.g., LinkedIn Jobs, Indeed) and displaying them in one place.

AI-Powered Resume Matching:
Analyzing job descriptions to identify key skills and keywords, then automatically updating user resumes and cover letters to better match job requirements using AI (via an external API such as OpenAI).

One-Click Applications:
Auto-filling job application forms on supported portals using stored user profiles, and tracking application progress and interview schedules.

Features
User Authentication:
Sign up, log in, and view user profiles using Firebase Authentication.

Job Listing Aggregation:

Content Script (content-scraper.js): Automatically scrapes job listings from pages that match specified URL patterns.
JobListPage: Displays scraped job listings and allows refreshing of data.
AI-Powered Resume Matching:

OptimizeResume Page: Users can input their resume and a job description. The background script sends a request to an AI API to optimize the resume.
Background Script (background.js): Handles AI calls to optimize resume content.
One-Click Applications:

Content Script (content-autofill.js): Automatically fills application forms on supported job portals using stored user data.
(Optional) Application Tracker: Can be implemented to track application status and interview schedules.
