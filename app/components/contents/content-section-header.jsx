import React from "react";

const ContentSectionHeader = ({ header }) => {
  return (
    <div className="card-title text-4xl border-solid border-b-2 w-full">
      {header}
    </div>
  );
};

export default ContentSectionHeader;
