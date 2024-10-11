import React from "react";
import TimeSlot from "./time-slot";

const Schedule = () => {
  const facebookIcon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png";
  const twitterIcon =
    "https://e7.pngegg.com/pngimages/421/879/png-clipart-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf.png";
  const linkedinIcon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png";
  const pinterestIcon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Google_Calendar_icon_%282020%29.svg/512px-Google_Calendar_icon_%282020%29.svg.png";
  const instagramIcon =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png";
  const tiktokIcon =
    "https://static-00.iconduck.com/assets.00/tik-tok-icon-1024x1024-zwq641op.png";
  const youtubeIcon =
    "https://static-00.iconduck.com/assets.00/youtube-icon-512x511-qrlabbtf.png";

  return (
    <div className="basis-8/12 p-4">
      <div
        className="h-screen overflow-scroll grid auto-rows-auto"
        style={{ width: "66vw", gridTemplateColumns: "repeat(25,8rem)" }}
      >
        {/* Days of the week */}
        <div></div>
        <TimeSlot time="08:00 AM" />
        <TimeSlot time="09:00 AM" />
        <TimeSlot time="10:00 AM" />
        <TimeSlot time="11:00 AM" />
        <TimeSlot time="12:00 PM" />
        <TimeSlot time="01:00 PM" />
        <TimeSlot time="02:00 PM" />
        <TimeSlot time="03:00 PM" />
        <TimeSlot time="04:00 PM" />
        <TimeSlot time="05:00 PM" />
        <TimeSlot time="06:00 PM" />
        <TimeSlot time="07:00 PM" />
        <TimeSlot time="08:00 PM" />
        <TimeSlot time="09:00 PM" />
        <TimeSlot time="10:00 PM" />
        <TimeSlot time="11:00 PM" />
        <TimeSlot time="12:00 AM" />
        <TimeSlot time="01:00 AM" />
        <TimeSlot time="02:00 AM" />
        <TimeSlot time="03:00 AM" />
        <TimeSlot time="04:00 AM" />
        <TimeSlot time="05:00 AM" />
        <TimeSlot time="06:00 AM" />
        <TimeSlot time="07:00 AM" />

        {/* Days of the week */}
        {[...Array(7)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="sticky left-0">{getDayOfWeek(index)}</div>
            {/* Add schedule items for each day */}
            {[...Array(24)].map((_, hourIndex) => (
              <div
                key={hourIndex}
                className="border-solid border-l-2 h-48 relative"
              >
                {/* Add ScheduleItem component here */}
                {renderRandomScheduleItem()}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const getDayOfWeek = (index) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[index];
};

const ScheduleItem = ({ avatarSrc, imageSrc, title, badgeText }) => {
  return (
    <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
      <div className="avatar absolute -top-4 -left-4 z-10">
        <div className="w-8 rounded-full">
          <img src={avatarSrc} alt="" />
        </div>
      </div>
      <img src={imageSrc} alt="" />
      <div className="card-title">{title}</div>
      <div className="badge badge-outline">{badgeText}</div>
      {/* Add more content or actions for the schedule item */}
    </div>
  );
};

const renderRandomScheduleItem = () => {
  // Condition to determine whether to render the schedule item
  const shouldRenderItem = Math.random() > 0.5; // Change the condition as needed

  // Sample data for a schedule item
  const sampleScheduleItem = {
    avatarSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    imageSrc:
      "https://png.pngtree.com/thumb_back/fw800/background/20220506/pngtree-datacenter-equipment-personnel-isometric-flowchart-with-generator-server-hardware-maintenance-administration-image_1290909.jpg",
    title: "Lorem Ipsum",
    badgeText: "Scheduled",
  };

  // Return null if the condition is not met, else return the ScheduleItem component
  return shouldRenderItem ? <ScheduleItem {...sampleScheduleItem} /> : null;
};

export default Schedule;
