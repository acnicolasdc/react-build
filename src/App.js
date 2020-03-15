import React from 'react';
import Home from './pages/Home';
import AboutProduct from './pages/AboutProduct';
import ThemeContext, { theme } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={theme.light}>
        <AboutProduct />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
