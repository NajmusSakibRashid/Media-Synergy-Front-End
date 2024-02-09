import React from "react";
import User from "@/app/components/user";
import ProfileBreifCard from "../components/profile-breif-card";
import ProfileHistory from "../components/profile-history";
import ContactInfoBreif from "../components/contact-info-breif";
import ProfileAnalytics from "../components/profile-analytics";
import ProfileSearchKeyword from "../components/profile-search-keyword";
import ProfileDetails from "../components/profile-details";
import ProfilePageStats from "../components/profile-page-stat";
import ProfilePageStatView from "../components/profile-pagestat-view";

export default function profilePage() {
  return (
    <div className="flex flex-row">
      <div className="basis-4/12 p-4 flex-grow-0 flex-shrink-0 flex flex-col gap-4">
        <ProfileBreifCard
          title="Lorem Ipsum Dolor"
          shopoth="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          img="https://imgscf.slidemembers.com/docs/1/1/303/startup_pitch_deck_presentation_format_302201.jpg"
          editLogoLink=""
          updateProfileLink=""
          publishProfileLink=""
        />
        <ProfileHistory editHistoryLink="" />
        <ContactInfoBreif />
        <ProfileAnalytics />
        <ProfileSearchKeyword 
          keywords={[
            "discount", 
            "sale", 
            "venturini", 
            "appleMacbook"]} 
        />
        <ProfilePageStatView
          title="Page Views"
        />
      </div>

      <div className="card card-bordered shadow-xl w-full">
        <div className="card-body">
          
          <ProfilePageStats
            totalLikes="25.6K"
            pageViews="2.6M"
            tasksDone="31"
          />
          <ProfileDetails />
        </div>

      </div>
    </div>
  );
}
