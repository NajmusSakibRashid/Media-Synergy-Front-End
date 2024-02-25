'use client'

import { useEffect, useState } from 'react'

export default function notification() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);
    const eventSource = new EventSource(`${process.env.NEXT_PUBLIC_BACK_END}/user/notifications?token=bearer ${token}`);
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("we are here in the notification component");
      setNotifications(notifications=>[data,...notifications]);
    }
    return () => {
      eventSource.close();
    }
  }, []);
  return (<div>
    <div className='btn btn-ghost relative'>
      <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="" />
      <div className="bg-red-500 rounded-full absolute top-[10%] right-[10%] p-1"></div>
    </div>
    <div className='absolute top-full right-0'>
      {
        notifications.slice(0,5).map((notification, index) => {
          return (
            <div className='flex'>
              <div key={index} className="notification bg-base-200 shadow-xl p-4">
                {JSON.stringify(notification)}
              </div>
              <button onClick={()=>{setNotifications(notifications=>notifications.splice(index,1))}} className='btn btn-warning'> Remove</button>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}
