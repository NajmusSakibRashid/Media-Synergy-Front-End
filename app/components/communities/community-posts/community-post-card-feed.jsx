import React from "react";
import CommentBox from "./comment-box";

import { useState, useEffect } from "react";

const CommunityPostCardFeed = ({ post }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/communities/post/comment/${post._id}`;
      const token = localStorage.getItem("token");
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ comment: newComment }),
      };
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
      const data = await response.json();
      // Optionally, update the UI to display the newly added comment
      // You can append the new comment to the existing comments list
      console.log("New comment added:", data);

      setNewComment("Write a comment ...");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

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

          <details className="collapse bg-base-200">
            <summary className="collapse-title text-xl font-medium">
              <div className="text-primary justify-start">
                {post.comments.length}{" "}
                {post.comments.length !== 1 ? "comments" : "comment"}{" "}
                {/* Conditional rendering based on the number of comments */}
              </div>
            </summary>
            <div className="collapse-content">
              {post.comments.length == 0 && "No comments yet"}
              {post.comments.length > 0 && <CommentBox postId={post._id} />}
            </div>
          </details>

          <div>
            <textarea
              className="textarea textarea-primary w-3/5 m-2 h-12"
              placeholder="Write a comment..."
              value={newComment}
              onChange={handleCommentChange}
            ></textarea>
            <button
              className="btn btn-primary w-1/6 align-top m-2 h-12"
              onClick={handleCommentSubmit}
            >
              Comment
            </button>
            <button className="btn btn-primary w-1/6 align-top m-2 h-12">
              View Details
            </button>
          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostCardFeed;
