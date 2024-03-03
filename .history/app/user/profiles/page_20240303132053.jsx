"use client";
import User from "@/app/components/user";
import LeftInfo from "@/app/components/left-info";
import UpComingContents from "@/app/components/upcoming-contents";
import CardButton from "@/app/components/card-button";
import DashBoardStats from "@/app/components/dashboard-stats";
import Acordion from "@/app/components/acordion";
import Profile from "@/app/components/profiles/profile";
import React, { useState, useEffect } from "react";

export default function UserPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/profile`;
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
    <div className='grid grid-cols-4 gap-4'>
      {
        profiles?.map((profile,index) => {
          return (
            <Profile>{profile}</Profile>
          )
        })
      }
    </div>
  );
}


