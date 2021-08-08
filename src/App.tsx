import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/style/theme";
import { Header } from "@/components/Header";
import { MainComponent } from "@/components/MainComponent";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainComponent />
    </ThemeProvider>
  );
};
export default App;
