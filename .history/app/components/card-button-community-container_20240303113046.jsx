import React, { useEffect, useState } from "react";
import CommunityCard from "./community-card-homepage";

const CardButtonCommunityContainer = () => {
  const [myCommunities, setMyCommunities] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/communities/my_communities`;
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, requestOptions);
        if (response.ok) {
          const data = await response.json();
          setMyCommunities(data);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error("Error fetching communities:", error);
        alert("Failed to fetch communities");
      }
    };

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
        // setLoading(false);
      }
    };

    fetchData();
    fetchUserId();
  }, []);

  const visibleCommunities = myCommunities.slice(0, 5);
  const remainingCommunities = myCommunities.slice(5);

  return (
    <div className="container flex-col grid grid-cols-3 gap-4">
      {visibleCommunities.map((community, index) => (
        <div key={index} className="">
          <CommunityCard
            className="border-none"
            title={community.name}
            image="https://img.freepik.com/free-vector/flat-international-human-solidarity-day-illustration_23-2149844029.jpg"
            description={community.tagline}
            params={community}
            uid={userId}
          />
        </div>
      ))}
      {remainingCommunities.length > 0 && (
        <div className="">
          <CommunityCard
            className="border-none opacity-30"
            title={`${remainingCommunities[0].name} and ${
              remainingCommunities.length - 1
            } more`}
            image="https://img.freepik.com/free-vector/flat-international-human-solidarity-day-illustration_23-2149844029.jpg"
            description="See all communities you are part of"
            params={remainingCommunities}
            uid={userId}
          />
        </div>
      )}
    </div>
  );
};

export default CardButtonCommunityContainer;
