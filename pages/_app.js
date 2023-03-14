import { Buffer } from "buffer";
global.Buffer = Buffer;

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  BackpackWalletAdapter,
  CoinbaseWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { useMemo } from "react";
import Head from "next/head";

import { SnackbarProvider } from "notistack";
import { styled } from "@mui/material";

import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/globals.css";
import "../styles/adapter.css";

import "../styles/home.css";
import "../styles/shop.css";
import "../styles/write.css";
import "../styles/my-collection.css";
import "../styles/reader.css";

import "../styles/navbar-mobile.css";
import "../styles/navbar-mobile.css";
import "../styles/my-collection-mobile.css";
import "../styles/reader-mobile.css";

const App = ({ Component, pageProps }) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint =
    "https://rpc.helius.xyz/?api-key=256baa19-0d74-4b32-a403-bbf83037df6a";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new BackpackWalletAdapter(),
      new CoinbaseWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  const StyledSnackbarProvider = styled(SnackbarProvider)`
    &.SnackbarItem-contentRoot {
      background-color: var(--white);
      color: var(--black);
      font-family: "Inter Tight SemiBold";
      font-size: 14px;
      border-radius: 10px;
    }

    &.SnackbarItem-contentRoot button {
      background-color: transparent;
      border: 0px solid var(--white);
      color: var(--black);
      font-family: "Inter Tight Regular";
      font-size: 16px;
      cursor: pointer;
    }
    &.SnackbarItem-contentRoot button:hover {
      color: var(--sign);
      transition-duration: 0.2s;
    }
    &.SnackbarItem-contentRoot button:not(:hover) {
      transition-duration: 0.2s;
    }
  `;
  return (
    <>
      <Head>
        <title>emptea library</title>
        <meta name="title" content="emptea library" />
        <meta name="description" content="The next generation of publishing." />
        <meta property="og:title" content="emptea library" />
        <meta property="og:description" content="The next generation of publishing." />
        <meta property="og:image" content="https://bafkreigj676jogw2kgxmnsbmja3akpiddccauzkqpy2ua366v64za6yzxi.ipfs.nftstorage.link/" />
        <meta property="og:url" content="library.emptea.xyz" />
      </Head>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <StyledSnackbarProvider autoHideDuration={10000}>
              <Component {...pageProps} />
            </StyledSnackbarProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;
