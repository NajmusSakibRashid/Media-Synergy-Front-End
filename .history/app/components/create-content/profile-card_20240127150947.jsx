'use client'
import {useState} from 'react'

export default function profileCard({children}) {
  const [selected,setSelected] = useState(false)

  return (
    <div onClick={setSelected(selected=>!selected)} className={`card bg-base-100 profile border-2 hover:bg-base-300 ${selected?border-primary:border-base-100}`}>
      <div className="card-body">
        <img src={children.logo} alt="" className="rounded-xl max-h-16 object-cover" />
          <div className="card-title text-sm">
            {children.name}
          </div>
          {children.description.aboutUs.slice(0, 20) + '...'}
      </div>
    </div>
  )
}
