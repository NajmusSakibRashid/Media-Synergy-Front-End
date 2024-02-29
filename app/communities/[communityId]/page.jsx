"use client";

import React, { useState, useEffect } from "react";
import CreateCommunityPost from "@/app/components/communities/create-community-post";
import { comment } from "postcss";
import PostCard from "@/app/components/communities/community-posts/community-post-card-feed";
import Feed from "@/app/components/communities/community-posts/community-feed";
import CommunityFilterSearch from "@/app/components/communities/community-filter-search";
import { useRef } from "react";

const CommunityPage = ({ params }) => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const feedSectionRef = useRef(null);
  const [community, setCommunity] = useState(null);
  const [allPosts, setAllPosts] = useState(null);
  const [firstPost, setFirstPost] = useState(null);
  const [likeCounter, setLikeCounter] = useState(null); // Initialize likeCounter with 0

  const scrollToFeed = () => {
    feedSectionRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the feed section
  };

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const uidUrl = `${process.env.NEXT_PUBLIC_BACK_END}/user/getUserId`;
        const token = localStorage.getItem("token");
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
          method: "GET",
          headers: headers,
        };
        const response = await fetch(uidUrl, requestOptions);

        if (!response.ok) {
          throw new Error("Failed to fetch user ID");
        }
        const data = await response.json();
        setUserId(data.userId);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCommunity = async () => {
      try {
        const communityUrl = `${process.env.NEXT_PUBLIC_BACK_END}/user/communities/${params.communityId}`;

        const token = localStorage.getItem("token");
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
          method: "GET",
          headers: headers,
        };
        const communityResponse = await fetch(communityUrl, requestOptions);
        if (!communityResponse.ok) {
          throw new Error("Failed to fetch community");
        }

        const communityData = await communityResponse.json();
        setCommunity(communityData);

        if (communityData.posts && communityData.posts.length > 0) {
          const allPostsUrl = `${process.env.NEXT_PUBLIC_BACK_END}/communities/allPosts/${params.communityId}`;
          const allPostsResponse = await fetch(allPostsUrl, requestOptions);
          if (!allPostsResponse.ok) {
            throw new Error("Failed to fetch all posts");
          }
          const allPostsData = await allPostsResponse.json();
          setAllPosts(allPostsData);
        } else {
          console.log("No posts in this community");
        }

        // Fetch the first post
        if (communityData.posts && communityData.posts.length > 0) {
          const firstPostUrl = `${process.env.NEXT_PUBLIC_BACK_END}/communities/post/${communityData.posts[0]}`;
          const firstPostResponse = await fetch(firstPostUrl, requestOptions);
          if (!firstPostResponse.ok) {
            throw new Error("Failed to fetch first post");
          }
          const firstPostData = await firstPostResponse.json();
          setFirstPost(firstPostData);
          setLikeCounter(firstPostData.likes); // Set the like counter to the number of likes on the first post
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserId();
    fetchCommunity();
  }, [params.communityId]);

  const joinActions = async () => {
    try {
      const joinUrl = `${process.env.NEXT_PUBLIC_BACK_END}/communities/join/${params.communityId}/${userId}`;
      const token = localStorage.getItem("token");
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: headers,
      };
      const joinResponse = await fetch(joinUrl, requestOptions);
      if (!joinResponse.ok) {
        throw new Error("Failed to join community");
      }
      // Update the community state to reflect the user joining the community
      setCommunity({ ...community, users: [...community.users, userId] });
    } catch (error) {
      console.error("Error joining community:", error);
    }
  };

  const leaveActions = async () => {
    try {
      const leaveUrl = `${process.env.NEXT_PUBLIC_BACK_END}/communities/leave/${params.communityId}/${userId}`;
      const token = localStorage.getItem("token");
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: headers,
      };
      const leaveResponse = await fetch(leaveUrl, requestOptions);
      if (!leaveResponse.ok) {
        throw new Error("Failed to leave community");
      }
      // Update the community state to reflect the user leaving the community
      setCommunity({
        ...community,
        users: community.users.filter((uid) => uid !== userId),
      });
    } catch (error) {
      console.error("Error leaving community:", error);
    }
  };

  const handleLike = async () => {
    try {
      // Make a request to the backend to update the like count
      const likeUrl = `${process.env.NEXT_PUBLIC_BACK_END}/communities/post/like/${firstPost._id}`;
      const token = localStorage.getItem("token");
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: headers,
      };
      const likeResponse = await fetch(likeUrl, requestOptions);
      if (!likeResponse.ok) {
        throw new Error("Failed to update like count");
      }
      // Update the like counter state
      setLikeCounter(likeCounter + 1);
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  const { name, tagline, admin, users, posts } = community || {};
  const { title, content, communityOfPost, author, comments, likes, date } =
    firstPost || {};

  const isUserInCommunity =
    community && community.users && community.users.includes(userId);

  return (
    <div>
      <div className="fixed bottom-0 left-0 top-0 hidden w-1/5 p-5 md:mt-20 lg:flex">
        <CommunityFilterSearch />
      </div>
      <div className="min-h-screen w-full p-5 pb-2 pt-0 md:w-4/5 md:p-5 lg:mx-auto lg:w-3/5 bg-base-300 rounded-lg">
        {}
        {/* {params.communityId} */}
        {/* // json data show here */}
        {/* Your code here */}
        <div className=" rounded-lg bg-base-200 mb-0">
          <div className="hero-content flex-col rounded-lg mb-0">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{tagline}</p>
              <button className="btn btn-primary mr-3" onClick={scrollToFeed}>
                View Posts
              </button>
              {!isUserInCommunity ? (
                <button className="btn btn-accent" onClick={joinActions}>
                  {" "}
                  Join Community{" "}
                </button>
              ) : (
                <button className="btn btn-error" onClick={leaveActions}>
                  {" "}
                  Leave Community{" "}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="welcome-message">
          <h2 className="text-5xl font-bold inline">W</h2>
          <h2 className="text-2xl font-bold inline">elcome </h2>
          <h2 className="text-3xl font-serif inline">to:</h2>
          <h2 className="text-5xl font-bold mt-2 inline text-secondary">
            {" "}
            {name}
          </h2>
        </div>
        <div className="divider"></div>
        <p className="text-4xl font-semibold mb-2">What we do?</p>
        <p className="text-xl">
          {tagline && tagline.length > 50
            ? `${tagline.substring(0, 50)}...`
            : tagline}
          {tagline && tagline.length > 50 && (
            <a href="#" className="ml-2 text-blue-500">
              See more
            </a>
          )}
        </p>
        <div className="divider"></div>
        <div className="items-center justify-center flex-row">
          {/* <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              Create Post
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
            >
              <li>
                <a>
                  <CreateCommunityPost />
                </a>
              </li>
            </ul>
          </div> */}
          {/* <button className="btn-primary btn mb-2"> </button> */}
          <CreateCommunityPost 
            communityId={params.communityId}
          />
        </div>
        {/* <p>Admin ID: {admin}</p>
        <p>Users:</p>
        <ul>
          {users && users.length > 0 ? (
            users.map((uid) => <li key={uid}>{uid}</li>)
          ) : (
            <li>No users</li>
          )}
        </ul>
        ID of this user : {userId} */}

        <div ref={feedSectionRef}>
          {isUserInCommunity ? (
            <Feed posts={allPosts} />
          ) : (
            <p>You are not a member of this community.</p>
          )}
        </div>

        {/* <div ref={feedSectionRef}>
          
          <Feed posts={allPosts} />
        </div> */}
        {/* First post id:
        {firstPost && firstPost._id} */}
        {}
      </div>
      <div className="fixed bottom-0 right-0 top-0 hidden w-1/5 p-5 md:mt-20 md:flex overflow-auto scroll-smooth">
        {}right
        <br />
        <div className="w-full">
          {title}
          {content}
          {author}
          <br />

          <p>number of likes = {likes}</p>
          <p>number of likes = {likeCounter}</p>
        </div>
        <div className="align-middle float-left text-red-600">
          <br />
          <br />
          <br />
          <p>{date}</p>
        </div>
        <br />
        <div className="divider"></div>
        <div>
          <button className="btn btn-primary " onClick={handleLike}>
            Like
          </button>
        </div>
      </div>

      <br />
    </div>
  );
};

export default CommunityPage;
