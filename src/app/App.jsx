import React from 'react';
import Main from './router';
import ThemeProvider from 'providers/theme';
import SessionProvider from 'providers/session';

function App() {
  return (
      <ThemeProvider>
        <SessionProvider>
          <Main />
        </SessionProvider>
      </ThemeProvider>
  );
}

export default App;
