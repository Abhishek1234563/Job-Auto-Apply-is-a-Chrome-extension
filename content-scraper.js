function scrapeJobs() {
    const jobCards = document.querySelectorAll(".job-card-container, .result");
    const jobs = [];
    jobCards.forEach(card => {
      const title = card.querySelector(".job-title, h2")?.innerText?.trim();
      const company = card.querySelector(".company-name, .company")?.innerText?.trim();
      const link = card.querySelector("a")?.href;
      if (title && company && link) {
        jobs.push({ title, company, link });
      }
    });
    chrome.storage.local.get("jobs", (res) => {
      const existing = res.jobs || [];
      chrome.storage.local.set({ jobs: [...existing, ...jobs] });
    });
  }
  
  scrapeJobs();
  