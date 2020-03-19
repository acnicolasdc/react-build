import React from 'react';
import Main from './router';
import ThemeContext, { theme } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={theme.light}>
        <Main />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
