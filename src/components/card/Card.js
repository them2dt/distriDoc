import React from "react";
import Image from "next/image";
import "./card.css"

export default function Card({ image, title, context }) {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={image} />
      </div>
      <div className="card-details">
        <div className="card-text">
          <div className="card-header header-2">{title}</div>
          <div className="card-context text">{context}</div>
        </div>
      </div>
    </div>
  );
}
