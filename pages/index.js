import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";

export default function Index() {
  const wallet = useWallet();
  return (
    <>
      <div className="home">
        <motion.div
          className="home-banner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="home-banner-content">
            <div className="home-banner-background"></div>
            <div className="home-banner-text">
              <div className="home-banner-title">
                The next generation of publishing.
              </div>
              <div className="home-banner-subtext">
                Read, write and collect. All on emptea library.
              </div>
            </div>
          </div>
        </motion.div>
        <div className="home-topics">
          <motion.div
            className="home-topic home-topic-read"
            initial={{ opacity: 0, y: "-10px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <div className="home-topic-background"></div>

            <div className="home-topic-title">Read</div>
            <Link href="/my-collection">
              <button
                className="home-banner-button"
                disabled={!wallet.connected}
              >
                {wallet.connected && "start"}
                {!wallet.connected && "connect wallet"}
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="home-topic home-topic-write"
            initial={{ opacity: 0, y: "-10px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            <div className="home-topic-background"></div>

            <div className="home-topic-title">Write</div>
            <Link href="/write">
              <button
                className="home-banner-button"
                disabled={!wallet.connected}
              >
                {wallet.connected && "start"}
                {!wallet.connected && "connect wallet"}
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="home-topic home-topic-shop"
            initial={{ opacity: 0, y: "-10px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            <div className="home-topic-background"></div>

            <div className="home-topic-title">Shop</div>
            <Link href="/">
              <button className="home-banner-button" disabled>
                Coming soon
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Navbar />
      <div className="texture"></div>
    </>
  );
}
