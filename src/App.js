import React from 'react';
import Weather from './components/Weather';

const App = () => {
  const headerStyles = {
    textAlign: 'center',
    backgroundColor: '#007bff', 
    color: 'white', 
    padding: '10px', 
    margin: '0' 
  };

  return (
    <div>
      <h1 style={headerStyles}>Fullstack COMP3123 Labtest 2</h1>
      <h2 style={headerStyles}>Harlan Ferguson 101133838</h2>
      <Weather />
    </div>
  );
};

export default App;