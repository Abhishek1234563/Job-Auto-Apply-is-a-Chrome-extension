import React, {useState,useEffect} from 'react';
function Preferences() {
    const [location, setLocation] = useState('');
    const [role, setRole] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
  
    useEffect(() => {
      chrome.storage.local.get('preferences', (res) => {
        if (res.preferences) {
          setLocation(res.preferences.location || '');
          setRole(res.preferences.role || '');
          setSalaryRange(res.preferences.salaryRange || '');
        }
      });
    }, []);
  
    const handleSave = () => {
      const prefs = { location, role, salaryRange };
      chrome.storage.local.set({ preferences: prefs });
      alert("Preferences saved!");
    };
  
    return (
      <div>
        <h3>Filter Preferences</h3>
        <label>Location: 
          <input value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>Role: 
          <input value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <label>Salary Range:
          <input value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} />
        </label>
        <button onClick={handleSave}>Save Preferences</button>
      </div>
    );
  }
  
  export default Preferences;