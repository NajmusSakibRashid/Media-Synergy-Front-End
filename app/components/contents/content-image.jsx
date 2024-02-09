import React from "react";

const ContentImage = (ContentImage) => {
  return (
    <div class="relative">
      <button class="btn btn-neutral min-h-0 h-6 w-16 absolute bottom-[10%] right-[10%]">
        Edit
      </button>
      <img src={ContentImage} class="rounded-full" />
    </div>
  );
};

export default ContentImage;
