const StackDisplay = ({ memory, sp }) => {
    return (
      <div>
        <h2>Stack (Top 10 Entries)</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Address</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, (_, i) => sp + i * 2)
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
  
  export default StackDisplay;
  