import React from "react";
import CommunityPostCardFeed from "./community-post-card-feed"; // Importing the PostCard component

const PostList = ({ posts }) => {
  return (
    <div>
      <p>Posts: {posts && posts.length}</p>
      <ul>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <li key={post._id}>
              <CommunityPostCardFeed post={post} />{" "}
              {/* Render the CommunityPostCardFeed component for each post */}
            </li>
          ))
        ) : (
          <li className="text-semibold p-3 justify-center text-3xl text-center italic bg-base-100 rounded-lg">
            No Posts Yet
          </li>
        )}
      </ul>
    </div>
  );
};

export default PostList;
