'use client'
import CardProfile from '@/app/components/card-button-profile'
import { useState, useEffect } from 'react'


export default function CardProfileContainer() {
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
    }, []);

    return profiles?.map((profile,index) => <CardProfile id={index} key=>{profile}</CardProfile>)
}