import React from "react";

function ProfileCardsContent({ title, img, description }) {
  return (
    <div>
      <div className="card bg-base-100 profile border-2 border-base-100">
        <div className="card-body">
          <img src={img} alt="" className="rounded-xl max-h-16 object-cover" />
          <div className="card-title text-sm">{title}</div>
          <div className="card-body text-xs">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardsContent;
