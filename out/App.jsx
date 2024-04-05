import React from "react";
import "./App.scss";
import { GameScene } from "./pages/GameScene";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { GlobalStyles } from "./components/styles/global-styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GameScene />
      </ThemeProvider>
    </div>
  );
}

export default App;
