import React from "react";

const ContentTextBox = ({ text , buttonName,description}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="card-title">{text}</h2>
        <button className="btn btn-neutral min-h-0 h-6 w-16">{buttonName}</button>
      </div>
      {description}
    </div>
  );
};

export default ContentTextBox;
