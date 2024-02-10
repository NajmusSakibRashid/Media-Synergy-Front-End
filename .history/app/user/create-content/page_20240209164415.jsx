'use client'

import { useEffect, useState } from 'react'
import ProfileCardContainer from '@/app/components/create-content/profile-card-container'
import TargetConsumer from '@/app/components/create-content/target-consumer'
import ShowAllConsumers from '@/app/components/create-content/show-all-consumers'

export default function page() {
  const [content, setContent] = useState({})
  const [profiles, setProfiles] = useState(new Set())
  const changeHandler = (e, preProcess) => {
    setContent({ ...content, [e.target.name]: preProcess(e.target.value) })
    console.log(content);
  }
  const consumerPreProcess = (data) => {
    if (content.consumer) {
      return [...content.consumer, data]
    }
    else {
      return [data]
    }
  }
  const saveHandler = async () => {
    if (!content.title || !content.productsServices || !content.consumer || !content.description || !profiles.size) {
      alert('Please fill all the fields');
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/content`;
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        title: content.title,
        productsServices: content.productsServices,
        consumer: content.consumer,
        description: content.description,
        profiles: [...profiles],
        keywords: [],
        profile: [],
        media: '',
        category: '',
        profile: [...profiles]
      }),
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        alert(response._id);
      }
      else {
        alert(promise.statusText);
      }
    }
    fetchData();
    setContent({});
    setProfiles(new Set());
  }
  // useEffect(() => {
  //   console.log(profiles);
  // }, [profiles]) 
  return (
    <div className="card shadow-xl w-full bg-base-200 p-4 gap-4">
      <div className="card-title text4xl self-center">Build Content</div>
      <div className="flex gap-4">
        <div className="basis-1/2 card-body flex flex-col w-full gap-2 justify-around">
          <div className="card-title">Details</div>
          <label className="label">Title:</label>
          <input name='title' onChange={(e) => { changeHandler(e, (data) => data) }} type="text" className="input input-bordered w-full" placeholder="Enter your title here" />
          <label className="label">Products or Services:</label>
          <input name='productsServices' onChange={(e) => { changeHandler(e, (data) => data.split(';')) }} type="text" className="input input-bordered w-full" placeholder="Enter related products separated by ;" />
          <div className="grid grid-cols-2 gap-4">
            <TargetConsumer onChange={(e) => { changeHandler(e, consumerPreProcess) }} />
            <ShowAllConsumers consumers={content.consumer} setContent={setContent} />
          </div>
          <label htmlFor="" className="label">Description:</label>
          <textarea name='description' onChange={(e) => { changeHandler(e, (data) => data) }} className="textarea h-24 textarea-bordered w-full" placeholder="Enter description here"></textarea>
          <label htmlFor="" className="label">Select Profile:</label>
          <ProfileCardContainer setProfiles={setProfiles} />
        </div>
        <div className="basis-1/2 card-body flex flex-col w-full gap-2 jsutify-around">
          <div className="card-title">Keywords and Media</div>
          <label htmlFor="media" className="label">Add Media:</label>
          {/* {content.media && <img src={URL.createObjectURL(content.media[0])} alt="media" />} */}
          <input onChange={(e) => { changeHandler(e, (data) => data) }} name='media' type="file" className="file-input file-input-bordered w-full " />
        </div>
      </div>
      <button className="btn btn-success w-full max-w-xs self-center" onClick={saveHandler}>Save</button>
    </div>
  )
}
