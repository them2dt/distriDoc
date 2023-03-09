import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function index() {
  return (
    <>
      <div className="home">
        <div className="home-banner">
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
        </div>
        <div className="home-topics">
          <div className="home-topic home-topic-bitcoin">
            <div className="home-topic-background"></div>

            <div className="home-topic-title">Read</div>
            <Link href="/my-collection">
              <button className="home-banner-button">Start</button>
            </Link>
          </div>
          <div className="home-topic home-topic-ethereum">
            <div className="home-topic-background"></div>

            <div className="home-topic-title">Write</div>
            <Link href="/write">
              <button className="home-banner-button">Start</button>
            </Link>
          </div>
          <div className="home-topic home-topic-solana">
            <div className="home-topic-background"></div>

            <div className="home-topic-title">Shop</div>
            <Link href="/shop">
              <button className="home-banner-button">Start</button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="texture"></div>
    </>
  );
}
