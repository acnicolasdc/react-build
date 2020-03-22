import React from 'react';
import Layout from './Layout';
import ThemeProvider from 'theme/index';

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
