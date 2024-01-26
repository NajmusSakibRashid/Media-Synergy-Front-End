'use client'

import { useEffect, useState } from 'react'

export default function user() {
  const [userInfo, setUser] = useState({});
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
      console.log('we are here')
      const promise = await fetch(url, requestOptions);
      console.log(promise.status)
      if (promise.status == 200) {
        const response = await promise.json();
        console.log(response)
        setUser(response);
        console.log(userInfo)
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
      <div className="p-4">
        <h2 className="card-title">{userInfo?.user?.name}</h2>
        {/* <div>{userInfo?.user?.email}</div> */}
      </div>
    </div> 
  )
}
