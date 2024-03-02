"use client";
import React, { useEffect, useState } from "react";


import ProfileCardContainer from "@/app/components/profile-card-container";
import ProfileCardDetails from "@/app/components/card-profile-details";

function ProfileDetails({ params }) {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/profile/${params.profileId}`;
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
                setProfile(response);
                console.log(response);
                console.log('profile', profile)
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
        <ProfileCardDetails profile={profile} />
    </div>
  );
}

export default ProfileDetails;


