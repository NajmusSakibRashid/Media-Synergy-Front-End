import React from 'react'
import ProfileCardContainer from "@/app/components/profile-card-container";
import CardButtonContentContainer from "@/app/components/card-button-content-container";

export default function acordion() {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Your Profiles
        </div>
        <div className="collapse-content grid grid-cols-3 gap-4">
          <ProfileCardContainer />
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Your Contents
        </div>
        <div className="collapse-content">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <CardButtonContentContainer />
          </ul>
        </div>
      </div>
    </>
  )
}
