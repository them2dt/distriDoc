import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Loader() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b600ee",
      },
    },
  });
  return (
    <div className="loader">
      <ThemeProvider theme={theme}>
        <CircularProgress color="primary" size={100} />
      </ThemeProvider>
    </div>
  );
}
