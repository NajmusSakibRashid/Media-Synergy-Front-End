'use client'

import {useEffect} from 'react'

export default function content({children}) {
  const publish=()=>{
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/publish`;
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body:JSON.stringify({
        content:children._id,
        platforms:['facebook','twitter','linkedin'],
      })
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        console.log(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }
  return (
    <div className="card w-full h-96 bg-base-300">
      <div className="card-title p-4">
        {children.title}
      </div>
      <div className="card-body overflow-hidden">
        {children.description}
      </div>
      <div onClick={publish} className="card-action p-4 flex justify-center"><button className='btn btn-neutral'>Publish</button></div>
    </div>
  )
}
