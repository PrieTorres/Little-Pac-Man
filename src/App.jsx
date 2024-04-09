import React from "react";
import "./App.scss";
import { GameScene } from "./pages/GameScene";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/Styles/theme";
import { GlobalStyles } from "./components/Styles/global-styles";

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
