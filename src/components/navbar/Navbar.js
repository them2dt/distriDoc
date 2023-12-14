import { faBox, faPlus, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navigation">
      <div className="navigation-button logo"></div>
      <div className="navigation-button">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="navigation-button">
        <FontAwesomeIcon icon={faBox} />
      </div>
      <div className="navigation-button">
        <FontAwesomeIcon icon={faWallet} />
      </div>
    </div>
  );
}
