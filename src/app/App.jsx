import React from 'react';
import Layout from './Layout';
import ThemeProvider from 'providers/theme';
import SessionProvider from 'providers/session';

function App() {
  return (
      <ThemeProvider>
        <SessionProvider>
          <Layout />
        </SessionProvider>
      </ThemeProvider>
  );
}

export default App;
