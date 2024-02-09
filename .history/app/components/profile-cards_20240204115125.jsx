"use client";
import React from "react";

export default function ProfileCards({children}) {
  return (
    <div class="card w-full bg-base-100 shadow-xl h-full btn-ghost">
      <figure className="px-10 pt-10">
        <img src={children.logo} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{children.name}</h2>
        <p>{children.description.aboutUs.slice(0,100)+'...'}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = '/'
            }}
          >
            Visit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
