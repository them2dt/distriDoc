import "./teabutton.css";
import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function TeaButton({ buttonID, size }) {
  const identity = buttonID;
  useEffect(() => {
    if (size == "small") {
      document.getElementById(identity).style.width = "120px";
      document.getElementById(identity).style.height = "40px";
            //
      document.getElementById(identity).children[3].classList.add("button-1");
      document
        .getElementById(identity)
        .children[3].classList.remove("button-2");
      document
        .getElementById(identity)
        .children[3].classList.remove("button-3");
    }
    if (size == "medium") {
      document.getElementById(identity).style.width = "180px";
      document.getElementById(identity).style.height = "60px";
      //
      document.getElementById(identity).children[3].classList.remove("button-1");
      document
        .getElementById(identity)
        .children[3].classList.add("button-2");
      document
        .getElementById(identity)
        .children[3].classList.remove("button-3");
    }
    if (size == "large") {
      document.getElementById(identity).style.width = "240px";
      document.getElementById(identity).style.height = "80px";
      //
      document.getElementById(identity).children[3].classList.remove("button-1");
      document
        .getElementById(identity)
        .children[3].classList.remove("button-2");
      document
        .getElementById(identity)
        .children[3].classList.add("button-3");
    }
  }, []);

  const hoverCoverButton = () => {
    //border
    console.log(document.getElementById(identity).children[0]);
    console.log(document.getElementById(identity).children[1]);
    document.getElementById(identity).children[1].classList.add("active");
    document.getElementById(identity).children[0].classList.remove("active");
    //fill
    document
      .getElementById(identity)
      .children[2].classList.add("button-fill-active");
    //text
    document
      .getElementById(identity)
      .children[3].classList.add("button-text-active");
  };
  const unHoverCoverButton = () => {
    for (
      let i = 0;
      i < document.getElementById(identity).classList.length;
      i++
    ) {
      console.log("ID: " + document.getElementById(identity).classList[i]);
    }
    //border
    document.getElementById(identity).children[1].classList.remove("active");
    document.getElementById(identity).children[0].classList.add("active");
    //fill
    document
      .getElementById(identity)
      .children[2].classList.remove("button-fill-active");
    //text
    document
      .getElementById(identity)
      .children[3].classList.remove("button-text-active");
  };
  return (
    <motion.div
      className="button"
      id={identity}
      onMouseOver={hoverCoverButton}
      onMouseOut={unHoverCoverButton}
    >
      <motion.div className="button-border-1"></motion.div>
      <motion.div className="button-border-2"></motion.div>
      <motion.div className="button-fill"></motion.div>
      <motion.div className="button-text button-2">discover</motion.div>
    </motion.div>
  );
}
