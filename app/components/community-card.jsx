import React from "react";

const CommunityCard = ({ title, image, description }) => {
  return (
    <div>
      <div className="card card-compact w-64 bg-base-100 shadow-xl border max-h-100">
        <figure className=" w-full h-auto max-w-full max-h-36">
          <img src={image} alt="image" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <br />
          <div className="card-actions justify-center">
            <button className="btn btn-primary italic">
              Visit this Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
