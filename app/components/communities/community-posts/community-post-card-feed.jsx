import React from "react";

const CommunityPostCardFeed = ({ post }) => {
  return (
    <div>
      <div className="card w-full mb-4 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
            </div>
          </div>
          <div>
            <h2 className="flex-row justify-end">Author: {post.author}</h2>
            <p>{post.date}</p>
          </div>
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content}</p>

          <div className="divider"></div>

          <div className="text-primary justify-start">
            {post.comments.length}{" "}
            {post.comments.length !== 1 ? "comments" : "comment"}{" "}
            {/* Conditional rendering based on the number of comments */}
          </div>
        
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Detailed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostCardFeed;
