import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Loader() {
  const wallet = useWallet();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b600ee",
      },
    },
  });
  return (
    <div className="loader">
      {wallet.connected && (
        <ThemeProvider theme={theme}>
          <CircularProgress color="primary" size={100} />
        </ThemeProvider>
      )}
      {!wallet.connected && (
        <div className="loader-text">Connect your wallet first.</div>
      )}
    </div>
  );
}
