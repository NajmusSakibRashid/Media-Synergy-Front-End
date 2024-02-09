'use client'
import ProfileCards from "@/app/components/profile-cards";
import { useState, useEffect } from 'react'

export default function profileCardContainer() {
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
    }
    fetchData();
  }, []);
  return (
    <div className="collapse collapse-arrow bg-base-200 rounded-none">
      <input type="radio" name="my-accordion-2" checked="checked" />
      <div class="collapse-title text-xl font-medium">
        Your Profiles
      </div>
      <div className="collapse-content grid grid-cols-3 gap-4">
        {
          profiles?.map(profile=><ProfileCards>{profile}</ProfileCards>)
        }
      </div>
    </div>
  )
}
