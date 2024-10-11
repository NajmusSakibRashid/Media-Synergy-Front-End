import React from 'react';

function ScheduledItem({ imageUrl, cardTitle, scheduledTime }) {
  return (
    <div className="absolute top-0 left-0 card items-center shadow-xl w-32 bg-base-300">
      <div className="avatar absolute -top-4 -left-4 z-10">
        <div className="w-8 rounded-full">
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <img src={imageUrl} alt="" />
      <div className="card-title">{cardTitle}</div>
      {/* <div className="badge badge-outline">{scheduledTime}</div> */}
    </div>
  );
}

export default ScheduledItem;
