import React from "react";
import User from "@/app/components/user";
import LeftInfo from "@/app/components/left-info";
import UpComingContents from "@/app/components/upcoming-contents";
import CardButton from "@/app/components/card-button";
import ProfileCards from "@/app/components/profile-cards";
import CollapsBoxTitle from "@/app/components/collaps-box-title";

export default function userPage() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/12 p-4 flex-grow-0 flex-shrink-0 flex flex-col gap-4">
        <User />
        <LeftInfo />
      </div>
      <div className="basis-8/12 p-4 flex-grow-0 flex-shrink-0">
        <div className="grid grid-cols-3 gap-4">
          <CardButton
            title="Build Profile"
            img="https://static.vecteezy.com/system/resources/previews/010/336/740/original/construction-icon-isolated-on-transparent-background-png.png"
            link="/src/pages/build-profile.html"
          />
          <CardButton
            title="Create Content"
            img="https://cdni.iconscout.com/illustration/premium/thumb/content-creator-ideate-the-content-8628582-6873876.png?f=webp"
            link="/src/pages/build-profile.html"
          />
          <CardButton
            title="Community Suggestions"
            img="https://cdn.pixabay.com/photo/2016/10/18/18/59/community-1751058_640.png"
            link="/src/pages/build-profile.html"
          />
        </div>

        <div className="collapse collapse-arrow bg-base-200 rounded-none">
          <CollapsBoxTitle title="Your Profiles" />
          <div className="grid grid-cols-3 gap-4">
            <ProfileCards
              profileTitle="Profile 1"
              profileImg="https://imgscf.slidemembers.com/docs/1/1/303/startup_pitch_deck_presentation_format_302201.jpg"
              profileDescription="This is a profile"
              profileLink="/src/pages/build-profile.html"
            />
            <ProfileCards
              profileTitle="Profile 2"
              profileImg="https://cdn.pixabay.com/photo/2016/10/18/18/59/community-1751058_640.png"
              profileDescription="This is a profile"
              profileLink="/src/pages/build-profile.html"
            />
            <ProfileCards
              profileTitle="Profile 1"
              profileImg="https://imgscf.slidemembers.com/docs/1/1/303/startup_pitch_deck_presentation_format_302201.jpg"
              profileDescription="This is a profile"
              profileLink="/src/pages/build-profile.html"
            />
            <ProfileCards
              profileTitle="Profile 2"
              profileImg="https://cdn.pixabay.com/photo/2016/10/18/18/59/community-1751058_640.png"
              profileDescription="This is a profile"
              profileLink="/src/pages/build-profile.html"
            />
          </div>
        </div>
      </div>

      <div className="basis-2/12 p-4 flex-grow-0 flex-shrink-0">
        <UpComingContents />
      </div>
    </div>
  );
}
