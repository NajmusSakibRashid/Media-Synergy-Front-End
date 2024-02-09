import React from 'react'
import ProfileCardContainer from '@/app/components/create-content/profile-card-container'

export default function page() {
  return (
    <div className="card shadow-xl w-full bg-base-200 p-4 gap-4">
      <div className="card-title text4xl self-center">Build Content</div>
      <div className="flex gap-4">
        <div class="card-title">Details</div>
        <label class="label">Title:</label>
        <input type="text" class="input input-bordered w-full" placeholder="Enter your title here" />
          <label class="label">Products or Services:</label>
          <input type="text" class="input input-bordered w-full" placeholder="Enter related product" />
            <label for="" class="label">Target Consumer:</label>
            <input type="text" class="input input-bordered w-full" placeholder="Enter target consumer" />
              <label for="" class="label">Description:</label>
              <textarea class="textarea h-24 textarea-bordered w-full" placeholder="Enter description here"></textarea>
              <label for="" class="label">Select Profile:</label>
              <div className="basis-1/2 flex flex-col w-full gap-2 justify-around">
                <ProfileCardContainer />
              </div>
              <div className="basis-1/2 flex flex-col w-full gap-2 justify-around">

              </div>
            </div>
          </div>
          )
}
