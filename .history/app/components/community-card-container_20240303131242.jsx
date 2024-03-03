import React from "react";
import CommunityCard from "./community-card"; // Assuming CommunityCard component is in a separate file
import { useState, useEffect } from "react";


const CardContainer = ({ communities }) => {
  const [userId, setUserId] = useState(null);

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
        // setLoading(false);
      }
    };
  
    fetchUserId();
  }, []);


  const image_url =
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5fGVufDB8fDB8fHww";
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold mt-3 ml-3">
          <p>Browse Communities</p>
        </h2>
      </div>
      <div className="justify-center p-4 grid grid-cols-3 gap-4">
        {communities?.map((community,index) => (
          <CommunityCard
          
            title={community.name}
            image={image_url} // Assuming the community object has an image property
            description={community.tagline} // Assuming the community object has a tagline property
            params={community}
            uid = {userId}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
