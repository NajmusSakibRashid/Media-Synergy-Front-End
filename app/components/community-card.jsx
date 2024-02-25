import React, { useState } from "react";

const CommunityCard = ({ title, image, description, params }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="card card-compact w-64 bg-base-100 shadow-xl border h-80 mb-2 ms-2">
        <figure className="w-full max-w-full h-36">
          <img src={image} alt="image" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{showMore ? description : description.slice(0, 30)}</p>
          {description.length > 30 && (
            <button
              onClick={toggleShowMore}
              className="text-blue-500 hover:underline"
            >
              {showMore ? "See Less" : "See More"}
            </button>
          )}
          {/* <p>{description}</p> */}

          <div className="flex w-full flex-row justify-center">
            <div className="card-actions justify-center">
              <button className="btn btn-primary italic w-20" onClick={() => window.location.href = `/communities/${params._id}`}>Visit</button>
            </div>
            <div className="divider divider-horizontal"></div>

            <div className="card-actions justify-center">
              <button className="btn btn-accent italic w-20">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
