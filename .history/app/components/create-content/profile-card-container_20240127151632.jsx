'use client'

import {useState,useEffect} from 'react'
import ProfileCard from '@/app/components/create-content/profile-card'

export default function profileCardContainer({onChange}) {
  const [profiles,seProfiles] = useState([])
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
        seProfiles(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }, [])
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        profiles?.map((profile) => {
          return (
            <ProfileCard onChange={onChange}>{profile}</ProfileCard>
          )
        })
      }
    </div>
  )
}
