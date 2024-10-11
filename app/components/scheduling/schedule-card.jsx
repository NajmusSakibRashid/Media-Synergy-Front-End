'use client'

import {useState,useEffect} from 'react'

import Content from '@/app/components/contents/content'

export default function ScheduleCard({children}) {
  const [content,setContent] = useState({});
  const deletes = async () => {
    const url=`${process.env.NEXT_PUBLIC_BACK_END}/user/content/schedule/${children._id}`;
    const token=localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        window.location.reload();
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }
  useEffect(() => {
    const url=`${process.env.NEXT_PUBLIC_BACK_END}/user/content/${children.content}`;
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
        setContent(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }, []);
  return (
    <div className='card bg-base-200'>
      <Content>{content}</Content>
      {children&&children.date&&<div>{children.date}</div>}
      <button onClick={deletes} className="btn btn-warning">Delete</button>
    </div>
  )
}
