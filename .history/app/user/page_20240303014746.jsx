"use client";
import User from "@/app/components/user";
import LeftInfo from "@/app/components/left-info";
import UpComingContents from "@/app/components/upcoming-contents";
import CardButton from "@/app/components/card-button";
import DashBoardStats from "@/app/components/dashboard-stats";
import Acordion from "@/app/components/acordion";
import React, { useState, useEffect } from "react";

export default function userPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/fetch-profile`;
    
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        setProfiles(response);
      }
      else {
        alert(promise.statusText);
      }
    };
    fetchData();
  }, [])

  

  return (
    <div className="flex flex-row">
      <div className="basis-2/12 p-4 flex-grow-0 flex-shrink-0 flex flex-col gap-4">
        <User />
        <LeftInfo profiles={profiles} />
      </div>
      <div className="basis-8/12 p-4 flex-grow-0 flex-shrink-0">
        <div className="p-4 grid grid-cols-3 gap-4">
          <CardButton
            title="Build Profile"
            img="https://static.vecteezy.com/system/resources/previews/010/336/740/original/construction-icon-isolated-on-transparent-background-png.png"
            link="/profile1/build-profile"
          />
          <CardButton
            title="Create Content"
            img="https://cdni.iconscout.com/illustration/premium/thumb/content-creator-ideate-the-content-8628582-6873876.png?f=webp"
            link="/user/create-content"
          />
          <CardButton
            title="Community Suggestions"
            img="https://cdn.pixabay.com/photo/2016/10/18/18/59/community-1751058_640.png"
            link="/communities"
          />
        </div>
        <Acordion />
      </div>
      <div className="basis-2/12 p-4 flex-grow-0 flex-shrink-0">
        <UpComingContents />
        <DashBoardStats />
        <DashBoardStats />
      </div>
    </div>
  );
}


