function autoFillApplication() {
  chrome.storage.local.get(['userProfile', 'userResume'], (res) => {
    const profile = res.userProfile || { name: "John Doe", email: "johndoe@example.com" };
    const nameField = document.querySelector("input[name='name'], #name");
    const emailField = document.querySelector("input[name='email'], #email");
    const resumeField = document.querySelector("textarea[name='resumeText'], #resume-upload");
    if (nameField) nameField.value = profile.name;
    if (emailField) emailField.value = profile.email;
    if (resumeField) resumeField.value = res.userResume || "";
  });
}
window.autoFillApplication = autoFillApplication;
