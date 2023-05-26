import React, { useState } from 'react';

const App = () => {
  const [isBackgroundOn, setBackgroundOn] = useState(false);

  const handleToggle = () => {
    setBackgroundOn(!isBackgroundOn);
  };

  const backgroundColor = isBackgroundOn ? 'lightblue' : 'white';

  return (
    <div style={{ backgroundColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Toggle Background Color</h1>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default App;