import React from "react";
import "./infobox.css";
import TeaButton from "../teabutton/TeaButton";
import Image from "next/image";
import appcube_gh from "../../media/github-app-cube.png";
import { motion } from "framer-motion";

export default function Infobox() {
  return (
    <motion.div className="info-box">
      <motion.div className="info-text">
        <motion.div
          className="info-title header-1"
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
        >
          Open-source
        </motion.div>
        <motion.div
          className="info-context text"
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{
            duration: 0.2,
            delay: 0.4,
          }}
        >
          We believe in working together as a community.
          <br />
          Join our Github and get involved!
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{
            duration: 0.2,
            delay: 0.6,
          }}
        >
          <TeaButton buttonID={"button-infobox"} size={"small"} />
        </motion.div>
      </motion.div>
      <motion.div
        className="info-image"
        initial={{ opacity: 0, y: "-10px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{
          duration: 0.2,
          delay: 1,
        }}
      >
        <Image src={appcube_gh} />
      </motion.div>
    </motion.div>
  );
}
