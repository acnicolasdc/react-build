import React from 'react';
import Layout from './Layout';
import ThemeProvider from '../theme';
import Main from './router';
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
