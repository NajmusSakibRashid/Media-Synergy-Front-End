'use client'

import {useState,useEffect} from 'react'

import Content from '@/app/components/contents/content'

export default function scheduleCard({children}) {
  const [content,setContent] = useState({});
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
    <div>
      <Content>{content}</Content>
    </div>
  )
}
