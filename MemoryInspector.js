const MemoryInspector = ({ memory, inspectAddress, setInspectAddress }) => {
    const addr = parseInt(inspectAddress, 16) || 0;
    
    return (
      <div>
        <h2>Memory Inspector</h2>
        <input type="text" placeholder="Enter Address (Hex)"
          value={inspectAddress}
          onChange={(e) => setInspectAddress(e.target.value)} />
        
        <table border="1">
          <thead>
            <tr>
              <th>Address</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, (_, i) => addr + i)
              .filter(addr => addr < 0xFFFF)
              .map((addr) => (
                <tr key={addr}>
                  <td>{addr.toString(16).toUpperCase()}</td>
                  <td>{memory[addr].toString(16).toUpperCase()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MemoryInspector;  