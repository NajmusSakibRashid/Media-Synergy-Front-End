'use client'
import {useState,useEffect} from 'react'

export default function schedulehtmlForm({children,show,setShow}) {
  useEffect(()=>{
    console.log(show);
  },[show])
  return (
    <div id="scheduling-htmlForm" className={`${show?'block':'hidden'} z-40 fixed top-0 left-0 h-screen w-screen`} style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
      <div className="bg-base-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl p-4 max-h-screen overflow-y-scroll opacity-100">
        <div className="absolute right-0 top-0 p-1" onClick={(e)=>{setShow(false);}}>
          <img src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" className="w-4" />
        </div>
        <div className="flex m-4">
          {children&&children.media&&<img src={children.media[0]} alt="" className="w-64" />}
          <div className="flex flex-col justify-center items-center p-4 gap-4">
            <div className="card-title">{children?.title}</div>
            <div className="card-body p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>
          </div>
        </div>
        <div className="menu-title">Select Social Media</div>
        <div className="flex justify-between items-center m-4">
          <input value="facebook" type="checkbox" className="checkbox checkbox-xl checkbox-primary" />
          <label htmlFor="facebook" ><img className="rounded-full w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" /></label>
          <input value="twitter" type="checkbox" className="checkbox checkbox-xl checkbox-primary" />
          <label htmlFor="twitter" ><img className="rounded-full w-8" src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt="" /></label>
          <input value="instagram" type="checkbox" className="checkbox checkbox-xl checkbox-primary" />
          <label htmlFor="instagram" ><img className="rounded-full w-8" src="https://img.freepik.com/premium-vector/instagram-vector-social-media-icon-instagram-logo-illustration_153454-525.jpg" alt="" /></label>
          <input value="youtube" type="checkbox" className="checkbox checkbox-xl checkbox-primary" />
          <label htmlFor="youtube" ><img className="rounded-full w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png" alt="" /></label>
          <input value="linkedin" type="checkbox" className="checkbox checkbox-xl checkbox-primary" />
          <label htmlFor="linkedin" ><img className="rounded-full w-8" src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" /></label>
          <input value="tiktok" type="checkbox" className="checkbox checkbox-xl checkbox-primary" />
          <label htmlFor="tiktok" ><img className="rounded-full w-8" src="https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w240-h480-rw" alt="" /></label>
        </div>
        <div className="menu-title">Select Schedule</div>
        <div className="flex flex-col m-4">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" className="input input-primary input-bordered" />
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" className="input input-primary input-bordered" />
          <label htmlFor="repeat">Repeat:</label>
          <select name="repeat" id="repeat" className="select select-bordered select-primary w-full">
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="flex justify-center items-center m-4">
          <button className="btn btn-primary">Schedule</button>
        </div>
      </div>
    </div>
  )
}
