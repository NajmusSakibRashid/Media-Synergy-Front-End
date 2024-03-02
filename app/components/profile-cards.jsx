"use client";
import React, { useState } from "react";

export default function ProfileCards({children}) {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="card card-compact w-64 bg-base-100 shadow-xl border h-auto mb-2 ms-2">
      <figure className="w-full max-w-full h-auto min-h-36">
        <img src={children.logo} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{children.name}</h2>
        <p>{showMore ? children.description.aboutUs : children.description.aboutUs.slice(0, 100)}</p>
        {children.description.aboutUs.length > 1 && (
          <button onClick={toggleShowMore} className="text-blue-500 hover:underline">
            {showMore ? "See Less" : "See More"}
          </button>
        )}
        {/* <p>{description}</p> */}
        {/* <p>{children.description.aboutUs.slice(0,100)+'...'}</p> */}
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = `/user/profiles/${children._id}`
            }}
          >
            Visit Profile
          </button>
        </div>
      </div>
    </div>
  );

  
}
