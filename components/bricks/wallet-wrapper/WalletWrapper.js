import React from "react";
import { useMemo } from "react";
//@Solana/web3.js
import { clusterApiUrl } from "@solana/web3.js";
//@solana/wallet-adapter
import {
  BackpackWalletAdapter,
  BraveWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { WalletProvider } from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";

function WalletWrapper({ child }) {
  //set network to devnet
  const network = WalletAdapterNetwork.Devnet;
  //set RPC-endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // eslint-disable-next-line
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new BraveWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter(),
      new BackpackWalletAdapter(),
    ],
    // eslint-disable-next-line
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{child}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default WalletWrapper;