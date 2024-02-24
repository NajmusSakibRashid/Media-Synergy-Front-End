'use client'

import {useState,useEffect} from 'react'

export default function page() {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    const url=`${process.env.NEXT_PUBLIC_BACK_END}/user/schedule`;
    
  }, []);
  return (
    <div>page</div>
  )
}
