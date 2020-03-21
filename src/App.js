import React from 'react';
import Main from './router';
import ThemeProvider from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
