import React from "react";

function ProfileCardsContent({ title, img, description }) {
  return (
    <div>
      <div class="card bg-base-100 profile border-2 border-base-100">
        <div class="card-body">
          <img src={img} alt="" class="rounded-xl max-h-16 object-cover" />
          <div class="card-title text-sm">{title}</div>
          <div class="card-body text-xs">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardsContent;
