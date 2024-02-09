'use client'

import {useState} from 'react'
import ProfileCardContainer from '@/app/components/create-content/profile-card-container'

export default function page() {
  const [content,setContent] = useState({}) 
  const changeHandler = (e,preProcess) => {
    setContent({...content,[e.target.name]:preProcess(e.target.value)})
  }
  return (
    <div className="card shadow-xl w-full bg-base-200 p-4 gap-4">
      <div className="card-title text4xl self-center">Build Content</div>
      <div className="flex gap-4">
        <div className="basis-1/2 flex flex-col w-full gap-2 justify-around">
          <div class="card-title">Details</div>
          <label class="label">Title:</label>
          <input onChange={changeHandler} type="text" class="input input-bordered w-full" placeholder="Enter your title here" />
          <label class="label">Products or Services:</label>
          <input type="text" class="input input-bordered w-full" placeholder="Enter related product" />
          <label htmlFor="" class="label">Target Consumer:</label>
          <input type="text" class="input input-bordered w-full" placeholder="Enter target consumer" />
          <label htmlFor="" class="label">Description:</label>
          <textarea class="textarea h-24 textarea-bordered w-full" placeholder="Enter description here"></textarea>
          <label htmlFor="" class="label">Select Profile:</label>
          <ProfileCardContainer />
        </div>
        <div className="basis-1/2 flex flex-col w-full gap-2 justify-around">

        </div>
      </div>
    </div>
  )
}
