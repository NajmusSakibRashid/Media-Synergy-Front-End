'use client'
import { useState } from 'react'

export default function ProfileCard({ children,setProfiles }) {
  const [selected, setSelected] = useState(false)

  return (
    <div onClick={() => {
      setSelected(selected => {
        if (!selected) {
          setProfiles(profiles => {
            return new Set([...profiles, children._id]);
          })
        }
        else {
          setProfiles(profiles => {
            return new Set([...profiles].filter(profile => profile != children._id))
          })
        }  
        return !selected
      })
    }} className={`card bg-base-100 profile border-2 hover:bg-base-300 ${selected ? 'border-primary' : 'border-base-100'}`}>
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
