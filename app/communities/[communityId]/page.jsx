"use client";

import React, { useState, useEffect } from "react";
import CreateCommunityPost from "@/app/components/communities/create-community-post";
import { comment } from "postcss";
import PostCard from "@/app/components/communities/community-posts/community-post-card-feed";
import Feed from "@/app/components/communities/community-posts/community-feed";
import CommunityFilterSearch from "@/app/components/communities/community-filter-search";
import { useRef } from "react";
import ConfirmationPopup from "@/app/components/confirmation-popup";
import LoadingIcon from "@/app/components/utilities/loading-icon";

const CommunityPage = ({ params }) => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const imageUrl =
    "https://img.freepik.com/free-vector/multicultural-people-standing-together_74855-6583.jpg";

  // const [showPopup, setShowPopup] = useState(false);

  const feedSectionRef = useRef(null);
  const [community, setCommunity] = useState(null);
  const [allPosts, setAllPosts] = useState(null);
  const [firstPost, setFirstPost] = useState(null);
  const [likeCounter, setLikeCounter] = useState(null); // Initialize likeCounter with 0

  const scrollToFeed = () => {
    feedSectionRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the feed section
  };

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
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
          setLoading(false);
          const allPostsData = await allPostsResponse.json();
          setAllPosts(allPostsData);

          // Sort posts by date, latest first
          allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));

          // Set the state with sorted posts
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

  const manageCommunities = async () => {
    window.location.href = "/user/communities";
  };

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
  const confirmDialogStyle = {
    fontSize: "16px",
    color: "red",
    backgroundColor: "lightgray",
    border: "1px solid darkgray",
    borderRadius: "5px",
    padding: "10px",
  };

  const deleteHandle = async () => {
    // Add logic to handle deleting community
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/communities/${params._id}`;
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        alert("Community deleted successfully");
        window.location.href = "/user/communities";
      } else {
        alert(promise.statusText);
      }
    };
    fetchData();
  };

  const deleteActions = async () => {
    // setShowPopup(true);
    const result = window.confirm("Are you sure you want to proceed?");
    if (result) {
      // Code to execute if the user clicks "OK"
      console.log("User clicked OK");
      deleteHandle();
    } else {
      // Code to execute if the user clicks "Cancel" or closes the dialog
      console.log("User cancelled");
    }
  };

  const { name, tagline, admin, users, posts } = community || {};
  const { title, content, communityOfPost, author, comments, likes, date } =
    firstPost || {};

  const isUserInCommunity =
    community && community.users && community.users.includes(userId);

  const isUserAdmin =
    community && community.admin && community.admin === userId;

  return (
    <div className={confirmDialogStyle}>
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
            {/* {community && community.image && community.image.length && (
              <img
                src={
                  community.image[0].length != 0
                    ? community.image[0]
                    : "https://via.placeholder.com/150"
                }
                // className="p-4 h-40 w-full object-cover"
              />
            )} */}
            <img
              src={
                community &&
                community.image &&
                Array.isArray(community.image) &&
                community.image.length > 0
                  ? community.image[0]
                  : imageUrl
              }
              className="max-w-sm rounded-lg shadow-2xl"
            />

            <div>
              {/* {console.log(community.image)} */}
              {/* <img src="http://localhost:3030/a4163fc8f2c4be7243598386ec196668" alt="" /> */}
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{tagline}</p>
              <button className="btn btn-primary mr-3" onClick={scrollToFeed}>
                View Posts
              </button>
              {!isUserInCommunity ? (
                <button className="btn btn-accent" onClick={joinActions}>
                  Join Community
                </button>
              ) : (
                <>
                  {isUserAdmin ? (
                    <button
                      className="btn btn-ghost border-primary text-primary"
                      onClick={manageCommunities}
                    >
                      Manage My Communities
                    </button>
                  ) : (
                    <button className="btn btn-error" onClick={leaveActions}>
                      Leave Community
                    </button>
                  )}
                </>
              )}
              {/* {showPopup && (
                <ConfirmationPopup
                  message="Are you sure you want to proceed?"
                  // onConfirm={handleConfirm}
                  // onCancel={handleCancel}
                />
              )} */}
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
          {isUserInCommunity && (
            <div className="collapse bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-3xl font-semibold ">
                Create a Post?
              </div>
              <div className="collapse-content">
                <CreateCommunityPost communityId={params.communityId} />{" "}
              </div>
            </div>
            // <CreateCommunityPost communityId={params.communityId} />
          )}
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
        <div>
          <div className="flex border border-primary rounded-lg p-2 h-20 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 20 20"
              id="profile"
              className="mr-5 mb-1 mt-1 ml-1"
              stroke="currentColor"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill="#000" transform="translate(-140 -2159)">
                  <g transform="translate(56 160)">
                    <path d="M100.563 2017H87.438c-.706 0-1.228-.697-.961-1.338 1.236-2.964 4.14-4.662 7.523-4.662 3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338m-10.646-12c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4s-1.831 4-4.083 4c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364"></path>
                  </g>
                </g>
              </g>
            </svg>
            Number of Users in this Community: {users && users.length}
          </div>
          <div className="divider"></div>
          <div className="flex border border-primary rounded-lg p-1 h-12 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-4 mb-1 mt-1 ml-1"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="8" x2="21" y2="8"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="16" x2="21" y2="16"></line>
            </svg>
            Posts: {posts && posts.length}
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default CommunityPage;
