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

          <div>
            <textarea
              className="textarea textarea-primary w-3/5 m-2 h-12"
              placeholder="write comment ..."
            >
              Comment Here
            </textarea>
            <button className="btn btn-primary w-1/6 align-top m-2 h-12">
              Comment
            </button>
            <button className="btn btn-primary w-1/6 align-top m-2 h-12">
              View Detailed
            </button>
          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostCardFeed;
