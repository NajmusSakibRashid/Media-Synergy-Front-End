"use client";

import { useState } from "react";
import PublishButton from "@/app/components/utilities/publish-button";
import DeleteButton from "@/app/components/utilities/delete-button";

export default function Content({ children }) {
  const [show, setShow] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <div
      onClick={() => (window.location.href = `/user/contents/${children._id}`)}
      className="card w-full h-96 bg-base-200 hover:bg-base-300"
    >
      {children && children.media && children.media.length && (
        <img
          src={
            children.media[0].length
              ? children.media[0]
              : "https://via.placeholder.com/150"
          }
          className="p-4 h-40 w-full object-cover"
        />
      )}
      <div className="card-title p-4">{children.title}</div>
      <div className="card-body overflow-hidden">{children.description}</div>
      {/* <div className="card-action p-4 flex justify-center gap-8">
        <PublishButton>{children}</PublishButton>
        <DeleteButton setShow={setShow}>{children}</DeleteButton>
      </div> */}
    </div>
  );
}
