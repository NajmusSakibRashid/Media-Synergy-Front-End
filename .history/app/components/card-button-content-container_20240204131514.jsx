'use client'
import CardContent from '@/app/components/card-button-content'
import { useState, useEffect } from 'react'

export default function cardContentContainer() {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/profile`;
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
  }, []);
  return (
    <div className="collapse collapse-arrow bg-base-200 rounded-none">
      <input type="radio" name="my-accordion-2" checked="checked" />
      <div class="collapse-title text-xl font-medium">
        Your Contents
      </div>
      <div className="collapse-content grid grid-cols-3 gap-4">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {
            contents?.map(content => <CardContent>{content}</CardContent>)
          }
        </ul>
      </div>
    </div>
  )
}
