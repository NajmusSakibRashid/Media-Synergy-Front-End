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
    // console.log(content);
  }
  const consumerPreProcess = (data) => {
    if (content.consumer) {
      return [...content.consumer, data]
    }
    else {
      return [data]
    }
  }
  const uploadMedia = async (file)=>{
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/file`;
    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const formData = new FormData();
    formData.append('file', file);
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow'
    };
    const fetchData = async () => {
      const promise = await fetch(url, requestOptions);
      if (promise.status == 200) {
        const response = await promise.json();
        console.log(response);
        return `${process.env.NEXT_PUBLIC_BACK_END}/${response.name}`;
      }
      else {
        alert(promise.statusText);
      }
      return '';
    }
    return fetchData();
  }
  const saveHandler = async () => {
    if (!content.title || !content.productsServices || !content.consumer || !content.description || !profiles.size) {
      alert('Please fill all the fields');
      return;
    }
    const media=content.media?[await uploadMedia(content.media)]:[''];
    console.log(media);
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
        media,
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

  const [currentTab, setCurrentTab] = useState(0);

  const next = () => {
    setCurrentTab(prevTab => prevTab + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const prev = () => {
    setCurrentTab(prevTab => prevTab - 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };



    
    
     


    const fetchBuildProfile = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/build-profile`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch communities");
        }
        const data = await response.json();
        setCommunities(data);
      } catch (error) {
        console.error("Error fetching communities:", error);
      }
  };
  // useEffect(() => {
  //   console.log(profiles);
  // }, [profiles]) 
  return (
    <div class="mt-16 p-4 flex flex-col items-center gap-4">
        

    

        <div className="card-title">
        <h1>Build Profile</h1>
        </div>

        <ul className="steps w-full max-w-xl">
            <li className="step step-neutral">Profile</li>
            <li className="step">Intro</li>
            <li className="step">Contact</li>
            <li className="step">Product/Consumer</li>
            <li className="step">Awards</li>
        </ul>

        <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 0 ? 'block' : 'hidden'}`}>
        {/* Content for the first tab */}
        <div role="tablist" className="tabs tabs-boxed w-1/2">
          <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Profile" checked/>
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="flex flex-col gap-4 items-center">
              <div className="avatar">
                <div className="w-64 rounded-full">
                  <img src="https://imgscf.slidemembers.com/docs/1/1/303/startup_pitch_deck_presentation_format_302201.jpg" alt="" />
                </div>
              </div>
              <input type="range" min="0" max="100" value="40" className="range range-xs w-2/4" /> 
              <label className="label card-title">Upload Logo</label>
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
              <div className="w-full max-w-xs">
                <label className="label card-title">Company Name</label>
                <input type="text" placeholder="Company Name" className="input input-bordered w-full" />
                <label for="slogan" className="label card-title">Slogan</label>
                <input type="text" placeholder="Slogan" className="input input-bordered w-full"/>
              </div>
              <div className="flex justify-between w-full max-w-xs">
                <button className="btn btn-neutral input-bordered min-w-[8rem]" disabled>Prev</button>
                <button className="btn btn-neutral input-bordered min-w-[8rem]" onclick="next(0)">Next</button>
              </div>
            </div>
          </div>




          <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Intro" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <label className="label card-title">About Us</label>
                <textarea className="textarea textarea-bordered w-full h-24"></textarea>
                <label className="label card-title">Goal</label>
                <textarea className="textarea textarea-bordered w-full h-24"></textarea>
              </div>
              <div className="flex justify-between w-full max-w-xs">
                <button className="btn btn-neutral input-bordered min-w-[8rem]" onclick="prev(1)">Prev</button>
                <button className="btn btn-neutral input-bordered min-w-[8rem]" onclick="next(1)">Next</button>
              </div>
            </div>
          </div>


          <input type="radio" name="my_tabs_2" role="tab" class="tab hidden" id="Contact" />
          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div class="flex flex-col items-center">
              <div class="card p-4 gap-4 w-full max-w-xs">
                <div class="card-title self-center">Contact Informations</div>
                <div class="flex flex-col gap-2">
                  <label for="physical-address" class="label">Physical Address:</label>
                  <input name="physical-address" type="text" class="input input-bordered" />
                  <label for="phone-number" class="label">Phone Number:</label>
                  <div class="flex gap-1">
                    <input name="1" type="text" class="input input-bordered w-full"/>
                    <button class="btn btn-neutral">Delete</button>
                  </div>
                  <div class="flex gap-1">
                    <input name="2" type="text" class="input input-bordered w-full"/>
                    <button class="btn btn-neutral">Delete</button>
                  </div>
                  <div class="flex gap-1">
                    <input name="3" type="text" class="input input-bordered w-full"/>
                    <button class="btn btn-neutral">Delete</button>
                  </div>
                  <button class="btn btn-neutral">Add More</button>
                  <label for="email-address" class="label">Email Address:</label>
                  <input name="email-address" type="text" class="input input-bordered"/>
                  <label for="website" class="label">Website</label>
                  <input name="website" type="text" class="input input-bordered"/>
                  <label for="business-hour" class="label">Business Hour</label>
                  <label for="from">From:</label>
                  <input name="business-hour-from" type="time" class="input input-bordered"/>
                  <label for="from">To:</label>
                  <input name="business-hour-to" type="time" class="input input-bordered"/>
                  <label for="week-end">Weekend</label>
                  <div class="flex gap-1">
                    <select name="week-end" id="week-end" class="input input-bordered w-full">
                      <option value="" selected>None</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                    <button class="btn btn-neutral">Delete</button>
                  </div>
                  <div class="flex gap-1">
                    <select name="week-end" id="week-end" class="input input-bordered w-full">
                      <option value="" selected>None</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                    <button class="btn btn-neutral">Delete</button>
                  </div>
                  <button class="btn btn-neutral">Add More</button>
                  <div class="card-action flex justify-around">
                    <button class="btn btn-neutral input-bordered min-w-[8rem]" onclick="prev(2)">Prev</button>
                    <button class="btn btn-neutral input-bordered min-w-[8rem]" onclick="next(2)">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <input type="radio" name="my_tabs_2" role="tab" class="tab hidden" id="Product/Consumer"/>
          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div class="flex flex-col items-center gap-4">
              <div class="grid grid-cols-2 w-8/12 gap-4">
                <div class="card-title border-solid border-2 p-4 rounded-xl">Product</div>
                <div class="card-title border-solid border-2 p-4 rounded-xl">Consumer</div>
                <div class="border-solid border-2 p-4 rounded-xl flex flex-col gap-2">
                  <div class="card-title">Product Title</div>
                  <input type="text" class="input input-bordered" placeholder="Enter Product Title"/>
                  <label for="Product Description" class="card-title">Product Description</label>
                  <textarea name="product description" id="" cols="30" rows="5" class="textarea textarea-bordered textarea-borderinput-bordered"></textarea>
                </div>
                <div class="border-solid border-2 p-4 rounded-xl flex flex-col gap-2">
                  <div class="card-title">Consumer Title</div>
                  <input type="text" class="input input-bordered" placeholder="Enter Consumer Title"/>
                  <label for="Product Description" class="card-title">Consumer Description</label>
                  <textarea name="product description" id="" cols="30" rows="5" class="textarea textarea-bordered textarea-borderinput-bordered"></textarea>
                </div>
              </div>
              <div class="flex justify-between w-full max-w-xs">
                <button class="btn btn-neutral min-w-[4rem]" onclick="prev(3)">Prev</button>
                <button class="btn btn-neutral min-w-[4rem]">Add More</button>
                <button class="btn btn-neutral min-w-[4rem]" onclick="next(3)">Next</button>
              </div>
            </div>
          </div>


          <input type="radio" name="my_tabs_2" role="tab" class="tab hidden" id="Awards" />
          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div class="flex flex-col items-center">
              <div class="card gap-4 p-4 w-full max-w-xs">
                <div class="card-title self-center">Awards and Achievements</div>
                <label for="award-image">Upload Award Image:</label>
                <input type="file" class="file-input file-input-bordered w-full" />
                <label for="award-title">Award Title:</label>
                <input type="text" class="input input-bordered"/>
                <label for="award-description">Award Description:</label>
                <textarea name="award-description" id="" cols="60" rows="5" class="textarea textarea-bordered"></textarea>
                <div class="card-actions justify-around">
                  <button class="btn btn-neutral min-w-[4rem]" onclick="prev(4)">Prev</button>
                  <button class="btn btn-neutral min-w-[4rem]">Add More</button>
                  <button class="btn btn-neutral min-w-[4rem]" onclick="window.location.href='/src/pages/profile.html'">Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
    </div>




            

    // <div className="card shadow-xl w-full bg-base-200 p-4 gap-4">
    //   <div className="card-title text4xl self-center">Build Content</div>
    //   <div className="flex gap-4">
    //     <div className="basis-1/2 card-body flex flex-col w-full gap-2 justify-between">
    //       <div className="card-title">Details</div>
    //       <label className="label">Title:</label>
    //       <input name='title' onChange={(e) => { changeHandler(e, (data) => data) }} type="text" className="input input-bordered w-full" placeholder="Enter your title here" />
    //       <label className="label">Products or Services:</label>
    //       <input name='productsServices' onChange={(e) => { changeHandler(e, (data) => data.split(';')) }} type="text" className="input input-bordered w-full" placeholder="Enter related products separated by ;" />
    //       <div className="grid grid-cols-2 gap-4">
    //         <TargetConsumer onChange={(e) => { changeHandler(e, consumerPreProcess) }} />
    //         <ShowAllConsumers consumers={content.consumer} setContent={setContent} />
    //       </div>
    //       <label htmlFor="" className="label">Description:</label>
    //       <textarea name='description' onChange={(e) => { changeHandler(e, (data) => data) }} className="textarea h-24 textarea-bordered w-full" placeholder="Enter description here"></textarea>
    //     </div>
    //     <div className="basis-1/2 card-body flex flex-col w-full gap-2 justify-between">
    //       <div className="card-title">Profiles and Media</div>
    //       <label htmlFor="media" className="label">Add Media:</label>
    //       {content.media ? <img src={URL.createObjectURL(content.media)} alt="media" className="rounded-lg" /> : null}
    //       <input onChange={(e) => { setContent({...content,media:e.target.files[0]})}} name='media' type="file" className="file-input file-input-bordered w-full " />
    //       <label htmlFor="" className="label">Select Profile:</label>
    //       <ProfileCardContainer setProfiles={setProfiles} />
    //     </div>
    //   </div>
    //   <button className="btn btn-success w-full max-w-xs self-center" onClick={saveHandler}>Save</button>
    // </div>
  );
};


