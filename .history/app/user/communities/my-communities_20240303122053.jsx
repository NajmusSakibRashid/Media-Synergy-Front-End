"use client";
import React, { useState, useEffect } from "react";
import Card from "@/app/components/community-card";

const MyCommunities = () => {
  const [myCommunities, setMyCommunities] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/communities/my_communities`;
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        console.log(response);  
        setMyCommunities(response);
      } else {
        alert(promise.statusText);
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

    fetchUserId();
    fetchData();
  }, []);

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel carousel-end rounded-box">
          {myCommunities.map((community, index) => (
            <div key={index}>
              <Card
                className="border-none"
                title={community.name}
                image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5fGVufDB8fDB8fHww"
                description={community.tagline}
                params={community}
                uid={userId}
              />
              {}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCommunities;
