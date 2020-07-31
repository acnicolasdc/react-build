import React from 'react';
import Layout from './Layout';
import ThemeProvider from '../theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
