import React from "react";

const SingleComment = ({ username, text }) => {
  return (
    <div className="border border-primary rounded-lg mb-2 p-2 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" // Changed strokeLinejoin to "round" for more rounded corners
        className="mr-4 mb-1 mt-1 ml-1"
      >
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v11l-4 4z"></path>
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v11l-4 4z"></path>
        <line x1="15" y1="10" x2="21" y2="10"></line> // First line
        <line x1="15" y1="14" x2="21" y2="14"></line> // Second line
        <line x1="15" y1="18" x2="21" y2="18"></line> // Third line
      </svg>

      <div>
        <h1 className="font-bold text-primary">{username}</h1>
        <h1 className="font-semibold">{text}</h1>
      </div>
    </div>
  );
};

export default SingleComment;
