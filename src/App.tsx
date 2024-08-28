// src/App.js

import React, { useState, useEffect } from "react";
import { ThemeProvider, Button, AppBar, Box, Container } from "@mui/material";
import { lightTheme, darkTheme } from "./Themes/theme";
import AppBAR from "./components/AppBar";
import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? savedMode : "dark";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Container >
        <AppBAR />
        <Home/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
