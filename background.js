
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'optimizeResume') {
    optimizeResume(message.resumeText, message.jobDesc)
      .then(optimized => sendResponse({ optimizedResume: optimized }))
      .catch(err => sendResponse({ optimizedResume: message.resumeText }));
    return true; 
  }
});

async function optimizeResume(resumeText, jobDesc) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_OPENAI_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Rewrite the resume to emphasize skills for the following job description:\n${jobDesc}\n\nResume:\n${resumeText}\n\nOptimized Resume:`,
      max_tokens: 300,
      temperature: 0.7
    })
  });
  const data = await response.json();
  return data.choices[0].text.trim();
}
