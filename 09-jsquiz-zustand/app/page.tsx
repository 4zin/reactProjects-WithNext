"use client";

import React from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import { useQuestionStore } from "./store/questions";
import Game from "./components/Game";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Home() {
  const questions = useQuestionStore((state) => state.questions);

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </ThemeProvider>
    </React.Fragment>
  );
}
