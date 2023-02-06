import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ProfileItem({ BookCover, title, author, address }) {
  return (
    <div className="profile-item">
      <div className="profile-item-content">
        <div className="profile-item-cover">
          <Image src={BookCover} alt="book cover" width={180} />
        </div>
        <div className="profile-item-info">
          <div className="profile-item-info-left">
            <div className="profile-item-title">
              <p>{title}</p>
            </div>
            <div className="profile-item-author">
              <p>@{author}</p>
            </div>
          </div>
        </div>
        <div className="profile-item-button">
          <Link href={"/item"}>
            <button>
              <p>view</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
