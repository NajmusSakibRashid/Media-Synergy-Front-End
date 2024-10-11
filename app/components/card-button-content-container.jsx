'use client'
import CardContent from '@/app/components/card-button-content'
import { useState, useEffect } from 'react'

export default function CardContentContainer() {
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
        setContents(response.slice(0,5));
        console.log(response);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
  }, []);
  return contents?.map((content,index) => <CardContent id={index} key={index}>{content}</CardContent>)
}
