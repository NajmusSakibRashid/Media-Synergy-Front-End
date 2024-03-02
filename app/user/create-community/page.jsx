"use client";

import React, { useState } from "react";

const CreateCommunityPage = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [communityImage, setCommunityImage] = useState(null);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch API endpoint
    const url = `${process.env.NEXT_PUBLIC_BACK_END}/user/communities/`;
    console.log(url);

    const media=communityImage?[await uploadMedia(communityImage)]:[''];
    console.log(media);

    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    // Data to be sent in the request body
    const data = {
      name: name,
      tagline: tagline,
      image: media,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    };
    //   console.log(requestOptions.body);

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error("Failed to create community");
      }

      // Handle success
      console.log("Community created successfully");
      alert("Community created successfully");
      //redirect to the communities page
      window.location.href = "/user/communities";
      // You can redirect the user to another page or perform any other action upon successful creation
    } catch (error) {
      console.error("Error creating community:", error);
      alert("Error creating community");
      // Handle error
    }
  };

  return (
    <div>
      <div className="min-h-screen w-full p-5 pb-5 pt-0 md:w-4/5 md:p-5 lg:mx-auto lg:w-3/5">
        <h1 className="text-4xl font-bold ml-3 mb-3">Create a New Community</h1>
        <div className="md w-2/3">
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              Community Name:
              <input
                type="text"
                className="grow"
                placeholder="Daisy"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description:</span>
                <span className="label-text-alt">tagline</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 mb-1"
                placeholder="Bio"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                required
              ></textarea>
            </label>
            {communityImage ? (
              <img
                src={URL.createObjectURL(communityImage)}
                alt="Community Image"
                className="rounded-lg"
              />
            ) : null}
            <input
              onChange={(e) => {
                setCommunityImage( e.target.files[0] );
              }}
              name="media"
              type="file"
              className="file-input file-input-bordered w-full "
            />
           
            <button type="submit" className="btn btn-primary mt-4">
              Create Community
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunityPage;
