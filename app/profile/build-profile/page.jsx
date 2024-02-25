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



    
    
     


    
  // useEffect(() => {
  //   console.log(profiles);
  // }, [profiles]) 
  return (
    <div class="mt-16 p-4 flex flex-col items-center gap-4">
      <div className="card-title">
        <h1>Build Profile</h1>
      </div>

      <ul className="steps w-full max-w-xl">
        <li className={`step ${currentTab === 0 ? 'step-neutral' : ''}`}>Profile</li>
        <li className={`step ${currentTab === 1 ? 'step-neutral' : ''}`}>Intro</li>
        <li className={`step ${currentTab === 2 ? 'step-neutral' : ''}`}>Contact</li>
        <li className={`step ${currentTab === 3 ? 'step-neutral' : ''}`}>Product/Consumer</li>
        <li className={`step ${currentTab === 4 ? 'step-neutral' : ''}`}>Awards</li>
      </ul>



      <div role="tablist" className="tabs tabs-boxed w-1/2">




        <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 0 ? 'block' : 'hidden'}`}>
        {/* Content for the first tab */}
        
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
            </div>
          </div>
        </div>
      





        <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 1 ? 'block' : 'hidden'}`}>
          {/* <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Intro" /> */}
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <label className="label card-title">About Us</label>
                <textarea className="textarea textarea-bordered w-full h-24"></textarea>
                <label className="label card-title">Goal</label>
                <textarea className="textarea textarea-bordered w-full h-24"></textarea>
              </div>
            </div>
          </div>
        </div>
        



        <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 2 ? 'block' : 'hidden'}`}>
          {/* <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Contact" /> */}
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="flex flex-col items-center">
              <div className="card p-4 gap-4 w-full max-w-xs">
                <div className="card-title self-center">Contact Informations</div>
                <div className="flex flex-col gap-2">
                  <label for="physical-address" className="label">Physical Address:</label>
                  <input name="physical-address" type="text" className="input input-bordered" />
                  <label for="phone-number" className="label">Phone Number:</label>
                  <div className="flex gap-1">
                    <input name="1" type="text" className="input input-bordered w-full"/>
                    <button className="btn btn-neutral">Delete</button>
                  </div>
                  <div className="flex gap-1">
                    <input name="2" type="text" className="input input-bordered w-full"/>
                    <button className="btn btn-neutral">Delete</button>
                  </div>
                  <div className="flex gap-1">
                    <input name="3" type="text" className="input input-bordered w-full"/>
                    <button className="btn btn-neutral">Delete</button>
                  </div>
                  <button className="btn btn-neutral">Add More</button>
                  <label for="email-address" className="label">Email Address:</label>
                  <input name="email-address" type="text" className="input input-bordered"/>
                  <label for="website" className="label">Website</label>
                  <input name="website" type="text" className="input input-bordered"/>
                  <label for="business-hour" className="label">Business Hour</label>
                  <label for="from">From:</label>
                  <input name="business-hour-from" type="time" className="input input-bordered"/>
                  <label for="from">To:</label>
                  <input name="business-hour-to" type="time" className="input input-bordered"/>
                  <label for="week-end">Weekend</label>
                  <div className="flex gap-1">
                    <select name="week-end" id="week-end" className="input input-bordered w-full">
                      <option value="" selected>None</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                    <button className="btn btn-neutral">Delete</button>
                  </div>
                  <div className="flex gap-1">
                    <select name="week-end" id="week-end" className="input input-bordered w-full">
                      <option value="" selected>None</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                    <button className="btn btn-neutral">Delete</button>
                  </div>
                  <button className="btn btn-neutral">Add More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 3 ? 'block' : 'hidden'}`}>
          <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Product/Consumer"/>
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-2 w-8/12 gap-4">
                <div className="card-title border-solid border-2 p-4 rounded-xl">Product</div>
                <div className="card-title border-solid border-2 p-4 rounded-xl">Consumer</div>
                <div className="border-solid border-2 p-4 rounded-xl flex flex-col gap-2">
                  <div className="card-title">Product Title</div>
                  <input type="text" className="input input-bordered" placeholder="Enter Product Title"/>
                  <label for="Product Description" className="card-title">Product Description</label>
                  <textarea name="product description" id="" cols="30" rows="5" className="textarea textarea-bordered textarea-borderinput-bordered"></textarea>
                </div>
                <div className="border-solid border-2 p-4 rounded-xl flex flex-col gap-2">
                  <div className="card-title">Consumer Title</div>
                  <input type="text" className="input input-bordered" placeholder="Enter Consumer Title"/>
                  <label for="Product Description" className="card-title">Consumer Description</label>
                  <textarea name="product description" id="" cols="30" rows="5" className="textarea textarea-bordered textarea-borderinput-bordered"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        


        {/* <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 4 ? 'block' : 'hidden'}`}>
          <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Awards" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="flex flex-col items-center">
              <div className="card gap-4 p-4 w-full max-w-xs">
                <div className="card-title self-center">Awards and Achievements</div>
                <label for="award-image">Upload Award Image:</label>
                <input type="file" className="file-input file-input-bordered w-full" />
                <label for="award-title">Award Title:</label>
                <input type="text" className="input input-bordered"/>
                <label for="award-description">Award Description:</label>
                <textarea name="award-description" id="" cols="60" rows="5" className="textarea textarea-bordered"></textarea>
              </div>
            </div>
          </div>
        

      
    

        </div>
      </div>      
    </div> */}
        </div>



    <div className="flex justify-between w-full max-w-xs">
        {/* Prev button */}
        <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => prev()} disabled={currentTab === 0}>Prev</button>
        {/* Next button */}
        <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => next()} disabled={currentTab === 4}>Next</button>
    </div>
  </div>

  




            

    
  );
};


