'use client'
import CardContent from '@/app/components/card-button-content'
import { useState, useEffect } from 'react'

export default function cardContentContainer() {
  const [contents, setContents] = useState([]);
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
        console.log(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }, []);
  return contents?.map((content,index) => {console.log(key);return <CardContent key={index}>{content}</CardContent>})

}
