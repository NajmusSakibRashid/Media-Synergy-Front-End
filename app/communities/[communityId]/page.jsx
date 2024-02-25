"use client";
import React from "react";
import { useState, useEffect } from "react";
import CreateCommunityPost from "@/app/components/communities/create-community-post";

const communityPage = ({ params }) => {
  const [community, setContent] = useState(false);
  // const [show, setShow] = useState(false);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/communities/${params.communityId}`;
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    const fetchData = async () => {
      console.log(url);

      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        setContent(response);
      } else {
        alert(promise.statusText);
      }
    };
    fetchData();
  }, []);

  const { name, tagline, admin, users, posts } = community;

  return (
    <div>
      <div className="fixed bottom-0 left-0 top-0 hidden w-1/5 p-5 md:mt-20 lg:flex">
        {}hi
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
              <button className="btn btn-primary">View Posts</button>
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
          <CreateCommunityPost />
        </div>
        <p>Admin ID: {admin}</p>
        <p>Users:</p>
        <ul>
          {users && users.length > 0 ? (
            users.map((userId) => <li key={userId}>{userId}</li>)
          ) : (
            <li>No users</li>
          )}
        </ul>
        <p>Posts:</p>
        <ul>
        {posts && posts.length > 0 ? (
            posts.map((postId) => <li key={postId}>{postId}</li>)
          ) : (
            <li>No Posts</li>
          )}
        </ul>
      </div>
      <div className="fixed bottom-0 right-0 top-0 hidden w-1/5 p-5 md:mt-20 md:flex overflow-auto scroll-smooth">
        {}right
      </div>

      <br />
    </div>
  );
};

export default communityPage;
