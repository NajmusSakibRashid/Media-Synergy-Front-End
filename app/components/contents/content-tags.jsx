import React from "react";

const ContentTags = ({ tags }) => {
  return (
    <div className="flex gap-5">
      {tags.map((tag, index) => (
        <div key={index}>
          {/* <span>{tag}</span> */}
          <div className="badge badge-outline badge-primary">{tag}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentTags;
