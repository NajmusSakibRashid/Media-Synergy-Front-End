import React from "react";

const ContentImage = (ContentImage) => {
  return (
    <div className="relative">
      <button className="btn btn-neutral min-h-0 h-6 w-16 absolute bottom-[10%] right-[10%]">
        Edit
      </button>
      <img src={ContentImage} className="rounded-full" />
    </div>
  );
};

export default ContentImage;
