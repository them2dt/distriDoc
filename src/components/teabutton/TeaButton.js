import "./teabutton.css";
import React from "react";
import { motion } from "framer-motion";

export default function TeaButton() {
  const hoverCoverButton = () => {
    document
      .getElementById("button-border-variant-inactive")
      .classList.remove("active");
    document
      .getElementById("button-border-variant-active")
      .classList.add("active");

      document.getElementById("button-text").style.color="#852100";
  };
  const unHoverCoverButton = () => {
    document
      .getElementById("button-border-variant-inactive")
      .classList.add("active");
    document
      .getElementById("button-border-variant-active")
      .classList.remove("active");
      document.getElementById("button-text").style.color="white";

  };
  return (
    <motion.div
      className="button"
      onMouseOver={hoverCoverButton}
      onMouseOut={unHoverCoverButton}
    >
      <motion.div className="button-border" id="button-border">
        <div className="" id="button-border-variant-active"></div>
        <div className="active" id="button-border-variant-inactive"></div>
      </motion.div>
      <motion.div className="button-fill" id="button-fill">
        <div className="button-text button-2" id="button-text">discover</div>
      </motion.div>
    </motion.div>
  );
}
