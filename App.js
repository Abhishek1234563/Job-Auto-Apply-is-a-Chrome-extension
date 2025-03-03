// import React, { useState, useEffect } from "react";
// import './index.css';

// const App = () => {
//   const [opcodes, setOpcodes] = useState([]);
//   const [address, setAddress] = useState("");
//   const [opcodeInput, setOpcodeInput] = useState("");
//   const [result, setResult] = useState("");
//   const [cpuCycles, setCpuCycles] = useState(0);

//   const [registers, setRegisters] = useState({
//     A: 0x00, B: 0x00, C: 0x00, D: 0x00,
//     E: 0x00, H: 0x00, L: 0x00, SP: 0xFFFF, PC: 0x0000
//   });

//   const [memory, setMemory] = useState(new Array(65536).fill(0));

//   useEffect(() => {
//     fetch("/808_opcodes.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setOpcodes(data);
//         console.log("Opcodes Loaded:", data);
//       })
//       .catch((err) => console.error("Error loading JSON", err));
//   }, []);

//   const executeOpcode = () => {
//     const addressVal = parseInt(address, 16);
//     const opcodeHex = opcodeInput.toUpperCase();

//     if (isNaN(addressVal) || addressVal < 0 || addressVal > 0xFFFF) {
//       setResult("Invalid Address!");
//       return;
//     }

//     const opcodeData = opcodes.find(op => op.opcode === opcodeHex);
//     if (!opcodeData) {
//       setResult("Invalid Opcode!");
//       return;
//     }

//     let newRegisters = { ...registers };
//     let newMemory = [...memory];

//     switch (opcodeData.mnemonic) {
//       case "MVI":
//         const register = opcodeData.operand.split(",")[0].trim();
//         newRegisters[register] = parseInt(opcodeData.bytes, 16);
//         setResult(`Loaded ${opcodeData.bytes} into ${register}`);
//         break;

//       case "MOV":
//         const [dest, src] = opcodeData.operand.split(",").map(s => s.trim());
//         newRegisters[dest] = newRegisters[src];
//         setResult(`Moved value from ${src} to ${dest}`);
//         break;

//       case "LDA":
//         newRegisters.A = newMemory[addressVal];
//         setResult(`Loaded value ${newMemory[addressVal].toString(16).toUpperCase()} into A`);
//         break;

//       case "STA":
//         newMemory[addressVal] = newRegisters.A;
//         setResult(`Stored A (${newRegisters.A.toString(16).toUpperCase()}) at ${address}`);
//         break;

//       default:
//         setResult(`Executed: ${opcodeData.mnemonic}`);
//     }

//     setCpuCycles(cpuCycles + (opcodeData.cycles || 4));
//     setRegisters(newRegisters);
//     setMemory(newMemory);
//   };
  

//   return (
//     <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold mb-4 text-blue-400">8085 Emulator</h1>

//       {/* Input Fields */}
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-96">
//         <label className="block mb-2 text-lg">Memory Address (Hex):</label>
//         <input 
//           type="text" 
//           value={address} 
//           onChange={(e) => setAddress(e.target.value)}
//           className="w-full p-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Ex: 2000"
//         />

//         <label className="block mt-4 mb-2 text-lg">Opcode (Hex):</label>
//         <input 
//           type="text" 
//           value={opcodeInput} 
//           onChange={(e) => setOpcodeInput(e.target.value)}
//           className="w-full p-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Ex: 3E"
//         />

//         <button 
//           onClick={executeOpcode} 
//           className="w-full mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-all text-white rounded-lg shadow-md"
//         >
//           Execute
//         </button>
//       </div>

//       {/* Execution Result */}
//       <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg w-96 text-lg">
//         <h2 className="text-xl font-semibold">Execution Result:</h2>
//         <p className="mt-2 text-blue-300">{result}</p>
//       </div>

//       {/* CPU Cycles */}
//       <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg text-lg">
//         CPU Cycles: <span className="font-bold text-blue-300">{cpuCycles}</span>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

import JobListPage from './pages/JobListPage';
import OptimizeResumePage from './pages/OptimizeResume';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
     
        <Route path="/jobs" element={user ? <JobListPage /> : <Navigate to="/login" />} />
        <Route path="/optimize" element={user ? <OptimizeResumePage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
