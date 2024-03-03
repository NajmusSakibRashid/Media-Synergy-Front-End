'use client'
import { useEffect, useState } from 'react'

import PublishContent from '@/app/components/publish-content/publish-content';

export default function PublishButton({ children,platforms }) {
  const updateContent = () => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/${children._id}`;
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify({
        ...children,
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
  const publish = (e) => {
    if(!platforms||!platforms.length){
      alert('Please select at least one platform');
      return;
    }
    e.stopPropagation();
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content/publish`;
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        content: children._id,
        platforms,
      })
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        console.log(response);
        children.postIds = [...children.postIds, ...response.postIds];
        updateContent();
        alert(response.status==='success'?'Published successfully':'Failed to publish');
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }
  useEffect(() => {
    console.log(platforms);
  }, [platforms]);
  return (
    <>
      <button onClick={publish} className='btn btn-neutral w-32'>Publish</button>
    </>
  )
}
