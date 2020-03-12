import React from 'react';
import Home from './pages/Home';
import ThemeContext, { theme } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={theme.light}>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
