'use client'

import {useState,useEffect} from 'react'
import Content from '@/app/components/contents/content'

export default function Page() {
  const [contents, setContents] = useState([])
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content`;
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
        setContents(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }, [])
  return (
    <div className='grid grid-cols-4 gap-4'>
      {
        contents?.map((content) => {
          return (
            <Content>{content}</Content>
          )
        })
      }
    </div>
  )
}
