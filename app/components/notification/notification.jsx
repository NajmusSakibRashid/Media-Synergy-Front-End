'use client'

import { useEffect, useState } from 'react'

export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [show, setShow] = useState(false);
  const [showCircle,setShowCircle]=useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);
    const eventSource = new EventSource(`${process.env.NEXT_PUBLIC_BACK_END}/user/notifications?token=bearer ${token}`);
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("we are here in the notification component");
      setNotifications(notifications=>[data,...notifications]);
      setShowCircle(true);
    }
    return () => {
      eventSource.close();
    }
  }, []);
  return (<div>
    <div className='btn btn-ghost relative' onClick={()=>{setShow(show=>!show);setShowCircle(false)}}>
      <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="" />
      <div className={`${showCircle?'block':'hidden'} bg-red-500 rounded-full absolute top-[10%] right-[10%] p-1`}></div>
    </div>
    <div className={`${show?'block':'hidden'} absolute top-full right-0 z-50`}>
      {
        notifications.slice(0,5).map((notification, index) => {
          return (
            <div key={index} className='flex'>
              <div className="notification bg-base-200 shadow-xl p-4 overflow-auto w-[50vw]">
                {JSON.stringify(notification)}
              </div>
              <button onClick={()=>{setNotifications(notifications=>notifications.splice(index,1))}} className='btn btn-error'> Remove</button>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}
