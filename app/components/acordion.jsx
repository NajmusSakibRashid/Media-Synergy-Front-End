"use client";
import { useState, useEffect } from "react";
import ProfileCardContainer from "@/app/components/profile-card-container";
import CardButtonContentContainer from "@/app/components/card-button-content-container";
import CommunityContainer from "@/app/components/card-button-community-container";

export default function Acordion() {
  const [radio, setRadio] = useState("profiles");
  const onValueChange = (e) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input
          onChange={onValueChange}
          value="profiles"
          type="radio"
          name="my-accordion-2"
          checked={radio === "profiles"}
        />
        <div className="collapse-title text-xl font-medium">Your Profiles</div>
        <div className="collapse-content flex flex-col items-center">
          <div className="grid grid-cols-3 gap-4">
            <ProfileCardContainer />
          </div>
          <button
            onClick={() => (window.location.href = "/user")}
            className="btn btn-neutral"
          >
            See All Profiles
          </button>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input
          onChange={onValueChange}
          value="contents"
          type="radio"
          name="my-accordion-2"
          checked={radio === "contents"}
        />
        <div className="collapse-title text-xl font-medium">Your Contents</div>
        <div className="collapse-content flex flex-col items-center">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <CardButtonContentContainer />
          </ul>
          <button
            onClick={() => (window.location.href = "/user/contents")}
            className="btn btn-neutral"
          >
            See All Contents
          </button>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input
          onChange={onValueChange}
          value="communities"
          type="radio"
          name="my-accordion-2"
          checked={radio === "communities"}
        />
        <div className="collapse-title text-xl font-medium">
          Your Communities
        </div>
        <div className="collapse-content flex flex-col items-center">
          <CommunityContainer />
          <button
            onClick={() => (window.location.href = "/user/communities")}
            className="btn btn-neutral"
          >
            See All Communities
          </button>
        </div>
      </div>
    </>
  );
}
