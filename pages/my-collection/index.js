import React, { useState, useEffect } from "react";
import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import { reverseLookup, getAllDomains } from "@bonfida/spl-name-service";
import { useWallet } from "@solana/wallet-adapter-react";
import Navbar from "@/components/Navbar";
import axios from "axios";

/**
 * Page to see all books
 */
export default function Index() {
  const [name, setName] = useState(null);
  const wallet = useWallet();
  const connection = new Connection(
    "https://rpc.helius.xyz/?api-key=6ab23117-c35c-4e3c-94f2-1ec14d058d0d"
  );

  const fetchDomain = async () => {
    try {
      if (wallet.connected) {
        const domains = await getAllDomains(connection, wallet.publicKey);
        if (domains.length >= 1) {
          const domain = await reverseLookup(connection, domains[0]);
          setName(domain);
        }
      } else {
        await wallet.connect();
      }
    } catch (e) {
      console.error("an error occured.");
    }
  };
  const fetchNFTs = async () => {
    try {
      const pubkey = wallet.publicKey;
      const url = `https://api.helius.xyz/v0/addresses/${pubkey.toBase58()}/nfts?api-key=6ab23117-c35c-4e3c-94f2-1ec14d058d0d&pageNumber=1`;
      const { data } = await axios.get(url);
      console.log("Fetching NFTs...");
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchDomain();
  }, [wallet.connected]);

  return (
    <>
      {name && (
        <div className="my-collection">
          <div className="my-collection-title-container">
            <div className="my-collection-title">{name} Collection</div>
          </div>
        </div>
      )}
      {!name && <div className="loader">loading...</div>}
      <Navbar />
    </>
  );
}
