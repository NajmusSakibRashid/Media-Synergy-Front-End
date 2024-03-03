import React, { useState } from "react";
import { useEffect } from "react";

const CommunityCardHomepage = ({ title, image, description, params }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl border h-80 mb-2 ms-2">
        <figure className="w-full max-w-full h-36">
          {/* <img src={image} alt="image" className="" /> */}
          <img
          src={
            params &&
            params.image &&
            Array.isArray(params.image) &&
            params.image.length > 0
              ? params.image[0]
              : image
          }
          />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title text-center">{title}</h2>

          {description && (
            <div className="text-center text-xs">
              <p className="text-center">
                {showMore ? description : description.slice(0, 30)}
              </p>
              {description.length > 30 && (
                <button
                  onClick={toggleShowMore}
                  className="text-blue-500 hover:underline"
                >
                  {showMore ? "See Less" : "See More"}
                </button>
              )}
            </div>
          )}

          <div className="flex w-full flex-row justify-center">
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary italic w-auto"
                onClick={() =>
                  (window.location.href = `/communities/${params._id}`)
                }
              >
                Visit Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCardHomepage;
