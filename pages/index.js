import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import texture from "../assets/media/texture.png";
import banner_graphic from "../assets/media/banner-graphic.svg";
import bitcoin_graphic from "../assets/media/bitcoin-graphic.svg";
import solana_graphic from "../assets/media/solana-graphic.svg";
import ether_graphic from "../assets/media/ether-graphic.svg";

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
            <a href="/read">
              <button className="home-banner-button">Start</button>
            </a>
          </div>
          <div className="home-topic home-topic-ethereum">
            <div className="home-topic-background"></div>

            <div className="home-topic-title">Write</div>
            <a href="/write">
              <button className="home-banner-button">Start</button>
            </a>
          </div>
          <div className="home-topic home-topic-solana">
            <div className="home-topic-background"></div>

            <div className="home-topic-title">Shop</div>
            <a href="/shop">
              <button className="home-banner-button">Start</button>
            </a>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="texture"></div>
    </>
  );
}
