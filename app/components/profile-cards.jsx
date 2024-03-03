"use client";
import React, { useState } from "react";

export default function ProfileCards({ children }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const deleteProfile = async (id) => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/profile/${id}`;
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };
    const deleteData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        alert("Profile Deleted");
        console.log(response);
      } else {
        alert(promise.statusText);
      }
    };
    await deleteData();
  };
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl border h-[24rem] mb-2 ms-2">
      <figure className="w-full max-w-full h-36">
        <img src={children.logo} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{children.name}</h2>
        <p>
          {showMore
            ? children.description.aboutUs
            : children.description.aboutUs.slice(0, 100)}
        </p>
        {children.description.aboutUs.length > 1 && (
          <button
            onClick={toggleShowMore}
            className="text-blue-500 hover:underline"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        )}
        {/* <p>{description}</p> */}
        {/* <p>{children.description.aboutUs.slice(0,100)+'...'}</p> */}
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = `/user/profiles/${children._id}`;
            }}
          >
            Visit
          </button>
          <button
            className="btn btn-primary"
            onClick={async () => {
              await deleteProfile(children._id);
              window.location.href = `/user`;
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
