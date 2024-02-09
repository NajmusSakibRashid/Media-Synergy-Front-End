import React from 'react'

export default function profileCard({children}) {
  return (
    <div className="card bg-base-100 profile border-2 border-base-100 hover:bg-base-300">
      <div className="card-body">
        <img src={children.logo} alt="" className="rounded-xl max-h-16" />
          <div className="card-title text-sm">
            {children.name}
          </div>
          {children.description.aboutUs.slice(0, 100) + '...'}
      </div>
    </div>
  )
}
