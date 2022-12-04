import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { FormProvider } from "./context";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FormProvider>
        <GlobalStyles />
        <App />
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>
);
