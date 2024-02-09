"use client";
import React from "react";

export default function ProfileBreifCard({
  title,
  shopoth,
  img,
  editLogoLink,
  updateProfileLink,
  publishProfileLink,
}) {
  return (
    <div className="card card-bordered p-2 shadow-xl items-center bg-base-200">
      <div className="avatar relative overflow-visible">
        <div className="w-24 rounded-full">
          <img src={img} alt="" />
          <div className="absolute bottom-0 left-1/2">
            <div
              className="btn btn-neutral min-h-0 h-6 whitespace-nowrap"
              onClick={() => {
                window.location.href = editLogoLink;
              }}
            >
              Edit Logo
            </div>
          </div>
        </div>
      </div>
      <div className="card-body p-0 w-full mt-4">
        <div className="card-title text-center flex justify-between">
          {title}
          <div className="card-actions">
            <div className="btn btn-neutral h-6 min-h-0">Edit</div>
          </div>
        </div>
        <div className="flex justify-between">
          {shopoth}
          <div className="card-actions">
            <div className="btn btn-neutral h-6 min-h-0">Edit</div>
          </div>
        </div>
        <div
          className="btn btn-neutral btn-sm w-[12rem] self-center"
          onClick={() => {
            window.location.href = updateProfileLink;
          }}
        >
          Update Your Profile
        </div>
        <div
          className="btn btn-success btn-sm w-[12rem] self-center"
          onClick={() => {
            window.location.href = publishProfileLink;
          }}
        >
          Publish Profile
        </div>
      </div>
    </div>
  );
}
