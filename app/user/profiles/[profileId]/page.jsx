"use client";
import React, { useEffect, useState } from "react";


import ProfileCardContainer from "@/app/components/profile-card-container";
import ProfileCardDetails from "@/app/components/card-profile-details";

function ProfileDetails({ params }) {
    const [profiles, setProfiles] = useState({});
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
                console.log(response);
                console.log('profile', profiles)
            }
            else {
                alert(promise.statusText);
            }
        };
        fetchData();
    }
    , []);


  return (
    <div>
        {/* <ProfileCardContainer /> */}
        <ProfileCardDetails profiles={profiles} />
    </div>
  );
}

export default ProfileDetails;


