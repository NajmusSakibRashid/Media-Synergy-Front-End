'use client'

import React from 'react'

export default function content({children}) {
  return (
    <div className="card w-full h-96 bg-base-300">
      <div className="card-title p-4">
        {children.title}
      </div>
      <div className="card-body overflow-hidden">
        {children.description}
      </div>
      <div className="card-action p-4 flex justify-center"><button className='btn btn-neutral'>Publish</button></div>
    </div>
  )
}
