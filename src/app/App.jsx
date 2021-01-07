import React from "react";
import Layout from "./Layout";
import PortalProvider from "../portal";
import ThemeProvider from "../theme";

function App() {
  return (
    <ThemeProvider>
      <PortalProvider>
        <Layout />
      </PortalProvider>
    </ThemeProvider>
  );
}

export default App;
