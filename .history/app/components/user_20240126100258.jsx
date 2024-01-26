import React from 'react'
import Image from 'next/image'

export default function user() {
  const url=`${process.env.NEXT_PUBLIC_BACK_END}/user`;
  const token=localStorage.getItem('token');
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    
  }
  return (
    <div className="card w-full bg-base-200 shadow-xl p-4">
      <img src='https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg' className='rounded-full'/>

    </div>
  )
}
