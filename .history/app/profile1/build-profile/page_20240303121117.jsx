'use client'

import { useEffect, useState } from 'react'
import ProfileCardContainer from '@/app/components/create-content/profile-card-container'
import TargetConsumer from '@/app/components/create-content/target-consumer'
import ShowAllConsumers from '@/app/components/create-content/show-all-consumers'

export default function page() {
  
  const [user, setUser] = useState({});
  const [logo, setLogo] = useState('');
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [aboutUs, setAboutUs] = useState('');
  const [goal, setGoal] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [businessHours, setBusinessHours] = useState([]);
  const [weekend, setWeekend] = useState([]);
  const [productConsumer, setProductConsumer] = useState([]);
  const [awards, setAwards] = useState([]);
  const [history, setHistory] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [image, setImage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/profile`;
    const media = image?await uploadMedia(image):'';

    const token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        logo:media,
        name,
        image: media,
        slogan,
        aboutUs,
        goal,
        physicalAddress,
        phoneNumbers,
        email,
        website,
        businessHours,
        weekend,
        productConsumer,
        awards,
        history,
        testimonials
      }),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error("Failed to create profile");
      }
      alert("Profile created successfully");
      window.location.href = "/user/";
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Error creating profile");
    }

  };

  const handleLogoImageChange = (e) => {
    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const base64 = e.target.result;
      setLogo(base64);
    }
    // setLogo(e.target.files[0]);
  };

  const handleAwardsImageChange = (e) => {
    setAwards(e.target.files[0]);
  };


    
  const uploadMedia = async (file) => {
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
    const media = content.media ? [await uploadMedia(content.media)] : [''];
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

  const next = (index) => {
    // setCurrentTab(prevTab => prevTab + 1);
    document.getElementsByClassName('tab')[index + 1].checked = true;
    document.getElementsByClassName('step')[index + 1].classList.add('step-neutral');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const prev = (index) => {
    // setCurrentTab(prevTab => prevTab - 1);
    document.getElementsByClassName('tab')[index - 1].checked = true;
    document.getElementsByClassName('step')[index].classList.remove('step-neutral');
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
    <div className="mt-16 p-4 flex flex-col items-center gap-4">
      <div className="card-title">
        <h1><b>Build Profile</b></h1>
      </div>

      {/* <ul className="steps w-full max-w-xl">
        <li className={`step ${currentTab === 0 ? 'step-neutral' : ''}`}>Profile</li>
        <li className={`step ${currentTab === 1 ? 'step-neutral' : ''}`}>Intro</li>
        <li className={`step ${currentTab === 2 ? 'step-neutral' : ''}`}>Contact</li>
        <li className={`step ${currentTab === 3 ? 'step-neutral' : ''}`}>Product/Consumer</li>
        <li className={`step ${currentTab === 4 ? 'step-neutral' : ''}`}>Awards</li>
      </ul> */}


      {/* <ul className="steps w-full max-w-xl">
        <li className="step step-neutral">Profile</li>
        <li className="step">Intro</li>
        <li className="step">Contact</li>
        <li className="step">Product/Consumer</li>
        <li className="step">Awards</li>
      </ul> */}

      <form onSubmit={handleSubmit}  >

      {/* <div role="tablist" className="tabs tabs-boxed w-1/2"> */}
        {/* <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 0 ? "block" : "hidden"
            }`}
        > */}
        {/* Content for the first tab */}

        {/* <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab hidden"
          id="Profile"
          checked
        /> */}
        {/* <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        > */}
          <div className="flex flex-col gap-4 items-center">
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img
                  src="https://imgscf.slidemembers.com/docs/1/1/303/startup_pitch_deck_presentation_format_302201.jpg"
                  alt=""
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value="40"
              className="range range-xs w-2/4"
            />
            <label className="label card-title">Upload Logo</label>
            {/* <input
              type="file"
              // value={logo}
              onChange={(e) => uploadMedia(e.target.files[0])}
              className="file-input file-input-bordered w-full max-w-xs"
              required
            /> */}
            {
              image ? (
                <img 
                  src={URL.createObjectURL(image)}
                  alt='Logo'
                  className="rounded-lg"
                  />
              ) : null
            }
            <input 
              onChange={(e) => {setImage(e.target.files[0]);}}
              name="media"
              type="file"
              className="file-input file-input-bordered w-full"
              />
            
            <div className="w-full max-w-xs">
              <label className="label card-title">Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
              <label for="slogan" className="label card-title">
                Slogan
              </label>
              <input
                type="text"
                placeholder="Slogan"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* <div className="flex justify-between w-full max-w-xs">
              <button className="btn btn-neutral input-bordered min-w-[8rem]" disabled>Prev</button>
              <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => next(0)}>Next</button>
            </div> */}
          </div>
        {/* </div> */}
        {/* </div> */}



        {/* <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 1 ? "block" : "hidden"
            }`}
        > */}
        {/* <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Intro" /> */}
        {/* <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        > */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs">
              <label className="label card-title">About Us</label>
              <textarea 
              className="textarea textarea-bordered w-full h-24"
              placeholder='Enter About Us'
              value={aboutUs}
              onChange={(e) => setAboutUs(e.target.value)}
              required
              ></textarea>
              <label className="label card-title">Goal</label>
              <textarea 
              className="textarea textarea-bordered w-full h-24"
              placeholder='Enter Goal'
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              >

              </textarea>
            </div>
            {/* <div className="flex justify-between w-full max-w-xs">
              <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => prev(1)}>Prev</button>
              <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => next(1)}>Next</button>
            </div> */}
          </div>
        {/* </div> */}
        {/* </div> */}

        {/* <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 2 ? "block" : "hidden"
            }`}
        > */}
        {/* <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Contact" /> */}
        {/* <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        > */}
          <div className="flex flex-col items-center">
            <div className="card p-4 gap-4 w-full max-w-xs">
              <div className="card-title self-center">
                Contact Informations
              </div>
              <div className="flex flex-col gap-2">
                <label for="physical-address" className="label">
                  Physical Address:
                </label>
                <input
                  name="physical-address"
                  type="text"
                  className="input input-bordered"
                  placeholder='Enter Physical Address'
                  value={physicalAddress}
                  onChange={(e) => setPhysicalAddress(e.target.value)}
                  required
                />
                <label for="phone-number" className="label">
                  Phone Number:
                </label>
                <div className="flex gap-1">
                  <input
                    name="1"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder='Enter Phone Number'
                    value={phoneNumbers[0]}
                    onChange={(e) => setPhoneNumbers([e.target.value, phoneNumbers[1], phoneNumbers[2]])}
                    required
                  />
                  <button className="btn btn-neutral">Delete</button>
                </div>
                <div className="flex gap-1">
                  <input
                    name="2"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder='Enter Phone Number'
                    value={phoneNumbers[1]}
                    onChange={(e) => setPhoneNumbers([phoneNumbers[0], e.target.value, phoneNumbers[2]])}
                    required
                  />
                  <button className="btn btn-neutral">Delete</button>
                </div>
                <div className="flex gap-1">
                  <input
                    name="3"
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-neutral">Delete</button>
                </div>
                <button className="btn btn-neutral">Add More</button>
                <label for="email-address" className="label">
                  Email Address:
                </label>
                <input
                  name="email-address"
                  type="text"
                  className="input input-bordered"
                  placeholder='Enter Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label for="website" className="label">
                  Website
                </label>
                <input
                  name="website"
                  type="text"
                  className="input input-bordered"
                  placeholder='Enter Website'
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <label for="business-hour" className="label">
                  Business Hour
                </label>
                <label for="from">From:</label>
                <input
                  name="business-hour-from"
                  type="time"
                  className="input input-bordered"
                  placeholder='Enter Business Hour From'
                  value={businessHours[0]}
                  onChange={(e) => setBusinessHours([e.target.value, businessHours[1]])}
                />
                <label for="from">To:</label>
                <input
                  name="business-hour-to"
                  type="time"
                  className="input input-bordered"
                  placeholder='Enter Business Hour To'
                  value={businessHours[1]}
                  onChange={(e) => setBusinessHours([businessHours[0], e.target.value])}
                />
                <label for="week-end">Weekend</label>
                <div className="flex gap-1">
                  <select
                    name="week-end"
                    id="week-end"
                    className="input input-bordered w-full"
                    placeholder='Enter Weekend'
                    value={weekend}
                    onChange={(e) => setWeekend(e.target.value)}
                  >
                    <option value="" selected>
                      None
                    </option>
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
                  <select
                    name="week-end"
                    id="week-end"
                    className="input input-bordered w-full"
                  >
                    <option value="" selected>
                      None
                    </option>
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
                {/* <div className="flex justify-between w-full max-w-xs">
                  <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => prev(2)}>Prev</button>
                  <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => next(2)}>Next</button>
                </div> */}
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* </div> */}

        {/* <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 3 ? "block" : "hidden"
            }`}
        > */}
        {/* <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Product/Consumer" /> */}
        {/* <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        > */}
          <div className="flex flex-col items-center gap-4">
            <div className="grid grid-cols-2 w-8/12 gap-4">
              <div className="card-title border-solid border-2 p-4 rounded-xl">
                Product
              </div>
              <div className="card-title border-solid border-2 p-4 rounded-xl">
                Consumer
              </div>
              <div className="border-solid border-2 p-4 rounded-xl flex flex-col gap-2">
                <div className="card-title">Product Title</div>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Enter Product Title"
                  value={productConsumer[0]}
                  onChange={(e) => setProductConsumer([e.target.value, productConsumer[1]])}
                />
                <label for="Product Description" className="card-title">
                  Product Description
                </label>
                <textarea
                  name="product description"
                  id=""
                  cols="30"
                  rows="5"
                  className="textarea textarea-bordered textarea-borderinput-bordered"
                  placeholder='Enter Product Description'
                  value={productConsumer[1]}
                  onChange={(e) => setProductConsumer([productConsumer[0], e.target.value])}
                ></textarea>
              </div>
              <div className="border-solid border-2 p-4 rounded-xl flex flex-col gap-2">
                <div className="card-title">Consumer Title</div>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Enter Consumer Title"
                  value={productConsumer[2]}
                  onChange={(e) => setProductConsumer([productConsumer[0], productConsumer[1], e.target.value])}
                />
                <label for="Product Description" className="card-title">
                  Consumer Description
                </label>
                <textarea
                  name="product description"
                  id=""
                  cols="30"
                  rows="5"
                  className="textarea textarea-bordered textarea-borderinput-bordered"
                  placeholder='Enter Consumer Description'
                  value={productConsumer[3]}
                  onChange={(e) => setProductConsumer([productConsumer[0], productConsumer[1], productConsumer[2], e.target.value])}
                ></textarea>
              </div>
            </div>
            <button className="btn btn-neutral">Add More</button>

            {/* <div className="flex justify-between w-full max-w-xs">
              <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => prev(3)}>Prev</button>
              <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => next(3)}>Next</button>
            </div> */}
          </div>
        {/* </div> */}
        {/* </div> */}

        {/* <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${currentTab === 4 ? "block" : "hidden"
            }`}
        > */}
        {/* <input type="radio" name="my_tabs_2" role="tab" className="tab hidden" id="Awards" /> */}
        {/* <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        > */}
          <div className="flex flex-col items-center">
            <div className="card gap-4 p-4 w-full max-w-xs">
              <div className="card-title self-center">
                Awards and Achievements
              </div>
              <label for="award-image">Upload Award Image:</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                // onChange={handleAwardsImageChange}
                
              />
              <label for="award-title">Award Title:</label>
              <input type="text" className="input input-bordered" />
              <label for="award-description">Award Description:</label>
              <textarea
                name="award-description"
                id=""
                cols="60"
                rows="5"
                className="textarea textarea-bordered"

              ></textarea>
              <button className="btn btn-neutral">Add More</button>
              {/* <div className="flex justify-between w-full max-w-xs">
                <button className="btn btn-neutral input-bordered min-w-[8rem]" onClick={() => prev(4)}>Prev</button>
                <button type="submit" className="btn btn-neutral min-w-[4rem]" onClick={() => window.location.href='/user/'}>Done</button>
              </div> */}
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
      <button type="submit" className="btn btn-primary mt-4">
              Create Profile
            </button>
      </form>

    </div>
  );
};


