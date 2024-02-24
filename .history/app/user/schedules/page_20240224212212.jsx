'use client'

import {useState,useEffect} from 'react'

export default function page() {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    const url=`${process.env.NEXT_PUBLIC_BACK_END}/user/schedule`;
    const token=localStorage.getItem('token');
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
        setSchedules(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }, []);
  return (
    <div>page</div>
  )
}
