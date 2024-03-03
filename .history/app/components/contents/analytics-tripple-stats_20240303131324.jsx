import React from "react";

const AnalyticsTripleStats = ({
  reactionCount,
  postViews,
  fanViews,
  storyViews,
}) => {
  return (
    <div className="stats rounded-none border-solid">
      <div className="stat w-44">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              // strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Reacts</div>
        <div className="stat-value text-primary">{reactionCount}</div>
        <div className="stat-desc">Likes and Other reactions</div>
      </div>
      <div className="stat w-48">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Post Reach</div>
        <div className="stat-value text-secondary">{postViews}</div>
        <div className="stat-desc">
          The number of times your Page s <br />
          post entered a person s screen.
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10622/10622977.png"
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div className="stat-value">{fanViews}</div>
        <div className="stat-title">Fan Views</div>
        <div className="stat-desc text-secondary">
          Story Views: {storyViews}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTripleStats;
