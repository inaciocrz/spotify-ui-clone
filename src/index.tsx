import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
