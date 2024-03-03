import React, { useState } from "react";

const CommunityCard = ({ title, image, description, params, uid }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const isUserInCommunity =
    params && params.users && params.users.includes(uid);

  const isUserAdmin = params && params.admin && params.admin === uid;

  const leaveHandle = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACK_END}/communities/leave/${params._id}/${uid}`;
      const token = localStorage.getItem("token");
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
      };

      const response = await fetch(url, requestOptions);
      if (response.ok) {
        alert("Left Community Successfully");
        // Redirect to the community page
        window.location.href = `/communities`;
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error("Error leaving community:", error);
    }
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

  const joinHandle = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACK_END}/communities/join/${params._id}/${uid}`;
      const token = localStorage.getItem("token");
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
      };

      const response = await fetch(url, requestOptions);
      if (response.ok) {
        alert("Joined Community Successfully");
        // Redirect to the community page
        window.location.href = `/communities`;
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error("Error joining community:", error);
    }
  };

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl border h-80 mb-2 ms-2">
      <figure className="w-full max-w-full h-36">
        {/* <img src={image} alt="image" /> */}
        <img
          src={
            params &&
            params.image &&
            Array.isArray(params.image) &&
            params.image.length > 0 && params.image[0]!=''
              ? params.image[0]
              : image
          }
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {description && (
          <div className="text-center text-xs">
            <p>{showMore ? description : description.slice(0, 30)}</p>
            {description.length > 30 && (
              <button
                onClick={toggleShowMore}
                className="text-blue-500 hover:underline"
              >
                {showMore ? "See Less" : "See More"}
              </button>
            )}
          </div>
        )}

        <div className="flex w-full flex-row justify-center">
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary italic w-20"
              onClick={() =>
                (window.location.href = `/communities/${params._id}`)
              }
            >
              Visit
            </button>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="card-actions justify-center">
            {!isUserInCommunity ? (
              <button className="btn btn-accent w-20" onClick={joinHandle}>
                Join
              </button>
            ) : isUserAdmin ? (
              <button className="btn btn-error w-20" onClick={deleteHandle}>
                Delete
              </button>
            ) : (
              <button className="btn btn-error w-20" onClick={leaveHandle}>
                Leave
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
