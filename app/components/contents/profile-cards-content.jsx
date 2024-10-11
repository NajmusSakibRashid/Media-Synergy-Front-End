'use client'
import { useState,useEffect } from "react";

function ProfileCardsContent({ children}) {
  const [profile,setProfiles]=useState(false)
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/profile/${children}`;
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
        setProfiles(response);
      } else {
        alert(promise.statusText);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <div>
      <div className="card bg-base-100 profile border-2 border-base-100">
        <div className="card-body">
          {profile&&profile.logo&&<img src={profile.logo} alt="" className="rounded-xl max-h-16 object-cover" />}
          <div className="card-title text-sm">{profile.name}</div>
          <div className="text-xs">{profile?.description?.aboutUs.slice(0,100)}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardsContent;
