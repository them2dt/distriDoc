import * as React from "react";
//Web3
import { walletAdapterIdentity } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { Metaplex } from "@metaplex-foundation/js";
import Navbar from "@/components/bricks/navbar/Navbar";

//auction house address: D3231MBMP6fgqfWEArXJhw2YiWEK78rQFZYKZaqQTRdC
export default function Index() {
  const wallet = useWallet();

  const createAuctionHouse = async () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const metaplex = new Metaplex(connection);
    metaplex.use(walletAdapterIdentity(wallet));

    const auctionHouseSettings = await metaplex.auctionHouse().create({
      sellerFeeBasisPoints: 500, // 5% fee
      authority: metaplex.identity(),
      requireSignOff: true,
      canChangeSalePrice: true,
      hasAuctioneer: true, // to enable auctioneer
      auctioneerAuthority: metaplex.identity().publicKey,
    });
    console.log(auctionHouseSettings.auctionHouseAddress.toBase58());
    console.log(auctionHouseSettings);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Navbar />
      <button onClick={createAuctionHouse}>Click</button>
    </div>
  );
}
