'use client'

import React from 'react'

export default function login() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 border border-neutral-300 items-center">
      <div className="card-title p-6">Login</div>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <input type="button" value="Login" className="btn btn-primary" />
        </div>
      </div>
    </div>
  )
}
