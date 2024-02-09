'use client'

import {useEffect, useState} from 'react'
import ProfileCardContainer from '@/app/components/create-content/profile-card-container'
import TargetConsumer from '@/app/components/create-content/target-consumer'

export default function page() {
  const [content,setContent] = useState({})
  const [profiles,setProfiles] = useState(new Set())
  const changeHandler = (e,preProcess) => {
    setContent(content=>{return {...content,[e.target.name]:preProcess(e.target.value)}})
  }
  // useEffect(() => {
  //   console.log(profiles)
  // }, [profiles])
  return (
    <div className="card shadow-xl w-full bg-base-200 p-4 gap-4">
      <div className="card-title text4xl self-center">Build Content</div>
      <div className="flex gap-4">
        <div className="basis-1/2 flex flex-col w-full gap-2 justify-around">
          <div className="card-title">Details</div>
          <label className="label">Title:</label>
          <input name='title' onChange={(e)=>{changeHandler(e,(data)=>data)}} type="text" className="input input-bordered w-full" placeholder="Enter your title here" />
          <label className="label">Products or Services:</label>
          <input name='productsServices' onChange={(e)=>{changeHandler(e,(data)=>data.split(';'))}} type="text" className="input input-bordered w-full" placeholder="Enter related products separated by ;" />
          <TargetConsumer onChange={(e)=>{changeHandler(e,(data)=>data)}}/>
          <label htmlFor="" className="label">Description:</label>
          <textarea name='description' onChange={(e)=>{changeHandler(e,(data)=>data)}} className="textarea h-24 textarea-bordered w-full" placeholder="Enter description here"></textarea>
          <label htmlFor="" className="label">Select Profile:</label>
          <ProfileCardContainer setProfiles={setProfiles}/>
        </div>
        <div className="basis-1/2 flex flex-col w-full gap-2 justify-around">

        </div>
      </div>
    </div>
  )
}
