'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function user() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user`;
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
        setUser(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }, [])
  return (
    <div className="card w-full bg-base-200 shadow-xl p-4">
      <img src='https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg' className='rounded-full' />
      <div className="card-body">
        <h2 className="card-title">{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    </div>
  )
}
