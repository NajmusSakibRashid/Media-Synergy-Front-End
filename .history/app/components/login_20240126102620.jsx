'use client'

import {useState} from 'react'

export default function login() {
  const [data, setData] = useState({});
  const inputHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (data) => {
    var url=`${process.env.NEXT_PUBLIC_BACK_END}/signin`
    console.log(url);
    var requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const promise=await fetch(url, requestOptions);
    
    if(promise.status==200){
      const response=await promise.json();
      localStorage.setItem('token', response.token);
      console.log(localStorage.getItem('token'));
    }
    else{
      alert(JSON.stringify(response));
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 border border-neutral-300 items-center">
      <div className="card-title p-6">Login</div>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' onChange={inputHandler} type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' onChange={inputHandler} type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>handleSubmit(data)} value="Login" className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  )
}
