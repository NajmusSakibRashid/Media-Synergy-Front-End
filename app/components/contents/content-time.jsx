import React from "react";

const ContentTime = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <div>
        <h2 className="card-title">Time after posted:</h2>
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": { days } }}></span>
            </span>
            days
          </div>

          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 46 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTime;
