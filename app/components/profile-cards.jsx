"use client";
import React from "react";

export default function ProfileCards({
  profileTitle,
  profileImg,
  profileDescription,
  profileLink,
}) {
  return (
    <div class="card w-full bg-base-100 shadow-xl h-full">
      <figure className="px-10 pt-10">
        <img src={profileImg} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{profileTitle}</h2>
        <p>{profileDescription}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = profileLink
            }}
          >
            Visit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
