import React from 'react'

export default function content({content}) {
  return (
    <div className="card w-96 h-96 bg-base-300">
      <div className="card-title">
        {content.title}
      </div>
      <div className="card-body">
        {content.description}
      </div>
      <button className='btn btn-primary'></button>
    </div>
  )
}
