import React from "react";

const ContentCard = ({post_title, description, image}) => {
  return (
    <div>
      <div className="card shadow-xl bg-base-100 items-center p-4">
        <img
          src={image}
          alt=""
          className="w-full"
        />
        <div className="card-title">{post_title}</div>
        <div className="card-body p-4">
          {description}
        </div>
        <div className="card-actions whitespace-nowrap">
          <button
            className="btn btn-accent w-full btn-sm"
            onclick="document.getElementById('scheduling-form').style.display='block'"
          >
            Schedule
          </button>
          <button
            className="btn btn-accent w-full btn-sm"
            onclick="window.location.href='/src/pages/analytics_content.html'"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
