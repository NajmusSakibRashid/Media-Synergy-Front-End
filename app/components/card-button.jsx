"use client";
import React from "react";

export default function CardButton({ title, img, link}) {
  return (
    <div
      className="card shadow-xl basis-1/3 p-4 gap-4 items-center btn-ghost"
      onClick={() => {window.location.href = link}}
    >
      <div className="card-title">{title}</div>
      <div className="body">
        <img
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}
