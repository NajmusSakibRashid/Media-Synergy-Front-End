import React from 'react'

export default function content({children}) {
  return (
    <div className="card w-full max-h-96 bg-base-300">
      <div className="card-title p-4">
        {children.title}
      </div>
      <div className="card-body">
        {children.description}
      </div>
      <button className='btn btn-neutral'>Publish</button>
    </div>
  )
}
